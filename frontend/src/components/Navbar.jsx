import React, { useState, useEffect } from 'react';
import { FiSearch, FiShoppingCart, FiSun, FiMoon, FiUser } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();  // Initialize navigate

  useEffect(() => {
    // Handle dark mode
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  useEffect(() => {
    // Check login status
    const token = localStorage.getItem('token');
    const storedUsername = localStorage.getItem('username'); // optional
    if (token) {
      setIsLoggedIn(true);
      setUsername(storedUsername || 'User');
    }
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          Anything
        </div>

        {/* Search Bar */}
        <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg px-2 py-1 w-full max-w-md mx-4">
          <FiSearch className="text-gray-500 dark:text-gray-300 mr-2" />
          <input
            type="text"
            placeholder="Search products..."
            className="bg-transparent outline-none w-full text-black dark:text-white"
          />
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          {/* Cart */}
          <button 
           onClick={() => navigate('/cart')}
           className="relative text-gray-700 md:mr-4 dark:text-white text-xl">
            <FiShoppingCart />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">5</span>
          </button>

          {/* Auth or User Info */}
          {isLoggedIn ? (
            <div className="flex items-center space-x-2 text-gray-700 dark:text-white">
              <FiUser className="text-xl" />
              <span className="text-sm">{username}</span>
            </div>
          ) : (
            <>
              <button
                onClick={() => navigate('/login')}   // Navigate to /login
                className="text-sm text-white bg-blue-600 px-3 py-1 rounded-lg hover:bg-blue-700"
              >
                Login
              </button>
              <button
                onClick={() => navigate('/signup')}  // Navigate to /signup
                className="text-sm text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 px-3 py-1 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800"
              >
                Signup
              </button>
            </>
          )}

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-xl text-gray-700 dark:text-white"
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
