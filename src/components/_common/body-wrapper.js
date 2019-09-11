import React, { Component } from 'react';
import { connect } from "react-redux";
import firebase from "firebase";

import '../../styles/report-bumps.css';
import '../../styles/check-trip.css';
import '../../styles/shared.css';

import { db } from '../Firebase/index';
import { GoogleApiWrapper, Polyline } from 'google-maps-react';
import { BumpsMap, Car, SelectedTripMap } from './index';
import FavoritiesList from '../ReportBumps/favorities-list';
//import FavoritiesMap from '../ReportBumps/favorities-map';
import * as helpers from '../../helpers/index';

import store from "../../store/store";
//store
import * as menu from "../../ducks/menu-state";
import * as favorities from "../../ducks/favorities";
import * as selectedTrip from "../../ducks/selected-trip";
import * as trip from "../../ducks/trip";
import * as dom from "../../ducks/dom";
import * as bumps from "../../ducks/bumps-map";


const mapDispatchToProps = {
  	selectTrip: selectedTrip.selectTrip,
  	addToFavorities: favorities.addToFavorities,
  	selectTripView: menu.selectTripView,
 	addTripBumps: trip.addTripBumps, 
	updateLocation: trip.updateLocation, 
	resetTrip: trip.resetTrip,
	resetMove: trip.resetMove,
	setDimentions: dom.setDimentions,
	addBumps: bumps.addBumps,
};


const mapStateToProps = state => {
    return {
        selectedTrip: state.selectedTrip,
        menu: state.menu,
        mode: state.mode,
        favorities: state.favorities,
        trip: state.trip,
        bumpsmap: state.bumpsmap
    };
};

let navigatorId;
let timerId;

const NAVIGATOR_OPTIONS = {
	enableHighAccuracy: true,
	timeout: 5000,
	maximumAge: 0
};


class Body extends Component {
	constructor(props) {
		super(props);

	    this.state = {
	    	cover: false
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

	   	//if (prevProps.mode.isGuidance !== this.props.mode.isGuidance) {
		 //   	if (this.props.mode.isGuidance === true) {
			// 	this.startGuidance();
			// } else {
			// 	this.stopGuidance();
			// }
	   	//}

		if (prevProps.menu.isShareView !== this.props.menu.isShareView) {
	   		if (this.props.menu.isShareView === true) this.saveSharedTripToDatabase();
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
	}

	startRecording = () => {
		this.props.resetTrip();

		if (navigator && navigator.geolocation) { // обработка отсутствия
			navigatorId = navigator.geolocation.watchPosition(this.updateLocationData, this.err, NAVIGATOR_OPTIONS);
	    }	

	    if (window.DeviceMotionEvent) { //обработка отсутствия
	    		window.addEventListener("devicemotion", this.updateAccelerationData); 
	    }
	}

	err = () => {
		console.log("error");
	}

	updateArrayIfPositionChanged = (array, coords) => {
		return (array.length === 0 || !helpers.compare(array[array.length - 1], coords)) ? [...array, coords] : array;
	}

	updateAccelerationData = (ev) => {
		let { x, y, z } = ev.acceleration;
		let { previousAcceleration, bumps } = this.props.trip;
		let { lat, lng } = this.props.trip.currentLocation;

		if (x !== null && y !== null && z !== null) {
			let ax = x - previousAcceleration.x;
			let ay = y - previousAcceleration.y;
			let az = z - previousAcceleration.z;
			let currentAcceleration = Math.pow((ax * ax + ay * ay + az * az), 1 / 3); //current level of acceleration with existing phone position
			
			if (currentAcceleration > 2.829226039) { //регулируемое значение
				this.props.addTripBumps({
					bumps: this.updateArrayIfPositionChanged(bumps, {lat, lng}), 
					previousAcceleration: { x, y, z }
				});

				this.setState({cover: true})
				timerId = setTimeout(this.animateBump, 800);
			}
		}
	}

	animateBump = () => {
		this.setState({cover: false})
		clearTimeout(timerId);
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

	stopRecording = () => {
		navigator.geolocation.clearWatch(navigatorId);
		window.removeEventListener("devicemotion", this.updateAccelerationData);
		
		this.saveBumpsToDatabase().then(() => this.getDatabaseBumpsCount()).then(bumpsCount => this.updateStatsInDatabase(bumpsCount));
		this.updateFavoritiesData();
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
		return new Promise((resolve, reject) => {
			let bumpsRef = db.collection('bumpsmap').doc('bumps');
			let count = 0;
			this.props.trip.bumps.forEach(bump => 
				bumpsRef.update({bumps: firebase.firestore.FieldValue.arrayUnion(bump)})
				.then(() => count++)
				.catch(error => reject(new Error('Bumps are not updated in database'))
			))

			if (count === this.props.trip.bumps.length) resolve('success')
		});		
	}

	getDatabaseBumpsCount = () => {
		return db.collection('bumpsmap').doc('bumps')
		.get()
		.then(doc => { 
			if (doc.exists) return doc.data().bumps.length})
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
		let { isFavoritiesListView, isShareView, isSelectedTripView, isCheckTripView } = this.props.menu;

		if (isFavoritiesListView) return <FavoritiesList />
		if (isShareView || isSelectedTripView) return <SelectedTripMap google={google} />

		if (isCheckTripView) {
			return (
				<div className="map">
					<BumpsMap 
						centerAroundCurrentLocation
						google={google}
						updateLocationData={this.updateLocationData}
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
				<div className="map-bump-cover" style={{display: this.state.cover ? "flex": "none"}}/>
			</div>
		);
	}
}

const WrapperContainer = GoogleApiWrapper({
 	apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(Body);

export default connect(mapStateToProps, mapDispatchToProps)(WrapperContainer);
