import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MyAppointments from './pages/MyAppointments'
import Appointment from './pages/Appointment'
import OrderNow from './pages/OrderNow/OrderNow'

const App = () => {
  return (
    <>
    <div className='mx-4 sm:mx-[10%] '  >
      <Navbar/>
      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route  path='/cart' element={<Cart/>}/>
        <Route  path='/order' element={<PlaceOrder/>}/>
        <Route path='/doctors'  element={<Doctors/>}/>
        <Route path='/doctors/:speciality'  element={<Doctors/>}/>
        <Route path='/Login'  element={<Login/>}/>
        <Route path='/About'  element={<About/>}/>
        <Route path='/Contact'  element={<Contact/>}/>
        <Route path='/MyProfile'  element={<MyProfile/>}/>
        <Route path='/myappointments'  element={<MyAppointments/>}/>
        <Route path='/appointment/:docID'  element={<Appointment/>}/>
        <Route path='/ordernow' element={<OrderNow/>}/>
      </Routes>      
    </div> 
    <Footer/> 
    </>
    
    
    
  )
}

export default App
