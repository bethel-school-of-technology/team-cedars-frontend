import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyBz0ZJ8DTyrB7tqI958tfX9gHpachpS5wU",
  authDomain: "events-page-528f0.firebaseapp.com",
  projectId: "events-page-528f0",
  storageBucket: "events-page-528f0.appspot.com",
  messagingSenderId: "88973972797",
  appId: "1:88973972797:web:2b86c0addf8aa3887d6154",
  measurementId: "G-0XD43Q3WQS"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };