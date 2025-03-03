import { useState } from "react";
import HeaderData from "../../Data/HeaderData.jsx";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { LogoutBtn, LoginButton, RegisterButton } from "../../utils";

const Header = () => {
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);
  const userData = useSelector((state) => state.auth.userData);
  //   const userName = userData?.name;
  const data = userData;
  const userName = data?.name;
  //   console.log({userName});

  const [isContactLanguageOpen, setIsContactLanguageOpen] = useState(false); // State to toggle contact and language visibility
  const { topHeader } = HeaderData;
  const { languages, logo, appName } = topHeader;

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleHamburgerClick = () => {
    setIsContactLanguageOpen(!isContactLanguageOpen); // Toggle contact and language section visibility
  };

  return (
    <header className="sticky top-0 left-0 w-full z-50 flex flex-wrap justify-between items-center py-6 px-6 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-400  text-white shadow-lg border-b-4 border-slate-400 pl-12">
      {" "}
      {/*bg-gradient-to-b from-slate-900 to-slate-400*/}
      {/* Logo Section */}
      <div
        className="flex items-center justify-start cursor-pointer gap-2 hover:shadow-lg rounded-lg transition-all duration-300"
        onClick={handleLogoClick}
      >
        <img
          src={logo}
          alt="HealthBridge"
          className="w-auto h-12 md:h-16 transition-transform duration-300 hover:scale-105"
        />
        <div className="ml-2 text-2xl font-semibold text-white md:text-3xl hover:text-indigo-400 transition-all duration-300">
          {appName}
        </div>
      </div>
      {/* Hamburger Icon (Mobile) */}
      <div
        className="md:hidden flex items-center"
        onClick={handleHamburgerClick} // Show contact and language options on click
      >
        <button className="text-white focus:outline-none">
          <span className="block w-6 h-1 bg-white mb-2"></span>
          <span className="block w-6 h-1 bg-white mb-2"></span>
          <span className="block w-6 h-1 bg-white mb-2"></span>
        </button>
      </div>
      {/* Search Bar */}
      <div className="w-full md:w-1/4 flex justify-center mb-4 md:mb-0">
        <form className="relative w-full max-w-lg" action="#">
          <input
            id="search"
            type="text"
            className="w-full py-2 pl-4 pr-12 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-800 text-white"
            name="s"
            autoComplete="off"
            placeholder="Search..."
            aria-label="Search..."
          />
          <button
            id="search-submit"
            type="submit"
            className="absolute right-2 top-2 text-indigo-500 hover:text-indigo-700"
            title="Search"
            aria-label="Search"
          ></button>
        </form>
      </div>
      {/* Language & Authentication Section (Visible on Mobile when Hamburger is clicked) */}
      <div
        className={`${
          isContactLanguageOpen
            ? "flex flex-col items-center space-y-6 border absolute top-16 right-0 w-1/4  bg-gradient-to-b from-slate-900 to-slate-400 shadow-lg rounded-2xl p-4 transition-all duration-300 ease-in-out "
            : "hidden"
        } md:flex md:relative md:top-0 md:bg-transparent md:shadow-none md:p-0 md:space-y-0 md:space-x-6 md:flex-row`}
      >
        {/* Authentication Section */}
        <div className="w-full text-center md:w-auto">
          {authStatus ? (
            <div className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
              <div className="text-lg font-semibold text-white">
                Hello, {userName}
              </div>
              <LogoutBtn />
            </div>
          ) : (
            <div className="flex flex-col gap-3 w-full items-center md:flex-row md:gap-4">
              <LoginButton />
              <RegisterButton />
            </div>
          )}
        </div>

        {/* Language Selector */}
        <div className="w-full text-center md:w-auto">
          <select
            className="bg-gray-800 border border-gray-600 rounded-md py-2 px-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label="Select Language"
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code} className="text-black">
                {lang.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
