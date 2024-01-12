import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAVIdTRIzyA0PtMqUizaeg9BrcdIONBLws",
    authDomain: "airporter-a09e3.firebaseapp.com",
    projectId: "airporter-a09e3",
    storageBucket: "airporter-a09e3.appspot.com",
    messagingSenderId: "879125609872",
    appId: "1:879125609872:web:893b67b1b244173b3ac715",
    measurementId: "G-J0TTCN4GR9"
  };

const app = initializeApp(firebaseConfig)
export const Firebase = getFirestore(app)