import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/start.css';

class Start extends Component {
	componentDidMount = () => {
		this.props.setStatusBarColor("#fbad19");
	}
	
	render() {
		return (
			<div className="wrapper">
				<div className="start-page-main">
					<div className="logo-container">
						<div className="logo-txt">Bumpy</div>
						<div className="logo-txt">Roads</div>
						<div className="logo-txt">Informer</div>
					</div>
				</div>
				<Link exact="true" to="/map" className="bottom-ruler-btn">
					get started
				</Link>
			</div>
		);
	}
}

export default Start;


//<div className="bottom-ruler-btn" onClick={() => {this.props.permissionGranted()}}>get started</div>