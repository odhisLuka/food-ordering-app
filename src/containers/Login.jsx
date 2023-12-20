import React from 'react'
import { loginBg, chef1 } from '../assets'

const Login = () => {
  return (
    <div className='w-screen h-screen relative overflow-hidden flex'>
      {/* background image */}
      <img
        src={loginBg}
        className='w-full h-full object-cover absolute top-0 left-0'
        alt=''
      />
      {/* content box */}
      <div className='flex flex-col items-center bg-cardOverlay w-[80%] md:w-508 h-full z-10 backdrop-blur-md p-4 px-4 py-12'>
        {/* top logo section */}
        <div className='flex items-center justify-start w-full h-10 gap-3'>
          <img src={chef1} className='w-16' alt='' />
          <h1 className='text-headingColor font-semibold text-2xl'>City</h1>
        </div>

        {/* welcome text */}
        <div className='flex flex-col items-center justify-center'>
          <p className='text-headingColor font-semibold text-3xl'>
            Welcome Back
          </p>
          <p className='text-textColor text-xl mb-5'>
            Sign-in with the following
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
