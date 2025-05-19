import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDtCP4OfZDPnZ8eyF-cntobrtmuzBYp3oY",
  authDomain: "garden-app-store.firebaseapp.com",
  projectId: "garden-app-store",
  storageBucket: "garden-app-store.firebasestorage.app",
  messagingSenderId: "772920811939",
  appId: "1:772920811939:web:33bf141120e9ac1442ba16"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);