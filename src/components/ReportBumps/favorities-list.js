import React, { Component } from 'react';
import { connect } from "react-redux";

import * as selectedTrip from "../../ducks/selected-trip";
import * as menu from "../../ducks/menu-state";

const mapStateToProps = state => {
    return {
        favorities: state.favorities
    };
};

const mapDispatchToProps = {
  	selectTrip: selectedTrip.selectTrip,
  	selectTripView: menu.selectTripView,
};

class FavoritiesList extends Component {
	render() {
		let favorities = this.props.favorities;
		if (!favorities.length) return null;
		
		return (
	  		<div className="fav-list">
	  			{favorities.map((trip, i) => (
					<div className={`fav-item ${trip.bumps.length < 4 ? "yellow" : "red"}`} 
						onClick={() => {
							this.props.selectTrip(trip);
							this.props.selectTripView();
						}} key={i}>
						<div className="fav-route">From: {trip.start}</div>
						<div className="fav-route">To: {trip.end}</div>
						<div className="fav-bumps-count">{trip.bumps.length} bumps per {trip.distance ? trip.distance.toFixed(1) : 0} km</div>
					</div>
				))}
			</div>
        );
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoritiesList);
