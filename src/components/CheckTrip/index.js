import React, { Component } from 'react';
import '../../styles/check-trip.css';
import { HeaderMenu, Drawer, NextStepButton, Body } from '../Shared/index';
import SearchMenu from './search-menu';
import { connect } from "react-redux";


import store from "../../store/store";
import * as menu from "../../ducks/menu-state";
import * as mode from "../../ducks/mode";

const mapStateToProps = state => {
    return {
        selectedTrip: state.selectedTrip,
        menu: state.menu,
        mode: state.mode
    };
};

const mapDispatchToProps = dispatch => ({
  closeDrawerView: () => dispatch(menu.closeDrawerView()),
  selectDrawerView: () => dispatch(menu.selectDrawerView()),
  selectCheckTripView: () => dispatch(menu.selectCheckTripView()),
  startGuidance: () => dispatch(mode.startGuidance()),
  stopGuidance: () => dispatch(mode.stopGuidance()),
  buildRoute: () => dispatch(mode.buildRoute()),
});

class CheckTrip extends Component {
	constructor(props) {
		super(props);

	    this.state = {
	    	start: "",
	    	end: ""
	    };
	}

	componentDidMount = () => {
		this.props.setStatusBarColor("#4c88b7");
		this.props.selectCheckTripView();
	    this.props.stopGuidance();
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

	handleChange = e => {
		let { name, value } = e.target;
		this.setState({	[name]: value });
	}

	clearSearch = item => {
		this.setState({ [item]: "" });
	}

	changeView = action => {
		store.dispatch(menu[action]());
		this.props.closeDrawerView();
	}

	render() {
		let { start, end } = this.state;
		let drawerDisplay = this.props.menu.isDrawerView ? "block" : "none";
		let searchButtonDisplay = (this.props.mode.isBuildingRoute) ? "flex" : "none";

		let {color, text} = this.props.mode;

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
				<div className="cover" style={{display: drawerDisplay}}>
					<div className="cover-background" onClick={this.onMenuToggle}  />
					<Drawer changeView={this.changeView} />
				</div>
			</div> 
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckTrip);
