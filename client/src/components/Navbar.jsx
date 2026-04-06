import { useNavigate } from "react-router-dom";
import { Stethoscope } from "lucide-react";
import { useState, useEffect } from "react";

function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  setCartCount(cart.length);
}, []);

  return (
    <div className="flex justify-between items-center px-10 py-4 bg-white shadow-md sticky top-0 z-50">

      {/* Logo */}
      <div className="flex items-center gap-3 cursor-pointer">
        <div className="bg-gradient-to-r from-green-500 to-green-700 p-2 rounded-full">
          <Stethoscope className="text-white" size={20} />
        </div>
        <h1 className="text-2xl font-bold text-green-700">MeDoc</h1>
      </div>

      {/* Menu */}
      <div className="hidden md:flex gap-6 text-gray-700">
        <p className="cursor-pointer hover:text-green-600 transition"><b>Home</b></p>
        <p className="cursor-pointer hover:text-green-600 transition"><b>Doctors</b></p>
        <p className="cursor-pointer hover:text-green-600 transition"><b>Pharmacy</b></p>
        <p className="cursor-pointer hover:text-green-600 transition"><b>Appointments</b></p>
        {/* Address */}
  <p className="cursor-pointer hover:text-green-600">
    <b>📍 Bhopal</b>
  </p>

  {/* Cart */}
  <p className="cursor-pointer hover:text-green-600">
   <b> 🛒 Cart ({cartCount})</b>
  </p>

        
      </div>

      {/* Auth Buttons */}
      <div className="flex gap-3">
        {isLoggedIn ? (
          <button
            onClick={() => {
              localStorage.removeItem("token");
              setIsLoggedIn(false);
            }}
            className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600 transition"
          >
            <b>Logout</b>
          </button>
        ) : (
          <>
            <button
              onClick={() => navigate("/login")}
              className="bg-green-600 text-white px-4 py-1 rounded-lg hover:bg-green-700 transition"
            >
              <b>Login</b>
            </button>

            <button  onClick={() => navigate("/signup")}
  className="border px-4 py-1 rounded-lg hover:bg-gray-100 transition">
              <b>Sign Up</b>
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;