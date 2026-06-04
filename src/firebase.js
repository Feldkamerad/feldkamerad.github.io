// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfNYIF2Kbvdd-nkmz216uG4OX8_jF2bnI",
  authDomain: "ackerai.firebaseapp.com",
  databaseURL: "https://ackerai-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ackerai",
  storageBucket: "ackerai.firebasestorage.app",
  messagingSenderId: "572170601011",
  appId: "1:572170601011:web:112957876e5afab3965946",
  measurementId: "G-HDNYDQQDF8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
