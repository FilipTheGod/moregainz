
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCA6g3GdNUtke5Nz71PkW23Mv0l0_UBACg",
  authDomain: "moregainz-45ea1.firebaseapp.com",
  projectId: "moregainz-45ea1",
  storageBucket: "moregainz-45ea1.appspot.com",
  messagingSenderId: "812354095289",
  appId: "1:812354095289:web:d9ab30dbe2a9a518263368"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);