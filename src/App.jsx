import React from 'react';
import Catogeries from './components/Catogeries';
import Crousel from './components/Crousel';
import Extrasales from './components/Extrasales';
import Featuredbrands from './components/Featuredbrands';
import Icons from './components/Icons';
import Megasales from './components/Megasales';
import { Navbar } from './components/Navbar';
import Newarrivals from './components/Newarrivals';
import { Sectio } from './components/Sectio';
import Loginsignup from './components/Loginsigup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-[#F1F6F8] h-full w-full flex flex-col min-h-screen">
        {/* Navbar is always visible */}
       

        {/* Define routes for each page */}
        <Routes>
          {/* Home route */}
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Crousel />
                <Icons />
                <Catogeries />
                <Newarrivals />
                <Megasales />
                <Extrasales />
                <Featuredbrands />
                <Sectio />
              </>
            }
          />
          {/* Login route */}
          <Route path="/loginpage" element={<Loginsignup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
