import React from 'react'

const NavBar = () => {
  return (
    <div className='flex justify-around  items-center opacity-90 bg-black text-white h-12 m-4 rounded-full'>
        <h1 className='text-2xl font-bold'>Haider Ali</h1>
        <nav className='flex items-center justify-center bg-white text-black rounded-full py-2 px-6 duration-200 space-x-2'>
            <a href="" className='hover:bg-black hover:text-white hover:rounded-full hover:py-1 duration-700 hover:px-2 '>About</a>
            <a href="" className='hover:bg-black hover:text-white hover:rounded-full hover:py-1 duration-700 hover:px-2 '>Why Me</a>
            <a href="" className='hover:bg-black hover:text-white hover:rounded-full hover:py-1 duration-700 hover:px-2 '>Skills</a>
            <a href="" className='hover:bg-black hover:text-white hover:rounded-full hover:py-1 duration-700 hover:px-2 '>Projects</a>
            <a href="" className='hover:bg-black hover:text-white hover:rounded-full hover:py-1 duration-700 hover:px-2 '>Home</a>
        </nav>
        <button className='bg-white p-1 h-[40px] duration-400 w-[90px] rounded-full text-black hover:bg-black hover:border-2 hover:text-white '>Contact </button>
    </div>
  )
}

export default NavBar