import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCGeX-rlLyBon5nX5UIQpshvW0JjNnW7_A",
  authDomain: "dungeon-chat-7a392.firebaseapp.com",
  projectId: "dungeon-chat-7a392",
  storageBucket: "dungeon-chat-7a392.appspot.com",
  messagingSenderId: "776914751786",
  appId: "1:776914751786:web:a6f9fbea7f514970d44e53"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();