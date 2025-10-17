import React, { useState, useEffect } from 'react'
<<<<<<< HEAD
import ContactPop from './components/ContactPop'
=======
import ContactPop from './ContactPop'
>>>>>>> 0a0e9479cd8717c1e5505d7f2ccb7c0a6706280b

const NavBar = () => {
  const [activeItem, setActiveItem] = useState('Home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navItems = ['Home', 'About', 'Why Me', 'Skills', 'Projects']

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
<<<<<<< HEAD
      setIsScrolled(scrollTop > 50)
=======
      setIsScrolled(scrollTop > 50) // Trigger after 50px scroll
>>>>>>> 0a0e9479cd8717c1e5505d7f2ccb7c0a6706280b
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Popup */}
      {showPopup && <ContactPop onClose={() => setShowPopup(false)} />}

<<<<<<< HEAD
      <div className="fixed top-0 left-0 w-full z-50 text-white shadow-lg">
        <div
          className={`flex justify-between items-center mx-2 my-2 p-2 sm:p-3 md:p-4 rounded-full transition-all duration-500 shadow-2xl ${
            isScrolled
              ? 'bg-white/10 backdrop-blur-md border border-white/30'
              : 'bg-transparent border-transparent'
          }`}
        >
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <h1 className="text-lg sm:text-xl font-bold tracking-tight hover:scale-105 transition-transform duration-300 cursor-pointer">
              CodeFlow.Alpha
            </h1>
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center bg-white text-black rounded-full shadow backdrop-blur-md border border-white/30 py-1 px-4 md:px-6">
=======
      <div className='fixed top-0 left-0 w-full z-50 text-white shadow-lg'>
        <div className={`flex justify-between items-center p-6 text-white h-16 mx-4 my-6 rounded-full px-8 shadow-2xl transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/10 backdrop-blur-md border border-white/30' 
            : 'bg-transparent border-transparent'
        }`}>
          <div className='flex items-center'>
            <h1 className='text-2xl font-bold tracking-tight hover:scale-105 transition-transform duration-300 cursor-pointer'>
              CodeFlow.Alpha
            </h1>
            <div className='ml-2 w-2 h-2 bg-white rounded-full animate-pulse'></div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden backdrop-blur-md border border-white/30 p-6 md:flex items-center bg-white text-black rounded-full py-0.5 px-2 shadow">
>>>>>>> 0a0e9479cd8717c1e5505d7f2ccb7c0a6706280b
            {['Home', 'About', 'Why Me', 'Projects', 'Skills'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
<<<<<<< HEAD
                className="px-3 md:px-4 py-1.5 mx-1 rounded-full hover:bg-black hover:text-white transition duration-200 text-sm"
=======
                className="px-4 py-2 mx-1 rounded-full hover:bg-black hover:text-white transition duration-200"
>>>>>>> 0a0e9479cd8717c1e5505d7f2ccb7c0a6706280b
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Contact Button */}
          <button
            onClick={() => setShowPopup(true)}
<<<<<<< HEAD
            className="hidden md:block bg-white text-black px-5 py-1.5 rounded-full font-semibold transition-all duration-500 hover:bg-black hover:text-white hover:shadow-lg hover:scale-105 border-2 border-transparent hover:border-white relative overflow-hidden group text-sm"
          >
            <span className="relative z-10">Contact</span>
            <div className="absolute inset-0 bg-black rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-8 h-8 flex flex-col justify-center items-center space-y-1 hover:scale-110 transition-transform duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span
              className={`w-5 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            ></span>
            <span
              className={`w-5 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`w-5 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            ></span>
=======
            className='hidden md:block bg-white text-black px-6 py-2 rounded-full font-semibold transition-all duration-500 hover:bg-black hover:text-white hover:shadow-lg hover:scale-105 border-2 border-transparent hover:border-white group'>
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
>>>>>>> 0a0e9479cd8717c1e5505d7f2ccb7c0a6706280b
          </button>
        </div>

        {/* Mobile Menu */}
<<<<<<< HEAD
        <div
          className={`md:hidden mx-4 bg-white text-black rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transition-all duration-500 ${
            isMenuOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'
          }`}
        >
          <div className="p-4 space-y-2">
            {navItems.map((item) => (
=======
        <div className={`md:hidden mx-4 bg-white text-black rounded-2xl shadow-2xl border-2 border-gray-100 overflow-hidden transition-all duration-500 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className='p-4 space-y-2'>
            {navItems.map((item, index) => (
>>>>>>> 0a0e9479cd8717c1e5505d7f2ccb7c0a6706280b
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
              >
                {item}
              </a>
            ))}
<<<<<<< HEAD
            <button
              className="w-full mt-4 bg-black text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-white hover:text-black hover:shadow-lg border-2 border-black"
=======
            <button 
              className='w-full mt-4 bg-black text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-white hover:text-black hover:shadow-lg border-2 border-black'
>>>>>>> 0a0e9479cd8717c1e5505d7f2ccb7c0a6706280b
              onClick={() => {
                setShowPopup(true)
                setIsMenuOpen(false)
              }}
            >
              Contact
            </button>
          </div>
        </div>

        {/* Animated Background Elements */}
<<<<<<< HEAD
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-4 left-1/4 w-1 h-1 bg-white rounded-full animate-ping opacity-20"></div>
          <div
            className="absolute top-8 right-1/3 w-1 h-1 bg-white rounded-full animate-ping opacity-20"
            style={{ animationDelay: '1s' }}
          ></div>
          <div
            className="absolute bottom-4 left-1/3 w-1 h-1 bg-white rounded-full animate-ping opacity-20"
            style={{ animationDelay: '2s' }}
          ></div>
=======
        <div className='absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden'>
          <div className='absolute top-4 left-1/4 w-1 h-1 bg-white rounded-full animate-ping opacity-20'></div>
          <div className='absolute top-8 right-1/3 w-1 h-1 bg-white rounded-full animate-ping opacity-20' style={{ animationDelay: '1s' }}></div>
          <div className='absolute bottom-4 left-1/3 w-1 h-1 bg-white rounded-full animate-ping opacity-20' style={{ animationDelay: '2s' }}></div>
>>>>>>> 0a0e9479cd8717c1e5505d7f2ccb7c0a6706280b
        </div>
      </div>
    </>
  )
}

export default NavBar