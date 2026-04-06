// import medocImage from "../assets/meDoctor.png";
import { useState } from "react";
import medicine from "../assets/medicine.png";

function HeroSection({ handleProtectedAction ,query,setQuery}) {
 
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-10 py-10">

      <div className="max-w-lg">
        <h1 className="text-4xl font-bold text-green-800">
          Your Health, Delivered Fast and Easy!
        </h1>

        <p className="mt-4 text-gray-600">
          Medicine Delivery & Online Doctor Consultation
        </p>

        {/* Search */}
        <div className="flex mt-6">
          <input
            type="text"
            placeholder="Search for medicines..."
            value={query}
            onChange={(e)=> setQuery(e.target.value)}
            className="w-full p-3 rounded-l-lg border focus:outline-green-500"
          />
          <button 
           onClick={() => {
    document.getElementById("medicines")?.scrollIntoView({
      behavior: "smooth",
    });
  }}
          className="bg-green-600 text-white px-5 rounded-r-lg hover:bg-green-700 transition">
            🔍
          </button>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-6">
          <button
            onClick={() => handleProtectedAction("/upload")}
            className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 hover:scale-105 transition"
          >
            Upload Prescription
          </button>

          <button
            onClick={() => handleProtectedAction("/appointments")}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 hover:scale-105 transition"
          >
            Book Appointment
          </button>
        </div>
      </div>

      <div className="hidden md:block">
        <img
  src={medicine}
  className="w-110 hover:scale-105 transition"
/>
      </div>
    </div>
  );
}

export default HeroSection;