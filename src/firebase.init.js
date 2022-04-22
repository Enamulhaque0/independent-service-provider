// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7kLar69Wylx3Y4WmthlCA6BDxuD-K72A",
  authDomain: "assingment-10-4c3ae.firebaseapp.com",
  projectId: "assingment-10-4c3ae",
  storageBucket: "assingment-10-4c3ae.appspot.com",
  messagingSenderId: "738070280737",
  appId: "1:738070280737:web:e5f881026d4e0ddc2c8160"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;


