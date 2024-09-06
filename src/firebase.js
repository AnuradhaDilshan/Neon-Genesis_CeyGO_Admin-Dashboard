import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAMtefqSpn_pK5LiZAuTFVif0e0PX6oanI",
  authDomain: "ceygo-4e4d4.firebaseapp.com",
  projectId: "ceygo-4e4d4",
  storageBucket: "ceygo-4e4d4.appspot.com",
  messagingSenderId: "286463022361",
  appId: "1:286463022361:web:7f70fee07669d2205b2188",
  measurementId: "G-JN74JJ6GQX",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
