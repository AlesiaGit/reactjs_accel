import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Drawer extends Component {
	render() {
		return (
			<div className="drawer">
				<div className="drawer-logo"></div>
				<div className="drawer-body">
				<div onClick={e => {
					e.stopPropagation();
					this.props.onMenuToggle()}}>
						<Link className="drawer-item" exact="true" to="/map" >
							Report a bump
						</Link>
						</div>
						<Link className="drawer-item" exact="true" to="/" >
							Check your trip
						</Link>
						<Link className="drawer-item" exact="true" to="/" >
							Calibrate sensors
						</Link>
						<Link className="drawer-item" exact="true" to="/" >
							Settings
						</Link>
				</div>
			</div>
		);
	}
}

export default Drawer;

