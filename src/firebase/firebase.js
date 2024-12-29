import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB-6gE88aNZ3OIgZGa6hIzrDLFWb-Ae_5w",
    authDomain: "pvbank-react.firebaseapp.com",
    projectId: "pvbank-react",
    storageBucket: "pvbank-react.firebasestorage.app",
    messagingSenderId: "561587919043",
    appId: "1:561587919043:web:f689d49579d0b38613aa76",
    measurementId: "G-TYXY92Y4BR"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export { app, auth }

// npm install -g firebase-tools
// firebase login
// firebase init
// firebase deploy