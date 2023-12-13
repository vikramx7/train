import React from 'react'
import { Link } from 'react-router-dom'
import loginImg from '../assets/sign.jpg'

export default function Login() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
            <img className='w-full h-full object-cover' src={loginImg} alt="" />
        </div>
        <div className='bg-white-800 flex flex-col justify-center'>
            <form className='max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8'>
                <h2 className='text-white font-bold text-center'>SIGNUP</h2>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Name</label>
                    <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" required/>
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Email Id</label>
                    <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" required/>
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Username</label>
                    <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" required/>
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Create Password</label>
                    <input className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" required/>
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Phone No</label>
                    <input className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" required/>
                </div>
                
                <button className='w-full my-5 py-2 bg-teal-500  text-white font-semibold'><Link to="/">SIGNIN</Link></button>
                
            </form>
        </div>
    </div>
  )
}
