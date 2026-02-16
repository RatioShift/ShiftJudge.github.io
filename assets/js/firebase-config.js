// Firebase SDK ইমপোর্ট (CDN পদ্ধতি)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// আপনার Firebase কনসোল থেকে পাওয়া কনফিগ এখানে বসান
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgUptGNmeyUsluKcYWXkg1Cgau60F96O4",
  authDomain: "shiftjudge-ratioshirt.firebaseapp.com",
  projectId: "shiftjudge-ratioshirt",
  storageBucket: "shiftjudge-ratioshirt.firebasestorage.app",
  messagingSenderId: "232105776773",
  appId: "1:232105776773:web:78fd7c4b67c63d0d597bec",
  measurementId: "G-1KEXPVTYD8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
