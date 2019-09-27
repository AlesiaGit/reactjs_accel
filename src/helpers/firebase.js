import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBexhCuV6JNCsyakFOeBK7NmFb_oM_pgxo",
    authDomain: "bumpyroadsinformer.firebaseapp.com",
    databaseURL: "https://bumpyroadsinformer.firebaseio.com",
    projectId: "bumpyroadsinformer",
    storageBucket: "",
    messagingSenderId: "854546127925",
    appId: "1:854546127925:web:d3c2a81c7c4e9ba6"
});

const db = firebaseApp.firestore();

export { db };