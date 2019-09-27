//dom-settings.js

// Actions
export const SET_DIMENTIONS = "bumpyroads/dom/SET_DIMENTIONS";
export const SET_RATIO = "bumpyroads/dom/SET_RATIO";
export const CHANGE_BARCOLOR = "bumpyroads/dom/CHANGE_BARCOLOR";

let initial = {
	width: 0,
	height: 0,
	ratio: 1,
	color: "#fbad19"
};

// Reducer
export default function dom(state = initial, action) {
	switch (action.type) {
		case SET_DIMENTIONS: 
			return { ...state, 
				width: action.dimentions.width, 
				height: action.dimentions.height }
		case SET_RATIO: 
			return { ...state, 
				ratio: action.ratio }
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

export function setRatio(ratio) {
	return {
		type: SET_RATIO,
		ratio: ratio
	}
}

export function changeBarColor(color) {
	return {
		type: CHANGE_BARCOLOR,
		color: color
	}
}
