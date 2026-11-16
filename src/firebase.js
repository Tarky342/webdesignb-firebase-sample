// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQW8LZ2Y7jIvtZ3cXkqcR3DTlpwFAVSUA",
  authDomain: "fusigi-shop--d24021.firebaseapp.com",
  projectId: "fusigi-shop--d24021",
  storageBucket: "fusigi-shop--d24021.firebasestorage.app",
  messagingSenderId: "554429109527",
  appId: "1:554429109527:web:07453220b6d978b843d352"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
