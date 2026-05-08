import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../../assets/assets'

const DoctorNavbar = () => {

  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);

  const doctor = JSON.parse(

    localStorage.getItem("doctor")

  );

  const logoutDoctor = () => {

    localStorage.removeItem("doctor");

    localStorage.removeItem("doctorToken");

    navigate("/login");

  };

  return (

    <div className='fixed top-0 left-0 right-0 w-full border-b bg-white shadow-sm z-50'>

      <div className='w-full flex items-center justify-between px-4 sm:px-6 py-4'>

        {/* Left Side */}

        <div className='flex items-center gap-3 sm:gap-4'>

          <img
            onClick={() => navigate("/doctor-dashboard")}
            src={assets.logo}
            alt="MeDoc Logo"
            className='w-24 sm:w-32 cursor-pointer'
          />

          <div>

            <h1 className='text-lg sm:text-2xl font-semibold text-primary'>
              MeDoc Doctor Panel
            </h1>

            <p className='text-xs sm:text-sm text-gray-500'>
              Welcome Dr. {doctor?.name}
            </p>

          </div>

        </div>

        {/* Desktop Menu */}

        <div className='hidden md:flex items-center gap-2 cursor-pointer group relative'>

          <div className='w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-semibold text-lg'>
            {doctor?.name?.charAt(0)}
          </div>

          <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>

            <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4 shadow-md'>

              <p className='font-semibold text-black'>
                Dr. {doctor?.name}
              </p>

              <p

                onClick={() => navigate("/doctor-profile")}

                className='hover:text-black cursor-pointer'

              >
                My Profile
              </p>

              <p

                onClick={logoutDoctor}

                className='hover:text-black cursor-pointer'

              >
                Logout
              </p>

            </div>

          </div>

        </div>

        {/* Mobile Menu Button */}

        <div className='md:hidden'>

          <button

            onClick={() => setShowMenu(!showMenu)}

            className='text-3xl text-primary'

          >
            ☰
          </button>

        </div>

      </div>

      {/* Mobile Dropdown Menu */}

      {

        showMenu && (

          <div className='md:hidden bg-white border-t shadow-md px-6 py-4 flex flex-col gap-4'>

            <p className='font-semibold text-black'>
              Dr. {doctor?.name}
            </p>

            <button

              onClick={() => {

                navigate("/doctor-profile");

                setShowMenu(false);

              }}

              className='text-left text-gray-700 hover:text-primary'

            >
              My Profile
            </button>

            <button

              onClick={() => {

                logoutDoctor();

                setShowMenu(false);

              }}

              className='text-left text-red-500'

            >
              Logout
            </button>

          </div>

        )

      }

    </div>

  )

}

export default DoctorNavbar