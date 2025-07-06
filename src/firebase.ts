
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";
import { getFirestore } from "firebase/firestore"; 


const firebaseConfig = {
  apiKey: "AIzaSyCC__6kSdCaYzF-3_13rOK2I7QSWbc_yGk",
  authDomain: "tastyburger-72f2b.firebaseapp.com",
  databaseURL: "https://tastyburger-72f2b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tastyburger-72f2b",
  storageBucket: "tastyburger-72f2b.firebasestorage.app",
  messagingSenderId: "346267587056",
  appId: "1:346267587056:web:2e52350a220b4f3ad0cd35",
  measurementId: "G-C1295DCF83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Realtime Database (for Contact Us)
const db = getDatabase(app);
const contactRef = ref(db, "contacts");

// ✅ Firestore (for Blog system)
const firestore = getFirestore(app);

export { app, push, db, contactRef, firestore }; // ✅ export firestore



