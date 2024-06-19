// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realestatewebpage-c3b84.firebaseapp.com",
  projectId: "realestatewebpage-c3b84",
  storageBucket: "realestatewebpage-c3b84.appspot.com",
  messagingSenderId: "406593688521",
  appId: "1:406593688521:web:670d4535201fc9de954e18"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);