// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkqWfN1pZh0yO0WykvonbQC3--jlJpEOc",
  authDomain: "fir-proyectogold-react.firebaseapp.com",
  projectId: "fir-proyectogold-react",
  storageBucket: "fir-proyectogold-react.appspot.com",
  messagingSenderId: "717549640837",
  appId: "1:717549640837:web:254787d107be815c689dec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);