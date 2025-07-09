import React from 'react';
import { FaEnvelope, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-gradient-to-r from-black to-gray-900 text-gray-400 py-10 px-6'>
      <div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center'>

        {/* Name + Tag */}
        <div className='text-center md:text-left mb-4 md:mb-0'>
          <h3 className='text-lg font-semibold text-white'>Haider Ali Khan</h3>
          <p className='text-sm'>AI Automation Expert | Builder of Intelligent Systems</p>
        </div>

        {/* Links */}
        <div className='flex gap-6 text-xl'>
          <a href='mailto:your@email.com' target='_blank' rel='noopener noreferrer'>
            <FaEnvelope className='hover:text-white transition duration-200' />
          </a>
          <a href='https://wa.me/yourwhatsappnumber' target='_blank' rel='noopener noreferrer'>
            <FaWhatsapp className='hover:text-white transition duration-200' />
          </a>
          <a href='https://www.linkedin.com/in/yourprofile' target='_blank' rel='noopener noreferrer'>
            <FaLinkedin className='hover:text-white transition duration-200' />
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className='mt-6 text-center text-xs text-gray-500'>
        &copy; {new Date().getFullYear()} All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
