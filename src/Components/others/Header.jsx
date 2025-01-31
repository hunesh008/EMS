import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between bg-[#1C1C1C]'>
      <h1 className='text-white text-2xl  font-medium bg-[#1C1C1C]'>Hello! <br/> <span className='text-3xl  bg-[#1C1C1C] font-semibold'> Hunesh 👋</span> </h1>
      <button className='text-white text-lg  px-5 py-2 bg-red-600 rounded font-semibold '>Log Out</button>
    </div>
  )
}

export default Header
