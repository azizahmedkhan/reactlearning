import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCD632_j6XaUVz5O1MqDOFbedl8GxCfzd4",
  authDomain: "friendlychat-c9506.firebaseapp.com",
  databaseURL: "https://friendlychat-c9506.firebaseio.com",
  projectId: "friendlychat-c9506",
  storageBucket: "friendlychat-c9506.appspot.com",
  messagingSenderId: "570826381967",
  appId: "1:570826381967:web:71389aad5fce02fc012efa"
};

firebase.initializeApp(config);

const db = firebase.firestore();

export { db, firebase };
