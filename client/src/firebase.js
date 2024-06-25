// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-blog-2e522.firebaseapp.com",
    projectId: "mern-blog-2e522",
    storageBucket: "mern-blog-2e522.appspot.com",
    messagingSenderId: "1018291918250",
    appId: "1:1018291918250:web:1856979bfe66694eec07d3",
    measurementId: "G-8BBXPWJ798"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);