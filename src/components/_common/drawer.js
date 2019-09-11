import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

import store from "../../store/store";
import * as menu from "../../ducks/menu-state";

const mapDispatchToProps = dispatch => ({
	selectCheckTripView: menu.selectCheckTripView,
	selectBumpsMapView: menu.selectBumpsMapView,
	closeDrawerView: menu.closeDrawerView
});

class Drawer extends Component {

	handleSelection = action => {
		this.props[action]();
		this.props.closeDrawerView();
	}

	markActiveTab = id => {
		let hash = window.location.hash;
		return (hash.split('#/').pop() === id ) ? " drawer-item-active" : "";
	}

	render() {
		let items = [
			{id: "map", title: "Report a bump", action: 'selectBumpsMapView' },
			{id: "checktrip", title: "Check your trip", action: 'selectCheckTripView' },
			{id: "calibrate", title: "Calibrate sensors", action: 'selectBumpsMapView' },
			{id: "settings", title: "Settings", action: 'selectBumpsMapView' }];

		return (
			<div className="drawer">
				<div className="drawer-logo"></div>
				<div className="drawer-body">
					{items.map(item => (
						<Link 
							className={`drawer-item${this.markActiveTab(item.id)}`} 
							exact="true" 
							key={item.id}
							id={item.id} 
							to={`/${item.id}`} 
							replace 
							onClick={this.handleSelection(item.action)}>
							{item.title}
						</Link>
					))}
				</div>
			</div>
		);
	}
}

export default connect(null, mapDispatchToProps)(Drawer);
