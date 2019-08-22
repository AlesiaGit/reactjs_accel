import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Drawer extends Component {
	render() {
		let items = [
			{id: "map", title: "Report a bump"},
			{id: "checktrip", title: "Check your trip"},
			{id: "calibrate", title: "Calibrate sensors"},
			{id: "settings", title: "Settings"}];

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
							onClick={e => this.props.markSelection(e)}>
							{item.title}
						</Link>
					))}
				</div>
			</div>
		);
	}
}

export default Drawer;
