import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyCeLfUOPTgOsJBYAcJ-sc2SM6DAA-2D_rA",
  authDomain: "netflex-clone-5c88e.firebaseapp.com",
  projectId: "netflex-clone-5c88e",
  storageBucket: "netflex-clone-5c88e.firebasestorage.app",
  messagingSenderId: "772550651485",
  appId: "1:772550651485:web:020d3f698854c032f2a7b4"
};

// 1. Avval app yaratiladi
const app = initializeApp(firebaseConfig);

// 2. Keyin shu app asosida boshqa xizmatlar olinadi
export const auth = getAuth(app);
export const db = getFirestore(app);

const functions = getFunctions(app);

// Faqat development paytida — lokal emulator'ga ulanish uchun
if (window.location.hostname === "localhost") {
  connectFunctionsEmulator(functions, "127.0.0.1", 5001);
}

export { functions };