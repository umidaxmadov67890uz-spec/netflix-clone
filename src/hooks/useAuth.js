import { useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import { auth } from "../firebase/FirebaseConfig";

export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const login = async (email, password) => {
    setError(null);
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError(getErrorMessage(err.code));
    }
  };

  const register = async (email, password) => {
    setError(null);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError(getErrorMessage(err.code));
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return { user, loading, error, login, register, logout };
}

function getErrorMessage(code) {
  const messages = {
    "auth/user-not-found": "Foydalanuvchi topilmadi",
    "auth/wrong-password": "Noto'g'ri parol",
    "auth/email-already-in-use": "Bu email allaqachon ishlatilgan",
    "auth/invalid-email": "Email noto'g'ri formatda",
    "auth/weak-password": "Parol kamida 6 belgidan iborat bo'lishi kerak",
  };
  return messages[code] || "Xatolik yuz berdi";
}