import React, {Component} from 'react';
import './App.css';
//import { GoogleApiWrapper } from 'google-maps-react';
import { Route, HashRouter } from 'react-router-dom';
import { createBrowserHistory } from "history";

import ReportBumps from './ReportBumps/index';
//import FavoritiesMap from './ReportBumps/favorities-map';
import CheckTrip from './CheckTrip/index';
import Start from './Start/index';

const customHistory = createBrowserHistory();

class App extends Component {

	constructor(props) {
		super(props);

	    this.state = {
	    	current: "map"
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
	}

	markSelection = e => {
		this.setState({
			current: e.currentTarget.id
		})
	}

	render() {
		let current = this.state.current;

	    return (
		    <HashRouter history={customHistory} >
		       	<Route exact path="/" component={Start} />
				<Route exact path="/map" component={() => <ReportBumps current={current} markSelection={this.markSelection} />} />
				<Route exact path="/checktrip" component={() => <CheckTrip current={current} markSelection={this.markSelection} />} />
  			</HashRouter>
	    );
	}  
}

export default App;
