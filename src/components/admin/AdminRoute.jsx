import { Navigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";

export default function AdminRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <div>Yuklanmoqda...</div>;
  if (!user) return <Navigate to="/login" replace />;
  if(user?.role !== "admin") return  <Navigate to="/" replace />

  return children;
}