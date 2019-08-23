import { combineReducers } from 'redux';
import selectedTrip from './selected-trip';
import menu from './menu-state';

const reducers = {
  selectedTrip: selectedTrip,
  menu: menu
};

export default combineReducers(reducers);