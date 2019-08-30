import React, { Component } from 'react';
import { db } from '../Firebase/index';
import { connect } from "react-redux";

import '../../styles/shared-trip.css';
import FavoritiesMap from '../ReportBumps/favorities-map';
import { Body, Slider } from '../_common/index';
import store from "../../store/store";

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
			isReadFromDatabase: false
		}

	}

	componentDidMount = () => {
		// let id = window.location.hash.split("#/shared/").pop();
		// db.collection('shared').doc(id).get().then(doc => {
		// 	if (doc.exists) return doc.data().tripdata;
		// }).then(trip => {
		// 	this.props.selectTrip(trip);
		// 	this.props.selectTripView();
		// 	this.setState({ isReadFromDatabase: true})
		// 	console.log(this.props.selectedTrip)
		// }).catch(function(error) {
		//     console.error("No shared data found");
		// });

		// console.log(this.props)

		this.setState({ isReadFromDatabase: true})
	}

	

	render() {
		if (this.state.isReadFromDatabase === false) return <div>Retrieving data from database</div>
		
		return (
			<div>
				<div className="shared-stats">
					<div className="shared-summary-header">
						<div className="shared-summary-wrapper">
							<div className="shared-summary">Bumpy road</div>
							<div className="shared-trip-quality">Trip quality: low</div>
						</div>
						<div className="collapse-icon" />
					</div>
					<div className="shared-endpoints">
						<div className="shared-address-line"><span className="shared-address-destination">From: </span>Biriuzova 10A, Minsk, Belarus</div>
						<div className="shared-address-line"><span className="shared-address-destination">To: </span>Pereulok Vostochnyy 82, Minsk, Belarus</div>
					</div>
					<div className="shared-slider-wrapper">
						<div className="slider-header"><span className="slider-fieldname">Bumps: </span>34</div>
						<Slider color="#7fb8e9" width="20"/>
						<div className="slider-header"><span className="slider-fieldname">Average: </span>34</div>
						<Slider color="#fbad19" width="75"/>
					</div>
				</div>
				<div className="map">Hello</div>
			</div>
			);

	
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SharedTrip);
