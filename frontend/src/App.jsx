import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import  Navbar  from "./components/Navbar";
import Crousel from "./components/Crousel";
import Icons from "./components/Icons";
import Catogeries from "./components/Catogeries";
import Newarrivals from "./components/Newarrivals";
import Megasales from "./components/Megasales";
import Extrasales from "./components/Extrasales";
import Featuredbrands from "./components/Featuredbrands";
import Sectio from "./components/Sectio";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Header from "./components/Header";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <BrowserRouter>
      {/* Apply dark mode background to the entire page */}
      <div className="bg-[#F1F6F8] dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen flex flex-col">
        <Routes>
          {/* Homepage with full Navbar */}
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <div data-aos="fade-up">
                  <Crousel />
                </div>
                <div data-aos="fade-right">
                  <Icons />
                </div>
                <div data-aos="fade-left">
                  <Catogeries />
                </div>
                <div data-aos="fade-up">
                  <Newarrivals />
                </div>
                <div data-aos="zoom-in">
                  <Megasales />
                </div>
                <div data-aos="fade-up">
                  <Extrasales />
                </div>
                <div data-aos="fade-right">
                  <Featuredbrands />
                </div>
                <div data-aos="fade-up">
                  <Sectio />
                </div>
              </>
            }
          />

          {/* Login Page */}
          <Route
            path="/login"
            element={
              <>
                <Header toggleDarkMode={toggleDarkMode} />
                <div className="flex justify-center items-center h-full">
                  <Login />
                </div>
              </>
            }
          />

          {/* Signup Page */}
          <Route
            path="/signup"
            element={
              <>
                <Header toggleDarkMode={toggleDarkMode} />
                <div className="flex justify-center items-center h-full">
                  <Signup />
                </div>
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
