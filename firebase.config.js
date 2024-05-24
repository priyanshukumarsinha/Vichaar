// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBh8CD06_MivWfoMgEQOGqhsJ4-X11UTOY",
    authDomain: "vichaar-7476c.firebaseapp.com",
    databaseURL: "https://vichaar-7476c-default-rtdb.firebaseio.com",
    projectId: "vichaar-7476c",
    storageBucket: "vichaar-7476c.appspot.com",
    messagingSenderId: "315375228518",
    appId: "1:315375228518:web:ea65fff32b70ac8fc63fa7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app, auth}