// menu-state.js

// Actions 
export const FAVORITIES_LIST_VIEW = "bumpyroads/menu/FAVORITIES_LIST_VIEW";
export const SELECTED_TRIP_VIEW = "bumpyroads/menu/SELECTED_TRIP_VIEW";
export const DRAWER_VIEW = "bumpyroads/menu/DRAWER_VIEW";
export const CLOSE_DRAWER_VIEW = "bumpyroads/menu/CLOSE_DRAWER_VIEW";
export const BUMPS_MAP_VIEW = "bumpyroads/menu/BUMPS_MAP_VIEW";
export const SHARE_VIEW = "bumpyroads/menu/SHARE_VIEW";
export const CLOSE_SHARE_VIEW = "bumpyroads/menu/CLOSE_SHARE_VIEW";
export const CHECK_TRIP_VIEW = "bumpyroads/menu/CHECK_TRIP_VIEW";

let initial = {
	isFavoritiesListView: false,
	isSelectedTripView: false,
	isDrawerView: false,
	isBumpsMapView: true,
	isShareView: false,
	isCheckTripView: false
};

function reset(state) {
	return Object.keys(state).forEach(item => state[item] = false);
}

// Reducer
export default function menu(state = initial, action) {
	switch (action.type) {
		case FAVORITIES_LIST_VIEW: return {...reset(state), [action.menuitem]: true};
		case SELECTED_TRIP_VIEW: return {...reset(state), [action.menuitem]: true};
		case BUMPS_MAP_VIEW: return {...reset(state), [action.menuitem]: true};
		case CHECK_TRIP_VIEW: return {...reset(state), [action.menuitem]: true};
		case DRAWER_VIEW: return { ...state, isDrawerView: action.menuitem }
		case CLOSE_DRAWER_VIEW: return { ...state, isDrawerView: action.menuitem }
		case SHARE_VIEW: return { ...state, isShareView: action.menuitem }
		case CLOSE_SHARE_VIEW: return { ...state, isShareView: action.menuitem }
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

export function selectShareView() {
	return {
		type: SHARE_VIEW,
		menuitem: true
	}
}

export function closeShareView() {
	return {
		type: CLOSE_SHARE_VIEW,
		menuitem: false
	}
}

export function selectCheckTripView() {
	return {
		type: CHECK_TRIP_VIEW,
		menuitem: 'isCheckTripView'
	}
}