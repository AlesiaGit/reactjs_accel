import React, { Component } from 'react';
import '../../styles/report-bumps.css';
import '../../styles/check-trip.css';
import '../../styles/shared.css';

import { db } from '../Firebase/index';
import { GoogleApiWrapper, Polyline, Marker, Circle} from 'google-maps-react';
import { BumpsMap, Car } from './index';
import FavoritiesList from '../ReportBumps/favorities-list';
import * as helpers from '../../helpers/index';


let navigatorId;

const NAVIGATOR_OPTIONS = {
	enableHighAccuracy: true,
	timeout: 5000,
	maximumAge: 0
};

class Body extends Component {
	constructor(props) {
		super(props);

	    this.state = {
	    	path: [],
	    	currentLocation: {}, 
	    	previousLocation: {}, 
	    	acceleration: {prev: { x: 0, y: 0, z: 0}, average: 0, max: 0, ticks: 0}, 
	    	zoom: 16, 
	    	angle: 0, 
	    	move: 0, 
	    	tripdistance: 0,
	    	dimentions: { height: window.innerHeight, width: window.innerWidth },
	    	favorities: JSON.parse(localStorage.getItem("favorities")) || [], //заменить на данные с Firestore
	    	bumps: [],
	    	allBumps: []
	    };

	    this.canvas = React.createRef();
	    this.mymap = React.createRef();
	    this.mymarker = React.createRef();
	}

	componentDidMount = () => {
		var docRef = db.collection('limit').doc('result');
		docRef.get().then(doc =>{
		    if (doc.exists) {
		        return doc.data().data;
		    }
		}).then(allBumps => {
			this.setState({allBumps})
		})

		window.addEventListener('resize', this.updateWindowDimensions);

	}

	componentDidUpdate = (prevProps, prevState) => {
	   	if (prevProps.isRecordingMode !== this.props.isRecordingMode) {
		   	if (this.props.isRecordingMode === true) {
				this.startRecording();
			} else {
				this.stopRecording();
			}
	   	}

	   	if (prevProps.isGuidanceMode !== this.props.isGuidanceMode) {
		   	if (this.props.isGuidanceMode === true) {
				this.startRecording();
			} else {
				this.stopRecording();
			}
	   	}
	}

