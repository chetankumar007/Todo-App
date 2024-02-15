// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvNEtf2nz8rWdP-eC7LiqEgNbrjyGEzfE",
  authDomain: "todo-62a4d.firebaseapp.com",
  projectId: "todo-62a4d",
  storageBucket: "todo-62a4d.appspot.com",
  messagingSenderId: "1054103428618",
  appId: "1:1054103428618:web:cdd20ce39e197d6d8249f3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
