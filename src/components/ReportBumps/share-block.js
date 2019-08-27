import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
    	selectedTrip: state.selectedTrip,
        menu: state.menu
    };
};

class ShareBlock extends Component {
	render() {
		if (this.props.selectedTrip === null) return null;
		
		return (
			<div className="share-wrapper" style={{display: this.props.menu.isShareView ? "flex" : "none"}}>
				<div className="share-title">Hello</div>
				<div className="share-body">

				</div>
				<div className="share-buttons-wrapper">
						<Link 
							className="share-confirm" 
							to={`/shared/${this.props.selectedTrip.id}`} 
							replace>Press here
						</Link>
					<div className="share-cancel" />
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps)(ShareBlock);