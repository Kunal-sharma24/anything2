import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [token, setToken] = useState(null);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("http://localhost:8002/api/v1/users/me", {
          method: "GET",
          credentials: "include",
        });

        if (response.ok) {
          setToken(true);
        } else {
          setToken(false);
        }
      } catch (error) {
        setToken(false);
      }
    };

    checkAuth();
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const handleLogout = async () => {
    try {
      await fetch("http://localhost:8002/api/v1/users/logout", {
        method: "POST",
        credentials: "include",
      });

      setToken(false);
      navigate("/login");
      window.location.reload();
    } catch (error) {
      alert("Logout failed!");
    }
  };

  return (
    <nav className="w-full bg-white dark:bg-gray-900 dark:text-white shadow-md transition-colors duration-300 mb-6">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 flex justify-between items-center h-20">
        
        {/* Left - Logo */}
        <h1 className="text-2xl sm:text-3xl font-bold text-[#00b4d8] dark:text-[#48CAE4]">
          AnyThing
        </h1>

        {/* Center - Search Bar */}
        <div className="hidden sm:flex items-center bg-[#ADE8f4] dark:bg-gray-700 rounded-lg px-3 h-10">
          <input
            type="text"
            className="bg-transparent outline-none w-36 sm:w-64 px-2 text-black dark:text-white"
            placeholder="Search..."
          />
          <button className="text-[#00b4d8] dark:text-[#48CAE4]">
            🔍
          </button>
        </div>

        {/* Right - Your Cart, Theme Toggle, Login/Register */}
        <div className="hidden sm:flex items-center space-x-6">
          
          {/* Your Cart */}
          <Link to="/cart" className="flex items-center space-x-2 text-[#464646] dark:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2m0 0l1.6 8h9.6l1.6-8m-12 0h12m-4 10a2 2 0 100 4 2 2 0 000-4zm-6 0a2 2 0 100 4 2 2 0 000-4z"
              />
            </svg>
            <span>Your Cart</span>
          </Link>

          {/* Theme Toggle */}
          <button onClick={() => setDarkMode(!darkMode)} className="text-xl focus:outline-none">
            {darkMode ? "☀️" : "🌙"}
          </button>

          {/* Login/Register OR Logout */}
          {token ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-[#00b4d8] text-white px-4 py-2 rounded-lg hover:bg-[#0096c7]"
            >
              Login | Register
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden text-[#00b4d8] dark:text-white text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden flex flex-col items-center space-y-3 py-3 border-t dark:border-gray-700">
          {/* Search Bar */}
          <div className="flex items-center bg-[#ADE8f4] dark:bg-gray-700 rounded-lg px-3 h-10">
            <input
              type="text"
              className="bg-transparent outline-none w-40 px-2 text-black dark:text-white"
              placeholder="Search..."
            />
            <button className="text-[#00b4d8] dark:text-[#48CAE4]">
              🔍
            </button>
          </div>

          {/* Your Cart */}
          <Link to="/cart" className="flex items-center space-x-2 text-[#464646] dark:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2m0 0l1.6 8h9.6l1.6-8m-12 0h12m-4 10a2 2 0 100 4 2 2 0 000-4zm-6 0a2 2 0 100 4 2 2 0 000-4z"
              />
            </svg>
            <span>Your Cart</span>
          </Link>

          {/* Theme Toggle */}
          <button onClick={() => setDarkMode(!darkMode)} className="text-xl focus:outline-none">
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>

          {/* Login/Register OR Logout */}
          {token ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-[#00b4d8] text-white px-4 py-2 rounded-lg hover:bg-[#0096c7]"
            >
              Login | Register
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
