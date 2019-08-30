//bumps-map.js

// Actions
export const ADD_BUMPS = "bumpyroads/dom/ADD_BUMPS";

let initial = [];

const addSortedBumps = (state, action) => {
	return [...state, ...action.bumps.filter(bump => state.indexOf(bump) < 0)]
}

// Reducer
export default function bumps(state = initial, action) {
	switch (action.type) {
		case ADD_BUMPS: return addSortedBumps(state, action)
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

