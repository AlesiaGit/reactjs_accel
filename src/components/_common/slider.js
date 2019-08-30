import React, { Component } from 'react';
import '../../styles/shared-trip.css';

class Slider extends Component {

	render() {
		return (
			<div className="slider">
				<div className="slider-background"/>
				<div className="slider-foreground" style={{backgroundColor: this.props.color, width: `${this.props.width}%`}}/>
				<div className="slider-dividers">
					<div className="slider-divider" />
					<div className="slider-divider" />
					<div className="slider-divider" />
					<div className="slider-divider" />
				</div>
			</div>
				
		);
	}
}

export default Slider;