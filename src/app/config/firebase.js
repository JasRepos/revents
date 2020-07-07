import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBLFfhnb01zn_R0hQFdzQLTwS3wBTotAIM",
  authDomain: "revents-e1424.firebaseapp.com",
  databaseURL: "https://revents-e1424.firebaseio.com",
  projectId: "revents-e1424",
  storageBucket: "revents-e1424.appspot.com",
  messagingSenderId: "664119009153",
  appId: "1:664119009153:web:fff47df65f8f7406e51280",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
