import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store/store";

import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

serviceWorker.unregister();

ReactDOM.render(
	<Provider store={store}>
		<HashRouter>
			<App />
		</HashRouter>
	</Provider>, document.getElementById('root'));

//serviceWorker.register();
