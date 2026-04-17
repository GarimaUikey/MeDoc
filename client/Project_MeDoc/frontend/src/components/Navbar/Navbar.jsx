import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate();
    const[showMenu,setshowMenu]= useState(false);
    const[token,setToken] = useState(true);
    const [menu,setMenu]= useState("home");

  return (
    <div classname='my-[16px]'>
    <div className='navbar'>
        <img onClick={()=>navigate('/')}  src={assets.logo} alt="" className="logo" />
        <ul className='hidden md:flex items-start gap-5 font-medium text-[#00173d]'>
            
            <NavLink to='/'>
                <li className='py-1'>HOME</li>
                <hr className='border-none outline-none h-0.5 w-3/5 m-auto'/>
            </NavLink>
            <NavLink to='/Doctors'>
                <li className='py-1'>ALL DOCTORS</li>
                <hr className='border-none outline-none h-0.5 w-3/5 m-auto'/>
            </NavLink>
            <NavLink to='/About'>
                <li className='py-1'>ABOUT</li>
                <hr className='border-none outline-none h-0.5 w-3/5 m-auto'/>
            </NavLink>
            <NavLink to='/Contact'>
                <li className='py-1'>CONTACT</li>
                <hr className='border-none outline-none h-0.5 w-3/5 m-auto'/>
            </NavLink>
            
        </ul>
        <div className="navbar-right">
            <img className='w-6' src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
                <img className='w-6' src={assets.cart_icon} alt="" />
                <div className="dot"></div>
            </div>


            <div>
                {
                    token
                    ? 
                    <div className='flex items-center gap-2 cursor-pointer group relative'>
                        <img className='w-8 rounded-full' src={assets.profile_pic} alt="" />
                        <img className='w-2.5' src={assets.dropdown_icon} alt="" />
                        <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                            <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                                <p onClick={()=>navigate('myprofile')} className='hover:text-black cursor-pointer'>My Profile</p>
                                <p onClick={()=>navigate('myappintments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                                <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                            </div>
                        </div>
                    </div>
                    : <button onClick={()=>navigate('/login')} >Create Account</button>
                }
            
            </div>
        </div>   
    </div>
    </div>
    
  )
}

export default Navbar
