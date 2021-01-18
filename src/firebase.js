import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB-AUJKR6gGJjmu23ilJbV34BQ47jqVqh8",
  authDomain: "imessage-clone-redux-11b87.firebaseapp.com",
  projectId: "imessage-clone-redux-11b87",
  storageBucket: "imessage-clone-redux-11b87.appspot.com",
  messagingSenderId: "941143617814",
  appId: "1:941143617814:web:1abb0be4be1c6628a72037",
  measurementId: "G-Y68CMJDY2D",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
