import React, { useEffect, useState } from 'react'
import axios from '../utils/axios'
import { doctorImages } from '../assets/assets'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const MyAppointments = () => {

  const [appointments, setAppointments] = useState([])
  const navigate = useNavigate();
  const cancelAppointment = async (appointmentId) => {

    try {

      const token = localStorage.getItem("token");

      const response = await axios.put(

        `/appointment/cancel/${appointmentId}`,

        {},

        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }

      );

      toast.success(response.data.message);

      getAppointments();

    } catch (error) {

      toast.error(error.response.data.message);

    }

  }

  const getAppointments = async () => {

    try {

      const user = JSON.parse(

        localStorage.getItem("user")

      );

      const token = localStorage.getItem(

        "token"

      );

      const response = await axios.get(

        `/appointment/user/${user._id}`,

        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }

      );

      setAppointments(

        response.data.appointments.filter(

          item => !item.cancelled

        )

      );

    } catch (error) {

      console.log(error);

    }

  }

  useEffect(() => {

    getAppointments();

  }, []);

  return (
   
  <div className='pt-25 mt-7 mb-18 sm:pt-16 py-10 px-4 sm:px-8'>

    <hr className="h-[1px] bg-gray-200 border-none w-full" />

    <div className='mt-10'>

      <h1 className='text-3xl font-semibold text-gray-800 mb-8'>
        My Appointments
      </h1>

      <div>

        {
          appointments
            .filter(item => item.doctorId)
            .map((item, index) => (

              <div
                key={index}
                className='bg-white border border-gray-200 rounded-2xl shadow-sm p-5 mb-5 flex flex-col lg:flex-row gap-6 hover:shadow-md transition-all duration-300'
              >

                {/* Doctor Image */}
                <div className='flex justify-center'>
                  <img
                    className='w-32 h-32 object-cover rounded-2xl bg-indigo-50'
                    src={doctorImages[item.doctorId.image]}
                    alt=""
                  />
                </div>

                {/* Doctor Details */}
                <div className='flex-1 text-sm text-gray-600'>

                  <h2 className='text-2xl font-semibold text-gray-800 mb-1'>
                    {item.doctorId.name}
                  </h2>

                  <p className='text-primary font-medium mb-3'>
                    {item.doctorId.specialization}
                  </p>

                  <div className='space-y-2'>

                    <p>
                      <span className='font-semibold text-gray-700'>
                        Address:
                      </span>{" "}
                      {item.doctorId.address.line1},{" "}
                      {item.doctorId.address.line2}
                    </p>

                    <p>
                      <span className='font-semibold text-gray-700'>
                        Date & Time:
                      </span>{" "}
                      {new Date(item.slotDate).toDateString()} | {item.slotTime}
                    </p>

                    {/* Consultation Badge */}
                    <div className='flex items-center gap-2 flex-wrap'>

                      <span className='font-semibold text-gray-700'>
                        Consultation:
                      </span>

                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium text-white
                        ${
                          item.consultationType === "Live"
                            ? "bg-purple-600"
                            : "bg-green-600"
                        }`}
                      >
                        {item.consultationType}
                      </span>

                    </div>

                    {/* Status Badge */}
                    <div className='flex items-center gap-2 flex-wrap'>

                      <span className='font-semibold text-gray-700'>
                        Status:
                      </span>

                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium text-white
                        ${
                          item.status === "Approved"
                            ? "bg-blue-600"
                            : item.status === "Completed"
                            ? "bg-green-600"
                            : item.status === "Rejected"
                            ? "bg-red-600"
                            : "bg-yellow-500"
                        }`}
                      >
                        {item.status}
                      </span>

                    </div>

                    {/* Join Live Session */}
                    {
                      item.consultationType === "Live"
                      && item.status === "Approved"
                      && item.meetingLink
                      && (
                        <div className='pt-2'>

                          <a
                            href={item.meetingLink}
                            target="_blank"
                            rel="noreferrer"
                            className='inline-block bg-purple-600 hover:bg-purple-700 !text-white px-5 py-2 rounded-xl font-medium transition-all duration-300'
                          >
                            Join Live Session
                          </a>

                        </div>
                      )
                    }

                  </div>

                </div>

                {/* Action Buttons */}
                <div className='flex flex-col justify-center gap-3 lg:w-52'>

                  <button

                    onClick={() => {
                      if (item.status !== "Completed") {
                        navigate("/payments")
                      }
                    }}

                    disabled={item.status === "Completed"}

                    className={`py-3 rounded-xl font-medium transition-all duration-300 border
                    ${
                      item.status === "Completed"
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                        : "hover:bg-primary hover:text-white text-gray-700"
                    }`}
                  >

                    {
                      item.status === "Completed"
                        ? "Payment Completed"
                        : "Pay Online"
                    }

                  </button>

                  <button

                    onClick={() => cancelAppointment(item._id)}

                    className='py-3 rounded-xl font-medium border text-gray-700 hover:bg-red-600 hover:text-white transition-all duration-300'

                  >

                    {
                      item.status === "Completed"
                        ? "Delete Appointment"
                        : "Cancel Appointment"
                    }

                  </button>

                </div>

              </div>

            ))
        }

      </div>

    </div>

  </div>
)


  
}

export default MyAppointments
