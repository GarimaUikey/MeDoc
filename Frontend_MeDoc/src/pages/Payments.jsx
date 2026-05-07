import React from 'react'

const Payments = () => {

  return (

    <div className='pt-25 mt-7 mb-18 sm:pt-16 py-10 px-6 min-h-screen'>

      <hr className="h-[1px] bg-gray-200 border-none w-full mb-10" />

      <div className='max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-10'>

        <h1 className='text-4xl font-bold text-primary mb-4'>

          Online Payments

        </h1>

        <p className='text-gray-600 text-lg mb-8'>

          Secure online payment gateway integration
          is currently under development.

        </p>

        <div className='grid sm:grid-cols-2 gap-5 mb-8'>

          <div className='border rounded-xl p-5 shadow-sm'>

            <h2 className='font-semibold text-lg mb-2'>
              Razorpay Integration
            </h2>

            <p className='text-gray-500 text-sm'>
              Secure payment processing with Razorpay.
            </p>

          </div>

          <div className='border rounded-xl p-5 shadow-sm'>

            <h2 className='font-semibold text-lg mb-2'>
              UPI Payments
            </h2>

            <p className='text-gray-500 text-sm'>
              Fast payments using UPI apps.
            </p>

          </div>

          <div className='border rounded-xl p-5 shadow-sm'>

            <h2 className='font-semibold text-lg mb-2'>
              Card Payments
            </h2>

            <p className='text-gray-500 text-sm'>
              Debit/Credit card support.
            </p>

          </div>

          <div className='border rounded-xl p-5 shadow-sm'>

            <h2 className='font-semibold text-lg mb-2'>
              Appointment Invoice
            </h2>

            <p className='text-gray-500 text-sm'>
              Downloadable payment receipts.
            </p>

          </div>

        </div>

        <button

          disabled

          className='w-full bg-gray-400 text-white py-3 rounded-xl cursor-not-allowed text-lg'

        >

          Coming Soon

        </button>

      </div>

    </div>

  )

}

export default Payments