import React, { Component } from 'react';
import '../../styles/check-trip.css';
import { HeaderMenu, Drawer, NextStepButton, Body } from '../_common/index';
import SearchMenu from './search-menu';
import { connect } from "react-redux";

import * as menu from "../../ducks/menu-state";
import * as mode from "../../ducks/mode";
import * as dom from "../../ducks/dom";

const mapStateToProps = state => {
    return {
        selectedTrip: state.selectedTrip,
        menu: state.menu,
        mode: state.mode,
        dom: state.dom
    };
};

const mapDispatchToProps = {
	closeDrawerView: menu.closeDrawerView,
	selectDrawerView: menu.selectDrawerView,
	selectCheckTripView: menu.selectCheckTripView,
	startGuidance: mode.startGuidance,
	stopGuidance: mode.stopGuidance,
	buildRoute: mode.buildRoute,
	changeBarColor: dom.changeBarColor
};

class CheckTrip extends Component {
	constructor(props) {
		super(props);

	    this.state = {
	    	start: "",
	    	end: ""
	    };
	}

	componentDidMount = () => {
		this.props.changeBarColor("#4c88b7");
		this.props.selectCheckTripView();
	    this.props.stopGuidance();
	}

	preventResize = () => {
		let { width, height } = this.props.dom;
		let ratio = width / height;
		let newHeight = window.innerHeight * ratio;
		document.querySelector("meta[name=viewport]")
        .setAttribute("content", `width=device-width, height=${newHeight}, user-scalable=no, initial-scale=1.0, maximum-scale=1.0`);
    }

	onLeftMenuToggle = () => {
		let isDrawerView = this.props.menu.isDrawerView;
		if (isDrawerView) return this.props.closeDrawerView();
		this.props.selectDrawerView();
	}

	onNextStepButtonToggle = () => {
		let { isBuildingRoute, isGuidance } = this.props.mode;
		if (isBuildingRoute) return this.props.startGuidance();
		if (isGuidance) return this.props.stopGuidance();
		if (!isGuidance && !isBuildingRoute) return this.props.buildRoute();
	}

	onSearchButtonToggle = () => {
		this.props.stopGuidance();
	}

	handleInputChange = e => {
		let { name, value } = e.target;
		this.setState({	[name]: value });
	}

	clearInput = item => {
		this.setState({ [item]: "" });
	}

	render() {
		let { start, end } = this.state;
		let coverDisplay = this.props.menu.isDrawerView ? "block" : "none";
		let searchButtonDisplay = (this.props.mode.isBuildingRoute) ? "flex" : "none";
		let {color, text} = this.props.mode;

		return (
			<div className="wrapper">
				<div className="main">
					<div className="header">
						<HeaderMenu onLeftMenuToggle={this.onLeftMenuToggle} />
						<SearchMenu 
							handleChange={this.handleInputChange} 
							clearInput={this.clearInput}
							start={start}
							end={end}
							preventResize={this.preventResize}
							/>
						<div className="directions-btn" 
							style={{display: searchButtonDisplay}} 
							onClick={this.onSearchButtonToggle} />
					</div>
					<Body start={start} end={end} />
					<NextStepButton 
						color={color} 
						toggleButton={this.onNextStepButtonToggle}
						text={text}	/>	
				</div>
				<div className="cover" style={{display: coverDisplay}}>
					<div className="cover-background" onClick={this.onLeftMenuToggle}  />
					<Drawer />
				</div>
			</div> 
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckTrip);
