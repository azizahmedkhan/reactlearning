import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
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
const rtdb = firebase.database()
export function setupPresense(user) {
  const isOfflineForRTDB = {
    state :'offline',
    lastChanged:firebase.database.ServerValue.TIMESTAMP
  }
  const isOnlineForRTDB = {
    state :'online',
    // below is for realtime databse, firestore has different way of getting timestamp
    lastChanged:firebase.database.ServerValue.TIMESTAMP
    //lastChanged:firebase.firestore.FieldValue.serverTimestamp
  }
  const isOfflineForFirestore = {
    state :'offline',
    lastChanged:firebase.firestore.FieldValue.serverTimestamp()
  }
  const isOnlineForFirestore = {
    state :'online',
    // below is for realtime databse, firestore has different way of getting timestamp
    //lastChanged:firebase.database.ServerValue.TIMESTAMP
    lastChanged:firebase.firestore.FieldValue.serverTimestamp()
  }
  


  const rtdbRef = rtdb.ref(`status/${user.uid}`)
  const userDoc = db.doc(`/users/${user.uid}`)
  rtdb.ref('.info/connected').on('value', async snapshot => {
    if(snapshot.val()===false) {
      userDoc.update({
        status:isOfflineForFirestore
      })
      return
    }
    //below can be set only when you are online, so we are telling the server do the following when we got offline.
  await rtdbRef.onDisconnect().set(isOfflineForRTDB)
  //above onDisconnect is not available for Firestore. it is only available for RTDB
  // so even we go offline our status in Firestore will stil be online. but our status in RTDB would be offline
  // This can be handles with Cloud Functions and triggers.
  //set online status because obviously we are onlien now
  rtdbRef.set(isOnlineForRTDB)
  userDoc.update({
    status:isOfflineForFirestore
  })
  })
  
};
export { db, firebase };
