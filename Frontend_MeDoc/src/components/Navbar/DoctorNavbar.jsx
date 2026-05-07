import React from 'react'
import { useNavigate } from 'react-router-dom'

const DoctorNavbar = () => {

  const navigate = useNavigate();

  const doctor = JSON.parse(

    localStorage.getItem("doctor")

  );

  const logoutDoctor = () => {

    localStorage.removeItem("doctor");

    localStorage.removeItem("doctorToken");

    navigate("/doctor-auth");

  };

  return (

    <div className='flex items-center justify-between px-6 py-4 border-b bg-white shadow-sm'>

      <div>

        <h1 className='text-2xl font-semibold text-primary'>
          MeDoc Doctor Panel
        </h1>

        <p className='text-sm text-gray-500'>
          Welcome Dr. {doctor?.name}
        </p>

      </div>

      <div className='flex items-center gap-4'>

        <button

          onClick={() => navigate("/doctor-dashboard")}

          className='px-4 py-2 rounded border hover:bg-primary hover:text-white transition-all'
        >
          Dashboard
        </button>

        <button

          onClick={logoutDoctor}

          className='px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600 transition-all'
        >
          Logout
        </button>

      </div>

    </div>

  )

}

export default DoctorNavbar