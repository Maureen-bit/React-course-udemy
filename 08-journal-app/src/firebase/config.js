// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmiPYz2xrneLxEcP3JRZj7MV0YsAt7dwc",
  authDomain: "journal-6aa63.firebaseapp.com",
  projectId: "journal-6aa63",
  storageBucket: "journal-6aa63.appspot.com",
  messagingSenderId: "708482675096",
  appId: "1:708482675096:web:f214a6793fcc0490c93bed"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);