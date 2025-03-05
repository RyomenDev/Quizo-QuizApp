import { useState } from "react";
import HeaderData from "../../Data/HeaderData.jsx";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { LogoutBtn, LoginButton } from "../../utils";

const Header = () => {
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state?.auth?.status);
  const userData = useSelector((state) => state?.auth?.userData);
  const userName = userData?.name;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { topHeader } = HeaderData;
  const { languages, logo, appName } = topHeader;

  const handleLogoClick = () => {
    navigate("/");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative top-0 left-0 w-full z-50 flex items-center justify-between bg-gradient-to-b from-[#4E2A1E] via-[#5C4033] to-[#3B2F2F] text-white py-4 px-6 shadow-lg">
      {/* Logo Section */}
      <div
        className="flex items-center gap-2 cursor-pointer hover:shadow-lg rounded-lg transition-all duration-300"
        onClick={handleLogoClick}
      >
        <img
          src={logo}
          alt="HealthBridge"
          className="w-auto h-10 md:h-14 transition-transform duration-300 hover:scale-105"
        />
        <div className="text-xl font-semibold md:text-2xl hover:text-indigo-400 transition-all duration-300">
          {appName}
        </div>
      </div>

      {/* Hamburger Icon (Mobile) */}
      <div className="md:hidden flex items-center">
        <button className="text-white focus:outline-none" onClick={toggleMenu}>
          <span className="block w-6 h-1 bg-white mb-1"></span>
          <span className="block w-6 h-1 bg-white mb-1"></span>
          <span className="block w-6 h-1 bg-white"></span>
        </button>
      </div>

      {/* Search Bar (Hidden on Small Screens) */}
      <div className="hidden md:flex w-1/4 justify-center">
        <form className="relative w-full max-w-lg">
          <input
            type="text"
            className="w-full py-2 pl-4 pr-12 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-800 text-white"
            placeholder="Search..."
          />
          <button
            type="submit"
            className="absolute right-2 top-2 text-indigo-500 hover:text-indigo-700"
          ></button>
        </form>
      </div>

      {/* Authentication & Language Section */}
      <div
        className={`${
          isMenuOpen
            ? "flex flex-col items-center absolute top-16 right-0 w-2/3 bg-gradient-to-b from-slate-900 to-slate-400 shadow-lg rounded-2xl p-4 transition-all duration-300 ease-in-out"
            : "hidden"
        } md:flex md:relative md:top-0 md:bg-transparent md:shadow-none md:p-0 md:space-x-6 md:flex-row`}
      >
        {/* Authentication Section */}
        <div className="text-center">
          {authStatus ? (
            <div className="flex flex-col items-center md:flex-row md:gap-4">
              <span className="text-lg font-semibold text-white">
                Hello, {userName}
              </span>
              <LogoutBtn />
            </div>
          ) : (
            <div className="flex flex-col gap-3 items-center md:flex-row md:gap-4">
              <LoginButton />
            </div>
          )}
        </div>

        {/* Language Selector */}
        <div className="text-center">
          <select className="bg-gray-800 border border-gray-600 rounded-md py-2 px-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
            {languages?.map((lang) => (
              <option key={lang.code} value={lang.code} className="text-black">
                {lang?.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
