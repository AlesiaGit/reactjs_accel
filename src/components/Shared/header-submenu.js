import React, { Component } from 'react';

class HeaderSubmenu extends Component {
	render() {
		let options = ["Favorities List", "Bumps Map"];

		return (
			<div className="header-submenu">
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

export default HeaderSubmenu;
