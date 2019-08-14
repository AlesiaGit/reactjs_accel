import React, { Component } from 'react';
import FavoritiesMap from './favorities-map';

class FavoritiesList extends Component {

	render() {
		let { favorities, selectedTrip, google, dimentions } = this.props;

		if (!favorities.length) return null;

		if (selectedTrip !== null) return (
			<FavoritiesMap 
				google={google} 
				favorities={favorities[selectedTrip]} 
				dimentions={dimentions} 
			/>
		);
			
		let color = ["green", "red"];

		return (

	  		<div className="fav-list">
	  			{favorities.map((trip, i) => (
					<div className={`fav-item ${trip.bumps.length < 4 ? "green" : "red"}`} onClick={()=> this.props.onTripSelect(i)} key={i}>
						<div className="fav-route">From: {trip.start}</div>
						<div className="fav-route">To: {trip.end}</div>
						<div className="fav-bumps-count">{trip.bumps.length} bumps per {trip.tripdistance ? trip.tripdistance.toFixed(1) : 0} km</div>
					</div>
				))}
			</div>
        );
	}
}

export default FavoritiesList;
