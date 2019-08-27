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

const mapDispatchToProps = (dispatch) => ({
  stopGuidance: () => dispatch(mode.stopGuidance()),
});

class CheckTrip extends Component {
	constructor(props) {
		super(props);

	    this.state = {
	    	start: "",
	    	end: ""
	    };

	    store.dispatch(menu.selectCheckTripView())
	    //store.dispatch(mode.stopGuidance())
	    this.props.stopGuidance();
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
		if (this.props.menu.isDrawerView) return store.dispatch(menu.closeDrawerView());
		store.dispatch(menu.selectDrawerView());
	}

	onNextStepButtonToggle = () => {
		let { isBuildingRoute, isGuidance } = this.props.mode;
		if (isBuildingRoute) return store.dispatch(mode.startGuidance());
		if (isGuidance) return store.dispatch(mode.stopGuidance());
		if (!isGuidance && !isBuildingRoute) return store.dispatch(mode.buildRoute())
	}

	onSearchButtonToggle = () => {
		store.dispatch(mode.stopGuidance());
		//this.setState({ isSearchMode: false, isGuidanceMode: true}, () => this.onNextStepButtonToggle())
	}

	handleChange = e => {
		let { name, value } = e.target;

		this.setState({	[name]: value }, console.log(this.state));
	}

	clearSearch = item => {
		this.setState({ [item]: "" });
	}

	changeView = action => {
		store.dispatch(menu[action]());
		store.dispatch(menu.closeDrawerView());
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
							//isSearchMode={isSearchMode} 
							preventResize={this.preventResize}
							/>
						<div className="directions-btn" 
							style={{display: searchButtonDisplay}} 
							onClick={this.onSearchButtonToggle} />
					</div>
					<Body 
						//isSearchMode={isSearchMode} 
						//isGuidanceMode={isGuidanceMode}
						start={start} 
						end={end} 
						//isCheckTripView={true}
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

export default connect(mapStateToProps, mapDispatchToProps)(CheckTrip);
