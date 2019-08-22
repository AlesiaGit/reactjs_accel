import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import '../../styles/shared.css';
import '../../styles/shared-trip.css';
import { HeaderMenu, HeaderSubmenu, Drawer, NextStepButton, Body } from '../Shared/index';
import * as helpers from '../../helpers/index';
import ShareBlock from './share-block';
import { db } from '../Firebase/index';

class ReportBumps extends Component {
	constructor(props) {
		super(props);

	    this.state = {
	    	isFavoritiesView: false, 
	    	isRecordingMode: false, 
	    	selectedTrip: null,
	    	isMapView: true, 
	    	submenuOptions: ["Favorities View", "Map View"],
	    	isDrawer: false,
	    	isShareView: false
	    };

	    this.cover = React.createRef();
	}

	componentDidMount = () => {
		this.props.setStatusBarColor("#4c88b7");
	}

	onFavoritiesView = () => {
		this.setState({
			isFavoritiesView: true,
			isMapView: false
		});
	}

	onMapView = () => {
		this.setState({
			isFavoritiesView: false,
			isMapView: true,
			//selectedTrip: null
		});
	}

	onTripSelect = selectedTrip => {
		this.setState({ selectedTrip })
	}

	onMenuToggle = e => {
		console.log(e.currentTarget)
		let id = e.currentTarget.id;
		if (id === "left" || id === "cover") {
			this.setState({ isDrawer: !this.state.isDrawer });
		} 


		if (id === "right") {
			console.log('im here')
			this.setState({ isShareView: !this.state.isShareView });
		}
		// console.log('left menu fired')
		// if (this.state.selectedTrip !== null) { //слабое место
		// 	this.setState({ selectedTrip: null })
		// } else {
			//this.setState({ isDrawer: !this.state.isDrawer })
		//}
	}

	toggleRecording = () => {
		this.setState({isRecordingMode: !this.state.isRecordingMode});  
	}

	onRightMenuToggle = () => {
		this.setState({ isShareView: !this.state.isShareView }, () => console.log(this.state.isShareView));
	}

	render() {
		console.log(this.state.isShareView)
		return (
			<div className="wrapper">
				<div className="main">
					<div className="header">
						<HeaderMenu 
							title={this.state.selectedTrip !== null ? "Back to list" : "Report a bump"} 
							icon={this.state.selectedTrip !== null ? "back-arrow" : "burger-icon"} 
							onMenuToggle={this.onMenuToggle} 
							rightIcon={this.state.selectedTrip !== null ? "share-icon" : ""}
							onRightMenuToggle={this.onRightMenuToggle} />
						<HeaderSubmenu 
							isFavoritiesView={this.state.isFavoritiesView}
							isMapView={this.state.isMapView}
							onFavoritiesView={this.onFavoritiesView}
							onMapView={this.onMapView}
							options={this.state.submenuOptions} />
					</div>
					<Body 
						selectedTrip={this.state.selectedTrip}
						onTripSelect={this.onTripSelect}
						google={this.props.google}
						isFavoritiesView={this.state.isFavoritiesView} 
						isRecordingMode={this.state.isRecordingMode}
						isCheckTripView={false} 
						isShareView={this.state.isShareView}
						/>
					<NextStepButton 
						isDisplayed={!this.state.isFavoritiesView}
						color={!this.state.isRecordingMode ? "#757d75" : "#e34929"}
						toggleButton={this.toggleRecording}
						disableCondition={!this.state.isDataFetched}
						text={this.state.isRecordingMode ? "Stop Recording" : "Start Recording"}/>
						<ShareBlock isShareView={this.state.isShareView} id={this.state.selectedTrip} />
				</div>
				<div className="cover" style={{display: this.state.isDrawer ? "block" : "none"}}>
					<div className="cover-background" ref="cover" onClick={this.onMenuToggle} id="cover" />
					<Drawer current={this.props.current} markSelection={this.props.markSelection}/>
				</div>
			</div>
		);
	}
}

export default ReportBumps;

//	