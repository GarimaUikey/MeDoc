import React from 'react'
import { useNavigate } from 'react-router-dom'

const OrderSuccess = () => {

  const navigate = useNavigate();

  return (

    <div className='pt-25 mt-7 mb-18 sm:pt-16 py-10 min-h-screen flex items-center justify-center px-4'>

      <div className='bg-white shadow-2xl rounded-2xl p-10 max-w-xl w-full text-center'>

        <div className='text-6xl mb-5'>
          ✅
        </div>

        <h1 className='text-4xl font-bold text-primary mb-4'>

          Order Placed Successfully

        </h1>

        <p className='text-gray-600 text-lg mb-8'>

          Your medicines will be delivered shortly.

        </p>

        <button

          onClick={() => navigate("/OrderNow")}

          className='bg-primary text-white px-8 py-3 rounded-xl hover:opacity-90 transition-all duration-300'

        >

          Continue Shopping

        </button>
         
      </div>

    </div>

  )

}

export default OrderSuccess