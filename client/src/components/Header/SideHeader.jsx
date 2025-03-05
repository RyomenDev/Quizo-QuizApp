import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import HeaderData from "../../data/HeaderData.jsx";
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
    <header
      className="relative h-screen p-4 shadow-lg bg-cover bg-center bg-no-repeat border border-[#4E2A1E] rounded-lg"
      style={{
        backgroundImage: `url(${sideHeaderbg})`,
        backgroundColor: "#5C4033",
      }}
    >
      {/* Semi-Transparent Wooden Overlay for Depth */}
      <div className="absolute inset-0 bg-[#3B2F2F]/40 backdrop-blur-md"></div>

      {/* Navigation Links */}
      <ul className="relative z-10 flex flex-col space-y-2 gap-2">
        {sideHeader.navItems(authStatus).map(
          (item) =>
            item.active && (
              <li key={item.name}>
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    navigate(item.slug);
                  }}
                  className="w-full px-4 py-2 text-lg font-semibold rounded-lg bg-[#4E2A1E]/70 text-white hover:bg-[#6B4226] hover:text-yellow-200 transition duration-300 border border-[#5C4033] shadow-md"
                >
                  {item.name}
                </button>
              </li>
            )
        )}
      </ul>
    </header>
  );
};

export default SideHeader;

{
  /* Auth & Support Links */
}
{
  /* <div className="mt-auto">
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
      </div> */
}
