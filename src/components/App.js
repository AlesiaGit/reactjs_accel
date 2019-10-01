import React, {Component} from 'react';
import './App.css';
import { Route, HashRouter } from 'react-router-dom';
import { createBrowserHistory } from "history";
import { connect } from "react-redux";
import { db } from '../helpers/firebase';

import ReportBumps from './ReportBumps/index';
import SharedTrip from './SharedTrip/index';
import CheckTrip from './CheckTrip/index';
import Start from './Start/index';

import * as dom from "../ducks/dom";
import * as bumps from "../ducks/bumps-map";
import * as stats from "../ducks/stats";

const mapStateToProps = state => {
    return {
        dom: state.dom
    };
};

const mapDispatchToProps = {
	setDimentions: dom.setDimentions,
	setRatio: dom.setRatio,
	addBumps: bumps.addBumps,
	getStats: stats.getStats,
};

const customHistory = createBrowserHistory();

class App extends Component {
	constructor(props) {
		super(props);

	    this.state = {
	    	isFetching: true
	    };
	}

	componentDidMount = () => {
		window.addEventListener('load', () => window.history.pushState({ noBackExitsApp: true }, ''));

		window.addEventListener('popstate', (event) => {
		  if (!event.state || !event.state.noBackExitsApp) return;
		  window.history.pushState({ noBackExitsApp: true }, '')
		})

		this.updateStatusbarColor();
		//this.props.getStats();
		this.retrieveBumpsFromDatabase();

		this.props.setDimentions({ width: window.innerWidth, height: window.innerHeight });
		this.props.setRatio({ ratio: window.innerWidth / window.innerHeight });

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
		db.collection('bumpsmap').doc('bumps').get().then(doc => { 
			if (doc.exists) this.props.addBumps(doc.data().bumps);
		}).then(() => this.setState({isFetching: false}))
	}

	retrieveAppStatsFromDatabase = () => {
		
	}

	render() {
		if (this.state.isFetching) return null; //(<div>Loading</div>);
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
