// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "bulk-mail-d2cf7.firebaseapp.com",
  projectId: "bulk-mail-d2cf7",
  storageBucket: "bulk-mail-d2cf7.firebasestorage.app",
  messagingSenderId: "382551161846",
  appId: "1:382551161846:web:ec9591036e52f9a0b6e5d7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);