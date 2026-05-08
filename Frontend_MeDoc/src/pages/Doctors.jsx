import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import { doctorImages } from '../assets/assets'
import Navbar from '../components/Navbar/Navbar'

const Doctors = () => {

  const { speciality } = useParams()
  const [filterDoc, setFilterDoc] = useState([])
  const [showFilter, setShowFilter] = useState(false)
  const navigate = useNavigate()

  const { doctors } = useContext(AppContext)

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.specialization === speciality))
    }
    else {
      setFilterDoc(doctors)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [doctors, speciality])

  return (

    <>

      <Navbar />
      <div className='pt-32 mt-7 mb-18 sm:pt-16 py-10'>
        <hr className=" h-[1px] bg-gray-200 border-none w-full" />
        <p className='text-gray-600 mt-4'> Browse through the doctors specialist</p>
        <div className='flex flex-col sm:flex-row items-start gap-5 mt-3 '>
          <button className={`py-1 px-3 border rounded text-smtransition-all sm:hidden ${showFilter ? 'bg-primary text-white' : ''}`} onClick={() => setShowFilter(prev => !prev)}>Filters</button>
          <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
            <p onClick={() => speciality === 'General Physician' ? navigate('/doctors') : navigate('/doctors/General Physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer hover:bg-[#2b6ece] hover:text-white transition-all duration-300 p-2 ${speciality === "General Physician" ? "bg-indigo-100 text-black" : " "}`}>General Physician</p>
            <p onClick={() => speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer hover:bg-[#2b6ece]  hover:text-white transition-all duration-300 p-2 ${speciality === "Gynecologist" ? "bg-indigo-100 text-black" : " "}`}>Gynecologist</p>
            <p onClick={() => speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer hover:bg-[#2b6ece]  hover:text-white transition-all duration-300 p-2 ${speciality === "Dermatologist" ? "bg-indigo-100 text-black" : " "}`}>Dermatologist</p>
            <p onClick={() => speciality === 'Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer hover:bg-[#2b6ece]  hover:text-white transition-all duration-300 p-2 ${speciality === "Pediatricians" ? "bg-indigo-100 text-black" : " "}`}>Pediatricians</p>
            <p onClick={() => speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer hover:bg-[#2b6ece]  hover:text-white transition-all duration-300 p-2 ${speciality === "Neurologist" ? "bg-indigo-100 text-black" : " "}`}>Neurologist</p>
            <p onClick={() => speciality === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer hover:bg-[#2b6ece]  hover:text-white transition-all duration-300 p-2 ${speciality === "Gastroenterologist" ? "bg-indigo-100 text-black" : " "}`}>Gastroenterologist</p>
          </div>
          <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
            {
              filterDoc.map((item, index) => (

                <div

                  onClick={() => {

                    if (item.available) {

                      navigate(`/appointment/${item._id}`);

                    }

                  }}

                  className={`

    border border-blue-200 rounded-xl overflow-hidden transition-all duration-500

    ${item.available
                      ? "cursor-pointer hover:translate-y-[-10px]"
                      : "opacity-50 grayscale cursor-not-allowed"
                    }

  `}

                  key={index}

                >
                  <img className='bg-blue-50 w-full hover:scale-105 transition-all duration-500' src={doctorImages[item.image]} alt="" />
                  <div className='p-2'>
                    <div className={`

  flex items-center gap-2 text-sm

  ${item.available
                        ? "text-green-500"
                        : "text-red-500"
                      }

`}>

                      <p className={`

    w-2 h-2 rounded-full

    ${item.available
                          ? "bg-green-500"
                          : "bg-red-500"
                        }

  `}>

                      </p>

                      <p>

                        {
                          item.available
                            ? "Available"
                            : "Currently Unavailable"
                        }

                      </p>

                      <img
                        className='w-15 ml-auto'
                        src={assets.rating_stars}
                        alt=""
                      />

                    </div>
                    <p className='text-gray-900 text-lg  font-medium'>{item.name}</p>
                    <p className='text-gray-600 text-sm'>{item.specialization}</p>
                  </div>

                </div>
              ))
            }

          </div>
        </div>
      </div>

    </>

  )
}

export default Doctors
