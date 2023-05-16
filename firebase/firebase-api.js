import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDECpdPf8gHTV03gkJazxM5JGdgCFt_ZX4",
  authDomain: "checkpoint2-c34a9.firebaseapp.com",
  projectId: "checkpoint2-c34a9",
  storageBucket: "checkpoint2-c34a9.appspot.com",
  messagingSenderId: "1034122060865",
  appId: "1:1034122060865:web:7745a29af3d52c684e52c0",
  measurementId: "G-Q43P6W8Z9B"
};


export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const database = getDatabase(app);
export const auth = getAuth(app);

