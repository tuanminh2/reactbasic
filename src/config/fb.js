// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdUZdbGT0UDiwNJ3v8AmhuF4v0F2i8bcQ",
  authDomain: "examdbzz.firebaseapp.com",
  projectId: "examdbzz",
  storageBucket: "examdbzz.appspot.com",
  messagingSenderId: "256818021475",
  appId: "1:256818021475:web:1af0e378e4d438cd586456",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
