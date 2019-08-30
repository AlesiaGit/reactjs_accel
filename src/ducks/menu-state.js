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
	isBumpsMapView: false,
	isShareView: false,
	isCheckTripView: false,
	title: '',
	iconleft: '',
	iconright: ''
};

const updateMenuState = (state, action) => {
	return {...initial, 
		[action.menuitem]: true, 
		title: action.title, 
		iconleft: action.iconleft, 
		iconright: action.iconright };
}

// Reducer
export default function menu(state = initial, action) {
	switch (action.type) {
		case FAVORITIES_LIST_VIEW: return updateMenuState(state, action)
		case SELECTED_TRIP_VIEW: return updateMenuState(state, action)
		case BUMPS_MAP_VIEW: return updateMenuState(state, action)
		case CHECK_TRIP_VIEW: return updateMenuState(state, action)
		case DRAWER_VIEW: return { ...state, isDrawerView: action.status }
		case CLOSE_DRAWER_VIEW: return { ...state, isDrawerView: action.status }
		case SHARE_VIEW: return { ...state, isShareView: action.status }
		case CLOSE_SHARE_VIEW: return { ...state, isShareView: action.status }
		default: 
			return state;
	}
}

// Action creators
export function selectFavoritiesListView() {
	return {
		type: FAVORITIES_LIST_VIEW,
		menuitem: 'isFavoritiesListView',
		title: 'Report a bump',
		iconleft: 'burger-icon',
		iconright: ''
	}
}

export function selectTripView() {
	return {
		type: SELECTED_TRIP_VIEW,
		menuitem: 'isSelectedTripView',
		title: 'Back to list',
		iconleft: 'back-arrow',
		iconright: 'share-icon'
	}
}

export function selectDrawerView() {
	return {
		type: DRAWER_VIEW,
		status: true
	}
}

export function closeDrawerView() {
	return {
		type: CLOSE_DRAWER_VIEW,
		status: false
	}
}

export function selectBumpsMapView() {
	return {
		type: BUMPS_MAP_VIEW,
		menuitem: 'isBumpsMapView',
		title: 'Report a bump',
		iconleft: 'burger-icon',
		iconright: ''
	}
}

export function selectShareView() {
	return {
		type: SHARE_VIEW,
		status: true
	}
}

export function closeShareView() {
	return {
		type: CLOSE_SHARE_VIEW,
		status: false
	}
}

export function selectCheckTripView() {
	return {
		type: CHECK_TRIP_VIEW,
		menuitem: 'isCheckTripView',
		title: 'Check your trip',
		iconleft: 'burger-icon',
		iconright: ''
	}
}