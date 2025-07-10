import React, { useState } from 'react'

const NavBar = () => {
  const [activeItem, setActiveItem] = useState('Home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const navItems = ['About', 'Why Me', 'Skills', 'Projects', 'Home']
  
  return (
    <div className='relative'>
      <div className='flex justify-between items-center bg-black text-white h-16 mx-4 my-6 rounded-full px-8 shadow-2xl  backdrop-blur-sm'>
        {/* Logo/Name */}
        <div className='flex items-center'>
          <h1 className='text-2xl font-bold tracking-tight hover:scale-105 transition-transform duration-300 cursor-pointer'>
            Haider Ali
          </h1>
          <div className='ml-2 w-2 h-2 bg-white rounded-full animate-pulse'></div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className='hidden md:flex items-center bg-white text-black rounded-full py-2 px-4 shadow-inner'>
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className={`relative px-4 py-2 mx-1 rounded-full transition-all duration-500 ease-out cursor-pointer group ${
                activeItem === item 
                  ? 'bg-black text-white shadow-lg transform scale-105' 
                  : 'hover:bg-gray-100 hover:shadow-md hover:scale-102'
              }`}
              onClick={() => setActiveItem(item)}
            >
              {item}
              <span className='absolute inset-0 rounded-full bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300'></span>
            </a>
          ))}
        </nav>
        
        {/* Contact Button */}
        <button className='hidden md:block bg-white text-black px-6 py-2 rounded-full font-semibold transition-all duration-500 hover:bg-black hover:text-white hover:shadow-lg hover:scale-105 border-2 border-transparent hover:border-white group'>
          <span className='relative z-10'>Contact</span>
          <div className='absolute inset-0 bg-black rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-500'></div>
        </button>
        
        {/* Mobile Menu Button */}
        <button 
          className='md:hidden w-8 h-8 flex flex-col justify-center items-center space-y-1 hover:scale-110 transition-transform duration-300'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden mx-4 bg-white text-black rounded-2xl shadow-2xl border-2 border-gray-100 overflow-hidden transition-all duration-500 ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className='p-4 space-y-2'>
          {navItems.map((item, index) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className={`block px-4 py-3 rounded-xl transition-all duration-300 cursor-pointer hover:bg-black hover:text-white hover:shadow-lg transform hover:scale-102 ${
                activeItem === item ? 'bg-black text-white shadow-lg' : ''
              }`}
              onClick={() => {
                setActiveItem(item)
                setIsMenuOpen(false)
              }}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item}
            </a>
          ))}
          <button 
            className='w-full mt-4 bg-black text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-white hover:text-black hover:shadow-lg border-2 border-black'
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </button>
        </div>
      </div>
      
      {/* Animated Background Elements */}
      <div className='absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden'>
        <div className='absolute top-4 left-1/4 w-1 h-1 bg-white rounded-full animate-ping opacity-20'></div>
        <div className='absolute top-8 right-1/3 w-1 h-1 bg-white rounded-full animate-ping opacity-20' style={{animationDelay: '1s'}}></div>
        <div className='absolute bottom-4 left-1/3 w-1 h-1 bg-white rounded-full animate-ping opacity-20' style={{animationDelay: '2s'}}></div>
      </div>
    </div>
  )
}

export default NavBar