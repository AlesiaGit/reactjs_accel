//trip.js

// Actions
export const ADD_TRIP_BUMPS = "bumpyroads/bumpTrip/ADD_BUMPS";
export const UPDATE_LOCATION = "bumpyroads/bumpTrip/UPDATE_LOCATION";
export const UPDATE_ACCELERATION = "bumpyroads/bumpTrip/UPDATE_ACCELERATION";
export const RESET_TRIP = "bumpyroads/bumpTrip/RESET_TRIP";
export const RESET_MOVE = "bumpyroads/bumpTrip/RESET_MOVE";

let initial = {
	path: [],
	currentLocation: {lat: 0, lng: 0, timestamp: 0, speed: 0},
	previousLocation: {},
	previousAcceleration: {x: 0, y: 0, z: 0},
	zoom: 16,
	angle: 0,
	move: 0,
	distance: 0,
	bumps: []
};

// Reducer
export default function trip(state = initial, action) {
	switch (action.type) {
		case ADD_TRIP_BUMPS: 
			return { ...state, bumps: state.bumps.concat(action.data)}
		case UPDATE_ACCELERATION: 
			return { ...state, 
				previousAcceleration: action.data.previousAcceleration }		
		case UPDATE_LOCATION: 
			return { ...state, 
				previousLocation: state.currentLocation,
				currentLocation: action.data.currentLocation,
				path: action.data.path,
				angle: action.data.angle,
				move: action.data.move,
				distance: action.data.distance }
		case RESET_MOVE: return { ...state, move: 0 }
		case RESET_TRIP: return { ...initial }
		default: 
			return state;
	}
}

// Action creators
export function addTripBumps(data) {
	//console.log(data)
	return {
		type: ADD_TRIP_BUMPS,
		data: data
	}
}

export function updateAcceleration(data) {
	return {
		type: UPDATE_ACCELERATION,
		data: data
	}
}

export function updateLocation(data) {
	return {
		type: UPDATE_LOCATION,
		data: data
	}
}

export function resetTrip() {
	return {
		type: RESET_TRIP
	}
}

export function resetMove() {
	return {
		type: RESET_MOVE
	}
}