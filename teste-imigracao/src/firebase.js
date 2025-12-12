// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4zEP4AtMg50k1R6V0eX1Lk1SVnyEyBes",
  authDomain: "ciig-systems.firebaseapp.com",
  projectId: "ciig-systems",
  storageBucket: "ciig-systems.firebasestorage.app",
  messagingSenderId: "97546595997",
  appId: "1:97546595997:web:2fb43892882a80faeeee74",
  measurementId: "G-Z9E0CZPS0J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
