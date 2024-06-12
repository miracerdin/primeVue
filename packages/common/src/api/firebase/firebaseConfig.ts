import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBzK20wb7_xIHCeEdn9a5NFM1T2koA1ZU4",
    authDomain: "e-com-primevue.firebaseapp.com",
    projectId: "e-com-primevue",
    storageBucket: "e-com-primevue.appspot.com",
    messagingSenderId: "234972375153",
    appId: "1:234972375153:web:0ec73081d7ecaa0de493d0",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore();
