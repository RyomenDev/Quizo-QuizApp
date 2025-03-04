import { useState } from "react";
import { ResetPassword } from "../../api";
import { RiLock2Line } from "react-icons/ri";
import bgImage from "../../assets/auth-bg.png";
import { useNavigate } from "react-router-dom";
import { PasswordField, ValidatePassword } from "../../utils";

const Register = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const errors = {};
    const passwordValidation = ValidatePassword(password);
    if (!passwordValidation.isValid) {
      errors.password = "Password must meet security criteria.";
    }
    if (password !== confirmPassword)
      errors.confirmPassword = "Passwords do not match.";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    // console.log({ name,email, password });
    setMessage("");
    if (!validateForm()) {
      return;
    }
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }
      await ResetPassword(password);
      setMessage("✅ Password Reset successful");
      setTimeout(() => navigate("/profile"), 1000);
    } catch (error) {
      setMessage(`❌ ${error}`);
    }
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
        <h1 className="text-center text-3xl font-medium text-gray-900 mb-8">
          Reset Password
        </h1>
        <form onSubmit={handleResetPassword} className="space-y-4">
          <div className="space-y-6 mb-6">
            {/* Password input */}
            <PasswordField
              name="password"
              placeholder="Create Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
              }}
              error={errors.password}
              showChecklist={true}
              required={true}
              Icon={<RiLock2Line />}
            />
            {/* Confirm-Password input */}
            <PasswordField
              name="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setErrors((prevErrors) => ({
                  ...prevErrors,
                  confirmPassword: "",
                }));
              }}
              error={errors.confirmPassword}
              showChecklist={false}
              Icon={<RiLock2Line />}
            />
          </div>
          <button
            type="submit"
            className={`w-full py-3 font-medium rounded-lg ${"bg-white text-gray-900 hover:bg-gray-200"}`}
          >
            Reset Password
          </button>
          {message && (
            <p className="mt-4 text-center text-red-600">{message}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Register;
