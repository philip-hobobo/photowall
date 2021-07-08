// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyCoofaziFBaS-fKshwVoG99G5nIP8YMWUs",
  authDomain: "photowall-3cfc8.firebaseapp.com",
  databaseURL: "https://photowall-3cfc8-default-rtdb.firebaseio.com",
  projectId: "photowall-3cfc8",
  storageBucket: "photowall-3cfc8.appspot.com",
  messagingSenderId: "490072352518",
  appId: "1:490072352518:web:377bd53e00d7ebed23e087",
  measurementId: "G-9YPFS1CEKK",
};

firebase.initializeApp(config);

const database = firebase.database();

export { database };
