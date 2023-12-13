import React from 'react'

import loginImg from '../assets/login.jpg'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
            <img className='w-full h-full object-cover' src={loginImg} alt="" />
        </div>
        <div className='bg-gray-800 flex flex-col justify-center'>
            <h1 className='w-full my-10 py-5 text-white font-bold text-center'>TRAIN TICKET BOOKING SYSTEM </h1>
            <form className='max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8'>
                <h2 className='text-white font-bold text-center'>LOG IN</h2>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Username</label>
                    <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Password</label>
                    <input className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" />
                </div>
                
                
                <Link to="/signup"><button className='w-full my-5 py-2 bg-teal-500  text-white font-semibold'>LOGIN</button></Link>
                
            </form>
        </div>
    </div>
  )
}
