import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY, // remove the template literals and the $
  authDomain: "e-clone-31670.firebaseapp.com",
  projectId: "e-clone-31670",
  storageBucket: "e-clone-31670.appspot.com",
  messagingSenderId: "837141500210",
  appId: process.env.REACT_APP_FIREBASE_APP_ID, // remove the template literals
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
