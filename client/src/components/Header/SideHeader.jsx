import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FiHome, FiBook, FiVideo, FiPhone, FiSettings } from "react-icons/fi";
import sideHeaderbg from "../../assets/sideHeaderbg-bg.png";

const SideHeader = ({ isOpen, toggleSidebar }) => {
  const [isHovered, setIsHovered] = useState(false);

  const expanded = isOpen || isHovered; // Expand sidebar on hover or toggle

  return (
    <aside
      className={`relative top-0 left-0 h-auto bg-white transition-all duration-300 shadow-lg overflow-hidden ${
        expanded ? "w-64" : "w-20"
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
            <SidebarLink
              to="/profile"
              icon={<FiSettings />}
              text="Profile"
              expanded={expanded}
            />
            <SidebarLink
              to="/quiz"
              icon={<FiBook />}
              text="Take Quiz"
              expanded={expanded}
            />
            <SidebarLink
              to="/customQuiz"
              icon={<FiSettings />}
              text="CreateQuiz"
              expanded={expanded}
            />
            <SidebarLink
              to="/questions"
              icon={<FiVideo />}
              text="Contribute"
              expanded={expanded}
            />
            <SidebarLink
              to="#"
              icon={<FiPhone />}
              text="About"
              expanded={expanded}
            />
          </ul>
        </nav>
      </div>
    </aside>
  );
};

const SidebarLink = ({ to, icon, text, expanded }) => (
  <li>
    <NavLink
      to={to}
      className={({ isActive }) =>
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

export default SideHeader;
