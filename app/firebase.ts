import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBqaJ636tCbu0SqMabzhHoTwq6Qx__ObpY",
  authDomain: "bokkslounge.firebaseapp.com",
  projectId: "bokkslounge",
  storageBucket: "bokkslounge.firebasestorage.app",
  messagingSenderId: "299887576976",
  appId: "1:299887576976:web:757fb18ab363b84644d515"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {  db, auth, provider,};

