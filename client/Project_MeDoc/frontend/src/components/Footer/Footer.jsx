import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='flex flex-col items-center gap-10 pt-5 px-[8vw] bg-primary text-[#d9d9d9]' id='footer'>
        
        <div className='w-full grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-20 max-w-[80%] mx-auto '>
            {/* ----- Left Section ----- */}
            <div className='flex flex-col items-start gap-5'>
                <img className="w-30 bg-white" src={assets.logo} alt="" />
                <p className="text-1xl leading-6">MeDoc is a complete online healthcare platform that lets users order genuine medicines and book doctor appointments with ease. Designed for convenience and reliability, MeDoc helps people manage their health needs anytime, making healthcare simple, accessible, and stress-free.</p>
                <div className='flex gap-4 cursor-pointer'>
                    <img className="w-10" src={assets.facebook_icon} alt="" />
                    <img className="w-10" src={assets.twitter_icon} alt="" />
                    <img className="w-10" src={assets.linkedin_icon} alt="" />
                </div>
            </div>


            {/* ----- Center Section ----- */}
            <div  className='flex flex-col items-start gap-5'>
                <h2  className='text-white text-xl font-semibold'>COMPANY</h2>
                <ul  className='flex flex-col text-1xl gap-2 cursor-pointer'>
                    <li className="hover:text-white transition-all">Home</li>
                    <li className="hover:text-white transition-all">About us</li>
                    <li className="hover:text-white transition-all">Contact Us</li>
                    <li className="hover:text-white transition-all">Privacy Policy</li>
                </ul>
            </div >
            {/* ----- Right Section ----- */}
            <div className='flex flex-col items-start gap-5'>
            <h2  className='text-white text-xl font-semibold'>GET IN TOUCH</h2>
            <ul className='flex flex-col gap-2'>
                <li>+1-123-456-7890</li>
                <li>contact@medigo.com</li>
            </ul>   
            </div>         
        </div>
        

        {/* Bottom Copyright Section */}
        <div className='w-full pt-1 pb-1'>
            <hr className='border-none h-[1px] bg-gray-600 ' />
            <p className="text-center text-sm">Copyright 2026 © Medigo.com - All Rights Reserved</p>
        </div>      
      
    </div>
  )
}

export default Footer
