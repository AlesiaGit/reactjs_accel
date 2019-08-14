import { Component } from 'react';
//import car from '../../images/car.svg';

class Bumps extends Component {

	componentDidMount = () => {
		this.bumps = [];
	}

	componentDidUpdate = (prevProps) => {
		let {map, isCurrentPositionReceived, bumps} = this.props;

		if (map !== prevProps.map || isCurrentPositionReceived !== prevProps.isCurrentPositionReceived || bumps !== prevProps.bumps) {
			//if (bumps[bumps.length - 1]) alert(bumps[bumps.length - 1].lat);
			this.renderBumps();
		}
	}

	componentWillUnmount = () => {
	    this.removeBumps();
	}

	removeBumps = () => {
		if (this.bumps && this.bumps.length > 0) {
	    	this.bumps.forEach(bump => {
	    		bump.setMap(null);
	    	}, () => {
	    		this.bumps = [];  
	    	});   
	    }
	}

	renderBumps = () => {
		this.removeBumps();

		let { map, google, mapCenter, bumps} = this.props;
		const maps = google.maps;

		let bumpOption = {
			path: "M-4,0a4,4 0 1,0 8,0a4,4 0 1,0 -8,0",
			fillColor: "red",
			strokeColor: "red",
            fillOpacity: 1.0,
            scale: 1,
            anchor: new maps.Point(0, 0)
		}

		bumps.forEach((bump, index) => {
			this.bumps.push(new maps.Marker({ position: {lat: bump.lat, lng: bump.lng}, icon: bumpOption, map: this.map, animation: maps.Animation.DROP }));
			//this.bumps[index].setMap(this.map);
		});
	}

	render() {
		return null;
	}
}

export default Bumps;