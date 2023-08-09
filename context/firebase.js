// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJjcL0Dl1Thb-xcynDYB-qunxeMUG5rE0",
  authDomain: "blackstemadvocates.firebaseapp.com",
  projectId: "blackstemadvocates",
  storageBucket: "blackstemadvocates.appspot.com",
  messagingSenderId: "348400343528",
  appId: "1:348400343528:web:cf93abc016841c48302c5d",
  measurementId: "G-FVESW2NX9B"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);