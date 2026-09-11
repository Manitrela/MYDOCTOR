// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBuuUFocZ5ZWTsmbDNL24D_q_De78AwHM",
  authDomain: "mydoctor-d5382.firebaseapp.com",
  projectId: "mydoctor-d5382",
  storageBucket: "mydoctor-d5382.firebasestorage.app",
  messagingSenderId: "290233203809",
  appId: "1:290233203809:web:aa2e472918069c628dfe20",
  measurementId: "G-H3K0C8KTW4"
};



const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);