import React, { useEffect, useState } from 'react'
import axios from '../utils/axios'
import { toast } from 'react-toastify'
import DoctorNavbar from '../components/Navbar/DoctorNavbar'


const DoctorDashboard = () => {

    const [appointments, setAppointments] = useState([]);

    const doctor = JSON.parse(

        localStorage.getItem("doctor")

    );

    const [available, setAvailable] = useState(

        doctor?.available

    );

    const pendingAppointments = appointments.filter(

        item => item.status === "Pending"

    ).length;

    const approvedAppointments = appointments.filter(

        item => item.status === "Approved"

    ).length;

    const completedAppointments = appointments.filter(

        item => item.status === "Completed"

    ).length;

    const rejectedAppointments = appointments.filter(

        item => item.status === "Rejected"

    ).length;


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

    const toggleAvailability = async () => {

        try {

            const token = localStorage.getItem(

                "doctorToken"

            );

            const response = await axios.put(

                "/doctor/toggle-availability",

                {},

                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }

            );

            setAvailable(response.data.available);

            // update localStorage doctor
            const updatedDoctor = {

                ...doctor,

                available: response.data.available

            };

            localStorage.setItem(

                "doctor",

                JSON.stringify(updatedDoctor)

            );

            toast.success(response.data.message);

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

                <button

                    onClick={toggleAvailability}

                    className={`px-5 py-2 rounded-lg text-white mb-6 ${available
                        ? "bg-green-600"
                        : "bg-red-600"
                        }`}

                >

                    {
                        available
                            ? "Available"
                            : "Unavailable"
                    }

                </button>

                <p className='text-gray-600 mb-8'>
                    {doctor?.specialization}
                </p>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8'>

                    <div className='bg-white shadow-md rounded-xl p-6'>

                        <h2 className='text-lg font-medium'>
                            Total
                        </h2>

                        <p className='text-3xl font-bold text-primary mt-2'>
                            {appointments.length}
                        </p>

                    </div>

                    <div className='bg-yellow-50 shadow-md rounded-xl p-6'>

                        <h2 className='text-lg font-medium'>
                            Pending
                        </h2>

                        <p className='text-3xl font-bold text-yellow-600 mt-2'>
                            {pendingAppointments}
                        </p>

                    </div>

                    <div className='bg-green-50 shadow-md rounded-xl p-6'>

                        <h2 className='text-lg font-medium'>
                            Approved
                        </h2>

                        <p className='text-3xl font-bold text-green-600 mt-2'>
                            {approvedAppointments}
                        </p>

                    </div>

                    <div className='bg-blue-50 shadow-md rounded-xl p-6'>

                        <h2 className='text-lg font-medium'>
                            Completed
                        </h2>

                        <p className='text-3xl font-bold text-blue-600 mt-2'>
                            {completedAppointments}
                        </p>

                    </div>

                    <div className='bg-red-50 shadow-md rounded-xl p-6'>

                        <h2 className='text-lg font-medium'>
                            Rejected
                        </h2>

                        <p className='text-3xl font-bold text-red-600 mt-2'>
                            {rejectedAppointments}
                        </p>

                    </div>

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

                                    {item.status === "Pending" && (
                                        <>
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
                                                    updateStatus(item._id, "Rejected")
                                                }

                                                className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600'

                                            >
                                                Reject
                                            </button>
                                        </>
                                    )}

                                    {item.status === "Approved" && (

                                        <button

                                            onClick={() =>
                                                updateStatus(item._id, "Completed")
                                            }

                                            className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'

                                        >
                                            Complete
                                        </button>

                                    )}

                                    {(item.status === "Completed" || item.status === "Rejected") && (

                                        <span className={`px-4 py-2 rounded text-white
            ${item.status === "Completed"
                                                ? "bg-blue-500"
                                                : "bg-red-500"
                                            }`}
                                        >

                                            {item.status}

                                        </span>

                                    )}

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