import { Timestamp } from "firebase/firestore";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase/FirebaseConfig";

export function useAdmin() {
  const getAllUsers = async () => {
    const snapshot = await getDocs(collection(db, "users"));
    return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
  };

  const updateUserRole = async (uid, role) => {
    await updateDoc(doc(db, "users", uid), { role });
  };

  const updateUserSubscription = async (
    uid,
    subscriptionTier,
    durationInMonths,
  ) => {
    const update = {
      subscriptionTier,
      subscriptionStatus: subscriptionTier === "free" ? "inactive" : "active",
    };

    if (subscriptionTier === "free") {
      update.subscriptionExpiresAt = null;
      update.subscriptionStartedAt = null;
      update.subscriptionPlanId = null;
    } else if (durationInMonths) {
      const expiry = new Date();
      expiry.setMonth(expiry.getMonth() + durationInMonths);
      update.subscriptionExpiresAt = Timestamp.fromDate(expiry);
      update.subscriptionStartedAt = Timestamp.fromDate(new Date());
    }

    await updateDoc(doc(db, "users", uid), update);
  };

  const deleteUser = async (uid) => {
    await deleteDoc(doc(db, "users", uid));
  };

  return { getAllUsers, updateUserRole, updateUserSubscription, deleteUser };
}
