import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='pt-25 mt-7 mb-18 sm:pt-16 py-10'>
      <hr className=" h-[1px] bg-gray-200 border-none w-full" />
      <div className='mt-4'>
        <div className='text-center text-2xl pt-2 text-gray-500'>
          <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>        
        </div>
        <div className='my-10 flex flex-col md:flex-row gap-12'>
          <img className='w-full md:max-w-[360px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-4/5 text-sm text-gray-600'>
          <p>Welcome to MeDoc. MeDoc is your trusted digital healthcare partner, designed to make medical services simple, fast, and reliable. We connect patients with qualified doctors for easy appointment booking while also providing access to essential medicines through our online platform. Our goal is to reduce waiting time, improve accessibility, and bring healthcare closer to you.</p>
          <p>With a user-friendly interface and secure services, MeDoc ensures a smooth and convenient experience for every user. We believe healthcare should be accessible anytime, anywhere, and we are committed to delivering quality care with trust, efficiency, and innovation at the core of everything we do.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Our vision is to transform healthcare by making it accessible, affordable, and convenient for everyone. We aim to create a seamless digital platform where patients can connect with trusted doctors and essential services anytime, ensuring better health outcomes through innovation, reliability, and a patient-first approach in every interaction.</p>
          </div>
        </div>

        <div className='text-xl my-8'>
          <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
        </div>

        <div className='flex flex-col md:flex-row mb-10'>
          <div className='border px-5 md:px-8 py-4 sm:py-8 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
            <b>Efficiency</b>
            <p>We ensure efficiency by delivering quick appointments, fast medicine access, and smooth user experience. Our platform minimizes delays, saves time, and simplifies healthcare processes for better and faster service.</p>
          </div>
          <div className='border px-5 md:px-8 py-4 sm:py-8 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
            <b>Convenience</b>
            <p>We prioritize convenience by bringing healthcare services to your fingertips. From booking doctor appointments to ordering medicines online, our platform ensures easy access, anytime and anywhere, with a simple and user-friendly experience.</p>
          </div>
          <div className='border px-5 md:px-8 py-4 sm:py-8 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
            <b>Personalization</b>
            <p>We focus on personalization by tailoring healthcare services to individual needs. From recommending the right doctors to customized health solutions, our platform ensures a more relevant, comfortable, and user-centric experience for every patient.</p>
          </div>
        </div>

      
      </div>           
    </div>
  )
}

export default About
