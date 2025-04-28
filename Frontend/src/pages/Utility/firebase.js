// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCvpy8MX6WYxx6ZxMlHXwAmvKaww0lv1xE",
  authDomain: "e-commerce-web-1962e.firebaseapp.com",
  projectId: "e-commerce-web-1962e",
  storageBucket: "e-commerce-web-1962e.firebasestorage.app",
  messagingSenderId: "33720684701",
  appId: "1:33720684701:web:9e20f4f8322d178633c474",
  measurementId: "G-7FNERY9MH2"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = app.firestore();
