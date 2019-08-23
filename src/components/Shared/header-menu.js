import React, { Component } from 'react';
import { connect } from "react-redux";
import store from "../../store/store";
import * as menu from "../../ducks/menu-state";
import * as trip from "../../ducks/selected-trip";

const mapStateToProps = state => {
    return {
        menu: state.menu
    };
};

class HeaderMenu extends Component {
	render() {

		let title = this.props.menu.isSelectedTripView ? "Back to list" : "Report a bump";
		let iconleft = this.props.menu.isSelectedTripView ? "back-arrow" : "burger-icon"; 
		let iconright = this.props.menu.isSelectedTripView ? "share-icon" : "";

		return (
				<div className="header-menu" >
					<div className="header-left-menu">
						<div className={`header-menu-icon ${iconleft}`} 
							onClick={() => this.props.onMenuToggle()}/>
						<div className="page-title">{title}</div>
					</div>
					<div className="header-right-menu" >
						<div className={`header-menu-icon ${iconright}`}  
							onClick={() => this.props.onRightMenuToggle()}/>
					</div>
				</div>
				
		);
	}
}

export default connect(mapStateToProps)(HeaderMenu);