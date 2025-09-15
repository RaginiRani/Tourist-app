import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaPhone, FaIdBadge } from "react-icons/fa";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("tourist");
  const [touristID, setTouristID] = useState("");
  const [remember, setRemember] = useState(false);

  const handleLogin = () => {
    // Demo authentication
    if (role === "police" && email === "police@tourist.com" && password === "1234") {
      navigate("/dashboard");
    } else if (role === "tourist") {
      alert("Tourist login successful!");
      navigate("/dashboard");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-green-300 via-blue-500 to-green-200">
      <div className="bg-white bg-opacity-90 backdrop-blur-md p-10 rounded-3xl shadow-2xl w-full max-w-md animate-fadeIn">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Smart Tourist Safety Login
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

          {/* Phone Number */}
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

          {/* Tourist ID (optional) */}
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

          {/* Role Selection */}
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center space-x-4">
              <label className="flex items-center space-x-2 text-gray-700">
                <input
                  type="radio"
                  name="role"
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
                  name="role"
                  value="police"
                  checked={role === "police"}
                  onChange={(e) => setRole(e.target.value)}
                  className="accent-purple-500"
                />
                <span>Police</span>
              </label>
            </div>

            {/* Remember Me */}
            <label className="flex items-center space-x-2 text-gray-700">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="accent-purple-500"
              />
              <span className="text-sm">Remember Me</span>
            </label>
          </div>

          {/* Login Button */}
          <button
            type="button"
            onClick={handleLogin}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-xl font-semibold hover:from-pink-500 hover:to-purple-500 transition-all mt-4"
          >
            Login
          </button>

          <p className="text-center text-gray-500 mt-3 text-sm">
            Don't have an account? <Link to="/signup" className="text-purple-500 cursor-pointer">Sign Up</Link> 
          </p>
        </form>
      </div>
    </div>
  );
}
