import React, { Component } from 'react';

class SearchMenu extends Component {
	render() {
		return (
			<div className="search-menu">
				<div className="from-to-icon"></div>
				<div className="search-form">
					{["start", "end"].map(item => (
						<input 
							key={item}
							type="text" 
							name={item} 
							className="search-input" 
							onChange={e => this.props.handleChange(e)} />
						))}
				</div>
			</div>
		);
	}
}

export default SearchMenu;
