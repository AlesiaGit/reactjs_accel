// menu-state.js

// Actions 
export const FAVORITIES_LIST_VIEW = "bumpyroads/menu/FAVORITIES_LIST_VIEW";
export const SELECTED_TRIP_VIEW = "bumpyroads/menu/SELECTED_TRIP_VIEW";
export const DRAWER_VIEW = "bumpyroads/menu/DRAWER_VIEW";
export const CLOSE_DRAWER_VIEW = "bumpyroads/menu/CLOSE_DRAWER_VIEW";
export const BUMPS_MAP_VIEW = "bumpyroads/menu/BUMPS_MAP_VIEW";
//export const SHARE_TRIP_VIEW = "bumpyroads/menu/SHARE_TRIP_VIEW";
export const CHECK_TRIP_VIEW = "bumpyroads/menu/CHECK_TRIP_VIEW";

let initial = {
	isFavoritiesListView: false,
	isSelectedTripView: false,
	isDrawerView: false,
	isBumpsMapView: true,
	//shareTripView: false,
	isCheckTripView: false
};

function helper(state, action) {
	Object.keys(state).forEach(item => state[item] = (item === action.menuitem) ? true : false);
	return state;
}

// Reducer
export default function menu(state = initial, action) {
	switch (action.type) {
		case FAVORITIES_LIST_VIEW: return helper(state, action)
		case SELECTED_TRIP_VIEW: return helper(state, action)
		case BUMPS_MAP_VIEW: return helper(state, action)
		case CHECK_TRIP_VIEW: return helper(state, action)
		case DRAWER_VIEW: return { ...state, isDrawerView: action.menuitem }
		case CLOSE_DRAWER_VIEW: return { ...state, isDrawerView: action.menuitem }
		default: 
			return state;
	}
}

// Action creators
export function selectFavoritiesListView() {
	return {
		type: FAVORITIES_LIST_VIEW,
		menuitem: 'isFavoritiesListView'
	}
}

export function selectTripView() {
	return {
		type: SELECTED_TRIP_VIEW,
		menuitem: 'isSelectedTripView'
	}
}

export function selectDrawerView() {
	return {
		type: DRAWER_VIEW,
		menuitem: true
	}
}

export function closeDrawerView() {
	return {
		type: CLOSE_DRAWER_VIEW,
		menuitem: false
	}
}

export function selectBumpsMapView() {
	return {
		type: BUMPS_MAP_VIEW,
		menuitem: 'isBumpsMapView'
	}
}

// export function selectShareTripView() {
// 	return {
// 		type: SHARE_TRIP_VIEW,
// 		menuitem: shareTripView
// 	}
// }

export function selectCheckTripView() {
	return {
		type: CHECK_TRIP_VIEW,
		menuitem: 'isCheckTripView'
	}
}