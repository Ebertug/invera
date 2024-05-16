// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfERhM_3IHonrbHcPz6OW4NqFrqAXarQY",
  authDomain: "invera-2448f.firebaseapp.com",
  projectId: "invera-2448f",
  storageBucket: "invera-2448f.appspot.com",
  messagingSenderId: "665546618113",
  appId: "1:665546618113:web:252e2a43868ce753e85700",
  measurementId: "G-XJSTQ2ZM5M"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
