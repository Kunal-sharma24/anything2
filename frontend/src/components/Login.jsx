import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    try {
      const response = await fetch("http://localhost:8002/api/v1/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      // Store token in localStorage for authentication
      localStorage.setItem("token", data.token);

      alert("Login successful! Redirecting...");
      navigate("/"); // Redirect to  after login
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex dark:bg-gray-900 items-center justify-center h-fit mt-20 bg-gray-100">
      <div className="bg-white dark:bg-gray-800 p-8 mb-20 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">Login</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleLogin} className="mt-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md mb-2 dark:bg-gray-700 dark:text-white"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md mb-2 dark:bg-gray-700 dark:text-white"
            required
          />
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">
            Login
          </button>
        </form>

        <button onClick={() => navigate("/signup")} className="w-full mt-4 text-blue-500 underline">
          Don't have an account? Signup
        </button>
      </div>
    </div>
  );
};

export default Login;
  