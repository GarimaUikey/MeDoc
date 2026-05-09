import React, { useEffect, useState } from 'react'
import AdminSidebar from '../components/admin/AdminSidebar'
import axios from '../utils/axios'
import { toast } from 'react-toastify'

const AdminAppointments = () => {

    const [appointments, setAppointments] = useState([]);

    const fetchAppointments = async () => {

        try {

            const token = localStorage.getItem(

                "adminToken"

            );

            const response = await axios.get(

                "/admin/appointments",

                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }

            );

            setAppointments(response.data.appointments);

        } catch (error) {

            console.log(error);

        }

    };

    const deleteAppointment = async (appointmentId) => {

        try {

            const token = localStorage.getItem(

                "adminToken"

            );

            const response = await axios.delete(

                `/admin/appointment/${appointmentId}`,

                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }

            );

            toast.success(response.data.message);

            fetchAppointments();

        } catch (error) {

            toast.error(error.response.data.message);

        }

    };

    useEffect(() => {

        fetchAppointments();

    }, []);

    return (

        <div className='flex bg-gray-100 min-h-screen'>

            <AdminSidebar />

            <div className='ml-64 flex-1 p-8 overflow-x-auto'>

                <h1 className='text-4xl font-bold text-primary mb-8'>
                    Appointments Management
                </h1>

                <div className='bg-white rounded-2xl shadow-md overflow-hidden'>

                    <table className='w-full'>

                        <thead className='bg-primary text-white'>

                            <tr>

                                <th className='p-4 text-left'>
                                    Patient
                                </th>

                                <th className='p-4 text-left'>
                                    Doctor
                                </th>

                                <th className='p-4 text-left'>
                                    Date
                                </th>

                                <th className='p-4 text-left'>
                                    Time
                                </th>

                                <th className='p-4 text-left'>
                                    Status
                                </th>

                                <th className='p-4 text-left'>
                                    Action
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {

                                appointments.map((item, index) => (

                                    <tr

                                        key={index}

                                        className='border-b'

                                    >

                                        <td className='p-4'>
                                            {item.userId?.name}
                                        </td>

                                        <td className='p-4'>
                                            Dr. {item.doctorId?.name}
                                        </td>

                                        <td className='p-4'>
                                            {new Date(item.slotDate).toDateString()}
                                        </td>

                                        <td className='p-4'>
                                            {item.slotTime}
                                        </td>

                                        <td className='p-4'>

                                            <span className={`px-3 py-1 rounded-full text-sm

                                            ${item.status === "Completed"

                                                    ? "bg-green-100 text-green-600"

                                                    : item.status === "Rejected"

                                                        ? "bg-red-100 text-red-600"

                                                        : "bg-yellow-100 text-yellow-600"
                                                }`}>

                                                {item.status}

                                            </span>

                                        </td>

                                        <td className='p-4'>

                                            <button

                                                onClick={() =>
                                                    deleteAppointment(item._id)
                                                }

                                                className='bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all'

                                            >
                                                Delete
                                            </button>

                                        </td>

                                    </tr>

                                ))

                            }

                        </tbody>

                    </table>

                </div>

            </div>

        </div>

    )

}

export default AdminAppointments