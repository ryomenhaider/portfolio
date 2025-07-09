import React from 'react';

const CTA = () => {
  return (
    <div className='bg-gradient-to-r from-gray-900 to-black py-16 px-6 text-white'>
      <div className='max-w-3xl mx-auto text-center'>
        <h2 className='text-4xl font-bold mb-4'>Let’s Automate Something Real</h2>
        <p className='text-lg text-gray-300 mb-8'>
          Tired of wasting hours on manual tasks? Let me build an AI system that does it for you — fast, clean, and custom to your workflow.
        </p>
        <a
          href='mailto:your@email.com'
          className='inline-block bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300'
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default CTA;

