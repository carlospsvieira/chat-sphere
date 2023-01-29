import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAyET04wcP5vVnrExDpLwrs_YjYSSydFfs",
  authDomain: "chat-sphere-a68c4.firebaseapp.com",
  projectId: "chat-sphere-a68c4",
  storageBucket: "chat-sphere-a68c4.appspot.com",
  messagingSenderId: "692133335404",
  appId: "1:692133335404:web:8ec3978405db3c55142349"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);