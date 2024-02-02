// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDtX5tFDjB2_ukCKJXiQ8bfmLSBcW5gEU",
  authDomain: "smartowl-ebook.firebaseapp.com",
  projectId: "smartowl-ebook",
  storageBucket: "smartowl-ebook.appspot.com",
  messagingSenderId: "281538798337",
  appId: "1:281538798337:web:8502b2d047f38d1d5fb100",
  measurementId: "G-T38TRSB65K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);