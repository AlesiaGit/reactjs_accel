import React, { Component } from 'react';
import { connect } from "react-redux";
import firebase from "firebase";

import '../../styles/report-bumps.css';
import '../../styles/check-trip.css';
import '../../styles/shared.css';

import { db } from '../../helpers/firebase';
import { GoogleApiWrapper, Polyline } from 'google-maps-react';
import { BumpsMap, Car, SelectedTripMap } from './index';
import FavoritiesList from '../ReportBumps/favorities-list';
//import FavoritiesMap from '../ReportBumps/favorities-map';
import * as helpers from '../../helpers/index';
import * as testing from '../../testing/index';

import store from "../../store/store";
//store
import * as menu from "../../ducks/menu-state";
import * as favorities from "../../ducks/favorities";
import * as selectedTrip from "../../ducks/selected-trip";
import * as trip from "../../ducks/trip";
import * as dom from "../../ducks/dom";
import * as bumps from "../../ducks/bumps-map";
import * as stats from "../../ducks/stats";


const mapDispatchToProps = {
  	selectTrip: selectedTrip.selectTrip,
  	addToFavorities: favorities.addToFavorities,
  	selectTripView: menu.selectTripView,
 	addTripBumps: trip.addTripBumps, 
	updateLocation: trip.updateLocation, 
	updateAcceleration: trip.updateAcceleration,
	resetTrip: trip.resetTrip,
	resetMove: trip.resetMove,
	setDimentions: dom.setDimentions,
	setRatio: dom.setRatio,
	addBumps: bumps.addBumps,
	addToStats: stats.addToStats,
};


const mapStateToProps = state => {
    return {
        selectedTrip: state.selectedTrip,
        menu: state.menu,
        mode: state.mode,
        favorities: state.favorities,
        trip: state.trip,
        bumps: state.bumps
    };
};

let navigatorId;
let timerId;
//let tim;

const NAVIGATOR_OPTIONS = {
	enableHighAccuracy: true,
	timeout: 5000,
	maximumAge: 0
};


class Body extends Component {
	constructor(props) {
		super(props);

	    this.state = {
	    	cover: false,
	    	isFetching: false
	    	//temp: {bumps:[], path:[]}
	    };

	    this.mymap = React.createRef();
	}

	componentDidMount = () => {
		window.addEventListener('resize', this.updateWindowDimensions);
	}

	componentDidUpdate = (prevProps, prevState) => {
	   	if (prevProps.mode.isRecording !== this.props.mode.isRecording) {
		   	if (this.props.mode.isRecording === true) {
				this.startRecording();
			} else {
				this.stopRecording();
			}
	   	}

	   	if (prevProps.mode.isGuidance !== this.props.mode.isGuidance) {
		   	if (this.props.mode.isGuidance === true) {
				this.startGuidance();
			} else {
				this.stopGuidance();
			}
	   	}

		if (prevProps.menu.isShareView !== this.props.menu.isShareView) {
	   		if (this.props.menu.isShareView === true) this.saveSharedTripToDatabase();
	   	}	

	   	if (prevProps.menu.isBumpsMapView !== this.props.menu.isBumpsMapView) {
	   		if (this.props.menu.isBumpsMapView === false) this.props.resetTrip();
	   	}

	   	if (prevProps.favorities !== this.props.favorities) {
	   		localStorage.setItem('favorities', JSON.stringify(this.props.favorities));
	   	}
	}

