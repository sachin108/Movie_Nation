import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';


import Search from "./pages/Search";
import MovieInfo from "./pages/MovieInfo";
import SeriesInfo from "./pages/SeriesInfo";

ReactDOM.render(
	<React.StrictMode>
		    <Provider store={store}>

		<Router>
			<Switch>
				<Route exact strict path="/search">
					<Search />
				</Route>
				<Route exact strict path="/">
					<App />
				</Route>
				<Route strict path="/title">
					<MovieInfo />
				</Route>
				<Route strict path="/tv">
					<SeriesInfo />
				</Route>
			</Switch>
		</Router>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
serviceWorker.unregister();

/**
 import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();

 */