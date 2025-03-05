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
    <div className="relative h-screen flex items-center justify-center ">
      {/* Background*/}
      <div
        // className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        // style={{
        //   backgroundImage: `url(${bgImage})`,
        //   backgroundBlendMode: "overlay",
        // }}
        className="absolute inset-0"
        style={{
          background: "linear-gradient(-30deg, #663e27 50%, #947d70  50%)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      <div className="relative bg-white/10 rounded-xl backdrop-blur-md p-4 shadow-xl w-3/4 ">
        <div className="bg-white shadow-lg rounded-lg my-5 flex flex-col lg:flex-row w-full lg:w-4/5 mx-auto min-h-[60vh]">
          {/* Left Section */}
          <div className="relative w-full lg:w-1/2 bg-gradient-to-b from-amber-950 to-red-500 text-white flex flex-col items-center justify-center p-6 rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none">
            <h3 className="absolute top-4 left-4 text-3xl font-semibold p-2 rounded-md">
              User Profile
            </h3>

            {/* User Image and Details */}
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md mt-12">
              <img
                src={user?.picture}
                alt="User"
                className="w-20 h-20 rounded-full"
              />
            </div>
            <h2 className="mt-4 text-3xl font-semibold">{user?.name}</h2>
            <p className="text-lg">{user?.userType}</p>
          </div>

          {/* Right Section */}
          <div className="flex flex-col justify-center gap-4 w-full lg:w-2/3 p-6">
            <div className="text-sm text-gray-700 space-y-2">
              <p>
                <span className="font-bold text-lg">Email:</span> {user?.email}
              </p>
              <p>
                <span className="font-bold text-lg">Phone:</span>{" "}
                {user?.phone || "N/A"}
              </p>
              <p>
                <span className="font-bold text-lg">Gender:</span>{" "}
                {user?.gender || "N/A"}
              </p>
              <p>
                <span className="font-bold text-lg">Address:</span>{" "}
                {user?.address || "N/A"}
              </p>
            </div>

            {/* Social Icons */}
            <div className="mt-4 flex gap-6 justify-center text-gray-600">
              <FaFacebookF className="cursor-pointer hover:text-blue-600 text-xl" />
              <FaTwitter className="cursor-pointer hover:text-blue-400 text-xl" />
              <FaInstagram className="cursor-pointer hover:text-pink-500 text-xl" />
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-2 mt-6 justify-center">
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
