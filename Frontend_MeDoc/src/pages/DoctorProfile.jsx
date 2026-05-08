import React, { useState } from 'react'
import DoctorNavbar from '../components/Navbar/DoctorNavbar'
import axios from '../utils/axios'
import { toast } from 'react-toastify'

const DoctorProfile = () => {

    const doctorData = JSON.parse(

        localStorage.getItem("doctor")

    );

    const [doctor, setDoctor] = useState({

        name: doctorData?.name || "",
        email: doctorData?.email || "",
        specialization: doctorData?.specialization || "",
        degree: doctorData?.degree || "",
        experience: doctorData?.experience || "",
        about: doctorData?.about || "",
        fees: doctorData?.fees || "",
        hospital: doctorData?.hospital || "",

        address: {

            line1: doctorData?.address?.line1 || "",
            line2: doctorData?.address?.line2 || ""

        }

    });

    const handleChange = (e) => {

        setDoctor({

            ...doctor,

            [e.target.name]: e.target.value

        });

    };

    const handleAddressChange = (e) => {

        setDoctor({

            ...doctor,

            address: {

                ...doctor.address,

                [e.target.name]: e.target.value

            }

        });

    };

    const updateProfile = async () => {

        try {

            const token = localStorage.getItem(

                "doctorToken"

            );

            const response = await axios.put(

                "/doctor/update-profile",

                doctor,

                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }

            );

            toast.success(response.data.message);

            localStorage.setItem(

                "doctor",

                JSON.stringify(response.data.doctor)

            );

            window.location.reload();

        } catch (error) {

            toast.error(error.response.data.message);

        }

    };

    return (

        <>

            <DoctorNavbar />

            <div className='pt-32 px-4 sm:px-8 pb-10'>

                <div className='max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8'>

                    <h1 className='text-3xl font-semibold mb-8 text-primary'>
                        Doctor Profile
                    </h1>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

                        {/* Name */}
                        <div>
                            <label className='block mb-2 font-medium text-gray-700'>
                                Full Name
                            </label>

                            <input
                                type="text"
                                name="name"
                                value={doctor.name}
                                onChange={handleChange}
                                className='w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary'
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className='block mb-2 font-medium text-gray-700'>
                                Email
                            </label>

                            <input
                                type="email"
                                name="email"
                                value={doctor.email}
                                onChange={handleChange}
                                className='w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary'
                            />
                        </div>

                        {/* Specialization */}
                        <div>
                            <label className='block mb-2 font-medium text-gray-700'>
                                Specialization
                            </label>

                            <select

                                name="specialization"

                                value={doctor.specialization}

                                onChange={handleChange}

                                className='w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary'

                            >

                                <option value="">
                                    Select Specialization
                                </option>

                                <option value="General Physician">
                                    General Physician
                                </option>

                                <option value="Gynecologist">
                                    Gynecologist
                                </option>

                                <option value="Dermatologist">
                                    Dermatologist
                                </option>

                                <option value="Pediatricians">
                                    Pediatricians
                                </option>

                                <option value="Neurologist">
                                    Neurologist
                                </option>

                                <option value="Gastroenterologist">
                                    Gastroenterologist
                                </option>

                            </select>
                        </div>

                        {/* Degree */}
                        <div>
                            <label className='block mb-2 font-medium text-gray-700'>
                                Degree
                            </label>

                            <input
                                type="text"
                                name="degree"
                                value={doctor.degree}
                                onChange={handleChange}
                                className='w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary'
                            />
                        </div>

                        {/* Experience */}
                        <div>
                            <label className='block mb-2 font-medium text-gray-700'>
                                Experience (Years)
                            </label>

                            <input
                                type="number"
                                name="experience"
                                value={doctor.experience}
                                onChange={handleChange}
                                className='w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary'
                            />
                        </div>

                        {/* Fees */}
                        <div>
                            <label className='block mb-2 font-medium text-gray-700'>
                                Consultation Fees
                            </label>

                            <input
                                type="number"
                                name="fees"
                                value={doctor.fees}
                                onChange={handleChange}
                                className='w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary'
                            />
                        </div>

                        {/* Hospital */}
                        <div className='md:col-span-2'>
                            <label className='block mb-2 font-medium text-gray-700'>
                                Hospital / Clinic
                            </label>

                            <input
                                type="text"
                                name="hospital"
                                value={doctor.hospital}
                                onChange={handleChange}
                                className='w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary'
                            />
                        </div>

                        {/* About */}
                        <div className='md:col-span-2'>
                            <label className='block mb-2 font-medium text-gray-700'>
                                About
                            </label>

                            <textarea
                                name="about"
                                value={doctor.about}
                                onChange={handleChange}
                                rows={5}
                                className='w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none'
                            />
                        </div>

                        {/* Address Line 1 */}
                        <div>
                            <label className='block mb-2 font-medium text-gray-700'>
                                Address Line 1
                            </label>

                            <input
                                type="text"
                                name="line1"
                                value={doctor.address.line1}
                                onChange={handleAddressChange}
                                className='w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary'
                            />
                        </div>

                        {/* Address Line 2 */}
                        <div>
                            <label className='block mb-2 font-medium text-gray-700'>
                                Address Line 2
                            </label>

                            <input
                                type="text"
                                name="line2"
                                value={doctor.address.line2}
                                onChange={handleAddressChange}
                                className='w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary'
                            />
                        </div>

                    </div>

                    <button

                        onClick={updateProfile}

                        className='mt-8 bg-primary text-white px-8 py-3 rounded-lg hover:opacity-90 transition-all'

                    >
                        Update Profile
                    </button>

                </div>

            </div>

        </>

    )

}

export default DoctorProfile