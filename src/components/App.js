import React, {Component} from 'react';
import './App.css';
//import { GoogleApiWrapper } from 'google-maps-react';
import { Route, HashRouter } from 'react-router-dom';
import { createBrowserHistory } from "history";

import ReportBumps from './ReportBumps/index';
import SharedTrip from './SharedTrip/index';
import CheckTrip from './CheckTrip/index';
import Start from './Start/index';

const customHistory = createBrowserHistory();

class App extends Component {

	constructor(props) {
		super(props);

	    this.state = {
	    	current: window.location.hash.slice(2) || "map",
	    	ratio: window.innerWidth/window.innerHeight
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

	setStatusBarColor = color => {
        document
            .querySelector("meta[name=theme-color]")
            .setAttribute("content", color);
    };

	markSelection = e => {
		let current = e.currentTarget.id;
		this.setState({ current });
	}

	render() {
		let { current, ratio } = this.state;

	    return (
		    <HashRouter history={customHistory} >
		       	<Route exact path="/" component={() => {
		       		return <Start setStatusBarColor={this.setStatusBarColor} />}} />
				<Route exact path="/map" component={() => {
					return <ReportBumps 
						current={current} 
						markSelection={this.markSelection} 
						setStatusBarColor={this.setStatusBarColor}
						/>
					}} />
				<Route exact path="/checktrip" component={() => {
					return <CheckTrip 
						current={current} 
						markSelection={this.markSelection} 
						ratio={ratio} 
						setStatusBarColor={this.setStatusBarColor}/>
					}} />
				<Route path="/shared/:number" component={() => (<SharedTrip	setStatusBarColor={this.setStatusBarColor}/>)} />
  			</HashRouter>
	    );
	}  
}

export default App;
