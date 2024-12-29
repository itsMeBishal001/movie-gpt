// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaXkTD34Go5BiQgHOLdKkcigzB7e_VJ_o",
  authDomain: "moviegpt-8d127.firebaseapp.com",
  projectId: "moviegpt-8d127",
  storageBucket: "moviegpt-8d127.firebasestorage.app",
  messagingSenderId: "926643982375",
  appId: "1:926643982375:web:7b4f8465d62de4b4e57e02",
  measurementId: "G-VSMYM3J85S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
