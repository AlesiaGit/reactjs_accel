// selected-trip.js

// Actions 
export const TRIP_SELECTED = "bumpyroads/selectedTrip/TRIP_SELECTED";
export const NO_TRIPS_SELECTED = "bumpyroads/selectedTrip/NO_TRIPS_SELECTED";

let initial = null;



// Reducer
export default function selectedTrip(state = initial, action) {
	switch (action.type) {
		case TRIP_SELECTED: 
			return action.data;
		case NO_TRIPS_SELECTED: 
			return action.data;
		default: 
			return state;
	}
}

// Action creators
export function selectTrip(data) {
	return {
		type: TRIP_SELECTED,
		data: data
	}
}

export function noTripsSelected() {
	return {
		type: NO_TRIPS_SELECTED,
		data: null
	}
}
