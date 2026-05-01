import React,{ useState, useEffect } from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom';
const Header = () => {

  const navigate = useNavigate();
   
  return (
        <div className='header' >
        <div className='header-contents'>
          <h5>100% Authentic & Certified Medicines</h5>            
            <h2>Healthcare made Simple, Care made Personal</h2>
            <p>Order Medicines, Book doctor appointments and Consult online - all in one trusted platform.</p>
            <div className='header-buttons'>
              <button onClick={() => {
    navigate('/ordernow');
    window.scrollTo(0, 0);
  }} className='one'>Order Medicine</button>
            <button onClick={() => {
    navigate('/doctors');
    window.scrollTo(0, 0);
  }}  className='two'>Book Appointments</button>
            </div>
        </div>
      
    </div>
  )
}

export default Header
