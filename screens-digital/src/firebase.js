import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


var firebaseConfig = {
  apiKey: "AIzaSyBAzCGmV7liNXhN2E1-lSYMv9hIDS1GMB4",
  authDomain: "screens-digital.firebaseapp.com",
  databaseURL: "https://screens-digital.firebaseio.com",
  projectId: "screens-digital",
  storageBucket: "screens-digital.appspot.com",
  messagingSenderId: "113673089067",
  appId: "1:113673089067:web:ed41c5e8a66544ef00fa6e"
};


firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()

export {db}
//export {firebase}