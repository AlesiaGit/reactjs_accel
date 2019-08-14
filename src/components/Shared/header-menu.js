import React, { Component } from 'react';

class HeaderMenu extends Component {
	render() {
		let icon = this.props.icon !== null ? "back-arrow" : "burger-icon";
		let title = this.props.title !== null ? "Back to list" : "Report a bump";
		
		return (
				<div className="header-menu">
					<div className="header-left-menu">
						<div className={`header-menu-icon ${icon}`} onClick={() => this.props.onMenuToggle()}></div>
						<div className="page-title">{title}</div>
					</div>
					<div className="header-right-menu">
						<div className="header-menu-icon settings-icon"></div>
					</div>
				</div>
				
		);
	}
}

export default HeaderMenu;