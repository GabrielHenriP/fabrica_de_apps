import firebase from 'firebase/app';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyDqvVFGo3YTzl0hfWneYiIANyg-WlEKQsw",
    authDomain: "todolist-febb2.firebaseapp.com",
    databaseURL: "https://todolist-febb2.firebaseio.com",
    projectId: "todolist-febb2",
    storageBucket: "todolist-febb2.appspot.com",
    messagingSenderId: "753160601909",
    appId: "1:753160601909:web:a9f91b32ab3a4623b74c7c",
    measurementId: "G-2NDS5EQDP9"
  };
  // Initialize Firebase
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  };

  export default firebase;
  