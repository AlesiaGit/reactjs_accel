import React, {Component} from 'react';
import './App.css';
import { Route, HashRouter } from 'react-router-dom';
import { createBrowserHistory } from "history";
import { connect } from "react-redux";
import { db } from './Firebase/index';

import ReportBumps from './ReportBumps/index';
import SharedTrip from './SharedTrip/index';
import CheckTrip from './CheckTrip/index';
import Start from './Start/index';

import * as dom from "../ducks/dom";
import * as bumps from "../ducks/bumps-map";

const mapStateToProps = state => {
    return {
        dom: state.dom
    };
};

const mapDispatchToProps = {
	setDimentions: dom.setDimentions,
	addBumps: bumps.addBumps,
};

const customHistory = createBrowserHistory();

class App extends Component {

	componentDidMount = () => {
		window.addEventListener('load', () => window.history.pushState({ noBackExitsApp: true }, ''));

		window.addEventListener('popstate', (event) => {
		  if (!event.state || !event.state.noBackExitsApp) return;
		  window.history.pushState({ noBackExitsApp: true }, '')
		})

		this.updateStatusbarColor();
		this.retrieveBumpsFromDatabase();

		this.props.setDimentions({ width: window.innerWidth, height: window.innerHeight })

		
	}

	componentDidUpdate = prevProps => {
		if (prevProps.dom.color !== this.props.dom.color) {
			this.updateStatusbarColor();
		}
	}

	updateStatusbarColor = () => {
		document.querySelector("meta[name=theme-color]").setAttribute("content", this.props.dom.color);
	}

	retrieveBumpsFromDatabase  = () => {
		db.collection('bumpsmap').doc('bumps')
		.get()
		.then(doc => { 
			if (doc.exists) this.props.addBumps(doc.data().bumps) 
		})
	}

	render() {
	    return (
		    <HashRouter history={customHistory} >
		       	<Route exact path="/" component={Start} />
				<Route exact path="/map" component={ReportBumps} />
				<Route exact path="/checktrip" component={CheckTrip} />
				<Route path="/shared/:number" component={SharedTrip} />
  			</HashRouter>
	    );
	}  
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
