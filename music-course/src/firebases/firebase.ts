import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions, httpsCallable } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyBHylBLiSvrEghjCTh04QHLDlkWYE9Pc_s",
  authDomain: "music-course-550b0.firebaseapp.com",
  projectId: "music-course-550b0",
  storageBucket: "music-course-550b0.appspot.com",
  messagingSenderId: "608010989360",
  appId: "1:608010989360:web:8e0c808058c1ef0cf462f5",
  measurementId: "G-2Q0FRXCBMT",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const functions = getFunctions(app);
export const sendEmailCallable = httpsCallable(functions, "sendEmail");
