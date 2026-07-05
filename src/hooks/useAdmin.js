import { collection, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/FirebaseConfig";

export function useAdmin() {
  const getAllUsers = async () => {
    const snapshot = await getDocs(collection(db, "users"));
    return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
  };

  const updateUserRole = async (uid, role) => {
    await updateDoc(doc(db, "users", uid), { role });
  };

  const updateUserSubscription = async (uid, subscription) => {
    await updateDoc(doc(db, "users", uid), { subscription });
  };

  const deleteUser = async (uid) => {
    // Faqat Firestore documentini o'chiradi, Auth'dan o'chirish uchun
    // Firebase Admin SDK (backend) kerak bo'ladi — client-side'dan bo'lmaydi
    await deleteDoc(doc(db, "users", uid));
  };

  return { getAllUsers, updateUserRole, updateUserSubscription, deleteUser };
}