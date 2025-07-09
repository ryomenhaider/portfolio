import React from 'react';

const WhyMe = () => {
  return (
    <div className='bg-gradient-to-b from-gray-900 to-black py-16 px-6 text-white'>
      <div className='max-w-5xl mx-auto text-center'>
        <h2 className='text-4xl font-bold mb-6'>Why Work With Me?</h2>
        <p className='text-gray-300 text-lg mb-12'>
          I don't just automate tasks — I eliminate friction. Here's what sets me apart.
        </p>

        <div className='grid md:grid-cols-3 gap-8'>
          <div className='border border-white/10 rounded-xl p-6 bg-white/5 hover:bg-white/10 transition duration-300'>
            <h3 className='text-xl font-semibold mb-2'>Real-World Impact</h3>
            <p className='text-gray-300 text-sm'>
              I build systems that save time, boost profit, and remove bottlenecks. No fluff. Just results.
            </p>
          </div>

          <div className='border border-white/10 rounded-xl p-6 bg-white/5 hover:bg-white/10 transition duration-300'>
            <h3 className='text-xl font-semibold mb-2'>Custom AI Workflows</h3>
            <p className='text-gray-300 text-sm'>
              Every business is different. I design AI-powered automations tailored to your exact operations.
            </p>
          </div>

          <div className='border border-white/10 rounded-xl p-6 bg-white/5 hover:bg-white/10 transition duration-300'>
            <h3 className='text-xl font-semibold mb-2'>Fast Execution</h3>
            <p className='text-gray-300 text-sm'>
              I move fast, communicate clearly, and build systems that work without endless back-and-forth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyMe;
