import React, { Component } from 'react';

class Geolocation extends Component {
	constructor(props) {
	    super(props);
	    this.state = {list: []};
	}

	initGeo = () => {
		console.log(this.state.list);
		if ('geolocation' in navigator) {
			navigator.geolocation.getCurrentPosition(location => {
	      		this.updatePos(location);
	    	});
	    	navigator.geolocation.watchPosition(this.updatePos);
		}		
	}

	updatePos = (location) => {
		this.setState({
  			list: [...this.state.list, location.coords]
  		});
	}

	  render() {
	    return (
	    <div>
	    	<button onClick={this.initGeo}>Ask for location</button>
	    	<ul>{this.state.list.map((coords, i) => (
	    			<li key={i}>{coords.latitude}</li>
	    		))}</ul>
	    </div>
	    );
	  }
}

export default Geolocation;