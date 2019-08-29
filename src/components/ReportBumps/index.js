import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";

import '../../styles/shared.css';
import '../../styles/shared-trip.css';
import { HeaderMenu, HeaderSubmenu, Drawer, NextStepButton, Body } from '../Shared/index';
import * as helpers from '../../helpers/index';
import ShareBlock from './share-block';
import { db } from '../Firebase/index';

import store from "../../store/store";
import * as trip from "../../ducks/selected-trip";
import * as menu from "../../ducks/menu-state";
import * as mode from "../../ducks/mode";

const mapStateToProps = state => {
    return {
        selectedTrip: state.selectedTrip,
        menu: state.menu,
        mode: state.mode
    };
};

const mapDispatchToProps = {
  closeDrawerView: menu.closeDrawerView,
  selectDrawerView: menu.selectDrawerView,
  selectBumpsMapView: menu.selectBumpsMapView,
  selectCheckTripView: menu.selectCheckTripView,
  selectFavoritiesListView: menu.selectFavoritiesListView,
  selectTripView: menu.selectTripView,
  selectShareView: menu.selectShareView,
  startRecording: mode.startRecording,
  stopRecording: mode.stopRecording,
  startGuidance: mode.startGuidance,
  stopGuidance: mode.stopGuidance,
  buildRoute: mode.buildRoute,
  noTripsSelected: trip.noTripsSelected,
  selectTrip: trip.selectTrip,
 	
};

class ReportBumps extends Component {
	constructor(props) {
		super(props);

	    this.state = {
	    	isRecordingMode: false, 
	    };
	}

	componentDidMount = () => {
		this.props.setStatusBarColor("#4c88b7");
		this.props.selectBumpsMapView();
	}

	onMenuToggle = () => {
		let { isDrawerView, isSelectedTripView } = this.props.menu;
		if (isDrawerView) return this.props.closeDrawerView();
		
		if (isSelectedTripView) {
			this.props.noTripsSelected();
			this.props.selectFavoritiesListView();
			return;
		} 

		return this.props.selectDrawerView();
	}

	toggleRecording = () => {
		if(this.props.mode.isRecording) return this.props.stopRecording();
		this.props.startRecording();
	}

	onRightMenuToggle = () => {
		if(this.props.menu.isShareView) return this.props.closeShareView();
		this.props.selectShareView();
	}

	onSubmenuSelect = condition => {
		const handlerName = `select${helpers.camelize(condition)}View`;
		this.props[handlerName]();
	}

	markActiveTab = condition => {
		const selectedOption = `is${helpers.camelize(condition)}View`;
		return this.props.menu[selectedOption];
	}

	changeView = action => {
		this.props[action]();
		this.props.closeDrawerView();
	}

	render() {
		let coverDisplay = this.props.menu.isDrawerView ? "block" : "none";
		let { color, text } = this.props.mode;

		return (
			<div className="wrapper">
				<div className="main">
					<div className="header">
						<HeaderMenu 
							onMenuToggle={this.onMenuToggle} 
							onRightMenuToggle={this.onRightMenuToggle} />
						<HeaderSubmenu 
							onSubmenuSelect={this.onSubmenuSelect}
							markActiveTab={this.markActiveTab}
						/>
					</div>
					<Body />
					<NextStepButton 
						color={color}
						text={text}
						toggleButton={this.toggleRecording}	/>
					<ShareBlock />
				</div>
				<div className="cover" style={{display: coverDisplay}}>
					<div className="cover-background" onClick={this.onMenuToggle} />
					<Drawer changeView={this.changeView} />
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportBumps);