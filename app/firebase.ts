import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyChBmx4Fifxxa7-nkRutUZN7g7j-cjBRnI",
  authDomain: "readingcommunity-da607.firebaseapp.com",
  projectId: "readingcommunity-da607",
  storageBucket: "readingcommunity-da607.firebasestorage.app",
  messagingSenderId: "846317936837",
  appId: "1:846317936837:web:3c869d4d13ee73a50590ac",
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider,};