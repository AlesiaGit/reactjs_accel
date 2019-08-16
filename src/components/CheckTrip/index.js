import React, { Component } from 'react';
import '../../styles/check-trip.css';
import { HeaderMenu, Drawer, NextStepButton, Body } from '../Shared/index';
import SearchMenu from './search-menu';

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

	onMenuToggle = () => {
		this.setState({ isDrawer: !this.state.isDrawer })
	}

	toggleNextStepButton = () => {
		let { isSearchMode, isGuidanceMode } = this.state;
		if (isSearchMode) return this.setState({ isSearchMode: false, isGuidanceMode: true, text: "Start Guidance", color:  "#757d75" });
		if (isGuidanceMode) return this.setState({ isGuidanceMode: false, isSearchMode: false, text: "Stop Guidance", color: "#e34929" })
		
		this.setState({ isSearchMode: true, text: "Build a route", color: "#fbad19" })
	}

	handleChange = e => {
		let { name, value } = e.target;

		this.setState({
			[name]: value
		});
	}

	render() {
		let { text, color, isDrawer, isSearchMode, start, end } = this.state;
		let drawerDisplay = isDrawer ? "block" : "none";

		return (
			<div className="wrapper">
				<div className="main">
					<div className="header">
						<HeaderMenu 
							title={"Check your trip"} 
							icon={"burger-icon"} 
							onMenuToggle={this.onMenuToggle} />
						<SearchMenu handleChange={this.handleChange} />
					</div>
					<Body 
						isSearchMode={isSearchMode} 
						start={start} 
						end={end} 
						isCheckTripView={true}
						/>
					<NextStepButton 
						color={color} 
						toggleButton={this.toggleNextStepButton}
						text={text}	/>	
				</div>
				<div className="cover" style={{display: drawerDisplay}}>
					<div className="cover-background" onClick={this.onMenuToggle}  />
					<Drawer 
						current={this.props.current} 
						markSelection={this.props.markSelection} />
				</div>
			</div> 
		);
	}
}

export default CheckTrip;
