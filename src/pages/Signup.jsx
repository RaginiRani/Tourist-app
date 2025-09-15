// src/pages/Signup.jsx
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaUser, FaLock, FaPhone, FaIdBadge } from "react-icons/fa";

export default function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("tourist");
  const [touristID, setTouristID] = useState("");

  const handleSignup = () => {
    if (!email || !password) {
      alert("Please fill in required fields.");
      return;
    }

    // Get existing users or start fresh
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email already exists
    if (existingUsers.some((user) => user.email === email)) {
      alert("User already exists with this email!");
      return;
    }

    // Create new user object
    const newUser = { email, password, phone, role, touristID };

    // Save back to localStorage as array
    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    alert("Signup successful! Please login.");
    navigate("/"); // back to Login
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-300 via-purple-400 to-pink-300">
      <div className="bg-white bg-opacity-90 backdrop-blur-md p-10 rounded-3xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Smart Tourist Safety - Signup
        </h2>

        <form className="space-y-4">
          {/* Email */}
          <div className="relative">
            <FaUser className="absolute top-3 left-3 text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 pl-10 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <FaLock className="absolute top-3 left-3 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 pl-10 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Phone */}
          <div className="relative">
            <FaPhone className="absolute top-3 left-3 text-gray-400" />
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-3 pl-10 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Tourist ID only for tourist */}
          {role === "tourist" && (
            <div className="relative">
              <FaIdBadge className="absolute top-3 left-3 text-gray-400" />
              <input
                type="text"
                placeholder="Tourist ID (if available)"
                value={touristID}
                onChange={(e) => setTouristID(e.target.value)}
                className="w-full p-3 pl-10 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
          )}

          {/* Role selection */}
          <div className="flex items-center space-x-6">
            <label className="flex items-center space-x-2 text-gray-700">
              <input
                type="radio"
                value="tourist"
                checked={role === "tourist"}
                onChange={(e) => setRole(e.target.value)}
                className="accent-purple-500"
              />
              <span>Tourist</span>
            </label>
            <label className="flex items-center space-x-2 text-gray-700">
              <input
                type="radio"
                value="police"
                checked={role === "police"}
                onChange={(e) => setRole(e.target.value)}
                className="accent-purple-500"
              />
              <span>Police</span>
            </label>
          </div>

          {/* Signup button */}
          <button
            type="button"
            onClick={handleSignup}
            className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white p-3 rounded-xl font-semibold hover:from-blue-500 hover:to-green-500 transition-all mt-4"
          >
            Sign Up
          </button>

          <p className="text-center text-gray-500 mt-3 text-sm">
            Already have an account?{" "}
            <Link to="/" className="text-purple-500 font-semibold hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
