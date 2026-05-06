import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'


const MyProfile = () => {

  const [userData, setUserData] = useState({
    name: '',
    image: assets.profile_pic,
    email: '',
    phone: '',
    address: {
      line1: '',
      line2: ''
    },
    gender: '',
    dob: ''
  })

  const [isEdit, setIsEdit] = useState(false)

  useEffect(() => {

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser) {

      setUserData({
        name: storedUser.name || '',
        image: assets.profile_pic,
        email: storedUser.email || '',
        phone: storedUser.phone || '',
        address: {
          line1: storedUser.address?.line1 || '',
          line2: storedUser.address?.line2 || ''
        },
        gender: storedUser.gender || '',
        dob: storedUser.dob || ''
      });

    }

  }, []);

  const updateProfile = async () => {

    try {

      if (userData.phone.length !== 10) {

        toast.error("Phone number must be exactly 10 digits");

        return;

      }

      const token = localStorage.getItem("token");

      const response = await axios.put(
        "http://localhost:5000/api/user/update",

        {
          name: userData.name,
          phone: userData.phone,
          gender: userData.gender,
          dob: userData.dob,
          address: userData.address
        },

        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      console.log(response.data.user);

      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      setUserData(response.data.user);

      toast.success("Profile updated successfully!");

      setIsEdit(false);

    } catch (error) {

      console.log(error.response.data);

      toast.error("Failed to update profile");

    }

  };

  return (
    <div className='pt-25 mt-7 mb-18 sm:pt-16 py-10'>
      <hr className=" h-[1px] bg-gray-200 border-none w-full" />
      <div className='mt-4 ma-w-lg flex flex-col gap-2 text-sm'>
        <img className='w-36 rounded' src={userData.image} alt="" />
        {
          isEdit
            ? <input className='bg-gray-50 text-3xl font-medium max-w-60 mt-4' type="text" value={userData.name} onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))} />
            : <p className='font-medium text-3xl text-neutral-800 mt-4'>{userData.name} </p>
        }
        <hr className='bg-zinc-400 h-[1px] border-none w-1/3' />

        <div>
          <p className='text-neutral-500 underline mt-3'>CONTACT INFORMATION</p>
          <div className='grid grid-cols-[1fr_4fr] gap-y-2.5 mt-3 text-neutral-700'>
            <p className='font-medium'>Email ID: </p><p className='text-blue-500'> {userData.email}</p>
            <p className='font-medium'>Phone:</p>
            {
              isEdit
                ? <input
                  className='bg-gray-100 max-w-52'
                  type="text"
                  value={userData.phone}
                  maxLength={10}
                  onChange={(e) => {

                    const value = e.target.value.replace(/\D/g, '');

                    setUserData(prev => ({
                      ...prev,
                      phone: value
                    }));

                  }}
                />
                : <p className='text-blue-400'>{userData.phone || "Not Added"} </p>
            }
            <p className='font-medium'>Address:</p>
            {
              isEdit
                ? <p>
                  <input className='bg-gray-50' onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} value={userData.address.line1} type="text" />
                  <br />
                  <input className='bg-gray-50' onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} value={userData.address.line2} type="text" />
                </p>
                : <p className='text-gray-500'>
                  {userData.address.line1 || "Not Added"}<br />
                  {userData.address.line2 || "Not Added"} </p>
            }
          </div>
        </div>
        <div>
          <p className='text-neutral-500 underline mt-3'>BASIC INFORMATION</p>
          <div className='grid grid-cols-[1fr_4fr] gap-y-2.5 mt-3 text-neutral-700'>
            <p className='font-medium'>Gender: </p>
            {
              isEdit
                ? <select
                  className='max-w-28 bg-gray-100'
                  onChange={(e) =>
                    setUserData(prev => ({
                      ...prev,
                      gender: e.target.value
                    }))
                  }
                  value={userData.gender}
                >

                  <option value="">Select</option>

                  <option value="Male">Male</option>

                  <option value="Female">Female</option>

                </select>
                : <p className='text-gray-400'>{userData.gender || "Not Added"} </p>
            }
            <p className='font-medium'>Birthday</p>
            {
              isEdit
                ? <input className='max-w-28 bg-gray-100' type="date" onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))} value={userData.dob} />
                : <p className='text-gray-400'>{userData.dob || "Not Added"}</p>
            }

          </div>
        </div>
        <div className='mt-10'>
          {
            isEdit
              ? <button
                className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all'
                onClick={updateProfile}>Save Information</button>
              : <button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all' onClick={() => setIsEdit(true)}>Edit</button>
          }
        </div>
      </div>
    </div>

  )
}

export default MyProfile