	componentWillUnmount = () => {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions = () => {
	  	this.setState({ 
	  		dimentions: {
	    		height: window.innerHeight,
	    		width: window.innerWidth
	    	} 
	    });
	}

	startRecording = () => {
		this.setState({
			path: [],
			bumps: [],
			tripdistance: 0
		});

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

	updateAccelerationData = (ev) => {
		let { x, y, z } = ev.acceleration;
		let { prev, average, max, ticks } = this.state.acceleration;
		let { lat, lng } = this.state.currentLocation;
		let bumps = this.state.bumps;
		let maps = this.props.google.maps;	

		if (x !== null && y !== null && z !== null) {
			let ax = x - prev.x;
			let ay = y - prev.y;
			let az = z - prev.z;
			let curr = Math.pow((ax * ax + ay * ay + az * az), 1 / 3); //current level of acceleration with existing phone position
			
			if (curr > 2.829226039) {
				this.setState({
					bumps: (bumps.length === 0 || !helpers.compare(bumps[bumps.length - 1], {lat, lng})) ? [...bumps, {lat, lng}] : bumps,
				});
			}

			max = max > curr ? max : curr;

			this.setState({acceleration: {prev: { x, y, z }, average, max, ticks}})
		}
	}	

	updateLocationData = location => {
		var prev = this.state.currentLocation;
		let path = this.state.path;

		var lat = location.coords.latitude;
		var lng = location.coords.longitude;
		var timestamp = location.timestamp;

		var distance = helpers.getDistance(prev.lat, prev.lng, lat, lng); // в метрах
		var angle = helpers.getAngle(prev.lat, prev.lng, lat, lng);
		var time = Math.abs(prev.timestamp - timestamp)/ 1000; // в секундах
		var speed = (distance/time) ? (distance/time * 3600 / 1000) : 0; //в км/час

		this.setState({	
			previousLocation: prev,
			currentLocation: { lat,	lng, speed,	timestamp },
			path: (path.length === 0 || !helpers.compare(path[path.length - 1], {lat, lng})) ? [...this.state.path, {lat, lng}] : path,
			angle: (Math.abs(angle - this.state.angle) > 22) ? angle : this.state.angle,
			move: this.state.move + distance,
			tripdistance: this.state.tripdistance + distance / 1000
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

		this.updateFavoritiesData();
	}

	updateFavoritiesData = () => {
		let { favorities, bumps, tripdistance } = this.state;
		let path = this.state.path;
		let bounds = helpers.getBounds(path);
		let center = helpers.getCenter(bounds);
		let { ne, sw } = bounds;
		
		var distance = helpers.getDistance(sw.lat, sw.lng, ne.lat, ne.lng);
		var zoom = helpers.getZoom(distance);
		
		if (path.length <= 1) return;
		if (favorities.length === 5) favorities.shift();

		let endpoints = [path[0], path[path.length - 1]];
		this.convertToReadableAddress(endpoints).then(({start, end}) => {
			this.setState({
				favorities: [...favorities, { start, end, path, zoom, center, bumps, tripdistance }]
			}, () => localStorage.setItem('favorities', JSON.stringify(this.state.favorities)));
		});
	}

	resetMove = () => {
		this.setState({
			move: 0
		})
	}

	onZoomChanged = (mapProps, map, clickEvent) => {
		//console.log(map.getZoom());
	}

	sendBumpsToFirebase = () => {
		let bumps = this.state.bumps;
		let docRef = db.collection('limit').doc('result');
		docRef.get()
		.then(doc => {
		    if (doc.exists) return doc.data().data;
		})
		.then(allBumps => docRef.set({data: allBumps.concat(bumps)}));
	}

	sendTripToFirebase = () => {
		let path = db.collection('trip').doc('path');
		path.set({path: this.state.path});
		let bumps = db.collection('trip').doc('bumps');
		bumps.set({bumps: this.state.bumps});
	}

	render() {
		let { bumps, angle, move, path, allBumps, favorities, dimentions, currentLocation } = this.state;
		let { google, isSearchMode, start, end, isFavoritiesView, isCheckTripView, isRecordingMode, selectedTrip, isGuidanceMode } = this.props;

		
		if (isCheckTripView) {
			return (
				<div className="map">
					<BumpsMap 
						centerAroundCurrentLocation
						google={google}
						updateLocationData={this.updateLocationData}
						currentLocation={currentLocation}
						isRecordingMode={isGuidanceMode}
						onZoomChanged={this.onZoomChanged}		
						dimentions={dimentions}
						camelize={helpers.camelize}	
						bumps={bumps}
						allBumps={allBumps}
						isSearchMode={isSearchMode} 
						start={start} 
						end={end} >
					<Car 
						angle={angle}
						move={move}
						resetMove={this.resetMove}
						/>
						</BumpsMap>	
				</div>
			)
		}


		if (isFavoritiesView) {
			return (
				<FavoritiesList 
					favorities={favorities} 
					selectedTrip={selectedTrip}
					google={google} 
					dimentions={dimentions}
					onTripSelect={this.props.onTripSelect}
					/>
			)
		}

		return (
			<div className="map">
				<BumpsMap 
					centerAroundCurrentLocation
					google={google}
					updateLocationData={this.updateLocationData}
					currentLocation={currentLocation}
					isRecordingMode={isRecordingMode}
					onZoomChanged={this.onZoomChanged}		
					dimentions={dimentions}
					camelize={helpers.camelize}	
					bumps={bumps}
					allBumps={allBumps}
					>
					<Car 
						angle={angle}
						move={move}
						resetMove={this.resetMove}
						/>	
					<Polyline
						path={path}
						strokeColor="#4D8FAC"
						strokeOpacity={0.8}
						strokeWeight={4} 
						/>					
				</BumpsMap>
				<button onClick={this.sendBumpsToFirebase} style={{ position: 'absolute', top: '17vh', left: 0, height: '5vh'}}>Add bumps to map</button>
				<button onClick={this.sendTripToFirebase} style={{ position: 'absolute', top: '26vh', left: 0, height: '5vh'}}>Save trip to firebase</button>
			</div>
		);
	}
}

export default GoogleApiWrapper({
 	apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(Body);
