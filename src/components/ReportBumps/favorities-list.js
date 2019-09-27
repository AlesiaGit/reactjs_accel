import React, { Component } from 'react';
import { connect } from "react-redux";

import * as selectedTrip from "../../ducks/selected-trip";
import * as menu from "../../ducks/menu-state";
import * as stats from "../../ducks/stats";

const mapStateToProps = state => {
    return {
        favorities: state.favorities,
        stats: state.stats
    };
};

const mapDispatchToProps = {
  	selectTrip: selectedTrip.selectTrip,
  	selectTripView: menu.selectTripView,
};

class FavoritiesList extends Component {
	// setTripQuality = trip => {
	// 	console.log(this.props.stats)
	// 	let tripQuality = ["#e34929", "#fbad19", "#4c88b7"]; //bad, moderate, good
	// 	let quality = (trip.bumps.length/trip.distance) / (this.props.stats.bumpsCount/this.props.stats.distanceTotal) * 100;
	// 	console.log(quality)

	// 	if (quality < 30) return tripQuality[0];
	// 	if (quality > 70) return tripQuality[2];

	// 	return tripQuality[1];
	// }
	render() {
		let favorities = this.props.favorities;
		if (!favorities.length) return null;
		
		return (
	  		<div className="fav-list">
	  			{favorities.map((trip, i) => (
					<div className="fav-item" 
						//style={{borderColor: this.setTripQuality(trip)}}
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
