import React, { useEffect, useState } from 'react'
import AdminSidebar from '../components/admin/AdminSidebar'
import axios from '../utils/axios'
import { toast } from 'react-toastify'

const AdminUsers = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {

        try {

            const token = localStorage.getItem(

                "adminToken"

            );

            const response = await axios.get(

                "/admin/users",

                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }

            );

            setUsers(response.data.users);

        } catch (error) {

            console.log(error);

        }

    };

    const deleteUser = async (userId) => {

        try {

            const token = localStorage.getItem(

                "adminToken"

            );

            const response = await axios.delete(

                `/admin/user/${userId}`,

                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }

            );

            toast.success(response.data.message);

            fetchUsers();

        } catch (error) {

            toast.error(error.response.data.message);

        }

    };

    useEffect(() => {

        fetchUsers();

    }, []);

    return (

        <div className='flex bg-gray-100 min-h-screen'>

            <AdminSidebar

                sidebarOpen={sidebarOpen}

                setSidebarOpen={setSidebarOpen}

            />

            <div className='lg:hidden mb-6'>

                <button

                    onClick={() => setSidebarOpen(true)}

                    className='text-3xl'

                >

                    ☰

                </button>

            </div>

            <div className='lg:ml-64 flex-1 p-4 sm:p-8 overflow-x-auto'>

                <h1 className='text-2xl sm:text-4xl font-bold text-primary mb-8 break-words'>
                    Users Management
                </h1>

                <div className='bg-white rounded-2xl shadow-md overflow-x-auto'>

                    <table className='min-w-[600px] w-full'>

                        <thead className='bg-primary text-white'>

                            <tr>

                                <th className='p-4 text-left'>
                                    Name
                                </th>

                                <th className='p-4 text-left'>
                                    Email
                                </th>

                                <th className='p-4 text-left'>
                                    Action
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {

                                users.map((user, index) => (

                                    <tr

                                        key={index}

                                        className='border-b'

                                    >

                                        <td className='p-4'>
                                            {user.name}
                                        </td>

                                        <td className='p-4'>
                                            {user.email}
                                        </td>

                                        <td className='p-4'>

                                            <button

                                                onClick={() =>
                                                    deleteUser(user._id)
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

export default AdminUsers