	componentWillUnmount = () => {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions = () => {
	 	this.props.setDimentions({width: window.innerWidth, height: window.innerHeight})
	 	this.props.setRatio({ ratio: window.innerWidth / window.innerHeight })
	}

	startRecording = () => {
		this.props.resetTrip();

		if (navigator && navigator.geolocation) { //комментировать при тестировании
			navigatorId = navigator.geolocation.watchPosition(this.updateLocationData, this.err, NAVIGATOR_OPTIONS);
	 	} else {
	 		return new Error("Navigator error")
	 	}	

	 	if (window.DeviceMotionEvent) { //комментировать при тестировании
	 	 	window.addEventListener("devicemotion", this.updateAccelerationData); 
	 	} else {
	 		return new Error("Accelerator error")
	 	}	

	 	// testing.fakeCarMove(this.updateLocationData);
	 	// testing.fakeBumps(this.props.addTripBumps);
	 	//testing.fakeAcceleration(this.updateAccelerationData);
	}

	stopRecording = () => {
		navigator.geolocation.clearWatch(navigatorId); //комментировать при тестировании
		window.removeEventListener("devicemotion", this.updateAccelerationData); //комментировать при тестировании
		
		//this.saveBumpsToDatabase().then(() => this.getDatabaseBumpsCount()).then(bumpsCount => this.updateStatsInDatabase(bumpsCount));
		this.updateFavoritiesData();
		this.saveBumpsToDatabase();

		// testing.stopCarMoveSimulation();
		// testing.stopBumpsSimulation();
		//testing.stopAccelerationSimulation();
	}

	startGuidance = () => {
		this.props.resetTrip();

		if (navigator && navigator.geolocation) { //комментировать при тестировании
			navigatorId = navigator.geolocation.watchPosition(this.updateLocationData, this.err, NAVIGATOR_OPTIONS);
	 	} else {
	 		return new Error("Navigator error")
	 	}	

	 	//testing.fakeCarMove(this.updateLocationData);
	}

	stopGuidance = () => {
		navigator.geolocation.clearWatch(navigatorId); //комментировать при тестировании
		window.removeEventListener("devicemotion", this.updateAccelerationData); //комментировать при тестировании

		//testing.stopCarMoveSimulation();
	}	


	err = () => {
		console.log("error");
	}

	updateArrayIfPositionChanged = (array, coords) => {
		return (array.length === 0 || !helpers.compare(array[array.length - 1], coords)) ? [...array, coords] : array;
	}

	updateAccelerationData = (ev) => {
		let { x, y, z } = ev.acceleration; //комментировать при тестировании
		//let { x, y, z } = ev;
		let { previousAcceleration, bumps } = this.props.trip;
		let { lat, lng, timestamp } = this.props.trip.currentLocation;

		if (x !== null && y !== null && z !== null) {
			let ax = x - previousAcceleration.x;
			let ay = y - previousAcceleration.y;
			let az = z - previousAcceleration.z;
			let currentAcceleration = Math.pow((ax * ax + ay * ay + az * az), 1 / 3); //current level of acceleration with existing phone position
			
			if (currentAcceleration > 2.829226039) { //регулируемое значение
				
				if (bumps.length === 0 || !helpers.compare(bumps[bumps.length - 1], {lat, lng})) {
					this.props.addTripBumps({lat, lng});
				}

				this.props.updateAcceleration({previousAcceleration: { x, y, z }})
			}
		}
	}

	updateSpeedValue = location	=> {
		let prev = this.props.trip.currentLocation;
		let lat = location.coords.latitude;
		let lng = location.coords.longitude;
		let timestamp = location.timestamp;

		let distance = this.props.trip.path.length ? helpers.getDistance(prev.lat, prev.lng, lat, lng) : 0
		let time = Math.abs(prev.timestamp - timestamp)/ 1000; // в секундах

		if (!distance/time) return 0;
		return distance/time * 3600 / 1000; //в км/час
	}

	updateAngleValue = location => {
		let prev = this.props.trip.currentLocation;
		let lat = location.coords.latitude;
		let lng = location.coords.longitude;
		let angle = helpers.getAngle(prev.lat, prev.lng, lat, lng);

		return (Math.abs(angle - this.props.trip.angle) > 22) ? angle : this.props.trip.angle;
	}

	updateLocationData = location => {
		let prev = this.props.trip.currentLocation;
		let { move, path, distance } = this.props.trip;
		let lat = location.coords.latitude;
		let lng = location.coords.longitude;
		let timestamp = location.timestamp;
		let segmentDistance = path.length ? helpers.getDistance(prev.lat, prev.lng, lat, lng) : 0; // в метрах
		
		if (move > 5) this.props.resetMove();
		
		this.props.updateLocation({
			currentLocation: { lat, lng, speed: this.updateSpeedValue(location), timestamp }, 
			path: this.updateArrayIfPositionChanged(path, {lat, lng}), 
			angle: this.updateAngleValue(location), 
			move: move + segmentDistance, 
			distance: distance + segmentDistance / 1000 
		});
	}

	convertToReadableAddress = coords => {
		return new Promise ((resolve, reject) => {
			let maps = this.props.google.maps;
			let addresses = [];
			let geocoder = new maps.Geocoder();

			for (var i = 0; i < coords.length; i++) {
				geocoder.geocode({'location': coords[i]}, (results, status) => {
					if (status !== 'OK') reject(new Error('Geocoder failed due to: ' + status));
					if (!results[0]) reject(new Error('No results'));
						
					addresses.push(results[0].formatted_address);
					if (coords.length === addresses.length) resolve({start: addresses[0], end: addresses[1]});
				});
			}
		});
	}

	updateFavoritiesData = () => {
		let { bumps, path, distance} = this.props.trip;
		if (!path.length) return;

		let bounds = helpers.getBounds(path);
		let center = helpers.getCenter(bounds);
		let zoom = helpers.getZoom(distance * 1000); //передаем в метрах
		let endpoints = [path[0], path[path.length - 1]];

		this.convertToReadableAddress(endpoints).then(({start, end}) => {
			this.props.addToFavorities({start, end, path, zoom, center, bumps, distance});
		});
	}

	onZoomChanged = (mapProps, map, clickEvent) => {
		//console.log(map.getZoom());
	}

	saveSharedTripToDatabase = () => {
		db.collection('shared').doc(this.props.selectedTrip.id)
		.set({tripdata: this.props.selectedTrip}) //обработать неотправку на сервер
		.catch(error => console.log(error))
	}	

	saveBumpsToDatabase = () => {
		let bumpsRef = db.collection('bumpsmap').doc('bumps');
		//this.setState({isFetching: true});

		let newBumps = this.props.trip.bumps.filter(bump => !this.props.bumps.find(({ lat }) => bump.lat === lat) && !this.props.bumps.find(({ lng }) => bump.lng === lng));
		//console.log(newBumps);

		bumpsRef.get().then(doc => {if (doc.exists) bumpsRef.set({bumps: [...doc.data().bumps, ...newBumps]})}); //комментировать при тестировании
	}

	getDatabaseBumpsCount = () => {
		let bumpsRef = db.collection('bumpsmap').doc('bumps');
		return bumpsRef.get().then(doc => {if ( doc.exists) return doc.data().bumps.length });
	}

	updateStatsInDatabase = bumpsCount => {
		let statsRef = db.collection('stats').doc('totals');
		
		statsRef.update({
		    bumpsCount: bumpsCount,
		    distanceTotal: firebase.firestore.FieldValue.increment(Math.round(this.props.trip.distance)),
		    tripsCount: firebase.firestore.FieldValue.increment(1),
		});
	}

	

	render() {
		let { google, start, end } = this.props;
		let { isFavoritiesListView, isSelectedTripView, isCheckTripView } = this.props.menu;

		if (isFavoritiesListView) return <FavoritiesList />
		if (isSelectedTripView) return <SelectedTripMap google={google} />

		if (isCheckTripView) {
			return (
				<div className="map">
					<BumpsMap 
						centerAroundCurrentLocation
						google={google}
						updateLocationData={this.updateLocationData}
						reportBumpAhead={this.props.reportBumpAhead}
						start={start} 
						end={end}>
						<Car />
					</BumpsMap>	
				</div>
			)
		}
		
		return (
			<div className="map">
				<BumpsMap 
					centerAroundCurrentLocation
					google={google}
					updateLocationData={this.updateLocationData}>
					<Car />	
					<Polyline
						path={this.props.trip.path}
						strokeColor="#4D8FAC"
						strokeOpacity={0.8}
						strokeWeight={4} />					
				</BumpsMap>
			</div>
		);
	}
}

const WrapperContainer = GoogleApiWrapper({
 	apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(Body);

export default connect(mapStateToProps, mapDispatchToProps)(WrapperContainer);
