import React, { useState, useEffect } from 'react'

const Loading = () => {
  const [animationPhase, setAnimationPhase] = useState('drop') // 'drop', 'pause', 'moveToNav'
  
  useEffect(() => {
    const pauseTimer = setTimeout(() => setAnimationPhase('pause'), 1000)
    const moveTimer = setTimeout(() => setAnimationPhase('moveToNav'), 3000)
    return () => {
      clearTimeout(pauseTimer)
      clearTimeout(moveTimer)
    }
  }, [])

  return (
    <div className="min-h-screen w-screen h-screen bg-black text-white relative overflow-hidden flex flex-col items-center justify-center px-6 sm:px-10 md:px-16 pt-12 sm:pt-20">

      {/* Main loading content */}
      <div className="flex items-center justify-center h-full relative z-10">
        <div
          className={`font-bold transition-all duration-1000 ease-out text-4xl sm:text-5xl md:text-6xl lg:text-7xl ${
            animationPhase === 'drop'
              ? 'transform -translate-y-96 opacity-0'
              : animationPhase === 'pause'
              ? 'transform translate-y-0 opacity-100'
              : 'transform -translate-y-80 -translate-x-96 scale-50 opacity-0'
          }`}
          style={{
            animation: animationPhase === 'drop' ? 'dropIn 1s ease-out 0.5s forwards' : 'none',
          }}
        >
          CodeFlow.<span className="text-gray-400">Alpha</span>
        </div>
      </div>

      {/* Bottom dots */}
      <div
        className={`fixed bottom-8 sm:bottom-10 left-1/2 transform -translate-x-1/2 transition-opacity duration-500 ${
          animationPhase === 'moveToNav' ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="flex space-x-2 sm:space-x-3">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full animate-pulse"
              style={{
                animationDelay: `${i * 0.3}s`,
                animationDuration: '1.5s',
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes dropIn {
          0% { 
            transform: translateY(-400px); 
            opacity: 0; 
          }
          60% { 
            transform: translateY(20px); 
            opacity: 1; 
          }
          80% { 
            transform: translateY(-10px); 
            opacity: 1; 
          }
          100% { 
            transform: translateY(0); 
            opacity: 1; 
          }
        }
      `}</style>
    </div>
  )
}

export default Loading
