import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class ShareBlock extends Component {
	render() {
		return (
			<div className="share-wrapper" style={{display: this.props.isShareView ? "flex" : "none"}}>
				<div className="share-title">Hello</div>
				<div className="share-body">

				</div>
				<div className="share-buttons-wrapper">
						<Link 
							className="share-confirm" 
							to={`/shared/${this.props.id}`} 
							replace>Press here
						</Link>
					<div className="share-cancel" />
				</div>
			</div>
		);
	}
}

export default ShareBlock;