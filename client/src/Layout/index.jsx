import { Outlet, useLocation } from "react-router-dom";
import { SideHeader, TopHeader, Footer } from "../components";
import { useState } from "react";

const Layout = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const showHeader = !["/login", "/register"].includes(location.pathname);

  return (
    <>
      {/* Top Header */}
      {showHeader && <TopHeader />}

      <div className="flex flex-col lg:flex-row h-screen">
        {/* Sidebar (Visible on Larger Screens) */}
        {showHeader && (
          <>
            {/* Mobile Sidebar Toggle Button */}
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden fixed top-6 left-0 bg-slate-600 text-white p-2 rounded-sm z-50 shadow-lg focus:outline-none"
            >
              {
                //   isSidebarOpen ? (
                <button className="text-white focus:outline-none">
                  <span className="block w-6 h-1 bg-white mb-2"></span>
                  <span className="block w-6 h-1 bg-white mb-2"></span>
                  <span className="block w-6 h-1 bg-white"></span>
                </button>
                //   ) : null
              }
            </button>

            {/* Sidebar */}
            <div
              className={`${
                isSidebarOpen
                  ? "block bg-white z-50 fixed h-full w-2/4 md:w-1/3 sm:w-1/2"
                  : "hidden"
              } lg:block lg:relative lg:w-1/6 bg-gray-100 border-r-4 transition-all duration-300`}
            >
              <SideHeader />
            </div>
          </>
        )}

        {/* Main Content */}
        <div className="flex-1 bg-gray-100 overflow-auto">
          <Outlet />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Layout;
