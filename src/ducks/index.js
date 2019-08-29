import { combineReducers } from 'redux';
import selectedTrip from './selected-trip';
import trip from './trip';
import menu from './menu-state';
import mode from './mode';
import favorities from './favorities';
import dom from './dom';

const reducers = {
  selectedTrip: selectedTrip,
  trip: trip,
  menu: menu,
  mode: mode,
  favorities: favorities,
  dom: dom
};

// const mapDispatchToProps = {
//   closeDrawerView: menu.closeDrawerView,
//   selectDrawerView: menu.selectDrawerView,
//   selectBumpsMapView: menu.selectBumpsMapView,
//   selectCheckTripView: menu.selectCheckTripView,
//   selectFavoritiesListView: menu.selectFavoritiesListView,
//   selectTripView: menu.selectTripView,
//   selectShareView: menu.selectShareView,
//   startRecording: mode.startRecording,
//   stopRecording: mode.stopRecording,
//   startGuidance: mode.startGuidance,
//   stopGuidance: mode.stopGuidance,
//   buildRoute: mode.buildRoute,
//   noTripSelected: favorite.noTripsSelected,
//   selectTrip: favorite.selectTrip,
//	addBumps: trip.addBumps,
//	updateLocation: trip.updateLocation,
//	resetTrip: trip.resetTrip
// };

export default combineReducers(reducers);

