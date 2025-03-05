import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  FiHome,
  FiBook,
  FiEdit,
  FiMove,
  FiSettings,
  FiSlack,
  FiMenu,
  FiX,
} from "react-icons/fi";
import sideHeaderbg from "../../assets/sideHeaderbg-bg.png";
import { useSelector } from "react-redux";

const SideHeader = ({ isOpen, toggleSidebar }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [mobileOpen, setMobileOpen] = useState(false);
  const authStatus = useSelector((state) => state.auth.status);

  // Detect screen width changes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const expanded = isOpen || isHovered || mobileOpen;

  return (
    <div className="relative">
      {/* Hamburger Icon for Mobile */}
      {isMobile && (
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="absolute top-4 left-4 z-[1100] bg-white p-2 rounded-md shadow-lg"
        >
          {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      )}

      {/* Sidebar - Hidden on Mobile until opened */}
      <aside
        className={`${
          isMobile ? "absolute top-0 left-0 h-screen" : "relative h-full"
        } bg-black transition-all duration-300 shadow-lg overflow-hidden ${
          isMobile && !mobileOpen
            ? "-translate-x-full"
            : expanded
            ? "w-64"
            : "w-20"
        } flex flex-col items-center z-[1000]`}
        style={{
          backgroundImage: `url(${sideHeaderbg})`,
          backgroundColor: "#5C4033",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Semi-Transparent Wooden Overlay for Depth */}
        <div className="absolute inset-0 bg-[#3B2F2F]/40 backdrop-blur-md"></div>

        <div className="relative z-10 flex flex-col space-y-2 gap-2 w-full overflow-hidden">
          {/* Navigation Links */}
          <nav className="w-full mt-6">
            <ul className="space-y-2 w-full">
              <SidebarLink
                to="/"
                icon={<FiHome />}
                text="Home"
                expanded={expanded}
              />
              {authStatus && (
                <SidebarLink
                  to="/profile"
                  icon={<FiSettings />}
                  text="Profile"
                  expanded={expanded}
                />
              )}
              <SidebarLink
                to="/quiz"
                icon={<FiBook />}
                text="Take Quiz"
                expanded={expanded}
              />
              <SidebarLink
                to="/customQuiz"
                icon={<FiEdit />}
                text="Create Quiz"
                expanded={expanded}
              />
              <SidebarLink
                to="/questions"
                icon={<FiMove />}
                text="Contribute"
                expanded={expanded}
              />
              <SidebarLink
                to="#"
                icon={<FiSlack />}
                text="About"
                expanded={expanded}
              />
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  );
};

SideHeader.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

const SidebarLink = ({ to, icon, text, expanded }) => (
  <li>
    <NavLink
      to={to}
      className={() =>
        `flex items-center p-2 rounded-lg transition-all duration-300 ${
          expanded ? "pl-4" : "justify-center"
        }`
      }
    >
      <span className="text-xl">{icon}</span>
      {expanded && <span className="ml-3">{text}</span>}
    </NavLink>
  </li>
);

SidebarLink.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  expanded: PropTypes.bool.isRequired,
};

export default SideHeader;
