import { Navigate, } from "react-router";
import { useAuth } from "../hooks/useAuth";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  // const test = useParams()

  if (loading) return <div>Yuklanmoqda...</div>;
  if (!user) return <Navigate to="/login" replace />;
  // if()

  // console.log(test.postId)

  return children;
}