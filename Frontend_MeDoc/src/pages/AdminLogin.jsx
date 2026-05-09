import React, { useState } from 'react'
import axios from '../utils/axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {

    const navigate = useNavigate();

    const [data, setData] = useState({

        email: "",
        password: ""

    });

    const handleChange = (e) => {

        setData({

            ...data,

            [e.target.name]: e.target.value

        });

    };

    const loginAdmin = async (e) => {

        e.preventDefault();

        try {

            const response = await axios.post(

                "/admin/login",

                data

            );

            toast.success("Admin Login Successful");

            localStorage.setItem(

                "adminToken",

                response.data.token

            );

            localStorage.setItem(

                "admin",

                JSON.stringify(response.data.admin)

            );

            navigate("/admin-dashboard");

        } catch (error) {

            toast.error(

                error.response?.data?.message || "Login failed"

            );

        }

    };

    return (

        <div className='min-h-screen flex items-center justify-center bg-gray-100 px-4'>

            <form

                onSubmit={loginAdmin}

                className='bg-white p-8 rounded-2xl shadow-lg w-full max-w-md'

            >

                <h1 className='text-3xl font-semibold text-center text-primary mb-8'>
                    Admin Login
                </h1>

                <div className='flex flex-col gap-5'>

                    <input

                        type="email"

                        name="email"

                        value={data.email}

                        onChange={handleChange}

                        placeholder='Admin Email'

                        className='border p-3 rounded-lg outline-none focus:ring-2 focus:ring-primary'

                        required

                    />

                    <input

                        type="password"

                        name="password"

                        value={data.password}

                        onChange={handleChange}

                        placeholder='Password'

                        className='border p-3 rounded-lg outline-none focus:ring-2 focus:ring-primary'

                        required

                    />

                    <button

                        type="submit"

                        className='bg-primary text-white py-3 rounded-lg hover:opacity-90 transition-all'

                    >
                        Login
                    </button>

                </div>

            </form>

        </div>

    )

}

export default AdminLogin