import React, { Component } from 'react';
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        menu: state.menu
    };
};

class HeaderSubmenu extends Component {
	render() {
		let options = ["Favorities List", "Bumps Map"];
		let { isFavoritiesListView, isBumpsMapView } = this.props.menu;
		let displaySubmenu = (isFavoritiesListView || isBumpsMapView ) ? "flex" : "none";

		return (
			<div className="header-submenu" style={{display: displaySubmenu }}>
				{
					options.map((item, index) => (
						<div 
							className={`header-submenu-tab ${this.props.handleSelection(item) ? "tab-active" : ""}`} 
							onClick={() => this.props.handleEvent(item)} 
							key={index}>
							{item}
						</div>
					))
				}
			</div>
				
		);
	}
}

export default connect(mapStateToProps)(HeaderSubmenu);
