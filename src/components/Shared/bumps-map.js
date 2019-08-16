import React, { Component } from 'react';

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

		if (prevProps.allBumps !== this.props.allBumps) {
			this.setBumpsOnMap(this.props.allBumps, this.databaseBumps, "purple", 0.8);
		}

		if (prevProps.isSearchMode !== this.props.isSearchMode && this.props.isSearchMode === false) {
			this.buildRoute([this.props.start, this.props.end]);
		}
	}

	buildRoute = endpoints => {
		this.convertAddressToCoordinates(endpoints).then(addresses => {
			let maps = this.props.google.maps;
			let directionsService = new maps.DirectionsService();
  			let directionsDisplay = new maps.DirectionsRenderer();
  			directionsDisplay.setMap(this.map);

  			var request = {
				origin: addresses.start,
				destination: addresses.end,
				travelMode: 'DRIVING'
			};

			directionsService.route(request, (response, status) => {
				if (status === 'OK') directionsDisplay.setDirections(response);
			});
		})
	}

	convertAddressToCoordinates = addresses => {
		return new Promise ((resolve, reject) => {
			let maps = this.props.google.maps;
			let coords = [];
			let geocoder = new maps.Geocoder();

			for (var i = 0; i < addresses.length; i++) {
				geocoder.geocode({'address': addresses[i]}, (results, status) => {
					if (status !== 'OK') reject(new Error('Geocoder failed due to: ' + status));
						
					coords.push(results[0].geometry.location);
					if (coords.length === addresses.length) resolve({start: coords[0], end: coords[1]});
				});
			}
		});
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

			if (this.map) this.setBumpsOnMap(this.props.allBumps, this.databaseBumps, "purple", 0.8);
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


BumpsMap.defaultProps = {
	zoom: 16,
	initialCenter: {
	  	lat: 53.893009,
	  	lng: 27.567444
	},
	centerAroundCurrentLocation: false
}