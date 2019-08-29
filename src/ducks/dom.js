//dom-settings.js

// Actions
export const SET_DIMENTIONS = "bumpyroads/dom/SET_DIMENTIONS";
export const SET_STATUSBAR_COLOR = "bumpyroads/dom/SET_STATUSBAR_COLOR";

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
		case SET_STATUSBAR_COLOR: return {...state, color: action.color }
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

export function setStatusbarColor(color) {
	return {
		type: SET_STATUSBAR_COLOR,
		color: color
	}
}
