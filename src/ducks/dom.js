//dom-settings.js

// Actions
export const SET_DIMENTIONS = "bumpyroads/dom/SET_DIMENTIONS";
export const CHANGE_BARCOLOR = "bumpyroads/dom/CHANGE_BARCOLOR";

let initial = {
	width: 0,
	height: 0,
	color: "#fbad19"
};

// Reducer
export default function dom(state = initial, action) {
	switch (action.type) {
		case SET_DIMENTIONS: 
			return { ...state, 
				width: action.dimentions.width, 
				height: action.dimentions.height }
		case CHANGE_BARCOLOR: return {...state, color: action.color }
		default: return state
	}
}

// Action creators
export function setDimentions(dimentions) {
	return {
		type: SET_DIMENTIONS,
		dimentions: dimentions
	}
}

export function changeBarColor(color) {
	return {
		type: CHANGE_BARCOLOR,
		color: color
	}
}
