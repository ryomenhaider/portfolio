import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import HeroImg from './assets/hero.png'; // Pl  aceholder for hero image  

console.log("If you are seeing this then fuck yeah, the code is working!");
const Typewriter = () => {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  
  const strings = [
    "I Automate Your Business",
    "I Build AI Solutions",
    "I Save You Time",
    "I Scale Your Operations"
  ];
  
  useEffect(() => {
    const currentString = strings[currentStringIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentIndex < currentString.length) {
          setText(currentString.substring(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        if (currentIndex > 0) {
          setText(currentString.substring(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        } else {
          setIsDeleting(false);
          setCurrentStringIndex((currentStringIndex + 1) % strings.length);
        }
      }
    }, isDeleting ? 50 : 100);
    
    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, currentStringIndex, strings]);
  
  return (
    <span className="text-white">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);
  
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <NavBar />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 flex flex-col lg:flex-row justify-center items-center min-h-screen px-0 pt-0">
        <div className="flex flex-col items-center lg:items-start justify-center text-center lg:text-left max-w-lg">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 hover:text-gray-300 transition-colors duration-300">
            <Typewriter />
          </h1>
          <p className="text-xl lg:text-2xl mb-8 text-gray-300 hover:text-white transition-colors duration-300 cursor-default">
            I build AI automation systems that{' '}
            <span className="text-white font-semibold hover:bg-white hover:text-black px-1 rounded transition-all duration-300">
              save hours
            </span>{' '}
            and{' '}
            <span className="text-white font-semibold hover:bg-white hover:text-black px-1 rounded transition-all duration-300">
              scale businesses
            </span>.
          </p>
          <button 
            className={`group relative overflow-hidden bg-white text-black font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 ${
              buttonHovered ? 'bg-black text-black border-2 border-white' : ''
            }`}
            onMouseEnter={() => setButtonHovered(true)}
            onMouseLeave={() => setButtonHovered(false)}
          >
            <span className="relative z-10 flex items-center gap-2">
              Contact Me
              <span className="group-hover:translate-x-1 group-hover:text-black transition-transform duration-300">
                →
              </span>
            </span>
          </button>

        </div>

        <div className="mt-12 lg:mt-0 lg:ml-16">
          <div 
            className="relative group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className={`absolute -inset-2 bg-gradient-to-r from-white/20 to-white/10 rounded-3xl blur transition-all duration-500 ${
              isHovered ? 'opacity-100 animate-pulse' : 'opacity-0'
            }`}></div>
            <div className="relative w-80 h-80 bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-white/20 shadow-2xl overflow-hidden hover:scale-110 transition-all duration-500 hover:border-white/40">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
              <img 
                src={HeroImg} 
                alt="AI Automation Hero" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;