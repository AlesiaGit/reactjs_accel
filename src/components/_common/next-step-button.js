import React, { Component } from 'react';
import '../../styles/shared.css';
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        menu: state.menu
    };
};

class NextStepButton extends Component {

	render() {
		let { isFavoritiesListView, isSelectedTripView } = this.props.menu;
		if (isFavoritiesListView || isSelectedTripView) return null;

		return (
			<div 
				className="bottom-ruler-btn" 
				style={{ backgroundColor: this.props.color}} 
				onClick={() => this.props.toggleButton()} >
				{this.props.text}
			</div>
		);
	}
}

export default connect(mapStateToProps)(NextStepButton);