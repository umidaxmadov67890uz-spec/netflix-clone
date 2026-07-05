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
      return { success: false, error: getErrorMessage(err.code)};
    } finally {
      setLoading(false);
    }
  }

  // firstName va lastName endi shu yerda qabul qilinadi
  const register = async (email, password, firstName, lastName) => {
    // setError(null);
    setLoading(true)
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const newUser = userCredential.user;

      // Auth profiliga ism-familiyani ham yozib qo'yamiz (ixtiyoriy, lekin foydali)
      await updateProfile(newUser, { displayName: `${firstName} ${lastName}` });

      // Firestore'da asosiy profil
      await setDoc(doc(db, "users", newUser.uid), {
        firstName,
        lastName,
        email,
        role: "user",
        subscription: "free",
        createdAt: new Date().toISOString(),
      });
      setError(null);
      return { success: true };
    } catch (err) {
      setError(getErrorMessage(err.code));
      return { success: false, error: getErrorMessage(err.code)};
    } finally{
      setLoading(false)
    }
  };

  const updateUserProfile = async (updates) => {
    setError(null);
    try {
      const currentUser = auth.currentUser;
      if (!currentUser) throw new Error("Login qilinmagan");

      // Firestore'dagi documentni yangilash (firstName, lastName)
      await updateDoc(doc(db, "users", currentUser.uid), updates);

      // Agar ism-familiya o'zgargan bo'lsa, Auth profilini ham yangilaymiz
      if (updates.firstName || updates.lastName) {
        const newFirstName = updates.firstName ?? user.firstName;
        const newLastName = updates.lastName ?? user.lastName;
        await updateProfile(currentUser, {
          displayName: `${newFirstName} ${newLastName}`,
        });
      }

      // Local state'ni ham yangilab qo'yamiz, sahifa reload bo'lmasin
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
// auth/invalid-credential
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
