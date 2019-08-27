import { combineReducers } from 'redux';
import selectedTrip from './selected-trip';
import menu from './menu-state';
import mode from './mode';

const reducers = {
  selectedTrip: selectedTrip,
  menu: menu,
  mode: mode
};

export default combineReducers(reducers);