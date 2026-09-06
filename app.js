// app.js - Shared Firebase Configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore, doc, getDoc, setDoc, getDocs, collection, updateDoc, arrayUnion } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA3Bcq4FJZJpIaVpl6bSQTO_hyRRCEMjp0",
  authDomain: "xrp-crypto-87b89.firebaseapp.com",
  databaseURL: "https://xrp-crypto-87b89-default-rtdb.firebaseio.com",
  projectId: "xrp-crypto-87b89",
  storageBucket: "xrp-crypto-87b89.firebasestorage.app",
  messagingSenderId: "533757162233",
  appId: "1:533757162233:web:8ba7f9c80c6a28d3966828"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const ADMIN_EMAIL = "admin@xrp.com";

export { 
    auth, db, ADMIN_EMAIL, 
    onAuthStateChanged, signOut, 
    createUserWithEmailAndPassword, signInWithEmailAndPassword,
    doc, getDoc, setDoc, getDocs, collection, updateDoc, arrayUnion
};