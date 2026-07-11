import { useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../firebase/FirebaseConfig";

export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const profile = await getUserProfile(currentUser.uid);
        setUser({ ...currentUser, ...profile });
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  async function login(email, password) {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setError(null);
      return { success: true };
    } catch (err) {
      setError(err.message);
      return { success: false, error: getErrorMessage(err.code) };
    } finally {
      setLoading(false);
    }
  }

  const register = async (email, password, firstName, lastName) => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const newUser = userCredential.user;

      await updateProfile(newUser, { displayName: `${firstName} ${lastName}` });

      await setDoc(doc(db, "users", newUser.uid), {
        firstName,
        lastName,
        email,
        role: "user",
        subscriptionTier: "free", 
        subscriptionStatus: "inactive", 
        subscriptionPlanId: null,
        subscriptionStartedAt: null,
        subscriptionExpiresAt: null,
        createdAt: new Date().toISOString(),
      });
      setError(null);
      return { success: true };
    } catch (err) {
      setError(getErrorMessage(err.code));
      return { success: false, error: getErrorMessage(err.code) };
    } finally {
      setLoading(false);
    }
  };

  const updateUserProfile = async (updates) => {
    setError(null);
    try {
      const currentUser = auth.currentUser;
      if (!currentUser) throw new Error("Login qilinmagan");

      await updateDoc(doc(db, "users", currentUser.uid), updates);

      if (updates.firstName || updates.lastName) {
        const newFirstName = updates.firstName ?? user.firstName;
        const newLastName = updates.lastName ?? user.lastName;
        await updateProfile(currentUser, {
          displayName: `${newFirstName} ${newLastName}`,
        });
      }

      setUser((prev) => ({ ...prev, ...updates }));
    } catch (err) {
      console.error(err);
      setError("Profilni yangilashda xatolik yuz berdi");
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return { user, loading, error, login, register, logout, updateUserProfile };
}

async function getUserProfile(uid) {
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? docSnap.data() : {};
}
function getErrorMessage(code) {
  const messages = {
    "auth/user-not-found": "User not found",
    "auth/wrong-password": "Incorrect password",
    "auth/email-already-in-use": "This email is already in use.",
    "auth/invalid-email": "Email is in invalid format.",
    "auth/weak-password": "Password must be at least 6 characters long",
  };
  return messages[code] || "An error occurred.";
}
