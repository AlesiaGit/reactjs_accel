import React, { Component } from 'react';

class HeaderSubmenu extends Component {

	handleEvent = condition => {
		const handlerName = `on${this.props.camelize(condition)}`;
		this.props[handlerName]();
	}

	handleSelection = condition => {
		const selectedOption = `is${this.props.camelize(condition)}`;
		return this.props[selectedOption];
	}

	render() {
		let tabs = this.props.options.map((item, index) => (
				<div className={`header-submenu-tab ${this.handleSelection(item) ? "tab-active" : ""}`} 
					onClick={() => this.handleEvent(item)} key={index}>{item}</div>
				));

		return (
			<div className="header-submenu">
				{tabs}
			</div>
				
		);
	}
}

export default HeaderSubmenu;
