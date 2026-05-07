import { toast } from 'react-toastify'
import React, { useState } from 'react'
import axios from '../utils/axios'

const DoctorAuth = () => {

    const [state, setState] = useState('Sign Up')

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [specialization, setSpecialization] = useState('')

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            if (state === "Sign Up") {

                const response = await axios.post(

                    "/doctor/signup",

                    {
                        name,
                        specialization,
                        email,
                        password
                    }

                );

                toast.success(response.data.message);

                setState("Login");

            } else {

                const response = await axios.post(

                    "/doctor/login",

                    {
                        email,
                        password
                    }

                );

                // save doctor token
                localStorage.setItem(

                    "doctorToken",

                    response.data.token

                );

                // save doctor data
                localStorage.setItem(

                    "doctor",

                    JSON.stringify(response.data.doctor)

                );

                toast.success("Doctor Login successful!");

                console.log(response.data);

                window.location.href = "/doctor-dashboard";

            }

        } catch (error) {

            console.log(error.response.data);

            toast.error(error.response.data.message);

        }

    };

    return (

        <div className='pt-25 mt-7 mb-18 sm:pt-16 py-10'>

            <hr className=" h-[1px] bg-gray-200 border-none w-full" />

            <div className='mt-4'>

                <form onSubmit={handleSubmit} className='min-h-[80vh] flex items-center'>

                    <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>

                        <p className='text-2xl font-semibold'>
                            {
                                state === 'Sign Up'
                                    ? "Doctor Registration"
                                    : "Doctor Login"
                            }
                        </p>

                        <p>
                            Please {
                                state === 'Sign Up'
                                    ? "sign up"
                                    : "log in"
                            } to access Doctor Dashboard
                        </p>

                        {
                            state === "Sign Up" &&
                            <>
                                <div className='w-full'>

                                    <p>Full Name</p>

                                    <input
                                        className='border border-zinc-300 rounded w-full p-2 mt-1'
                                        type="text"
                                        onChange={(e) => setName(e.target.value)}
                                        value={name}
                                        required
                                    />

                                </div>

                                <div className='w-full'>

                                    <p>Specialization</p>

                                    <select
                                        className='border border-zinc-300 rounded w-full p-2 mt-1'
                                        onChange={(e) => setSpecialization(e.target.value)}
                                        value={specialization}
                                        required
                                    >

                                        <option value="">Select Specialization</option>

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
                            </>
                        }

                        <div className='w-full'>

                            <p>Email</p>

                            <input
                                className='border border-zinc-300 rounded w-full p-2 mt-1'
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                required
                            />

                        </div>

                        <div className='w-full'>

                            <p>Password</p>

                            <input
                                className='border border-zinc-300 rounded w-full p-2 mt-1'
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                required
                            />

                        </div>

                        <button
                            type='submit'
                            className='bg-primary text-white w-full py-2 rounded-md text-base'
                        >
                            {
                                state === 'Sign Up'
                                    ? "Create Doctor Account"
                                    : "Doctor Login"
                            }
                        </button>

                        {
                            state === "Sign Up"
                                ? (
                                    <p>
                                        Already have an account?
                                        <span
                                            onClick={() => setState('Login')}
                                            className='text-primary underline cursor-pointer ml-1'
                                        >
                                            Login here
                                        </span>
                                    </p>
                                )
                                : (
                                    <p>
                                        Create a new doctor account?
                                        <span
                                            onClick={() => setState('Sign Up')}
                                            className='text-primary underline cursor-pointer ml-1'
                                        >
                                            Click here
                                        </span>
                                    </p>
                                )
                        }

                    </div>

                </form>

            </div>

        </div>

    )

}

export default DoctorAuth