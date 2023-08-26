// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIhQeBdF-cFbyppzF9WqUQIjaCQElysik",
  authDomain: "twitter-clone-5b28c.firebaseapp.com",
  projectId: "twitter-clone-5b28c",
  storageBucket: "twitter-clone-5b28c.appspot.com",
  messagingSenderId: "746723253604",
  appId: "1:746723253604:web:c2b4d79813748cb6f42e71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)