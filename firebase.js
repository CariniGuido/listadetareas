// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGmI0yU27PXOtdv711L7PSnDa8fNjGA-Q",
  authDomain: "listade-tareas.firebaseapp.com",
  projectId: "listade-tareas",
  storageBucket: "listade-tareas.appspot.com",
  messagingSenderId: "169775998242",
  appId: "1:169775998242:web:b8c69f32ce4f3aa4e8717b",
  measurementId: "G-7GER7860PW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);