// mode.js

// Actions 
export const RECORDING = "bumpyroads/mode/RECORDING";
export const STOP_RECORDING = "bumpyroads/mode/STOP_RECORDING";
export const BUILDING_ROUTE = "bumpyroads/mode/BUILDING_ROUTE";
export const GUIDANCE = "bumpyroads/mode/GUIDANCE";
export const STOP_GUIDANCE = "bumpyroads/mode/STOP_GUIDANCE";



let initial = {
	isRecording: false,
	isBuildingRoute: false,
	isGuidance: false,
	color: '#757d75',
	text: 'Start Recording'
};

export default function mode(state = initial, action) {
	switch (action.type) {
		case RECORDING: 
			return {...initial, 
				[action.mode]: action.on, 
				color: action.color, 
				text: action.text }
		case STOP_RECORDING: return {...initial }
		case BUILDING_ROUTE: 
			return {...initial,
				[action.mode]: action.on, 
				text: action.text }
		case GUIDANCE: 
			return {...initial, 
				[action.mode]: action.on, 
				color: action.color, 
				text: action.text }
		case STOP_GUIDANCE: 
			return {...initial, 
				[action.mode]: action.on, 
				color: action.color, 
				text: action.text }
		default: 
			return state;
	}
}

export function startRecording() {
	return {
		type: RECORDING,
		mode: 'isRecording',
		on: true,
		color: "#e34929",
		text: 'Stop Recording'
	}
}

export function stopRecording() {
	return {
		type: STOP_RECORDING
	}
}

export function buildRoute() {
	return {
		type: BUILDING_ROUTE,
		mode: 'isBuildingRoute',
		on: true,
		text: 'Start Guidance'
	}
}

export function startGuidance() {
	return {
		type: GUIDANCE,
		mode: 'isGuidance',
		on: true,
		color: "#e34929",
		text: 'Stop Guidance'
	}
}

export function stopGuidance() {
	return {
		type: STOP_GUIDANCE,
		mode: 'isGuidance',
		on: false,
		color: "#fbad19",
		text: 'Build a route'
	}
}