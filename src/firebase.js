import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMVsJuZz-3DgAEVk9vhzel3uk6tga9qqk",
  authDomain: "gym-website-9610a.firebaseapp.com",
  projectId: "gym-website-9610a",
  storageBucket: "gym-website-9610a.firebasestorage.app",
  messagingSenderId: "48178377435",
  appId: "1:48178377435:web:b78180b89fa76ae13412fe"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

