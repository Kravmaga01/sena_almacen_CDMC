// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyCOlyb6NbF7t5g9xRcisvEGFWJblHVJChY",
  authDomain: "aca-web-f3027.firebaseapp.com",
  projectId: "aca-web-f3027",
  storageBucket: "aca-web-f3027.appspot.com",
  messagingSenderId: "931258038999",
  appId: "1:931258038999:web:1169aa58073fc976c30e92",
  measurementId: "G-NMV843ZTHW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);