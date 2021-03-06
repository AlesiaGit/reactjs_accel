import { combineReducers } from 'redux';
import selectedTrip from './selected-trip';
import trip from './trip';
import menu from './menu-state';
import mode from './mode';
import favorities from './favorities';
import dom from './dom';
import bumps from './bumps-map';
import stats from './stats';

const reducers = {
  selectedTrip: selectedTrip,
  trip: trip,
  menu: menu,
  mode: mode,
  favorities: favorities,
  dom: dom,
  bumps: bumps,
  stats: stats,
};

export default combineReducers(reducers);

