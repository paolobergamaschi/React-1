import { initializeApp } from "firebase/app";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDi6dnS1iv7dPjEeznvlPnpPaIAyZ3u77E",
  authDomain: "react1-e9e95.firebaseapp.com",
  projectId: "react1-e9e95",
  storageBucket: "react1-e9e95.appspot.com",
  messagingSenderId: "1071516352360",
  appId: "1:1071516352360:web:b6466b596f585a241e20dd"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)