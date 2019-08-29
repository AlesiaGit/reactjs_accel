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
		return (
				<div className="header-menu" >
					<div className="header-left-menu">
						<div className={`header-menu-icon ${this.props.menu.iconleft}`} 
							onClick={() => this.props.onMenuToggle()}/>
						<div className="page-title">{this.props.menu.title}</div>
					</div>
					<div className="header-right-menu" >
						<div className={`header-menu-icon ${this.props.menu.iconright}`}  
							onClick={() => this.props.onRightMenuToggle()}/>
					</div>
				</div>
				
		);
	}
}

export default connect(mapStateToProps)(HeaderMenu);