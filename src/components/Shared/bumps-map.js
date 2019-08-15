import React, { Component } from 'react';
//import { GoogleApiWrapper } from 'google-maps-react';

class BumpsMap extends Component {
	constructor(props) {
		super(props);

		const {lat, lng} = props.initialCenter;

		this.state = {
			currentLocation: {lat, lng}, 
			zoom: 17,
			isCurrentPositionReceived: false,
		};

		this.mymap = React.createRef();
		this.mymarker = React.createRef();
		this.tripBumps = [];
		this.databaseBumps = [];
	}

	componentDidMount = () => {

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


		if (this.props.centerAroundCurrentLocation) {
			if (navigator && navigator.geolocation) {
				navigator.geolocation.getCurrentPosition((pos) => {
					const coords = pos.coords;
					this.setState({
						currentLocation: {lat: coords.latitude, lng: coords.longitude},
						isCurrentPositionReceived: true
	                }, this.props.updateLocationData(pos)) //update wrapper data
				})
			}
		}

		this.loadMap();
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.google !== this.props.google) {
			this.loadMap();
		}
		if (prevState.currentLocation !== this.state.currentLocation) {
			this.recenterMap(this.state.currentLocation);
		}

		if ((prevProps.currentLocation !== this.props.currentLocation) && (this.state.isCurrentPositionReceived && this.props.isRecordingMode)) {
			this.recenterMap(this.props.currentLocation);
		}

		if (prevProps.bumps !== this.props.bumps) {
			this.setBumpsOnMap(this.props.bumps, this.tripBumps, "red", 1.2);
		}

		if (prevProps.historicBumps !== this.props.historicBumps) {
			this.setBumpsOnMap(this.props.historicBumps, this.databaseBumps, "purple", 0.8);
		}
	}

	loadMap = () => {
		if (this.props.google) {

			let maps = this.props.google.maps;
			let zoom = this.props.zoom;
			const { lat, lng } = this.state.currentLocation;

			const center = new maps.LatLng(lat, lng);
			const mapConfig = Object.assign({}, {
				center: center,
				zoom: zoom,
				zoomControl: false,
    			scaleControl: false,
    			fullscreenControl: false,
    			mapTypeControl: false,
    			streetViewControl: false
			});

			this.map = new maps.Map(this.mymap.current, mapConfig);

			const evtNames = ['click', 'dragend', 'zoom_changed'];
			evtNames.forEach(e => this.map.addListener(e, this.handleEvent(e)));

	      	maps.event.trigger(this.map, 'ready');

	      	if (this.map) this.setBumpsOnMap(this.props.historicBumps, this.databaseBumps, "purple", 0.8);

			// this.directionsService = new maps.DirectionsService();
  			// this.directionsDisplay = new maps.DirectionsRenderer();
  			// var haight = new maps.LatLng(53.9127758, 27.5132506);
  			// var oceanBeach = new maps.LatLng(53.912676, 27.5136713);
  			
		  	// this.directionsDisplay.setMap(this.map);

  			// 		var request = {
		 	//      origin: haight,
		 	//      destination: oceanBeach,
		 	//      // Note that Javascript allows us to access the constant
		 	//      // using square brackets and a string value as its
		 	//      // "property."
		 	//      travelMode: 'DRIVING'
		 	//  };
		 	//  this.directionsService.route(request, (response, status) => {
		 	//    if (status == 'OK') {
		 	//      this.directionsDisplay.setDirections(response);
		 	//    } else {
	  		//           console.log('Directions request failed due to ' + status);
	  		//         }
		 	//  });
		}
	}

	handleEvent(evtName) {
		let timeout;
		const handlerName = `on${this.props.camelize(evtName)}`;

		return (e) => {
			if (timeout) {
				clearTimeout(timeout);
				timeout = null;
			}
			timeout = setTimeout(() => {
				if (this.props[handlerName]) {
					this.props[handlerName](this.props, this.map, e);
				}
			}, 0);
		}
	}

	recenterMap = currentLocation => {
		const map = this.map;

		const google = this.props.google;
		const maps = google.maps;

		if (map) {
			let center = new maps.LatLng(currentLocation.lat, currentLocation.lng);
			map.panTo(center);
		}
	}

	deleteMarkers = markersArray => {
		markersArray.forEach(marker => marker.setMap(null));
		return [];
	}

	setBumpsOnMap = (bumpsArray, markersArray, color, size) => {
		const map = this.map;
		const maps = this.props.google.maps;

		let bumpOption = {
			path: "M-4,0a4,4 0 1,0 8,0a4,4 0 1,0 -8,0",
			fillColor: color,
			strokeColor: color,
            fillOpacity: 1.0,
            scale: size,
            anchor: new maps.Point(0, 0)
		}

		markersArray = this.deleteMarkers(markersArray);
		bumpsArray.forEach(bump => {
			markersArray.push(new maps.Marker({ 
				position: {lat: bump.lat, lng: bump.lng}, 
				icon: bumpOption, 
				map: this.map 
			}))
		})
	}

	updateCurrent = (location) => {
		this.props.updateLocationData(location);
	}

	componentWillUnmount = () => {
		this.deleteMarkers(this.tripBumps);
		this.deleteMarkers(this.databaseBumps);
	}

	renderChildren = () => {
		const {children} = this.props;

		if (!children) return;

		return React.Children.map(children, c => {
			return React.cloneElement(c, {
				map: this.map,
				google: this.props.google,
				mapCenter: this.state.currentLocation,
				currentLocation: this.props.currentLocation,
				isCurrentPositionReceived: this.state.isCurrentPositionReceived
			});
		})
	}

	render() {
		let { width, height } = this.props.dimentions;
		let style = {
			width: width + "px", 
			height: height +"px", 
			position: "relative"
		};

	  	return (
	  		<div ref={this.mymap} style={style}>
		        Loading...
		        {this.renderChildren()}
		    </div>
		);
	  }
	}

	export default BumpsMap;

// export default GoogleApiWrapper({
// 	apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
// })(BumpsMap);

BumpsMap.defaultProps = {
	zoom: 16,
  // Minsk center, by default
  initialCenter: {
  	lat: 53.893009,
  	lng: 27.567444
  },
  centerAroundCurrentLocation: false
}