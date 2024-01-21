// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, Timestamp, FieldValue, Filter, setDoc, addDoc, updateDoc, doc, getDoc, collection } from 'firebase/firestore';
import { getDatabase, onValue, ref, set, child, push } from "firebase/database";
import { getAuth, signOut, } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyC1CV_3ysWiM070lCX1dRgerlJ0tIMDbV4",
  authDomain: "shashwoc.firebaseapp.com",
  projectId: "shashwoc",
  storageBucket: "shashwoc.appspot.com",
  messagingSenderId: "73518182112",
  appId: "1:73518182112:web:77bc69ad4f96016f252a85",
  measurementId: "G-YQ18N1DR7B",
  dataBaseURL:"https://shashwoc-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth();
const database = getDatabase();
const fStore = getFirestore();






export {auth, app, signOut, database, onValue, ref, set, fStore, setDoc, addDoc, updateDoc, doc, getDoc, collection};