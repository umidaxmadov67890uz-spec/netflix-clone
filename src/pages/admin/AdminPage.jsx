import { useEffect, useState } from "react";
import { useAdmin } from "../../hooks/useAdmin";
import AdminPanel from "../../components/admin/AdminPanel";

function AdminPage() {
  const { getAllUsers, updateUserRole, updateUserSubscription } = useAdmin();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editMadalOpen, setEditMadalOpen] = useState(false);

  const [editUser, setEditUser] = useState({})

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const data = await getAllUsers();
      setUsers(data);
    } catch (err) {
      console.error(err);
      setError("An error occurred while loading users.");
    } finally {
      setLoading(false);
    }
  };

  function handleOpen(id) {
    setEditMadalOpen(true)
    setEditUser(users?.find(u => u?.id === id))

  }

  if (loading) return <p>Yuklanmoqda...</p>;
  console.log(error && error);
  return (
    <div className="container mx-auto px-2 xl:px-15 relative">
      {editMadalOpen && (
        <AdminPanel data={editUser} setEditMadalOpen={setEditMadalOpen} updateUserSubscription={updateUserSubscription} updateUserRole={updateUserRole} />
      )}
      <div className="pt-20 w-full">
        <h1 className="text-white font-bold text-4xl">Admin Panele</h1>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-4">
          {users?.map((user) => (
            <div
              key={user?.id}
              className="border border-slate-700 rounded-xl py-2 px-3 my-5"
            >
              <h2 className="text-white text-xl line-clamp-1">
                name: {user?.firstName}
              </h2>
              <h2 className="text-white text-xl line-clamp-1">
                surname: {user?.lastName}
              </h2>
              <p className="text-slate-400 text-lg line-clamp-1">
                email: {user?.email}
              </p>
              <p className="text-slate-400 text-lg line-clamp-1">
                role: {user?.role}
              </p>
              <p className="text-slate-400 text-lg line-clamp-1">
                subscription: {user?.subscription}
              </p>
              <button onClick={() => handleOpen(user?.id)} className="w-full py-1 border border-slate-700 hover:border-slate-600 rounded-l-full rounded-r-full text-center text-xl text-slate-200 hover:text-slate-100 cursor-pointer transition-all duration-200">
                Edit
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
