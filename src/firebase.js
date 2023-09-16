import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth } from 'firebase/auth';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBfOvoBGKTgmzVS63LgyCJe3CBC0bqhgvU",
    authDomain: "grievance-form-ea3f8.firebaseapp.com",
    projectId: "grievance-form-ea3f8",
    storageBucket: "grievance-form-ea3f8.appspot.com",
    messagingSenderId: "284698207363",
    appId: "1:284698207363:web:d2f729f6d61624fcd7e7b6"
  }
);

const db = firebaseApp.firestore();

export const auth = getAuth(firebaseApp);
export {db, firebaseApp};