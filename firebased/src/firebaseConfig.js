// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDT-9VO_3H10-jxQU8h6ikTsyt3XBagCGs",
  authDomain: "rezhabahari-c0f8d.firebaseapp.com",
  projectId: "rezhabahari-c0f8d",
  storageBucket: "rezhabahari-c0f8d.appspot.com",
  messagingSenderId: "559725514711",
  appId: "1:559725514711:web:deada9d94dacdc1f3ac592"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);