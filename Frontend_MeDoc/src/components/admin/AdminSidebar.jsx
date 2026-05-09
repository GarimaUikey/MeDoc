import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { assets } from '../../assets/assets'

const AdminSidebar = () => {

    const navigate = useNavigate();

    const location = useLocation();

    const logoutAdmin = () => {

        localStorage.removeItem("admin");

        localStorage.removeItem("adminToken");

        navigate("/admin-login");

    };

    const menuItems = [

        {
            name: "Dashboard",
            path: "/admin-dashboard"
        },

        {
            name: "Doctors",
            path: "/admin-doctors"
        },

        {
            name: "Appointments",
            path: "/admin-appointments"
        },

        {
            name: "Orders",
            path: "/admin-orders"
        },

        {
            name: "Users",
            path: "/admin-users"
        }

    ];

    return (

        <div className='w-64 min-h-screen bg-white shadow-lg border-r fixed left-0 top-0 pt-8 px-4'>

            <div
                onClick={() => navigate("/admin-dashboard")}
                className='mb-10 cursor-pointer'
            >

                <img
                    src={assets.logo}
                    alt="MeDoc Logo"
                    className='w-40'
                />

                <h1 className='text-2xl font-bold text-primary mt-2'>
                    Admin Panel
                </h1>

            </div>

            <div className='flex flex-col gap-3'>

                {

                    menuItems.map((item, index) => (

                        <button

                            key={index}

                            onClick={() => navigate(item.path)}

                            className={`text-left px-4 py-3 rounded-lg transition-all

                            ${location.pathname === item.path

                                    ? "bg-primary text-white"

                                    : "hover:bg-gray-100 text-gray-700"
                                }`}

                        >

                            {item.name}

                        </button>

                    ))

                }

                <button

                    onClick={logoutAdmin}

                    className='mt-10 bg-red-500 text-white px-4 py-3 rounded-lg hover:bg-red-600 transition-all'

                >

                    Logout

                </button>

            </div>

        </div>

    )

}

export default AdminSidebar