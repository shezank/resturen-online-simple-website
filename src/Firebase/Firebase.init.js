// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAafgRGYcHsQD7_5GacuRr7wK2_XA7RTm4",
  authDomain: "kasmeri-resturent.firebaseapp.com",
  projectId: "kasmeri-resturent",
  storageBucket: "kasmeri-resturent.appspot.com",
  messagingSenderId: "332807372119",
  appId: "1:332807372119:web:6895945aaa624f11875212",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;