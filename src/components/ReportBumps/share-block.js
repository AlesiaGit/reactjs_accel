import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { db } from '../Firebase/index';

const mapStateToProps = state => {
    return {
    	selectedTrip: state.selectedTrip,
        menu: state.menu
    };
};

class ShareBlock extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isSentToDatabase: false,
			existedInDatabase: false
		}

	}
	componentDidMount = () => {
		if (this.props.selectedTrip === null) return;
		let ref = db.collection('shared').doc(this.props.selectedTrip.id);
		// ref.set({trip: this.props.selectedTrip}, {merge: true}).then(() => {
		// 	this.setState({ isSentToDatabase: true })
		// });
		ref.get().then(doc => {
			if (doc.exists) {
				this.setState({ existedInDatabase: true, isSentToDatabase: true })
			} else {
				ref.set({trip: this.props.selectedTrip}).then(() => { this.setState({ existedInDatabase: true, isSentToDatabase: true }) })
			}
		})
	}
	render() {
		if (this.props.selectedTrip === null) return null;
		
		return (
			<div className="share-wrapper" style={{display: this.props.menu.isShareView ? "flex" : "none"}}>
				<div className="share-title">Hello</div>
				<div className="share-body">

				</div>
				<div className="share-buttons-wrapper">
						<div>{this.state.isSentToDatabase}</div>
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