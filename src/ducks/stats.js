//stats.js
import { db } from '../helpers/firebase';
import firebase from "firebase";

// Actions
export const GET_STATS = "bumpyroads/stats/GET_STATS";
export const ADD_TO_STATS = "bumpyroads/stats/ADD_TO_STATS";

let initial = {
	bumpsCount: 0,
	distanceTotal: 0,
	tripsCount: 0
};

let statsRef = db.collection('stats').doc('totals');
let bumpsRef = db.collection('bumpsmap').doc('bumps');

function getStatsFromDatabase(state) {
	statsRef.get().then(doc => { 
		if (doc.exists) {
			console.log(state, doc.data())
			da(state, doc.data());
		}		
	});
}

function getBumpsFromDatabase() {
	return new Promise((resolve, reject) => {
		bumpsRef.get()
		.then(doc => { if (doc.exists) resolve(doc.data().bumps)})
		.catch(error => reject(new Error('Bumps are not updated in database')))
	})
}

function updateBumpsInDatabase(tripdata) {
	return new Promise((resolve, reject) => {
		let count = 0;
		tripdata.bumps.forEach(bump => 
			bumpsRef.update({bumps: firebase.firestore.FieldValue.arrayUnion(bump)})
			.then(() => count++)
			.catch(error => reject(new Error('Bumps are not updated in database'))
				))

		if (count === tripdata.bumps.length) resolve('success')
	});		
}

function updateStatsInDatabase(bumpsCount, distance) {
	return new Promise((resolve, reject) => {
		statsRef.update({
			bumpsCount: bumpsCount,
			distanceTotal: firebase.firestore.FieldValue.increment(Math.round(distance)),
			tripsCount: firebase.firestore.FieldValue.increment(1),
		})
		.then(() => resolve('success'))
		.catch(error => reject(new Error('Statistics is not updated in db')));
	});
}

function getUpdatedData(state, action) {
	updateBumpsInDatabase(action.tripdata)
	.then(() => getBumpsFromDatabase())
	.then(bumps => updateStatsInDatabase(bumps.length, action.tripdata.distance))
	.then(() => test = getStatsFromDatabase(state));
}

function da(state, data) {
	let {bumpsCount, distanceTotal, tripsCount} = data;
	console.log({...state, bumpsCount, distanceTotal, tripsCount})
	return {...state, bumpsCount, distanceTotal, tripsCount}
}

// Reducer
export default function stats(state = initial, action) {
	switch (action.type) {
		case GET_STATS: return getStatsFromDatabase(state)
		case ADD_TO_STATS: return getUpdatedData(state, action)
		default: return state
	}
}

// Action creators
export function getStats() {
	return {
		type: GET_STATS
	}
}

export function addToStats(tripdata) {
	return {
		type: ADD_TO_STATS,
		tripdata: tripdata
	}
}
