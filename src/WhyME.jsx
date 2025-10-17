import React, { useState } from 'react';
<<<<<<< HEAD
import ContactPop from './components/ContactPop'; // <-- Make sure path is correct
=======
import ContactPop from './ContactPop'; // <-- Make sure path is correct
>>>>>>> 0a0e9479cd8717c1e5505d7f2ccb7c0a6706280b

const WhyMe = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [showPopup, setShowPopup] = useState(false); // <-- Popup state

  const features = [
    {
      title: "Real-World Impact",
      description: "I build systems that save time, boost profit, and remove bottlenecks. No fluff. Just results.",
      stats: "40+ hrs/week saved"
    },
    {
      title: "Custom AI Workflows", 
      description: "Every business is different. I design AI-powered automations tailored to your exact operations.",
      stats: "100% customized"
    },
    {
      title: "Fast Execution",
      description: "I move fast, communicate clearly, and build systems that work without endless back-and-forth.",
      stats: "24-48hr delivery"
    }
  ];

  return (
    <div className='relative min-h-screen bg-black text-white overflow-hidden'>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-2 h-2 bg-white rounded-full opacity-30 animate-ping"></div>
        <div className="absolute bottom-32 left-32 w-1 h-1 bg-white rounded-full opacity-40 animate-ping delay-2000"></div>
        <div className="absolute top-1/2 left-20 w-1 h-1 bg-white rounded-full opacity-25 animate-ping delay-1500"></div>
      </div>

      <div className='relative z-10 py-20 px-6'>
        <div className='max-w-6xl mx-auto'>
          {/* Header Section */}
          <div className='text-center mb-16'>
            <div className='inline-block mb-4'>
              <span className='text-gray-400 text-sm uppercase tracking-wider font-semibold'>
                The Difference
              </span>
            </div>
            <h2 className='text-6xl md:text-7xl font-bold mb-8 leading-tight'>
              Why Work{' '}
              <span className='relative'>
                With Me?
                <div className='absolute bottom-2 left-0 w-full h-1 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500'></div>
              </span>
            </h2>
            <p className='text-gray-300 text-xl md:text-2xl mb-4 max-w-3xl mx-auto leading-relaxed'>
              I don't just automate tasks — I{' '}
              <span className='text-white font-semibold hover:bg-white hover:text-black px-2 py-1 rounded transition-all duration-300'>
                eliminate friction
              </span>
              . Here's what sets me apart.
            </p>
          </div>

          {/* Features Grid */}
          <div className='grid md:grid-cols-3 gap-8 mb-16'>
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative border rounded-2xl p-8 transition-all duration-500 cursor-pointer transform hover:scale-105 ${
                  hoveredCard === index
                    ? 'border-white bg-white/10 shadow-2xl'
                    : 'border-gray-800 bg-gray-900/50 hover:border-gray-600'
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-60 rounded-t-2xl'></div>

                <div className='relative z-10'>
                  <h3 className='text-2xl font-bold mb-4 group-hover:text-gray-200 transition-colors duration-300'>
                    {feature.title}
                  </h3>
                  <p className='text-gray-300 text-base leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300'>
                    {feature.description}
                  </p>
                  <div className='flex items-center justify-between'>
                    <span className='text-sm font-semibold text-gray-400 group-hover:text-white transition-colors duration-300'>
                      {feature.stats}
                    </span>
                    <div className='w-6 h-6 border border-gray-600 rounded-full flex items-center justify-center group-hover:border-white group-hover:bg-white transition-all duration-300'>
                      <span className='text-xs group-hover:text-black transition-colors duration-300'>→</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <div className='text-center'>
            <div className='inline-block p-8 border border-gray-800 rounded-3xl bg-gray-900/30 hover:border-white hover:bg-gray-900/60 transition-all duration-500 group'>
              <p className='text-gray-300 text-lg mb-6 group-hover:text-white transition-colors duration-300'>
                Ready to eliminate the friction in your business?
              </p>
              <button 
                onClick={() => setShowPopup(true)}
                className='bg-white hover:bg-gray-200 text-black font-bold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 group-hover:shadow-2xl'
              >
                <span className='flex items-center gap-2'>
                  Let's Talk Solutions
                  <span className='transform group-hover:translate-x-1 transition-transform duration-300'>→</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ContactPop modal */}
      {showPopup && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70'>
          <div className='relative'>
            <ContactPop onClose={() => setShowPopup(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default WhyMe;
