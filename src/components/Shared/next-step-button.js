import React, { Component } from 'react';
import '../../styles/shared.css';

class NextStepButton extends Component {

	render() {
		return (
			<div 
				className="bottom-ruler-btn" 
				style={{backgroundColor: this.props.color}} 
				onClick={() => this.props.toggleButton()} 
				disabled={!this.props.disableCondition}>
				{this.props.text}
			</div>
		);
	}
}

export default NextStepButton;