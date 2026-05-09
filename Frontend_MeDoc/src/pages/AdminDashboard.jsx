import React, { useEffect, useState } from 'react'
import AdminSidebar from '../components/admin/AdminSidebar'
import axios from '../utils/axios'

const AdminDashboard = () => {

  const admin = JSON.parse(

    localStorage.getItem("admin")

  );

  const [stats, setStats] = useState({

    totalDoctors: 0,
    totalUsers: 0,
    totalAppointments: 0,
    totalOrders: 0

  });

  const fetchDashboardStats = async () => {

    try {

      const token = localStorage.getItem(

        "adminToken"

      );

      const response = await axios.get(

        "/admin/dashboard-stats",

        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }

      );

      setStats(response.data.stats);

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {

    fetchDashboardStats();

  }, []);

  return (

    <div className='flex bg-gray-100 min-h-screen'>

      <AdminSidebar />

      <div className='ml-64 flex-1 p-8'>

        <h1 className='text-4xl font-bold text-primary mb-2'>
          Admin Dashboard
        </h1>

        <p className='text-gray-600 mb-10'>
          Welcome {admin?.name}
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>

          <div className='bg-white rounded-2xl shadow-md p-6'>
            <h2 className='text-gray-500 mb-2'>
              Total Doctors
            </h2>

            <p className='text-4xl font-bold text-primary'>
              {stats.totalDoctors}
            </p>
          </div>

          <div className='bg-white rounded-2xl shadow-md p-6'>
            <h2 className='text-gray-500 mb-2'>
              Total Users
            </h2>

            <p className='text-4xl font-bold text-primary'>
              {stats.totalUsers}
            </p>
          </div>

          <div className='bg-white rounded-2xl shadow-md p-6'>
            <h2 className='text-gray-500 mb-2'>
              Appointments
            </h2>

            <p className='text-4xl font-bold text-primary'>
              {stats.totalAppointments}
            </p>
          </div>

          <div className='bg-white rounded-2xl shadow-md p-6'>
            <h2 className='text-gray-500 mb-2'>
              Orders
            </h2>

            <p className='text-4xl font-bold text-primary'>
              {stats.totalOrders}
            </p>
          </div>

        </div>

      </div>

    </div>

  )

}

export default AdminDashboard