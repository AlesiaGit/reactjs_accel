import React, { Component } from 'react';
//import '../../styles/report-bumps.css';
import '../../styles/check-trip.css';

import { db } from '../Firebase/index';
import { GoogleApiWrapper, Polyline, Marker, Circle} from 'google-maps-react';

import BumpsMap from '../Shared/bumps-map';
//import FavoritiesMap from './favorities-map';
import Car from '../Shared/car';
import Bang from '../../images/bang.png';

import * as helpers from '../../helpers/index';


let navigatorId;

const NAVIGATOR_OPTIONS = {
	enableHighAccuracy: true,
	timeout: 5000,
	maximumAge: 0
};

class Main extends Component {
	constructor(props) {
		super(props);

	    this.state = {
	    	isDataFetched: false, // обработка загрузки данных
	    	//isRecordingMode: false, 
	    	data: [],
	    	currentLocation: {}, 
	    	previousLocation: {}, 
	    	acceleration: {prev: { x: 0, y: 0, z: 0}, average: 0, max: 0, ticks: 0}, 
	    	//context: null,
	    	zoom: 16, 
	    	angle: 0, 
	    	move: 0, 
	    	tripdistance: 0,
	    	dimentions: {
	    		height: window.innerHeight,// * 0.842, //0.764
	    		width: window.innerWidth
	    	},
	    	favorities: JSON.parse(localStorage.getItem("favorities")) || [], //заменить на данные с Firestore
	    	bumps: [],
	    	historicBumps: []
	    };

	    this.canvas = React.createRef();
	    this.mymap = React.createRef();
	    this.mymarker = React.createRef();


	}

	componentDidMount = () => {
		//const canvas = this.canvas.current;
		//this.setState({ context: canvas.getContext('2d') });

	 // 	var data;
		// db.collection("coverage").get().then(querySnapshot => {
		//     querySnapshot.forEach(function(doc) {
		//     	if (doc.data().data) {
		//     		data = JSON.parse(doc.data().data);
		//     	} else {
		//     		data = [];
		//     	}

		//     });
		// }).then(() => {
		// 	this.setState({ 
		// 		context: canvas.getContext('2d'),
		// 		isDataFetched: true,
	 //  			data 
	 //  		}, () => console.log(this.state.data));
		// });

		var docRef = db.collection('limit').doc('result');
		docRef.get().then(doc =>{
		    if (doc.exists) {
		        return doc.data().data;
		    }
		}).then(data => {
			this.setState({historicBumps: data})
		})


		this.setState({ // убрать при подключении Firestore
			//context: canvas.getContext('2d'),
			isDataFetched: true,
			data: [] //set test for testing purposes
		});

		window.addEventListener('resize', this.updateWindowDimensions);
	}

	componentDidUpdate = (prevProps, prevState) => {
	   //
	}

	componentWillUnmount = () => {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions = () => {
	  this.setState({ 
	  	dimentions: {
	    		height: window.innerHeight,// * 0.764,
	    		width: window.innerWidth
	    	} 
	    });
	}

	// toggleRecording = () => {
	// 	if (!this.state.isRecordingMode) {
	// 		this.startRecording();
	// 	} else {
	// 		this.stopRecording();
	// 	}
		
	// 	this.setState({isRecordingMode: !this.state.isRecordingMode});  
	// }

	startRecording = () => {
		this.setState({
			data: [],
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
			
			//if (curr > average * 1.3 && average !== 0) {
			if (curr > 2.829226039) {
				this.setState({
					bumps: (bumps.length === 0 || !helpers.compare(bumps[bumps.length - 1], {lat, lng})) ? [...bumps, {lat, lng}] : bumps,
				});
			}

			//average = (average * ticks + curr )/ ++ticks;
			max = max > curr ? max : curr;

			this.setState({acceleration: {prev: { x, y, z }, average, max, ticks}})
		}
	}	

	updateLocationData = location => {
		var prev = this.state.currentLocation;
		let data = this.state.data;

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
			data: (data.length === 0 || !helpers.compare(data[data.length - 1], {lat, lng})) ? [...this.state.data, {lat, lng}] : data,
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
		
		//db.collection("coverage").doc(topleft).set({data: JSON.stringify(this.state.data)});

		// docRef.get().then(function(doc) {
		//     if (doc.exists) {
		//         console.log("Document data:", doc.data());
		//     }
		// });
	}

	updateFavoritiesData = () => {
		let { favorities, bumps, tripdistance } = this.state;
		let path = this.state.data;
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
		.then(data => docRef.set({data: data.concat(bumps)}));
		//docRef.set({data: []});
	}

	sendTripToFirebase = () => {
		let path = db.collection('trip').doc('path');
		path.set({path: this.state.data});
		let bumps = db.collection('trip').doc('bumps');
		bumps.set({bumps: this.state.bumps});
	}

	render() {
		let { bumps, historicBumps, favorities, dimentions, currentLocation } = this.state;
		let google = this.props.google;


		return (
			<div className="map">
				<BumpsMap 
					centerAroundCurrentLocation
					google={google}
					updateLocationData={this.updateLocationData}
					currentLocation={currentLocation}
					isRecordingMode={this.props.isRecordingMode}
					onZoomChanged={this.onZoomChanged}		
					dimentions={dimentions}
					camelize={helpers.camelize}	
					bumps={this.state.bumps}
					historicBumps={this.state.historicBumps}
					>
					<Car 
						angle={this.state.angle}
						move={this.state.move}
						resetMove={this.resetMove}
						/>
				</BumpsMap>
			</div>
		);
	}
}

//export default Main;

 export default GoogleApiWrapper({
 	apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
 })(Main);


 //<Bumps bumps={this.state.bumps} />
//				{historicBumpsMap}
//{historicBumpsMap}
 // {bumpsMap}
// <div style={{
// 	position: 'absolute',
//     top: '17vh',
//     left: 0,
//     width: '100%',
//     backgroundColor: '#ffffff'}}
//   	>
//     av: {acceleration.average.toFixed(2)}, max:{acceleration.max.toFixed(2)}, ticks:{acceleration.ticks}
// </div>