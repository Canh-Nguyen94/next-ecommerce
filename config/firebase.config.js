import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDFuAdTfkS5WDCz449n3pKwuUImpwg5rU8",
  authDomain: "next-ecommerce-e91c9.firebaseapp.com",
  projectId: "next-ecommerce-e91c9",
  storageBucket: "next-ecommerce-e91c9.appspot.com",
  messagingSenderId: "327342845876",
  appId: "1:327342845876:web:e8579da5989c64eb5a8ce1",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);