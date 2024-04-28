import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDFxlSjlnx9RSlRQFgtKx3DRuB5c6M4UvQ",
    authDomain: "pixema-87f07.firebaseapp.com",
    projectId: "pixema-87f07",
    storageBucket: "pixema-87f07.appspot.com",
    messagingSenderId: "602949935823",
    appId: "1:602949935823:web:38465bf279f5fec2234dba",
    measurementId: "G-40Y0S0ND2H"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);