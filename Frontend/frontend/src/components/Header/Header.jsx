import React,{ useState, useEffect } from 'react'
import './Header.css'
const Header = () => {
   
  return (
        <div className='header' >
        <div className='header-contents'>
          <h5>100% Authentic & Certified Medicines</h5>            
            <h2>Healthcare made Simple, Care made Personal</h2>
            <p>Order Medicines, Book doctor appointments and Consult online - all in one trusted platform.</p>
            <div className='header-buttons'>
              <button className='one'>Order Medicine</button>
            <button  className='two'>Book Appointments</button>
            </div>
        </div>
      
    </div>
  )
}

export default Header
