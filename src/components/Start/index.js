import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import '../../styles/start.css';

import * as dom from "../../ducks/dom";

const mapDispatchToProps = {
  changeBarColor: dom.changeBarColor
};

class Start extends Component {
	componentDidMount = () => {
		this.props.changeBarColor("#fbad19");
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

export default connect(null, mapDispatchToProps)(Start);
