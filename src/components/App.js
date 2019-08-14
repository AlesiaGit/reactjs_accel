import React, {Component} from 'react';
import './App.css';
//import { GoogleApiWrapper } from 'google-maps-react';
import { Route, HashRouter } from 'react-router-dom';
import { createBrowserHistory } from "history";

import ReportBumps from './ReportBumps/index';
//import FavoritiesMap from './ReportBumps/favorities-map';
import Start from './Start/index';

const customHistory = createBrowserHistory();

class App extends Component {

	constructor(props) {
		super(props);

	    this.state = {
	    	isGranted: false
	    };
	}

	componentDidMount = () => {
		window.addEventListener('load', function() {
		  window.history.pushState({ noBackExitsApp: true }, '')
		})

		window.addEventListener('popstate', function(event) {
		  if (event.state && event.state.noBackExitsApp) {
		    window.history.pushState({ noBackExitsApp: true }, '')
		  }
		})

		//ScreenOrientation.lock("portrait");
	}

	permissionGranted = () => {
		this.setState({isGranted: true})
	}

	render() {
	 	//if (!this.state.isGranted) return (<Start permissionGranted={this.permissionGranted} />);


	    return (
		    <HashRouter history={customHistory}>
		       	<Route exact path="/" component={Start} />
				<Route exact path="/map" component={ReportBumps} />
  			</HashRouter>
	    );
	}  
}

export default App;

// export default GoogleApiWrapper({
// 	apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
// })(App);

// <div className="App"> 
//	<ReportBumps google={this.props.google} />
//</div>
