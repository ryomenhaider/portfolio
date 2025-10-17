import React, { useState } from 'react';
import aboutImage from './assets/about.png';
import ContactPop from './components/ContactPop';

const AboutMe = () => {
  const [hoveredTool, setHoveredTool] = useState(null);
  const [isQuoteHovered, setIsQuoteHovered] = useState(false);
  const [showContact, setShowContact] = useState(false); // NEW STATE

  const tools = ['Make.com', 'GPT-4', 'Voiceflow', 'Airtable', 'Google Workspace'];

  return (
    <div className="min-h-screen mt-1 bg-black text-white overflow-hidden relative">
      {/* Contact Popup */}
      {showContact && (
        <ContactPop onClose={() => setShowContact(false)} />
      )}

      {/* Animated Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-white rounded-full opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-40 w-1 h-1 bg-white rounded-full opacity-25 animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-white rounded-full opacity-20 animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-16 px-6 py-16 max-w-7xl mx-auto">
        
        {/* Profile Image */}
        <div className="flex-shrink-0 group">
          <div className="w-80 h-80 rounded-3xl overflow-hidden border border-gray-700 shadow-2xl hover:scale-110 hover:border-white transition-all duration-500 hover:shadow-3xl">
            <img 
              src={aboutImage}
              alt="About Me" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="max-w-2xl">
          <h1 className="text-6xl font-bold mb-8 text-white hover:text-gray-300 transition-colors duration-300 cursor-default">
            About Me
          </h1>
          
          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-gray-300 hover:text-white transition-colors duration-300 cursor-default">
              I build AI systems that{' '}
              <span className="text-white font-semibold hover:bg-white hover:text-black px-1 rounded transition-all duration-300 cursor-default">actually work</span>.
            </p>

            <p className="text-gray-300 hover:text-white transition-colors duration-300 cursor-default">
              From lead gen to client onboarding, proposal generation to CRM updates—if it's repetitive, I automate it.
            </p>

            <div className="py-4">
              <p className="text-gray-300 mb-4 hover:text-white transition-colors duration-300 cursor-default">I use cutting-edge tools like:</p>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, index) => (
                  <span
                    key={tool}
                    className={`px-4 py-2 rounded-full font-medium cursor-pointer transition-all duration-300 transform ${
                      hoveredTool === index 
                        ? 'bg-white text-black scale-110 shadow-lg' 
                        : 'bg-gray-800 text-white hover:bg-gray-700 hover:scale-105'
                    }`}
                    onMouseEnter={() => setHoveredTool(index)}
                    onMouseLeave={() => setHoveredTool(null)}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-gray-300 hover:text-white transition-colors duration-300 cursor-default">
              to create workflows that save{' '}
              <span className="text-white font-semibold hover:bg-white hover:text-black px-1 rounded transition-all duration-300 cursor-default">dozens of hours a week</span>.
            </p>

            <div 
              className={`bg-gray-900 rounded-2xl p-6 border transition-all duration-500 hover:scale-105 cursor-default ${
                isQuoteHovered ? 'border-white shadow-xl' : 'border-gray-700'
              }`}
              onMouseEnter={() => setIsQuoteHovered(true)}
              onMouseLeave={() => setIsQuoteHovered(false)}
            >
              <p className="text-gray-300 mb-4 hover:text-white transition-colors duration-300">
                I don't just play with tools—I solve problems that make business owners say:
              </p>
              <blockquote className={`text-xl italic text-gray-400 border-l-4 pl-4 transition-all duration-300 ${
                isQuoteHovered ? 'border-white text-white transform translate-x-2' : 'border-gray-600'
              }`}>
                "Wait… this saves us HOW much time?"
              </blockquote>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <button 
                onClick={() => setShowContact(true)}
                className="group bg-white hover:bg-gray-200 text-black font-bold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95">
                <span className="flex items-center gap-2">
                  Let's Build Something Amazing
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
