import React, { Component } from 'react';
import { connect } from "react-redux";

import '../../styles/shared.css';
import '../../styles/shared-trip.css';
import { HeaderMenu, HeaderSubmenu, Drawer, NextStepButton, Body } from '../_common/index';
import * as helpers from '../../helpers/index';
import ShareBlock from './share-block';

import * as trip from "../../ducks/selected-trip";
import * as menu from "../../ducks/menu-state";
import * as mode from "../../ducks/mode";
import * as dom from "../../ducks/dom";

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
	selectFavoritiesListView: menu.selectFavoritiesListView,
	selectShareView: menu.selectShareView,
	startRecording: mode.startRecording,
	stopRecording: mode.stopRecording,
	noTripsSelected: trip.noTripsSelected,
	changeBarColor: dom.changeBarColor
};

class ReportBumps extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isRecordingMode: false, 
		};
	}

	componentDidMount = () => {
		this.props.changeBarColor("#4c88b7");
		this.props.selectBumpsMapView();
	}

	onLeftMenuToggle = () => {
		let { isDrawerView, isSelectedTripView } = this.props.menu;
		if (isDrawerView) return this.props.closeDrawerView();
		
		if (isSelectedTripView) {
			this.props.noTripsSelected();
			this.props.selectFavoritiesListView();
			return;
		} 

		return this.props.selectDrawerView();
	}

	onRightMenuToggle = () => {
		if(this.props.menu.isShareView) return this.props.closeShareView();
		this.props.selectShareView();
	}

	onNextStepButtonToggle = () => {
		if(this.props.mode.isRecording) return this.props.stopRecording();
		this.props.startRecording();
	}	

	onSubmenuTabSelect = condition => {
		const handlerName = `select${helpers.camelize(condition)}View`;
		this.props[handlerName]();
	}

	markActiveTab = condition => {
		const selectedOption = `is${helpers.camelize(condition)}View`;
		return this.props.menu[selectedOption];
	}

	render() {
		let coverDisplay = this.props.menu.isDrawerView ? "block" : "none";
		let { color, text } = this.props.mode;

		return (
			<div className="wrapper">
				<div className="main">
					<div className="header">
						<HeaderMenu 
							onLeftMenuToggle={this.onLeftMenuToggle} 
							onRightMenuToggle={this.onRightMenuToggle} />
						<HeaderSubmenu 
							onSubmenuTabSelect={this.onSubmenuTabSelect}
							markActiveTab={this.markActiveTab}
						/>
					</div>
				<Body />
				<NextStepButton 
					color={color}
					text={text}
					toggleButton={this.onNextStepButtonToggle}	/>
				<ShareBlock />
				</div>
				<div className="cover" style={{display: coverDisplay}}>
					<div className="cover-background" onClick={this.onMenuToggle} />
					<Drawer />
				</div>
			</div>
			);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportBumps);