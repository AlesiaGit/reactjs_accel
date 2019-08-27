import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";

import '../../styles/shared.css';
import '../../styles/shared-trip.css';
import { HeaderMenu, HeaderSubmenu, Drawer, NextStepButton, Body } from '../Shared/index';
import * as helpers from '../../helpers/index';
import ShareBlock from './share-block';
import { db } from '../Firebase/index';

//store
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

class ReportBumps extends Component {
	constructor(props) {
		super(props);

	    this.state = {
	    	isRecordingMode: false, 
	    };
	}

	componentDidMount = () => {
		this.props.setStatusBarColor("#4c88b7");
	}

	onMenuToggle = () => {
		let { isDrawerView, isSelectedTripView } = this.props.menu;
		if (isDrawerView) return store.dispatch(menu.closeDrawerView());
		
		if (isSelectedTripView) {
			store.dispatch(trip.noTripsSelected());
			store.dispatch(menu.selectFavoritiesListView());
			return;
		} 

		return store.dispatch(menu.selectDrawerView());
	}

	toggleRecording = () => {
		if(this.props.mode.isRecording) {

			store.dispatch(mode.stopRecording());
			console.log(store.getState())
		} else {
			store.dispatch(mode.startRecording())
			console.log(store.getState())
		}

		
	}

	onRightMenuToggle = () => {
		if(this.props.menu.isShareView) return store.dispatch(menu.closeShareView());
		store.dispatch(menu.selectShareView())
	}

	onSubmenuSelect = condition => {
		const handlerName = `select${helpers.camelize(condition)}View`;
		store.dispatch(menu[handlerName]());
	}

	markActiveTab = condition => {
		const selectedOption = `is${helpers.camelize(condition)}View`;
		return this.props.menu[selectedOption];
	}

	changeView = action => {
		store.dispatch(menu[action]());
		store.dispatch(menu.closeDrawerView());
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
					<Body isRecordingMode={this.state.isRecordingMode} />
					<NextStepButton 
						color={color}
						text={text}
						//data={nextStepButtonState}
						toggleButton={this.toggleRecording}
						/>
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

export default connect(mapStateToProps)(ReportBumps);