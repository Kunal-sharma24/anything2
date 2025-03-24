import React from "react";
import { Link } from "react-router-dom";

const Header = ({ toggleDarkMode }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 shadow-md">
      {/* Site Name */}
      <h1 className="text-xl font-bold text-gray-900 dark:text-white">
        Anything
      </h1>

      {/* Buttons */}
      <div className="flex gap-4">
        {/* Theme Toggle */}
        <button
          onClick={toggleDarkMode}
          className="bg-gray-200 dark:bg-gray-600 text-black dark:text-white px-4 py-2 rounded-md"
        >
          Toggle Theme
        </button>

        {/* About */}
        <Link to="/about" className="text-blue-500 dark:text-blue-300">
          About
        </Link>

        {/* Back to Home */}
        <Link
          to="/"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default Header;
