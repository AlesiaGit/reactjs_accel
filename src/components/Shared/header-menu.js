import React, { Component } from 'react';

class HeaderMenu extends Component {

	render() {
		console.log(this.props)
		return (
				<div className="header-menu" >
					<div className="header-left-menu">
						<div className={`header-menu-icon ${this.props.icon}`} id="left" onClick={(e) => this.props.onMenuToggle(e)}/>
						<div className="page-title">{this.props.title}</div>
					</div>
					<div className="header-right-menu" >
						<div className={`header-menu-icon ${this.props.rightIcon}`}  id="right" onClick={(e) => this.props.onMenuToggle(e)}/>
					</div>
				</div>
				
		);
	}
}

export default HeaderMenu;