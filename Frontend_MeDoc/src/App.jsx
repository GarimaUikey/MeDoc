import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import Doctors from './pages/Doctors'
// import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MyAppointments from './pages/MyAppointments'
import Appointment from './pages/Appointment'
import OrderNow from './pages/OrderNow/OrderNow'
// import DoctorAuth from './pages/DoctorAuth'
import DoctorDashboard from './pages/DoctorDashboard'
import { useLocation } from 'react-router-dom'
import Auth from './pages/Auth'
import Payments from './pages/Payments'
import OrderSuccess from './pages/OrderSuccess'
import DoctorProfile from './pages/DoctorProfile'
import MyOrders from './pages/MyOrders/MyOrders'
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'
import AdminDoctors from './pages/AdminDoctors'
import AdminAppointments from './pages/AdminAppointments'
import AdminUsers from './pages/AdminUsers'
import ProtectedAdminRoute from './components/protected/ProtectedAdminRoute'
import ProtectedDoctorRoute from './components/protected/ProtectedDoctorRoute'
import ProtectedUserRoute from './components/protected/ProtectedUserRoute'
import AdminOrders from './pages/AdminOrders'


const App = () => {
  const location = useLocation();

  const isDoctorPage =

    location.pathname.includes("doctor");

  const isAdminPage =

    location.pathname.includes("admin");
  return (
    <>
      <div className='mx-4 sm:mx-[10%] '  >
        {
          !isDoctorPage && !isAdminPage && <Navbar />
        }
        <Routes>
          <Route path='/admin-orders' element={<ProtectedAdminRoute><AdminOrders /></ProtectedAdminRoute>} />
          <Route path='/admin-users' element={<ProtectedAdminRoute><AdminUsers /></ProtectedAdminRoute>} />
          <Route path='/admin-appointments' element={<ProtectedAdminRoute><AdminAppointments /></ProtectedAdminRoute>} />
          <Route path='/admin-doctors' element={<ProtectedAdminRoute><AdminDoctors /></ProtectedAdminRoute>} />
          <Route path='/admin-dashboard' element={<ProtectedAdminRoute><AdminDashboard /> </ProtectedAdminRoute>} />
          <Route path='/login' element={<Auth />} />
          <Route path='/doctor-dashboard' element={<ProtectedDoctorRoute><DoctorDashboard /></ProtectedDoctorRoute>} />
          {/* <Route path='/doctor-auth' element={<DoctorAuth />} /> */}
          <Route path='/doctor-profile' element={<DoctorProfile />} />
          <Route path='/admin-login' element={<AdminLogin />} />
          <Route path='/' element={<Home />} />
          <Route path='/payments' element={<Payments />} />
          <Route path='/cart' element={<ProtectedUserRoute><Cart /></ProtectedUserRoute>} />
          <Route path='/order' element={<ProtectedUserRoute><PlaceOrder /></ProtectedUserRoute>} />
          <Route path='/doctors' element={<Doctors />} />
          <Route path='/order-success' element={<OrderSuccess />} />
          <Route path='/doctors/:speciality' element={<Doctors />} />
          {/* <Route path='/Login' element={<Login />} /> */}
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/MyProfile' element={<ProtectedUserRoute><MyProfile /></ProtectedUserRoute>} />
          <Route path='/myappointments' element={<ProtectedUserRoute><MyAppointments /></ProtectedUserRoute>} />
          <Route path='/appointment/:docID' element={<Appointment />} />
          <Route path='/ordernow' element={<OrderNow />} />
          <Route path="/my-orders" element={<MyOrders />} />
        </Routes>
      </div>
      <Footer />
    </>



  )
}

export default App
