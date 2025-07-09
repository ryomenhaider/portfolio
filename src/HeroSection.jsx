import React from 'react';
import Typewriter from './Typewriter';
import NavBar from './NavBar';
import HeroImg from './assets/hero.png'; // Make sure path is correct

const HeroSection = () => {
  return (
    <div>
      <NavBar />
      <div className='flex flex-col lg:flex-row justify-center items-center h-[450px] bg-gradient-to-r from-black to-gray-1000 text-white px-4'>
        <div className='flex flex-col items-center lg:items-start justify-center text-center lg:text-left max-w-lg'>
          <h1 className='text-5xl font-bold mb-4'>
            <Typewriter />
          </h1>
          <p className='text-xl mb-8'>
            I build AI automation systems that save hours and scale businesses.
          </p>
          <button className='bg-white p-1 h-[40px] duration-400 w-[90px] rounded-full text-black hover:bg-black hover:border-2 hover:text-white '>
            Contact
          </button>
        </div>

        <div className='mt-8 lg:mt-0 lg:ml-10'>
            <img
                src={HeroImg}
                alt="Hero"
                 className='w-[300px] h-auto object-contain rounded-2xl border border-white/20 shadow-xl hover:scale-105 transition duration-300'
            />
        </div>

      </div>
    </div>
  );
};

export default HeroSection;
