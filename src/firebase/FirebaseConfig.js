// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeLfUOPTgOsJBYAcJ-sc2SM6DAA-2D_rA",
  authDomain: "netflex-clone-5c88e.firebaseapp.com",
  projectId: "netflex-clone-5c88e",
  storageBucket: "netflex-clone-5c88e.firebasestorage.app",
  messagingSenderId: "772550651485",
  appId: "1:772550651485:web:020d3f698854c032f2a7b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);