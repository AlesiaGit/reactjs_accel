import React, { Component } from 'react';
import { db } from '../../helpers/firebase';
import { connect } from "react-redux";

import '../../styles/shared-trip.css';
import { Body } from '../_common/index';
import Slider from './slider';

import * as selectedTrip from "../../ducks/selected-trip";
import * as menu from "../../ducks/menu-state";

const mapStateToProps = state => {
    return {
    	selectedTrip: state.selectedTrip,
        menu: state.menu
    };
};

const mapDispatchToProps = {
	selectTrip: selectedTrip.selectTrip,
	selectTripView: menu.selectTripView
};


class SharedTrip extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isDataReceived: false,
			isStatsView: true,
			stats: null,
			tripQuality: "low"
		}

	}

	componentDidMount = () => {
		this.getSharedTripData()
		.then(() => this.getAppStatistics())
		.then(() => this.setState({ 
			tripQuality: this.setTripQuality(),
			isDataReceived: true
		}))
		.catch(error => console.log(error))
	}

	getSharedTripData = () => {
		let id = window.location.hash.split("#/shared/").pop();
		return db.collection('shared').doc(id)
		.get()
		.then(doc => {
			if (doc.exists) return doc.data().tripdata;
		}).then(trip => {
			this.props.selectTrip(trip);
			this.props.selectTripView();
		})
	}

	getAppStatistics = () => {
		return db.collection('stats').doc('totals')
		.get()
		.then(doc => {
			if (doc.exists) this.setState({stats: doc.data()})
		})
	}

	toggleStats = () => {
		this.setState({isStatsView: !this.state.isStatsView})
	}

	setTripQuality = () => {
		let trip = this.props.selectedTrip;
		let stats = this.state.stats;

		let tripQuality = ["low", "moderate", "good"];
		let quality = (trip.bumps.length/trip.distance) / (stats.bumpsCount/stats.distanceTotal) * 100;

		if (quality < 30) return tripQuality[0];
		if (quality > 70) return tripQuality[2];

		return tripQuality[1];
	}

	render() {
		let trip = this.props.selectedTrip;
		let { isDataReceived, isStatsView, stats, tripQuality } = this.state;

		if (isDataReceived === false) return <div>Retrieving data from database</div>

		let bumpsCount = trip.bumps.length;
		let distance = trip.distance;
		
		return (
			<div className="shared-wrapper">
				<div className="shared-stats">
					<div className="shared-summary-header">
						<div className="shared-summary-wrapper">
							<div className="shared-summary">Bumpy road informer</div>
							<div className="shared-trip-quality">Trip quality: {tripQuality} </div>
						</div>
						<div className="collapse-icon" onClick={this.toggleStats}/>
					</div>
					<div className="shared-details-wrapper" style={{display: isStatsView ? "flex" : "none"}}>
					<div className="shared-endpoints">
						<div className="shared-address-line"><span className="shared-address-destination">From: </span>{trip.start}</div>
						<div className="shared-address-line"><span className="shared-address-destination">To: </span>{trip.end}</div>
					</div>
					<div className="shared-slider-wrapper">
						<div className="slider-header"><span className="slider-fieldname">Bumps per trip: </span>{bumpsCount}</div>
						<Slider color="#7fb8e9" width={bumpsCount / (stats.bumpsCount / stats.tripsCount) * 100} />
						<div className="slider-header"><span className="slider-fieldname">Bumps per km: </span>{(bumpsCount/distance).toFixed(2)}</div>
						<Slider color="#fbad19" width={(bumpsCount/distance) / (stats.bumpsCount/stats.distanceTotal) * 100}/>
					</div>
					</div>
				</div>
				<div className="shared-map"><Body /></div>
			</div>
			);

	
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SharedTrip);
