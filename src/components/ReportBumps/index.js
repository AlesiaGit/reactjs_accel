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
	    	//isFavoritiesView: false, 
	    	isRecordingMode: false, 
	    	//selectedTrip: this.props.selectedTrip, //null,
	    	//isMapView: true, 
	    	//submenuOptions: ["Favorities List", "Bumps Map"],
	    	//isDrawer: false,
	    	isShareView: false
	    };

	    this.cover = React.createRef();

	    //console.log(this.props.selectedTrip)
	}

	componentDidMount = () => {
		this.props.setStatusBarColor("#4c88b7");
	}

	// onFavoritiesListView = () => {
	// 	store.dispatch(selectFavListView());
	// 	// this.setState({
	// 	// 	//isFavoritiesView: true,
	// 	// 	isMapView: false
	// 	// });
	// }

	// onBumpsMapView = () => {
	// 	store.dispatch(selectBumpsMapView());
	// 	// this.setState({
	// 	// 	//isFavoritiesView: false,
	// 	// 	isMapView: true,
	// 	// });
	// }

	onMenuToggle = () => {
		console.log(this.props.menu)
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
		console.log(store.getState())
	}

	handleSelection = condition => {
		const selectedOption = `is${helpers.camelize(condition)}View`;
		return this.props.menu[selectedOption];
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
						//selectedTrip={this.state.selectedTrip}
						//onTripSelect={this.onTripSelect}
						google={this.props.google}
						isFavoritiesView={this.props.menu.isFavoritiesListView} 
						isRecordingMode={this.state.isRecordingMode}
						isCheckTripView={false} 
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
					<Drawer current={this.props.current} markSelection={this.props.markSelection}/>
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps)(ReportBumps);