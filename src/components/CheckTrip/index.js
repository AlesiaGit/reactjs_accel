import React, { Component } from 'react';
import '../../styles/check-trip.css';
import { HeaderMenu, Drawer, NextStepButton, Body } from '../Shared/index';
import SearchMenu from './search-menu';

import store from "../../store/store";
import * as menu from "../../ducks/menu-state";

class CheckTrip extends Component {
	constructor(props) {
		super(props);

	    this.state = {
	    	isDrawer: false,
	    	isSearchMode: true,
	    	isGuidanceMode: false,
	    	text: "Build a route",
	    	color: "#fbad19",
	    	start: "",
	    	end: ""
	    };
	}

	componentDidMount = () => {
		this.props.setStatusBarColor("#4c88b7");
	}

	preventResize = () => {
        document
            .querySelector("meta[name=viewport]")
            .setAttribute(
                "content",
                "width=device-width, height=" +
                    window.innerWidth / this.props.ratio +
                    ", user-scalable=no, initial-scale=1.0, maximum-scale=1.0"
            );
    };

	onMenuToggle = () => {
		this.setState({ isDrawer: !this.state.isDrawer })
	}

	onNextStepButtonToggle = () => {
		let { isSearchMode, isGuidanceMode } = this.state;
		if (isSearchMode) return this.setState({ isSearchMode: false, isGuidanceMode: false, text: "Start Guidance", color:  "#757d75" });
		if (!isGuidanceMode && !isSearchMode) return this.setState({ isSearchMode: false, isGuidanceMode: true, text: "Stop Guidance", color: "#e34929" })
		if (isGuidanceMode && !isSearchMode) return this.setState({ isSearchMode: true, isGuidanceMode: false, text: "Build a route", color: "#fbad19" })
	}

	onSearchButtonToggle = () => {
		this.setState({ isSearchMode: false, isGuidanceMode: true}, () => this.onNextStepButtonToggle())
	}

	handleChange = e => {
		let { name, value } = e.target;

		this.setState({	[name]: value });
	}

	clearSearch = item => {
		this.setState({ [item]: "" });
	}

	changeView = action => {
		store.dispatch(menu[action]());
		store.dispatch(menu.closeDrawerView());
	}

	render() {
		let { text, color, isDrawer, isSearchMode, isGuidanceMode, start, end, ratio } = this.state;
		let drawerDisplay = isDrawer ? "block" : "none";
		let searchBtnDisplay = (!isSearchMode && !isGuidanceMode) ? "flex" : "none";

		return (
			<div className="wrapper">
				<div className="main">
					<div className="header">
						<HeaderMenu 
							title={"Check your trip"} 
							icon={"burger-icon"} 
							onMenuToggle={this.onMenuToggle} />
						<SearchMenu 
							handleChange={this.handleChange} 
							clearSearch={this.clearSearch}
							start={start}
							end={end}
							isSearchMode={isSearchMode} 
							preventResize={this.preventResize}
							/>
						<div className="directions-btn" 
							style={{display: searchBtnDisplay}} 
							onClick={this.onSearchButtonToggle} />
					</div>
					<Body 
						isSearchMode={isSearchMode} 
						isGuidanceMode={isGuidanceMode}
						start={start} 
						end={end} 
						isCheckTripView={true}
						/>
					<NextStepButton 
						isDisplayed={true}
						color={color} 
						toggleButton={this.onNextStepButtonToggle}
						text={text}	/>	
				</div>
				<div className="cover" style={{display: drawerDisplay}}>
					<div className="cover-background" onClick={this.onMenuToggle}  />
					<Drawer changeView={this.changeView} />
				</div>
			</div> 
		);
	}
}

export default CheckTrip;
