import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "yumi-chat-app.firebaseapp.com",
  projectId: "yumi-chat-app",
  storageBucket: "yumi-chat-app.appspot.com",
  messagingSenderId: "361531787389",
  appId: "1:361531787389:web:a6363ccdfdd46ce3a38914",
  measurementId: "G-M0HKNCEEKN"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();

