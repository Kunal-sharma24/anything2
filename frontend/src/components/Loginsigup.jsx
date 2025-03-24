import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";

const Loginsignup = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      <button
        onClick={() => navigate("/")}
        className="mt-4 text-blue-500 underline"
      >
        Back to Home
      </button>
    </div>
  );
};

export default Loginsignup;
