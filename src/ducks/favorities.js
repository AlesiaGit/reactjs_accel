//favorities.js

// Actions
export const ADD_TO_FAVORITIES = "bumpyroads/favorities/ADD_TO_FAVORITIES";
export const DELETE_FROM_FAVORITIES = "bumpyroads/favorities/DELETED_FROM_FAVORITIES";

let initial = JSON.parse(localStorage.getItem("favorities")) || [];

// Reducer
export default function favorities(state = initial, action) {
	switch (action.type) {
		case ADD_TO_FAVORITIES: return [...state.slice(-4), action.data]
		case DELETE_FROM_FAVORITIES: return state.filter(item => item.id !== action.id)

		default: 
			return state;
	}
}

// Action creators
export function addToFavorities(data) {
	return {
		type: ADD_TO_FAVORITIES,
		data: {...data, id: `f${(~~(Math.random()*1e8)).toString(16)}`}
	}
}

export function deleteFromFavorities(id) {
	return {
		type: DELETE_FROM_FAVORITIES,
		id: id
	}
}