import React from 'react'
import { useContext } from 'react'
import './TopDoctors.css'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import { doctorImages } from '../../assets/assets'

const TopDoctors = () => {

    const navigate = useNavigate()
    const { doctors } = useContext(AppContext)


    return (
        <div className='flex flex-col items-center my-5 gap-4  text-gray-900 '>
            <h1 className='text-3xl font-medium'> Top Doctors for Appointment</h1>
            <p className='sm:w-1/3 text-center text-sm'>Schedule your appointment hassle-free</p>
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 pt-5'>
                {doctors.slice(0, 5).map((item, index) => (

                    <div

                        onClick={() => {

                            if (item.available) {

                                navigate(`/appointment/${item._id}`);

                                scrollTo(0, 0);

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

                            </div>
                            <p className='text-gray-900 text-lg  font-medium'>{item.name}</p>
                            <p className='text-gray-600 text-sm'>{item.specialization}</p>
                        </div>

                    </div>
                ))}

            </div>

            <button onClick={() => { navigate('/doctors'); window.scrollTo(0, 0) }} className='button'>Explore More</button>

        </div>
    )
}

export default TopDoctors
