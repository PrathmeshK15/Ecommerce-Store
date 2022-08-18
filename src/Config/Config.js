import * as firebase from 'firebase'

import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDjrESdogC9dg4tf_C_Lr6gpPnwzmowZnk",
    authDomain: "ecommerce-store-ee34e.firebaseapp.com",
    databaseURL: "https://ecommerce-store-ee34e-default-rtdb.firebaseio.com",
    projectId: "ecommerce-store-ee34e",
    storageBucket: "ecommerce-store-ee34e.appspot.com",
    messagingSenderId: "268463724756",
    appId: "1:268463724756:web:dd2fb5bfb3f051edc40341"
  };
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage }