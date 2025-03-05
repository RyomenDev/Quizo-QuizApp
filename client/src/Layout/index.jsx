import { Outlet, useLocation } from "react-router-dom";
import { SideHeader as Sidebar, TopHeader, Footer } from "../components";
import { useState } from "react";

const Layout = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const showHeader = !["/login", "/register"].includes(location.pathname);

  return (
    <>
      {/* Top Header */}
      {showHeader && <TopHeader />}

      <div className="flex">
        {/* Sidebar */}
        {showHeader && (
          <Sidebar
            isOpen={isSidebarOpen}
            toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          />
        )}
        {/* Main Content */}
        <div className="flex-1 bg-gray-50 transition-all duration-200">
          <Outlet />
        </div>
      </div>

      {/* Footer */}
      {showHeader && <Footer />}
    </>
  );
};

export default Layout;
