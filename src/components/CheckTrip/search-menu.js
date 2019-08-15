import React, { Component } from 'react';

class SearchMenu extends Component {
	render() {
		//let icon = this.props.icon !== null ? "back-arrow" : "burger-icon";
		//let title = this.props.title !== null ? "Back to list" : "Report a bump";
		
		return (
				<div className="search-menu">
					<div className="from-to-icon"></div>
					<div className="search-form">
						<input type="text" className="search-input" />
						<input type="text" className="search-input" />
					</div>
				</div>
				
		);
	}
}

export default SearchMenu;