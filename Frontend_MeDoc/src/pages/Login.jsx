import { toast } from 'react-toastify'
import React, { useState } from 'react'
import axios from 'axios'

const Login = () => {

  const [state, setState] = useState('Sign Up')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      if (state === "Sign Up") {

        const response = await axios.post(
          "http://localhost:5000/api/auth/signup",
          {
            name,
            email,
            password
          }
        );

        toast.success("Account created successfully!");

        setState("Login");

      } else {

        const response = await axios.post(
          "http://localhost:5000/api/auth/login",
          {
            email,
            password
          }
        );
        
        // save token of user//
        localStorage.setItem("token", response.data.token);

        // saving the user //
        localStorage.setItem(
          "user",
          JSON.stringify(response.data.user)
        );

        toast.success("Login successful!");

        console.log(response.data);

        window.location.href = "/";


      }

    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div className='pt-25 mt-7 mb-18 sm:pt-16 py-10'>
      <hr className=" h-[1px] bg-gray-200 border-none w-full" />
      <div className='mt-4'>
        <form onSubmit={handleSubmit} className='min-h-[80vh] flex items-center'>
          <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-znic-600 text-sm shadow-lg'>
            <p className='text-2xl font-semibold'>{state === 'Sign Up' ? "Create Account" : "Login"} </p>
            <p>Please {state === 'Sign Up' ? "sign up" : "log in"} to book Appointment</p>
            {
              state === "Sign Up" &&
              <div className='w-full'>
                <p>Full Name</p>
                <input className='border border-znic-300 rounded w-full p-2 mt-1' type="text" onChange={(e) => setName(e.target.value)} value={name} required />
              </div>
            }



            <div className='w-full'>
              <p>Email</p>
              <input className='border border-znic-300 rounded w-full p-2 mt-1' type="email" onChange={(e) => setEmail(e.target.value)} value={email} required />
            </div>
            <div className='w-full'>
              <p>Password</p>
              <input className='border border-znic-300 rounded w-full p-2 mt-1' type="password" onChange={(e) => setPassword(e.target.value)} value={password} required />
            </div>

            <button type='submit' className='bg-primary text-white w-full py-2 rounded-md text-base'>{state === 'Sign Up' ? "Create Account" : "Login"} </button>
            {
              state === "Sign Up"
                ? <p>Already have an account? <span onClick={() => setState('Login')} className='text-primary underline cursor-pointer'>Login here</span></p>
                : <p>Create a new account?  <span onClick={() => setState('Sign Up')} className='text-primary underline cursor-pointer'>Click here</span></p>
            }
          </div>
        </form>



      </div>
    </div>
  )
}

export default Login
