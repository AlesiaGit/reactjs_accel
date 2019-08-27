// mode.js

// Actions 
export const RECORDING = "bumpyroads/mode/RECORDING";
export const STOP_RECORDING = "bumpyroads/mode/STOP_RECORDING";
export const BUILDING_ROUTE = "bumpyroads/mode/BUILDING_ROUTE";
export const GUIDANCE = "bumpyroads/mode/GUIDANCE";
export const STOP_GUIDANCE = "bumpyroads/mode/STOP_GUIDANCE";



let initial = {
	isRecording: false,
	isBuildRoute: false,
	isGuidance: false,
	color: '#757d75',
	text: 'Start Recording'
	// recording: {
	// 	on: false,
	// 	color: '#757d75',
	// 	text: 'Start Recording'},
	// buildingRoute: {
	// 	on: false,
	// 	color: '#fbad19',
	// 	text: 'Build a route'},
	// guidance: {
	// 	on: false,
	// 	color: '#757d75',
	// 	text: 'Start Guidance'}
};

function reset(state) {
	return Object.keys(state).forEach(item => state[item] = initial[item]);
}


// Reducer
export default function mode(state = initial, action) {
	switch (action.type) {
		case RECORDING: return {...reset(state), [action.mode]: action.on, color: action.color, text: action.text }
		case STOP_RECORDING: return {...reset(state, action), [action.mode]: action.on, color: action.color, text: action.text }
		case BUILDING_ROUTE: return {...reset(state, action),[action.mode]: action.on, color: action.color, text: action.text }
		case GUIDANCE: return {...reset(state, action), [action.mode]: action.on, color: action.color, text: action.text }
		case STOP_GUIDANCE: return {...reset(state, action), [action.mode]: action.on, color: action.color, text: action.text }
		default: 
			return state;
	}
}

// Action creators
export function startRecording() {
	return {
		type: RECORDING,
		mode: 'isRecording',
		on: true,
		color: "#e34929",
		text: 'Stop Recording'
		// mode: {
		// 	on: true,
		// 	color: '#e34929',
		// 	text: 'Stop Recording'
		// }
	}
}

export function stopRecording() {
	return {
		type: STOP_RECORDING,
		mode: 'isRecording',
		on: false,
		color: "#757d75",
		text: 'Start Recording'
		// mode: {
		// 	on: false,
		// 	color: '#757d75',
		// 	text: 'Start Recording' 
		// }
	}
}

export function buildRoute() {
	return {
		type: BUILDING_ROUTE,
		mode: 'isBuildingRoute',
		on: true,
		color: "#757d75",
		text: 'Start Guidance'
		// mode: {
		// 	on: true,
		// 	color: '#757d75',
		// 	text: 'Start Guidance' 
		// }
	}
}

export function startGuidance() {
	return {
		type: GUIDANCE,
		mode: 'isGuidance',
		on: true,
		color: "#e34929",
		text: 'Stop Guidance'
		// mode: {
		// 	on: true,
		// 	color: '#e34929',
		// 	text: 'Stop Guidance' 
		// }
	}
}

export function stopGuidance() {
	return {
		type: STOP_GUIDANCE,
		mode: 'isGuidance',
		on: false,
		color: "#fbad19",
		text: 'Build a route'
		// mode: {
		// 	on: true,
		// 	color: '#fbad19',
		// 	text: 'Build a route' 
		// }
	}
}