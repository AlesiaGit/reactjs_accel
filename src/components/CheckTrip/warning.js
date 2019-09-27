import React, { Component } from 'react';

class Warning extends Component {
	render() {
		return (
			<div className="warning-wrapper" style={{display: this.props.display ? "flex" : "none"}}>
				<div className="warning-inner">
					<div className="warning-title">Bump ahead</div>
					<div className="warning-sign" />
				</div>
			</div>
		)
	}
}

export default Warning;