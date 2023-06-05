// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIuPZ_X6zgwMxHaHVZGvratk44vcp9UbI",
  authDomain: "dynamic-otp-b1870.firebaseapp.com",
  projectId: "dynamic-otp-b1870",
  storageBucket: "dynamic-otp-b1870.appspot.com",
  messagingSenderId: "9615882383",
  appId: "1:9615882383:web:da461114bb7cf46b8218fa",
  measurementId: "G-ZBMJCX4WHJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


