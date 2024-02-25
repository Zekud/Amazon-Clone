import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBg5kYkc0xQG-6i1FJbOWRhuYr-upAH5HY",
  authDomain: "e-clone-31670.firebaseapp.com",
  projectId: "e-clone-31670",
  storageBucket: "e-clone-31670.appspot.com",
  messagingSenderId: "837141500210",
  appId: "1:837141500210:web:71823f09eb21bbdce9472b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
