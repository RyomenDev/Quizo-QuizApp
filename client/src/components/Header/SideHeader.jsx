import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import HeaderData from "../../data/HeaderData";
import sideHeaderbg from "../../assets/sideHeaderbg-bg.png";

const SideHeader = () => {
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);
  const userData = useSelector((state) => state.auth.userData);
  const userName = userData?.name;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close sidebar menu on outside click (for mobile)
  useEffect(() => {
    const closeMenu = (e) => {
      if (isMenuOpen) setIsMenuOpen(false);
    };
    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, [isMenuOpen]);

  const { sideHeader } = HeaderData;

  return (
    // <header
    //   className="flex flex-col h-screen p-4 bg-gray-100 shadow-lg"
    //   style={{ backgroundImage: `url(${sideHeaderbg})` }}
    // >
    <header
      className="h-screen p-4 bg-gray-100 shadow-lg bg-cover bg-center bg-gradient-to-b from-[#4E2A1E] via-[#5C4033] to-[#3B2F2F]"
      style={{
        backgroundImage: `url(${sideHeaderbg})`,
        //
      }}
    >
      {/* Background Overlay with Blur Effect */}
      {/* <div className="absolute inset-0 bg-black/2 backdrop-blur-xl"></div> */}

      {/* Navigation Links */}
      <ul className="flex flex-col space-y-2">
        {sideHeader.navItems(authStatus).map(
          (item) =>
            item.active && (
              <li key={item.name}>
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    navigate(item.slug);
                  }}
                  className="w-full px-4 py-2 text-lg font-medium rounded-lg hover:bg-blue-500 hover:text-white transition duration-300"
                >
                  {item.name}
                </button>
              </li>
            )
        )}
      </ul>

      {/* Auth & Support Links */}
      {/* <div className="mt-auto">
        <ul className="space-y-2">
          {sideHeader.authItems(authStatus).map(
            (item) =>
              item.active && (
                <li key={item.name}>
                  {item.component ? (
                    <div className="px-4 py-2 text-lg font-medium rounded-lg hover:bg-blue-500 hover:text-white transition duration-300">
                      {item.component}
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        setIsMenuOpen(false);
                        navigate(item.slug);
                      }}
                      className="w-full px-4 py-2 text-lg font-medium rounded-lg hover:bg-blue-500 hover:text-white transition duration-300"
                    >
                      {item.name}
                    </button>
                  )}
                </li>
              )
          )}
        </ul>
      </div> */}
    </header>
  );
};

export default SideHeader;
