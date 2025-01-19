import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Crousel from "./components/Crousel";
import Icons from "./components/Icons";
import Catogeries from "./components/Catogeries";
import Newarrivals from "./components/Newarrivals";
import Megasales from "./components/Megasales";
import Extrasales from "./components/Extrasales";
import Featuredbrands from "./components/Featuredbrands";
import Sectio from './components/Sectio';
import Loginsignup from "./components/Loginsigup";
import { div } from "framer-motion/client";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Duration of the animations in milliseconds
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-[#F1F6F8] h-full w-full flex flex-col min-h-screen">
        <Routes>
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
          <Route path="/loginpage" element={<Loginsignup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
