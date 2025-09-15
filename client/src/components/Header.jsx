import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  const {currentUser}=useSelector(state=>state.user)
  return (
<header className='bg-amber-700 p-3 flex justify-between items-center'>
    <h1 className='font-bold text-3xl sm:text-5xl'>
        <span className='text-[#F5FAE1]'>Bulk </span> 
        <span className='text-[#EEE6CA]'>Mail</span>
    </h1>
    <div className='flex gap-5 ' >
        <p className='text-white'>Home</p>
      <Link to={'/signin'} className='text-white hover:opacity-50'> Sign Out
    </Link>
  
    </div>
    
</header>
  )
}

export default Header