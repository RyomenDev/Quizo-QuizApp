import { useState } from "react";
import { registerUser } from "../../api";
import {
  RiUser3Line,
  RiLock2Line,
  RiEyeOffLine,
  RiEyeLine,
} from "react-icons/ri";
import bgImage from "../../assets/auth-bg.png";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    // console.log({ name,email, password });

    setMessage(""); // Reset message
    try {
      await registerUser(name, email, password);
      setMessage("✅ Registration successful");
      //   setTimeout(() => navigate("/login"), 1000);
    } catch (error) {
      setMessage(`❌ ${error}`);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative h-screen flex items-center justify-center">
      {/* Background image */}
      <img
        src={bgImage}
        alt="login background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative bg-white/10 border-2 border-white mx-6 p-8 rounded-xl backdrop-blur-md sm:w-[400px] sm:p-12">
        <h1 className="text-center text-2xl font-medium text-gray-900 mb-8">
          Register
        </h1>
        <form onSubmit={handleRegister} className="space-y-4">
          <div className="space-y-6 mb-6">
            {/* Name input */}
            <div className="flex items-center border-b-2 border-white pb-2">
              <RiUser3Line className="text-gray-900 text-xl" />
              <div className="w-full relative">
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full bg-transparent text-gray-900 px-2 py-2 placeholder-slate-700 focus:outline-none"
                />
              </div>
            </div>

            {/* Email input */}
            <div className="flex items-center border-b-2 border-white pb-2">
              <RiUser3Line className="text-gray-900 text-xl" />
              <div className="w-full relative">
                <input
                  type="email"
                  id="login-email"
                  required
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent text-gray-900 px-2 py-2 placeholder-slate-700 focus:outline-none"
                />
              </div>
            </div>

            {/* Password input */}
            <div className="flex items-center border-b-2 border-white pb-2 relative">
              <RiLock2Line className="text-gray-900 text-xl" />
              <div className="w-full relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="login-pass"
                  required
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-transparent text-gray-900 px-2 py-2 placeholder-slate-700 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-0 top-2 text-black text-xl focus:outline-none"
                >
                  {showPassword ? <RiEyeLine /> : <RiEyeOffLine />}
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <input type="checkbox" id="login-check" className="w-4 h-4" />
              <label htmlFor="login-check" className="text-sm text-slate-700">
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm text-slate-700 hover:underline">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-200"
          >
            Resister
          </button>
          {message && (
            <p className="mt-4 text-center text-red-600">{message}</p>
          )}
        </form>
        <p className="text-center text-sm text-gray-700 mt-6">
          Don&apos;t have an account?{" "}
          <a href="/login" className="font-medium hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
