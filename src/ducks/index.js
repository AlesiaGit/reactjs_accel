import { combineReducers } from 'redux';
import selectedTrip from './selected-trip';
import trip from './trip';
import menu from './menu-state';
import mode from './mode';
import favorities from './favorities';
import dom from './dom';
import bumps from './bumps-map';

const reducers = {
  selectedTrip: selectedTrip,
  trip: trip,
  menu: menu,
  mode: mode,
  favorities: favorities,
  dom: dom,
  bumps: bumps
};

export default combineReducers(reducers);

