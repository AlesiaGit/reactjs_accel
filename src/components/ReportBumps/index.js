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
import { selectTrip, noTripsSelected } from "../../ducks/selected-trip";
import * as menu from "../../ducks/menu-state";

const mapStateToProps = state => {
    return {
        selectedTrip: state.selectedTrip,
        menu: state.menu
    };
};

class ReportBumps extends Component {
	constructor(props) {
		super(props);

	    this.state = {
	    	isRecordingMode: false, 
	    	isShareView: false
	    };

	    this.cover = React.createRef();
	}

	componentDidMount = () => {
		this.props.setStatusBarColor("#4c88b7");
	}

	onMenuToggle = () => {
		if (this.props.menu.isDrawerView) return store.dispatch(menu.closeDrawerView());
		
		if (this.props.menu.isSelectedTripView) {
			store.dispatch(noTripsSelected());
			store.dispatch(menu.selectFavoritiesListView());
			return;
		} 

		return store.dispatch(menu.selectDrawerView());
	}

	toggleRecording = () => {
		this.setState({ isRecordingMode: !this.state.isRecordingMode });  
	}

	onRightMenuToggle = () => {
		this.setState({ isShareView: !this.state.isShareView });
	}

	handleEvent = condition => {
		const handlerName = `select${helpers.camelize(condition)}View`;
		store.dispatch(menu[handlerName]());
	}

	handleSelection = condition => {
		const selectedOption = `is${helpers.camelize(condition)}View`;
		return this.props.menu[selectedOption];
	}

	changeView = action => {
		store.dispatch(menu[action]());
		store.dispatch(menu.closeDrawerView());
	}

	render() {
		return (
			<div className="wrapper">
				<div className="main">
					<div className="header">
						<HeaderMenu 
							onMenuToggle={this.onMenuToggle} 
							onRightMenuToggle={this.onRightMenuToggle} />
						<HeaderSubmenu 
							handleEvent={this.handleEvent}
							handleSelection={this.handleSelection}
						/>
					</div>
					<Body 
						google={this.props.google}
						isRecordingMode={this.state.isRecordingMode}
						//isCheckTripView={false} 
						isShareView={this.state.isShareView}
						/>
					<NextStepButton 
						isDisplayed={!this.props.menu.isFavoritiesListView}
						color={!this.state.isRecordingMode ? "#757d75" : "#e34929"}
						toggleButton={this.toggleRecording}
						disableCondition={!this.state.isDataFetched}
						text={this.state.isRecordingMode ? "Stop Recording" : "Start Recording"}/>
						<ShareBlock isShareView={this.state.isShareView} id={this.state.selectedTrip} />
				</div>
				<div className="cover" style={{display: this.props.menu.isDrawerView ? "block" : "none"}}>
					<div className="cover-background" ref="cover" onClick={this.onMenuToggle} id="cover" />
					<Drawer changeView={this.changeView} />
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps)(ReportBumps);