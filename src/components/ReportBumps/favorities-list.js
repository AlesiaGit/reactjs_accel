import React, { Component } from 'react';
import { connect } from "react-redux";

import FavoritiesMap from './favorities-map';
//import { selectTrip, noTripsSelected } from "../../ducks/selected-trip";

const mapStateToProps = state => {
    return {
        selectedTrip: state.selectedTrip
    };
};

class FavoritiesList extends Component {
	// onTripSelect = trip => {
	// 	store.dispatch(selectTrip(selectedTrip));
	// }

	render() {
		

		let { favorities, selectedTrip, google, dimentions } = this.props;
		console.log(this.props)
		if (!favorities.length) return null;

		if (selectedTrip !== null) {
			return (
				<FavoritiesMap 
					google={google} 
					//selectedTrip={selectedTrip} 
					dimentions={dimentions} />
			);
		}
			
		return (
	  		<div className="fav-list">
	  			{favorities.map((trip, i) => (
					<div className={`fav-item ${trip.bumps.length < 4 ? "yellow" : "red"}`} onClick={() => this.props.onTripSelect(trip)} key={i}>
						<div className="fav-route">From: {trip.start}</div>
						<div className="fav-route">To: {trip.end}</div>
						<div className="fav-bumps-count">{trip.bumps.length} bumps per {trip.tripdistance ? trip.tripdistance.toFixed(1) : 0} km</div>
					</div>
				))}
			</div>
        );
	}
}

export default connect(mapStateToProps)(FavoritiesList);
