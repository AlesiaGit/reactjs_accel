import React, { Component } from 'react';
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        mode: state.mode
    };
};

class SearchMenu extends Component {
	render() {
		let displaySearch = (!this.props.mode.isGuidance && !this.props.mode.isBuildingRoute) ? "flex" : "none";
		return (
			<div className="search-menu" style={{display: displaySearch}} >
				<div className="from-to-icon"></div>
				<div className="search-form">
					{["start", "end"].map(item => (
						<div key={item} className="search-input-wrapper">
							<input 
								type="text" 
								name={item} 
								value={this.props[item]}
								className="search-input" 
								placeholder={(item === "start") ? "(Current position)" : ""}
								onFocus={this.props.preventResize}
								onChange={e => this.props.handleChange(e)} />
							<div 
								className="search-cancel-btn"
								onClick={() => this.props.clearSearch(item)} />
						</div>
						))}
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps)(SearchMenu);
