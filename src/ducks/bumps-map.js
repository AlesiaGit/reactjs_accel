//bumps-map.js

// Actions
export const ADD_BUMPS = "bumpyroads/dom/ADD_BUMPS";

let initial = [];

// Reducer
export default function bumps(state = initial, action) {
	switch (action.type) {
		case ADD_BUMPS: return [...state, ...action.bumps]
		default: return state
	}
}

// Action creators
export function addBumps(bumps) {
	return {
		type: ADD_BUMPS,
		bumps: bumps
	}
}

