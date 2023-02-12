import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB5pW-PU9XIbk1bESpOwKOI4PLd6qALLVo",
  authDomain: "discount-sotre-saylani.firebaseapp.com",
  projectId: "discount-sotre-saylani",
  storageBucket: "discount-sotre-saylani.appspot.com",
  messagingSenderId: "506936331034",
  appId: "1:506936331034:web:c8a22e65140050bebdfaa3",
  measurementId: "G-KGPWJ8ZBC5"
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authe = getAuth(app);
export const db = getFirestore(app);