// Import the functions you need from the compat SDKs
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage"; // ✅ Import storage

import { getAuth } from "firebase/auth"; // For modular auth export

const firebaseConfig = {
  apiKey: "AIzaSyCvpy8MX6WYxx6ZxMlHXwAmvKaww0lv1xE",
  authDomain: "e-commerce-web-1962e.firebaseapp.com",
  projectId: "e-commerce-web-1962e",
  storageBucket: "e-commerce-web-1962e.appspot.com", // ✅ Corrected the storage bucket URL
  messagingSenderId: "33720684701",
  appId: "1:33720684701:web:9e20f4f8322d178633c474",
  measurementId: "G-7FNERY9MH2"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Export services
export const auth = getAuth(app); // Modular auth
export const db = app.firestore(); // Compat Firestore
export const storage = app.storage(); // ✅ Export Firebase Storage (compat version)
