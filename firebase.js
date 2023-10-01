// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDO1brYRsLjTVe9ZkDCulSxWqTOfvcedqA",
    authDomain: "task-7-1.firebaseapp.com",
    projectId: "task-7-1",
    storageBucket: "task-7-1.appspot.com",
    messagingSenderId: "436931474841",
    appId: "1:436931474841:web:9f969c75ff58403082cf08",
    measurementId: "G-0SMJJRSYDS"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app); 
export const storage = getStorage(app);