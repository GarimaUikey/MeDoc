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

const App = () => {
  const location = useLocation();

  const isDoctorPage =

    location.pathname.includes("doctor");
  return (
    <>
      <div className='mx-4 sm:mx-[10%] '  >
        {
          !isDoctorPage && <Navbar />
        }
        <Routes>
          <Route path='/login' element={<Auth />} />
          <Route path='/doctor-dashboard' element={<DoctorDashboard />} />
          {/* <Route path='/doctor-auth' element={<DoctorAuth />} /> */}
          <Route path='/doctor-profile' element={<DoctorProfile />} />
          <Route path='/' element={<Home />} />
          <Route path='/payments' element={<Payments />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/doctors' element={<Doctors />} />
          <Route path='/order-success' element={<OrderSuccess />} />
          <Route path='/doctors/:speciality' element={<Doctors />} />
          {/* <Route path='/Login' element={<Login />} /> */}
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/MyProfile' element={<MyProfile />} />
          <Route path='/myappointments' element={<MyAppointments />} />
          <Route path='/appointment/:docID' element={<Appointment />} />
          <Route path='/ordernow' element={<OrderNow />} />
        </Routes>
      </div>
      <Footer />
    </>



  )
}

export default App
