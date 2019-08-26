import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Drawer extends Component {
	render() {
		let items = [
			{id: "map", title: "Report a bump", action: 'selectBumpsMapView'},
			{id: "checktrip", title: "Check your trip", action: 'selectCheckTripView' },
			{id: "calibrate", title: "Calibrate sensors", action: 'selectBumpsMapView'},
			{id: "settings", title: "Settings", action: 'selectBumpsMapView'}];

		return (
			<div className="drawer">
				<div className="drawer-logo"></div>
				<div className="drawer-body">
					{items.map(item => (
						<Link 
							className={`drawer-item${this.props.current === item.id ? " drawer-item-active" : ""}`} 
							exact="true" 
							key={item.id}
							id={item.id} 
							to={`/${item.id}`} 
							replace 
							onClick={() => this.props.changeView(item.action)}>
							{item.title}
						</Link>
					))}
				</div>
			</div>
		);
	}
}

export default Drawer;
