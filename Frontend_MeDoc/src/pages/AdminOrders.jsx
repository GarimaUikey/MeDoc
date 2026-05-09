import React, { useEffect, useState } from 'react'
import AdminSidebar from '../components/admin/AdminSidebar'
import axios from '../utils/axios'
import { toast } from 'react-toastify'

const AdminOrders = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const [orders, setOrders] = useState([]);

    const fetchOrders = async () => {

        try {

            const token = localStorage.getItem(

                "adminToken"

            );

            const response = await axios.get(

                "/admin/orders",

                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }

            );

            setOrders(response.data.orders);

        } catch (error) {

            console.log(error);

        }

    };

    const updateOrderStatus = async (

        orderId,
        status

    ) => {

        try {

            const token = localStorage.getItem(

                "adminToken"

            );

            const response = await axios.put(

                `/admin/order-status/${orderId}`,

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

            fetchOrders();

        } catch (error) {

            toast.error(error.response?.data?.message);

        }

    };

    useEffect(() => {

        fetchOrders();

    }, []);

    return (

        <div className='flex bg-gray-100 min-h-screen'>

            <AdminSidebar

                sidebarOpen={sidebarOpen}

                setSidebarOpen={setSidebarOpen}

            />

            <div className='lg:ml-64 flex-1 p-4 sm:p-8'>

                {/* Mobile Menu */}

                <div className='lg:hidden mb-5'>

                    <button

                        onClick={() => setSidebarOpen(true)}

                        className='text-3xl'

                    >

                        ☰

                    </button>

                </div>

                {/* Page Title */}

                <h1 className='text-2xl sm:text-4xl font-bold text-primary mb-6 break-words'>

                    Orders Management

                </h1>

                {/* Orders */}

                <div className='flex flex-col gap-5'>

                    {

                        orders.map((order, index) => (

                            <div

                                key={index}

                                className='bg-white rounded-2xl shadow-md p-4 sm:p-6'

                            >

                                <div className='flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5'>

                                    {/* LEFT SECTION */}

                                    <div className='flex-1 min-w-0'>

                                        <h2 className='text-xl sm:text-2xl font-semibold mb-2 break-words'>

                                            {order.user?.name}

                                        </h2>

                                        <p className='text-gray-600 text-sm sm:text-base break-all mb-2'>

                                            {order.user?.email}

                                        </p>

                                        <p className='text-lg font-medium text-primary mb-4'>

                                            ₹{order.totalAmount}

                                        </p>

                                        {/* Medicines */}

                                        <div className='flex flex-col gap-1 mb-4'>

                                            {order.items.map((item, i) => (

                                                <p
                                                    key={i}
                                                    className='text-sm sm:text-base'
                                                >

                                                    • Medicine {item.medicine} × {item.quantity}

                                                </p>

                                            ))}

                                        </div>

                                        <p className='mb-2 text-sm sm:text-base'>

                                            <span className='font-semibold'>

                                                Payment:

                                            </span>

                                            {" "}

                                            <span className='capitalize'>

                                                {order.paymentStatus}

                                            </span>

                                        </p>

                                        <p className='text-sm text-gray-500'>

                                            {

                                                new Date(order.createdAt)

                                                    .toLocaleDateString()

                                            }

                                        </p>

                                    </div>

                                    {/* RIGHT SECTION */}

                                    <div className='w-full lg:w-52 flex flex-col gap-3'>

                                        <select

                                            value={order.status}

                                            onChange={(e) =>

                                                updateOrderStatus(

                                                    order._id,
                                                    e.target.value

                                                )

                                            }

                                            className='w-full border border-gray-300 px-3 py-3 rounded-lg outline-none text-sm bg-white'

                                        >

                                            <option value="pending">

                                                Pending

                                            </option>

                                            <option value="confirmed">

                                                Confirmed

                                            </option>

                                            <option value="shipped">

                                                Shipped

                                            </option>

                                            <option value="delivered">

                                                Delivered

                                            </option>

                                            <option value="cancelled">

                                                Cancelled

                                            </option>

                                        </select>

                                        <div className='w-full bg-primary text-white py-3 rounded-lg text-center capitalize text-sm font-medium'>

                                            {order.status}

                                        </div>

                                    </div>

                                </div>

                            </div>

                        ))

                    }

                </div>

            </div>

        </div>

    )

}

export default AdminOrders