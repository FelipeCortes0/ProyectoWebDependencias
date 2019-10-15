import firebase from 'firebase'
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyDEhfjJY7Gf-u5S7UgWm3-pIdDloI9jvZ0",
  authDomain: "reactproyectoweb.firebaseapp.com",
  databaseURL: "https://reactproyectoweb.firebaseio.com",
  projectId: "reactproyectoweb",
  storageBucket: "reactproyectoweb.appspot.com",
  messagingSenderId: "705601453967",
  appId: "1:705601453967:web:f0e70ee319806cd256d5fa",
  measurementId: "G-P2M6KT5T5Z"
};

firebase.initializeApp(config);
export default firebase;
