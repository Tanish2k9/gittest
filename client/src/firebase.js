// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "authsahand.firebaseapp.com",
  projectId: "authsahand",
  storageBucket: "authsahand.appspot.com",
  messagingSenderId: "989064751270",
  appId: "1:989064751270:web:d4b77cd2a8e8ae3018ac67"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);