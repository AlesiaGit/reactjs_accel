import React, { Component } from 'react';
import { connect } from "react-redux";


const mapStateToProps = state => {
    return {
        selectedTrip: state.selectedTrip,
        dom: state.dom
    };
};

class SelectedTripMap extends Component {
	constructor(props) {
		super(props);

		this.mapRef = React.createRef();
		this.trip = null;
		this.bumps = [];
	}

	componentDidMount = () => {
		this.loadMap();
	}

	componentDidUpdate = (prevProps, prevState) => {
		if (prevProps.google !== this.props.google || prevProps.selectedTrip !== this.props.selectedTrip) {
			this.loadMap();
		}
	}

	loadMap = () => {
		if (this.props.google) {

			let maps = this.props.google.maps;
			let { zoom, path, center, bumps } = this.props.selectedTrip;

			const mapOptions = {
				center,
				zoom,
				zoomControl: false,
    			scaleControl: false,
    			fullscreenControl: false,
    			mapTypeControl: false,
    			streetViewControl: false,
			};

			let tripOptions = {
				path,
		        strokeColor: '#4D8FAC',
		        strokeOpacity: 0.8,
		        strokeWeight: 4,
			};

			let bumpOption = {
				path: "M-4,0a4,4 0 1,0 8,0a4,4 0 1,0 -8,0",
				fillColor: "red",
				strokeColor: "red",
                fillOpacity: 1.0,
                scale: 0.8,
                anchor: new maps.Point(0, 0)
			}

  			this.map = new maps.Map(this.mapRef.current, mapOptions);
			this.trip = new maps.Polyline(tripOptions);
			
			if (this.map) {
				this.trip.setMap(this.map); 

				bumps.forEach((bump, index) => {
					this.bumps.push(new maps.Marker({ position: {lat: bump.lat, lng: bump.lng}, icon: bumpOption, map: this.map, animation: maps.Animation.DROP }));
				});
			}
		}
	}

	componenWillUnmount = () => {
		this.trip.setMap(null);
		this.bumps.forEach(bump => bump.setMap(null));
	}
	
	render() {
		if (!this.props.selectedTrip) return;

		console.log(this.props)
		
		let { width, height } = this.props.dom;

	  	return (
	  		<div className="favorities-map">
	  			<div ref={this.mapRef} 
	  				style={{
						width: width +"px", 
						height: height +"px", 
						position: "relative"
		  			}} />
	  		</div>
        );
	}
}

export default connect(mapStateToProps)(SelectedTripMap);
