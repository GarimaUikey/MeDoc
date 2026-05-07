import React, { useState } from 'react'
import axios from '../utils/axios'
import { toast } from 'react-toastify'

const Auth = () => {

    const [role, setRole] = useState("user");

    const [mode, setMode] = useState("login");

    const [name, setName] = useState("");

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [specialization, setSpecialization] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            // =========================
            // USER SIGNUP
            // =========================

            if (role === "user" && mode === "signup") {

                const response = await axios.post(

                    "/auth/signup",

                    {
                        name,
                        email,
                        password
                    }

                );

                toast.success(response.data.message);

                setMode("login");

            }

            // =========================
            // USER LOGIN
            // =========================

            else if (role === "user" && mode === "login") {

                const response = await axios.post(

                    "/auth/login",

                    {
                        email,
                        password
                    }

                );

                localStorage.setItem(

                    "token",

                    response.data.token

                );

                localStorage.setItem(

                    "user",

                    JSON.stringify(response.data.user)

                );

                toast.success("Login successful!");

                window.location.href = "/";

            }

            // =========================
            // DOCTOR SIGNUP
            // =========================

            else if (role === "doctor" && mode === "signup") {

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

                setMode("login");

            }

            // =========================
            // DOCTOR LOGIN
            // =========================

            else if (role === "doctor" && mode === "login") {

                const response = await axios.post(

                    "/doctor/login",

                    {
                        email,
                        password
                    }

                );

                localStorage.setItem(

                    "doctorToken",

                    response.data.token

                );

                localStorage.setItem(

                    "doctor",

                    JSON.stringify(response.data.doctor)

                );

                toast.success("Doctor login successful!");

                window.location.href = "/doctor-dashboard";

            }

        } catch (error) {

            toast.error(

                error.response?.data?.message ||

                "Something went wrong"

            );

        }

    };
    return (

        <div className='pt-25 mt-7 mb-18 sm:pt-16 py-10'>

            <hr className="h-[1px] bg-gray-200 border-none w-full" />

            <div className='mt-4'>

                <form
                    onSubmit={handleSubmit}
                    className='min-h-[80vh] flex items-center'
                >

                    <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>

                        <p className='text-2xl font-semibold'>

                            {
                                role === "user"

                                    ? mode === "login"
                                        ? "User Login"
                                        : "Create User Account"

                                    : mode === "login"
                                        ? "Doctor Login"
                                        : "Doctor Registration"
                            }

                        </p>

                        <p>

                            {
                                role === "user"

                                    ? mode === "login"
                                        ? "Login to book appointments"
                                        : "Create account to continue"

                                    : mode === "login"
                                        ? "Doctor access portal login"
                                        : "Register as a doctor"
                            }

                        </p>

                        {
                            mode === "signup" && (

                                <div className='w-full'>

                                    <p>Full Name</p>

                                    <input
                                        className='border border-zinc-300 rounded w-full p-2 mt-1'
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />

                                </div>

                            )
                        }

                        {
                            role === "doctor" && mode === "signup" && (

                                <div className='w-full'>

                                    <p>Specialization</p>

                                    <select
                                        className='border border-zinc-300 rounded w-full p-2 mt-1'
                                        value={specialization}
                                        onChange={(e) => setSpecialization(e.target.value)}
                                        required
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

                            )
                        }

                        <div className='w-full'>

                            <p>Email</p>

                            <input
                                className='border border-zinc-300 rounded w-full p-2 mt-1'
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />

                        </div>

                        <div className='w-full'>

                            <p>Password</p>

                            <input
                                className='border border-zinc-300 rounded w-full p-2 mt-1'
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />

                        </div>
                        <button
                            type='submit'
                            className='bg-primary text-white w-full py-2 rounded-md text-base'
                        >

                            {
                                role === "user"

                                    ? mode === "login"
                                        ? "Login"
                                        : "Create Account"

                                    : mode === "login"
                                        ? "Doctor Login"
                                        : "Create Doctor Account"
                            }

                        </button>

                        <div className='w-full flex flex-col gap-2 mt-3'>

                            {
                                role === "user" && mode === "login" && (

                                    <>
                                        <button
                                            type='button'
                                            onClick={() => {
                                                setRole("doctor");
                                                setMode("login");
                                            }}
                                            className='text-primary underline cursor-pointer text-left'
                                        >
                                            Doctor Sign In
                                        </button>

                                        <button
                                            type='button'
                                            onClick={() => {
                                                setRole("user");
                                                setMode("signup");
                                            }}
                                            className='text-primary underline cursor-pointer text-left'
                                        >
                                            Create User Account
                                        </button>
                                    </>

                                )
                            }

                            {
                                role === "user" && mode === "signup" && (

                                    <>
                                        <button
                                            type='button'
                                            onClick={() => {
                                                setRole("doctor");
                                                setMode("signup");
                                            }}
                                            className='text-primary underline cursor-pointer text-left'
                                        >
                                            Doctor Sign Up
                                        </button>

                                        <button
                                            type='button'
                                            onClick={() => {
                                                setRole("user");
                                                setMode("login");
                                            }}
                                            className='text-primary underline cursor-pointer text-left'
                                        >
                                            User Sign In
                                        </button>
                                    </>

                                )
                            }

                            {
                                role === "doctor" && mode === "login" && (

                                    <>
                                        <button
                                            type='button'
                                            onClick={() => {
                                                setRole("doctor");
                                                setMode("signup");
                                            }}
                                            className='text-primary underline cursor-pointer text-left'
                                        >
                                            Doctor Sign Up
                                        </button>

                                        <button
                                            type='button'
                                            onClick={() => {
                                                setRole("user");
                                                setMode("login");
                                            }}
                                            className='text-primary underline cursor-pointer text-left'
                                        >
                                            User Sign In
                                        </button>
                                    </>

                                )
                            }

                            {
                                role === "doctor" && mode === "signup" && (

                                    <>
                                        <button
                                            type='button'
                                            onClick={() => {
                                                setRole("doctor");
                                                setMode("login");
                                            }}
                                            className='text-primary underline cursor-pointer text-left'
                                        >
                                            Doctor Sign In
                                        </button>

                                        <button
                                            type='button'
                                            onClick={() => {
                                                setRole("user");
                                                setMode("signup");
                                            }}
                                            className='text-primary underline cursor-pointer text-left'
                                        >
                                            User Sign Up
                                        </button>
                                    </>

                                )
                            }

                        </div>

                    </div>

                </form>

            </div>

        </div>

    )

}

export default Auth