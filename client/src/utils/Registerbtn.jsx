import { useNavigate } from "react-router-dom";

const RegisterButton = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <div>
      <button
        onClick={handleRegisterClick}
        className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
      >
        Register
      </button>
    </div>
  );
};

export default RegisterButton;
