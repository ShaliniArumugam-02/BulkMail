// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "bulk-mail-a9e0f.firebaseapp.com",
  projectId: "bulk-mail-a9e0f",
  storageBucket: "bulk-mail-a9e0f.firebasestorage.app",
  messagingSenderId: "905547313289",
  appId: "1:905547313289:web:93f2fd591909f1cb159658"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);