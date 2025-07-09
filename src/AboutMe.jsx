import React from 'react';
import AboutImg from './assets/about.png';

const AboutMe = () => {
  return (
    <div className='bg-[linear-gradient(to_right,rgba(0,0,0,0.6),rgba(30,30,30,0.6))] 
backdrop-blur-md bg-gradient-to-r from-black/90 to-gray-900/90 ...'>
  <div className='text-white flex flex-col lg:flex-row items-center justify-center gap-10 px-6 py-12 bg-gradient-to-r from-black to-gray-900'>

      <div>
        <img
          src={AboutImg}
          alt="About Me"
          className='w-[300px] h-auto object-contain rounded-2xl border border-white/20 shadow-xl hover:scale-105 transition duration-300'
        />
      </div>

      <div className='max-w-xl'>
        <h1 className='text-4xl font-bold mb-4'>About Me</h1>
        <p className='text-lg leading-relaxed text-gray-300'>
          I build AI systems that <span className='text-white font-semibold'>actually work</span>.<br /><br />
          From lead gen to client onboarding, proposal generation to CRM updates—if it’s repetitive, I automate it.<br /><br />
          I use tools like <span className='text-white'>Make.com, GPT-4, Voiceflow, Airtable, and Google Workspace</span> to create workflows that save <span className='text-white'>dozens of hours a week</span>.<br /><br />
          I don’t just play with tools—I solve problems that make business owners say:<br />
          <span className='italic text-gray-400'>"Wait… this saves us HOW much time?"</span>
        </p>
      </div>

    </div>
</div>

    
  );
};

export default AboutMe;
