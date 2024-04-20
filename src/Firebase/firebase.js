import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyARNEnNNT2EW5HMk-JHIHyUIz-NqlqOn2M",
  authDomain: "sentido-group.firebaseapp.com",
  projectId: "sentido-group",
  storageBucket: "sentido-group.appspot.com",
  messagingSenderId: "745854997698",
  appId: "1:745854997698:web:c6e8e0bea871f1ab4c175b"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
export { app, auth, db };