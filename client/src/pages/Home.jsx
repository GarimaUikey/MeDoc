import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import Medicines from "../components/Medicines";
import Doctors from "../components/Doctors";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

function Home() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsLoggedIn(true);
  }, []);

  // 🔒 Protected Action Handler
  const handleProtectedAction = (path) => {
    if (!isLoggedIn) {
      toast.error("Please login first!");
      navigate("/login");
    } else {
      navigate(path);
    }
  };

  return (
    <div className="bg-green-50 min-h-screen">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <HeroSection handleProtectedAction={handleProtectedAction}  query={query}
  setQuery={setQuery} />
      <Features handleProtectedAction={handleProtectedAction}/>
      <Medicines query={query}/>
      <Doctors handleProtectedAction={handleProtectedAction} />
      <CTA handleProtectedAction={handleProtectedAction}/>
      <Footer/>
    </div>
  );
}

export default Home;