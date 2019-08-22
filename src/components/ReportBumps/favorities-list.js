import React, { Component } from 'react';
import FavoritiesMap from './favorities-map';

class FavoritiesList extends Component {

	render() {
		let { favorities, selectedTrip, google, dimentions } = this.props;
		if (!favorities.length) return null;

		if (selectedTrip !== null) return (
			<FavoritiesMap 
				google={google} 
				favorities={favorities.filter(item => item.id === selectedTrip)[0]} 
				dimentions={dimentions} />
		);
			
		return (
	  		<div className="fav-list">
	  			{favorities.map((trip, i) => (
					<div className={`fav-item ${trip.bumps.length < 4 ? "yellow" : "red"}`} onClick={()=> this.props.onTripSelect(trip.id)} key={i}>
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
