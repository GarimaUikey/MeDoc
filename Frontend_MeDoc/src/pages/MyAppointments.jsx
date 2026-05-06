import React, { useEffect, useState } from 'react'
import axios from '../utils/axios'
import { doctorImages } from '../assets/assets'

const MyAppointments = () => {

  const [appointments, setAppointments] = useState([])

  const getAppointments = async () => {

  try {

    const user = JSON.parse(localStorage.getItem("user"));

    const response = await axios.get(

      `/appointment/user/${user._id}`

    );

    setAppointments(response.data.appointments);

  } catch (error) {

    console.log(error);

  }

}

useEffect(() => {

  getAppointments();

}, []);

  return (
    <div className='pt-25 mt-7 mb-18 sm:pt-16 py-10'>
      <hr className=" h-[1px] bg-gray-200 border-none w-full" />
      <div className='mt-4'>
        <p className='pb-3  mt-12 font-medium text-zinc-600 text-2xl border-b'>My Appointments</p>
        <div>
          {appointments.map((item,index)=>(
            <div className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b' key={index}>
              <div>
                <img className='w-32 bg-indigo-50' src={doctorImages[item.doctorId.image]} alt="" />
                </div>
                <div className='flex-1 text-sm text-zinc-600'>
                  <p className='text-neutral-800 font-semibold '>{item.doctorId.name} </p>
                  <p>{item.doctorId.specialization} </p>
                  <p className='text-zinc-700 font-medium mt-1'> Address: </p>
                  <p className='text-xs'>{item.doctorId.address.line1} </p>
                  <p className='text-xs'>{item.doctorId.address.line2} </p>
                  <p className='text-xs mt-1'><span className='text-sm text-neutral-700 font-medium' >Date & Time: </span> {new Date(item.slotDate).toDateString()} | {item.slotTime} </p>
                </div>
                <div></div>
                <div className='flex flex-col gap-2 justify-end'>
                  <button className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded cursor-pointer hover:bg-primary hover:text-white transition-all duration-500'>Pay Online</button>
                  <button className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded cursor-pointer hover:bg-red-600 hover:text-white transition-all duration-500'>Cancel Appointment</button>
                </div>

            </div>

          ))}

        </div>


      </div>
    </div>
      
    
  )
}

export default MyAppointments
