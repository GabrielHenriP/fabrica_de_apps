import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyAAIu4WC0jVUEnXMFeHBjWcUe4UX7BisHo",
    authDomain: "fire-99d20.firebaseapp.com",
    databaseURL: "https://fire-99d20.firebaseio.com",
    projectId: "fire-99d20",
    storageBucket: "fire-99d20.appspot.com",
    messagingSenderId: "368632466779",
    appId: "1:368632466779:web:3d92e357f2eb1fc7a61e7e",
    measurementId: "G-NLB46HTL9G"
  };
  // Initialize Firebase
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
  
  export default firebase;