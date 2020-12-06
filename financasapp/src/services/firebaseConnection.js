import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyAGMkYeflfbIjaoOC14kHTnIawJY7pJN5U",
    authDomain: "financasapp-f7aa3.firebaseapp.com",
    projectId: "financasapp-f7aa3",
    storageBucket: "financasapp-f7aa3.appspot.com",
    messagingSenderId: "160842970343",
    appId: "1:160842970343:web:60ad6fd0d0762d4597de42",
    measurementId: "G-Y6GJK6Q30B"
  };
  // Initialize Firebase
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
 

  export default firebase;