import { useState } from "react";
import { loginUser } from "./authAPI";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
const navigate = useNavigate();

useEffect(() => {
  const token = localStorage.getItem("token");
  if (token) {
    navigate("/");
  }
}, []);

  // handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle login
  const handleLogin = async (e) => {
  e.preventDefault();

  if (!formData.email || !formData.password) {
    return setError("All fields are required");
  }

  try {
    setLoading(true);
    setError("");

    const res = await loginUser(formData);

    // store token
    localStorage.setItem("token", res.data.token);
    

    // ✅ redirect to dashboard
    navigate("/");

  } catch (err) {
    setError(err.response?.data?.message || "Login failed");
  } finally {
    setLoading(false);
  }
};
 return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-green-50">
    
    <form
      onSubmit={handleLogin}   // ✅ HERE
      className="bg-white p-8 rounded-2xl shadow-lg w-80"
    >
    
      
      <h2 className="text-3xl font-bold text-center text-green-700 mb-2">
        
        MeDoc 🌿
      </h2>
      <p className="text-center text-gray-500 mb-6">
        Welcome back, login to continue
      </p>

      {error && (
        <p className="text-red-500 text-sm text-center mb-3">{error}</p>
      )}

      <input
        type="email"
        name="email"
        placeholder="Email address"
        className="w-full p-3 mb-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        className="w-full p-3 mb-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
        onChange={handleChange}
      />

      <button
        type="submit"
        className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition duration-200"
      >
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
  </div>
);
}

export default Login;

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f5f7fa",
  },
  form: {
    width: "300px",
    padding: "20px",
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
  },
  input: {
    margin: "10px 0",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px",
    border: "none",
    background: "#007bff",
    color: "#fff",
    borderRadius: "5px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    fontSize: "14px",
  },
};