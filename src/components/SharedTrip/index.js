import React, { Component } from 'react';
import FavoritiesMap from '../ReportBumps/favorities-map';
import { GoogleApiWrapper } from 'google-maps-react';
import { db } from '../Firebase/index';


class SharedTrip extends Component {
	constructor(props) {
		super(props);

		this.state = {
			trip: null
		}

		console.log(window.location)
	}

	componentDidMount = () => {
		console.log(this.props)
		// db.collection('shared').doc(this.props.tripId)
		// .get()
		// .then(doc => {
		// 	if (doc.exists) console.log(doc.data())})
			//if (doc.exists) this.setState({ trip: doc.data().data}) })
	}

	

	render() {
		return (<div>hello</div>)
		// if (this.state.trip === null || !this.props.google) return null;

		// return (
		// 	<div className="map">
	 //  			<FavoritiesMap 
	 //  				google={this.props.google} 
		// 			favorities={this.state.trip} 
		// 			dimentions={{width: '100%', height: '100%'}}
		// 			/>
	 //  		</div>
		// );
	}
}

export default GoogleApiWrapper({
 	apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(SharedTrip);