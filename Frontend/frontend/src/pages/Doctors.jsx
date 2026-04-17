import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Doctors = () => {

  const { speciality }= useParams()
  const [filterDoc,setFilterDoc] = useState([])
  const navigate = useNavigate()

  const{doctors}= useContext(AppContext)

  const applyFilter = ()=> {
    if(speciality)
    {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    }
    else 
    {
      setFilterDoc(doctors)
    }
  }

  useEffect(()=>{
    applyFilter()
  },[doctors,speciality])

  return (
    <div className='pt-25 mt-7 mb-18 sm:pt-16 py-10'>
              <hr className=" h-[1px] bg-gray-200 border-none w-full" />
      <p className='text-gray-600 mt-4'> Browse through the doctors specialist</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-3 '>
        <div className='flex flex-col gap-4 text-sm text-gray-600 '>
          <p onClick={()=> speciality === 'General Physician' ? navigate('/doctors') : navigate('/doctors/General Physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer hover:bg-indigo-100 hover:text-black transition-all duration-300 p-2 ${speciality ===  "General Physician" ? "bg-indigo-100 text-black" : " "}`}>General Physician</p>
          <p onClick={()=> speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer hover:bg-indigo-100 hover:text-black transition-all duration-300 p-2 ${speciality ===  "Gynecologist" ? "bg-indigo-100 text-black" : " "}`}>Gynecologist</p>
          <p onClick={()=> speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer hover:bg-indigo-100 hover:text-black transition-all duration-300 p-2${speciality ===  "Dermatologist" ? "bg-indigo-100 text-black" : " "}`}>Dermatologist</p>
          <p onClick={()=> speciality === 'Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer hover:bg-indigo-100 hover:text-black transition-all duration-300 p-2 ${speciality ===  "Pediatricians" ? "bg-indigo-100 text-black" : " "}`}>Pediatricians</p>
          <p onClick={()=> speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer hover:bg-indigo-100 hover:text-black transition-all duration-300 p-2 ${speciality ===  "Neurologist" ? "bg-indigo-100 text-black" : " "}`}>Neurologist</p>
          <p onClick={()=> speciality === 'Gastraenterologist' ? navigate('/doctors') : navigate('/doctors/Gastraenterologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer hover:bg-indigo-100 hover:text-black transition-all duration-300 p-2 ${speciality ===  "Gastraenterologist" ? "bg-indigo-100 text-black" : " "}`}>Gastraenterologist</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {
            filterDoc.map((item,index)=>(

                <div onClick={()=>navigate(`/appointment/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                    <img className='bg-blue-50 w-full hover:scale-105 transition-all duration-500' src={item.image} alt=""/>
                    <div className='p-2'>
                        <div className='flex items-center gap-2 text-sm  text-green-500 '>
                        <p className='w-2 h-2 bg-green-500 rounded-full'>  </p>
                        <p>Available</p>
                        </div>
                        <p className='text-gray-900 text-lg  font-medium'>{item.name}</p>
                        <p className='text-gray-600 text-sm'>{item.speciality}</p>
                    </div>

                </div>
            ))
          }

        </div>
      </div>
    </div>
  )
}

export default Doctors
