import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCeLfUOPTgOsJBYAcJ-sc2SM6DAA-2D_rA",
  authDomain: "netflex-clone-5c88e.firebaseapp.com",
  projectId: "netflex-clone-5c88e",
  storageBucket: "netflex-clone-5c88e.firebasestorage.app",
  messagingSenderId: "772550651485",
  appId: "1:772550651485:web:020d3f698854c032f2a7b4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);