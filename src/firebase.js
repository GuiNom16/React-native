// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKpWE24D05LD2kdk2NJ2Kwl0jXuPbjy9I",
  authDomain: "fir-auth-63db9.firebaseapp.com",
  projectId: "fir-auth-63db9",
  storageBucket: "fir-auth-63db9.appspot.com",
  messagingSenderId: "696321831028",
  appId: "1:696321831028:web:6f661355b1052f76996121",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();
