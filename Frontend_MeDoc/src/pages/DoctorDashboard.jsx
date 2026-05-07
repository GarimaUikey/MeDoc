import React, { useEffect, useState } from 'react'
import axios from '../utils/axios'
import { toast } from 'react-toastify'
import DoctorNavbar from '../components/Navbar/DoctorNavbar'


const DoctorDashboard = () => {

    const [appointments, setAppointments] = useState([]);

    const doctor = JSON.parse(

    localStorage.getItem("doctor")

);

    const getAppointments = async () => {

        try {

            const token = localStorage.getItem("doctorToken");

            const response = await axios.get(

                "/doctor/appointments",

                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }

            );

            setAppointments(response.data.appointments);

        } catch (error) {

            toast.error(error.response.data.message);

        }

    };

    useEffect(() => {

        getAppointments();

    }, []);
    const updateStatus = async (

        appointmentId,
        status

    ) => {

        try {

            const token = localStorage.getItem(

                "doctorToken"

            );

            const response = await axios.put(

                `/doctor/appointment-status/${appointmentId}`,

                {
                    status
                },

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

    };

    return (

        <>

            <DoctorNavbar />

            <div className='pt-25 mt-7 mb-18 sm:pt-16 py-10 px-6'>

                <h1 className='text-3xl font-semibold mb-2'>
                    Welcome Dr. {doctor?.name}
                </h1>

                <p className='text-gray-600 mb-8'>
                    {doctor?.specialization}
                </p>

                <div className='bg-white shadow-md rounded-xl p-6 mb-8'>

                    <h2 className='text-xl font-medium'>
                        Total Appointments:
                        <span className='text-primary ml-2'>
                            {appointments.length}
                        </span>
                    </h2>

                </div>

                <div className='grid gap-4'>

                    {
                        appointments.map((item, index) => (

                            <div
                                key={index}
                                className='border rounded-xl p-4 shadow-sm'
                            >

                                <p>
                                    <span className='font-semibold'>
                                        Patient:
                                    </span>

                                    {" "}

                                    {item.userId?.name}
                                </p>

                                <p>
                                    <span className='font-semibold'>
                                        Email:
                                    </span>

                                    {" "}

                                    {item.userId?.email}
                                </p>

                                <p>
                                    <span className='font-semibold'>
                                        Date:
                                    </span>

                                    {" "}

                                    {new Date(item.slotDate).toDateString()}
                                </p>

                                <p>
                                    <span className='font-semibold'>
                                        Time:
                                    </span>

                                    {" "}

                                    {item.slotTime}
                                </p>
                                <p className='mt-2'>
                                    <span className='font-semibold'>
                                        Status:
                                    </span>

                                    {" "}

                                    <span className='text-primary'>
                                        {item.status}
                                    </span>
                                </p>
                                <div className='flex gap-3 mt-4 flex-wrap'>

                                    <button

                                        onClick={() =>
                                            updateStatus(item._id, "Approved")
                                        }

                                        className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600'
                                    >
                                        Approve
                                    </button>

                                    <button

                                        onClick={() =>
                                            updateStatus(item._id, "Completed")
                                        }

                                        className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
                                    >
                                        Complete
                                    </button>

                                    <button

                                        onClick={() =>
                                            updateStatus(item._id, "Rejected")
                                        }

                                        className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600'
                                    >
                                        Reject
                                    </button>

                                </div>

                            </div>

                        ))
                    }

                </div>

            </div>

        </>

    )


}

export default DoctorDashboard