import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUserProfile } from "../../api";
import profileBg from "../../assets/profile-bg.png";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/login");
          return;
        }

        const userData = await fetchUserProfile();
        setUser(userData);
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  if (loading) {
    return <div className="text-center text-lg font-semibold">Loading...</div>;
  }

  return (
    <div
      className="h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${profileBg})` }}
    >
      <div className="bg-white/20 backdrop-blur-md shadow-xl rounded-lg p-8 max-w-lg w-full text-center border border-white/30">
        {/* User Profile Image */}
        <div className="w-24 h-24 mx-auto mb-4">
          <img
            src={`https://api.dicebear.com/6.x/adventurer/svg?seed=${
              user?.name || "user"
            }`} // Random avatar
            alt="Profile"
            className="rounded-full border-4 border-white shadow-md"
          />
        </div>

        <h2 className="text-3xl font-bold text-slate-800">{user?.name}</h2>
        <p className="text-slate-900">{user?.email}</p>

        <button
          onClick={handleLogout}
          className="mt-6 px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
