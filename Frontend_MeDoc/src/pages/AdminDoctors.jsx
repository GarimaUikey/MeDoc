import React, { useEffect, useState } from 'react'
import AdminSidebar from '../components/admin/AdminSidebar'
import axios from '../utils/axios'
import { toast } from 'react-toastify'

const AdminDoctors = () => {

    const [doctors, setDoctors] = useState([]);

    const fetchDoctors = async () => {

        try {

            const response = await axios.get(

                "/doctor/all"
            );

            setDoctors(response.data.doctors);

        } catch (error) {

            console.log(error);

        }

    };

    const deleteDoctor = async (doctorId) => {

        try {

            const token = localStorage.getItem(

                "adminToken"
            );

            const response = await axios.delete(

                `/doctor/delete/${doctorId}`,

                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }

            );

            toast.success(response.data.message);

            fetchDoctors();

        } catch (error) {

            toast.error(error.response.data.message);

        }

    };

    useEffect(() => {

        fetchDoctors();

    }, []);

    return (

        <div className='flex bg-gray-100 min-h-screen'>

            <AdminSidebar />

            <div className='ml-64 flex-1 p-8'>

                <h1 className='text-4xl font-bold text-primary mb-8'>
                    Doctors Management
                </h1>

                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>

                    {

                        doctors.map((doctor, index) => (

                            <div

                                key={index}

                                className='bg-white rounded-2xl shadow-md p-6'

                            >

                                <h2 className='text-2xl font-semibold mb-2'>
                                    Dr. {doctor.name}
                                </h2>

                                <p className='text-gray-600 mb-1'>
                                    {doctor.specialization}
                                </p>

                                <p className='text-gray-600 mb-1'>
                                    Experience: {doctor.experience} Years
                                </p>

                                <p className='text-gray-600 mb-4'>
                                    Fees: ₹{doctor.fees}
                                </p>

                                <div className='flex items-center justify-between'>

                                    <span className={`px-3 py-1 rounded-full text-sm

                                    ${doctor.available

                                            ? "bg-green-100 text-green-600"

                                            : "bg-red-100 text-red-600"
                                        }`}>

                                        {

                                            doctor.available

                                                ? "Available"

                                                : "Unavailable"

                                        }

                                    </span>

                                    <button

                                        onClick={() =>
                                            deleteDoctor(doctor._id)
                                        }

                                        className='bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all'

                                    >
                                        Delete
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

export default AdminDoctors