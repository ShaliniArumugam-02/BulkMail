import React from 'react'
import landing_bg from '../assets/landing_bg.avif';
import {Link} from 'react-router-dom'

const Landing = () => {
  return (
    <div className='h-screen w-full bg-cover bg-center relative ' 
    >
        <img 
    src={landing_bg} 
    alt="landing_bg" 
    className="absolute inset-0 h-full w-full object-cover" />
<div className='absolute inset-0 bg-yellow-300/40'></div>
{/* content */}
        <div className='relative flex flex-col items-center justify-center h-full text-white text-center px-4'>
            <h1 className='text-4xl sm:text-6xl font-extrabold mb-4 animate-bounce '>
                <span className='bg-gradient-to-r from-blue-500 via-[#84994F] to-[#001BB7] bg-clip-text text-transparent'>Bulk Mail</span>
                
            </h1>
            <p className='text-lg mb-8 max-w-xl text-blue-800
            font-extrabold p-2 sm:text-2xl'>Upload your E-mail list and send personalized emails to everyone at once. 
          Simple, fast, and efficient!</p>
          {/* buttons */}
        <div className='flex flex-col space-y-5' >
            <Link to={"/signin"} className='hover:underline'>
            <button className=' rounded-2xl text-amber-900 p-3 bg-[#C6AE82] shadow-lg  shadow-[#D9C4B0] sm:text-xl'>SignIn
            </button>
                  <span className='ml-3 sm:text-lg text-amber-800'>to Continue</span>
            </Link>
            <Link to={"signup"} className='hover:underline'>
            <span className='mr-3 sm:text-lg text-amber-800'>New User? </span>
            <button  className=' rounded-2xl p-3 bg-[#D9C4B0] shadow-lg text-amber-900 shadow-[#D9C4B5] sm:text-xl'> SignUp</button>
            </Link>
        </div>
        
        </div>
    </div>
  )
}

export default Landing