import { useNavigate } from "react-router-dom";
import homeBg from "../assets/Home-bg.png";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      className="h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${homeBg})` }}
    >
      <div className="bg-white/20 backdrop-blur-md shadow-xl rounded-lg p-10 max-w-3xl w-full text-center border border-white/30">
        {/* Title Section */}
        <h1 className="text-5xl font-extrabold text-white mb-4 drop-shadow-md">
          Welcome
        </h1>
        <p className="text-slate-800 text-lg mb-6">
          Build something amazing with our powerful platform.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => navigate("/get-started")}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition font-semibold"
          >
            Get Started
          </button>
          <button
            onClick={() => navigate("/learn-more")}
            className="px-6 py-3 bg-white/30 text-white rounded-lg shadow-md hover:bg-white/40 transition font-semibold border border-white/40"
          >
            Learn More
          </button>
        </div>

        {/* Decorative Image Section */}
        <div className="mt-8">
          <img
            src="https://via.placeholder.com/600x300"
            alt="Placeholder"
            className="rounded-lg shadow-lg w-full border border-white/20"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
