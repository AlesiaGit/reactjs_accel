import React, {Component} from 'react';
import './App.css';
//import { GoogleApiWrapper } from 'google-maps-react';
import { Route, HashRouter } from 'react-router-dom';
import { createBrowserHistory } from "history";
import { connect } from "react-redux";

import ReportBumps from './ReportBumps/index';
import SharedTrip from './SharedTrip/index';
import CheckTrip from './CheckTrip/index';
import Start from './Start/index';

import * as dom from "../ducks/dom";

const mapDispatchToProps = {
	setDimentions: dom.setDimentions,
	setStatusbarColor: dom.setStatusbarColor
};

const customHistory = createBrowserHistory();

class App extends Component {

	constructor(props) {
		super(props);

	    this.state = {
	    	current: window.location.hash.slice(2) || "map",
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

		this.props.setDimentions({ width: window.innerWidth, height: window.innerHeight })
	}

	setStatusBarColor = color => {
        document
            .querySelector("meta[name=theme-color]")
            .setAttribute("content", color);
    };

	render() {
		let { current, ratio } = this.state;

	    return (
		    <HashRouter history={customHistory} >
		       	<Route exact path="/" component={() => {
		       		return <Start setStatusBarColor={this.setStatusBarColor} />}} />
				<Route exact path="/map" component={() => {
					return <ReportBumps 
						setStatusBarColor={this.setStatusBarColor}
						/>
					}} />
				<Route exact path="/checktrip" component={() => {
					return <CheckTrip 
						setStatusBarColor={this.setStatusBarColor}/>
					}} />
				<Route path="/shared/:number" component={() => (<SharedTrip	setStatusBarColor={this.setStatusBarColor}/>)} />
  			</HashRouter>
	    );
	}  
}

export default connect(null, mapDispatchToProps)(App);
