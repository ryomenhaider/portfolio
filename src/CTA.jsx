import React, { useState } from 'react';
import ContactPop from './components/ContactPop';

const CTA = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleEmailClick = () => {
    setShowPopup(true);
  };

  return (
    <div className='bg-black py-20 px-6 text-white relative overflow-hidden'>
      {/* Contact Popup */}
      {showPopup && (
        <ContactPop onClose={() => setShowPopup(false)} />
      )}

      {/* Animated background pattern */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-0 left-0 w-full h-full'>
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className='absolute bg-white rounded-full animate-pulse'
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${Math.random() * 3 + 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className='max-w-4xl mx-auto text-center relative z-10'>
        <div className='mb-6'>
          <h2 className='text-5xl md:text-6xl font-bold mb-2 tracking-tight'>
            Let's Automate
          </h2>
          <h2 className='text-5xl md:text-6xl font-bold bg-white text-black px-4 py-2 inline-block transform -rotate-1 shadow-lg'>
            Something Real
          </h2>
        </div>

        <div className='mb-12 space-y-4'>
          <p className='text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto'>
            Tired of wasting hours on manual tasks? Let me build an AI system that does it for you — 
            <span className='text-white font-semibold hover:bg-white hover:text-black hover:rounded cursor-default'> fast, clean, and custom</span> to your workflow.
          </p>
          
          <div className='flex flex-wrap justify-center gap-4 mt-8'>
            {['⚡ Lightning Fast', '🎯 Precision Built', '🔧 Custom Solutions'].map((feature, index) => (
              <div key={index} className='border border-white border-opacity-30 px-4 py-2 rounded-full text-sm hover:bg-white hover:text-black transition-all duration-300 cursor-default'>
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
          <button
            onClick={handleEmailClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`group relative inline-flex items-center px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
              isHovered ? 'bg-white text-black shadow-2xl' : 'bg-white text-black hover:bg-gray-100'
            }`}
          >
            <span className='relative z-10'>Contact Me</span>
            <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-10 rounded-full transition-opacity duration-300' />
          </button>
          
          <a
            href='#projects'
            className='inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105'
          >
            View My Work
          </a>
        </div>

        <div className='mt-16 pt-8 border-t border-white border-opacity-20'>
          <div className='flex flex-col sm:flex-row justify-center items-center gap-8 text-gray-400'>
            <div className='flex items-center gap-2'>
              <div className='w-3 h-3 bg-white rounded-full animate-pulse' />
              <span className='text-sm'>Available for new projects</span>
            </div>
            <div className='flex items-center gap-2'>
              <div className='w-3 h-3 bg-white rounded-full' />
              <span className='text-sm'>Response within 24 hours</span>
            </div>
            <div className='flex items-center gap-2'>
              <div className='w-3 h-3 bg-white rounded-full' />
              <span className='text-sm'>Free consultation</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
