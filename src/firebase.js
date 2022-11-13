// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCA6g3GdNUtke5Nz71PkW23Mv0l0_UBACg",
  authDomain: "moregainz-45ea1.firebaseapp.com",
  projectId: "moregainz-45ea1",
  storageBucket: "moregainz-45ea1.appspot.com",
  messagingSenderId: "812354095289",
  appId: "1:812354095289:web:d9ab30dbe2a9a518263368"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();