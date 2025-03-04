import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUserProfile } from "../../api";
import { LogoutBtn } from "../../utils";
import bgImage from "../../assets/auth-bg.png";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const UserProfile = () => {
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
        const response = await fetchUserProfile();
        setUser(response.user);
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [navigate]);

  const handleResetPassword = () => navigate("/resetPassword");

  if (loading)
    return <div className="text-center text-lg font-semibold">Loading...</div>;

  if (!user)
    return (
      <div className="text-center text-lg font-semibold text-red-500">
        Failed to load user data.
      </div>
    );

  return (
    <div className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundBlendMode: "overlay",
        }}
      />
      <div className="relative bg-white/10 border border-white rounded-xl backdrop-blur-md p-6 shadow-xl">
        <div className="bg-white shadow-lg rounded-lg flex w-[600px]">
          {/* Left Sidebar */}
          <div className="w-1/3 bg-gradient-to-b from-orange-400 to-red-500 text-white flex flex-col items-center justify-center p-6 rounded-l-lg">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md">
              <img
                src={user.picture}
                alt="User"
                className="w-16 h-16 rounded-full"
              />
            </div>
            <h2 className="mt-4 text-lg font-semibold">{user.name}</h2>
            <p className="text-sm">{user.userType}</p>
          </div>

          {/* Right Section */}
          <div className="w-2/3 p-6">
            <h3 className="text-lg font-semibold mb-3">Information</h3>
            <div className="text-sm text-gray-700 space-y-2">
              <p>
                <span className="font-medium">Email:</span> {user.email}
              </p>
              <p>
                <span className="font-medium">Phone:</span>{" "}
                {user?.phone || "N/A"}
              </p>
              <p>
                <span className="font-medium">Gender:</span>{" "}
                {user?.gender || "N/A"}
              </p>
              <p>
                <span className="font-medium">Address:</span>{" "}
                {user?.address || "N/A"}
              </p>
            </div>

            {/* Social Icons */}
            <div className="mt-4 flex gap-4 justify-center text-gray-600">
              <FaFacebookF className="cursor-pointer hover:text-blue-600" />
              <FaTwitter className="cursor-pointer hover:text-blue-400" />
              <FaInstagram className="cursor-pointer hover:text-pink-500" />
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-2 mt-6">
              <LogoutBtn className="px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition" />
              <button
                onClick={handleResetPassword}
                className="px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition"
              >
                Reset Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
