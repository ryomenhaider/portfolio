import React, { useState, useEffect } from 'react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      title: 'AI Proposal Generator for Agencies',
      description:
        'Automated the creation of personalized proposals based on client form input. Reduced manual work, improved conversion.',
      tools: 'Tally + Make.com + GPT-4 + PDF Export',
      result: 'Saved 6+ hours/week and helped close 2 clients in 3 days.',
      category: 'AI Automation'
    },
    {
      title: 'CRM Automation for Coaching Business',
      description:
        'Built a workflow to auto-onboard leads, update Airtable, send Slack alerts, and sync Google Calendar events.',
      tools: 'Make.com + Airtable + Slack + Google Workspace',
      result: 'Zero manual effort after a lead signs up — fully hands-off.',
      category: 'Workflow Automation'
    },
    {
      title: 'Content Insights Bot',
      description:
        'Scraped YouTube comments, summarized them using GPT-4, and logged insights into Notion for content planning.',
      tools: 'Python + GPT-4 + Notion API + Cron Jobs',
      result: 'Delivered audience sentiment analysis automatically every week.',
      category: 'Data Processing'
    },
  ];

  return (
    <div className='bg-black py-16 px-6 text-white min-h-screen relative overflow-hidden'>
      {/* Enhanced animated background */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {[...Array(30)].map((_, i) => (
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
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-20 h-20 border border-white/10 rotate-45 animate-spin" style={{ animationDuration: '20s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-16 h-16 border border-white/10 animate-pulse" />
        <div className="absolute top-3/4 left-1/3 w-12 h-12 border border-white/10 rounded-full animate-bounce" style={{ animationDuration: '3s' }} />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/30 to-black pointer-events-none" />

      <div className='max-w-6xl mx-auto text-center relative z-10'>
        {/* Enhanced title section */}
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className='text-6xl font-bold mb-10 text-white hover:text-gray-300 transition-colors duration-300'>
            Projects
          </h2>
          <div className='w-24 h-1 bg-white mx-auto mb-12 rounded-full' />
        </div>

        {/* Projects grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center'>
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group transition-all duration-700 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              } hover:scale-105 hover:-translate-y-2`}
              style={{ transitionDelay: `${index * 200 + 500}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className='relative w-80 h-80 cursor-pointer perspective-1000'>
                <div className={`relative w-full h-full transition-transform duration-700 transform-style preserve-3d ${
                  hoveredIndex === index ? 'rotate-y-180' : ''
                }`}>
                  
                  {/* Front */}
                  <div className={`absolute w-full h-full backface-hidden bg-gray-900 rounded-xl border border-gray-700 shadow-2xl hover:shadow-3xl hover:border-white transition-all duration-500`}>
                    <div className='relative z-10 h-full flex flex-col items-center justify-center p-6 text-center'>
                      
                      {/* Category badge */}
                      <div className='absolute top-4 left-4 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-gray-400 font-medium'>
                        {project.category}
                      </div>
                      
                      {/* Icon placeholder with geometric design */}
                      <div className='w-16 h-16 mb-6 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:rotate-180 transition-transform duration-500'>
                        <div className='w-8 h-8 border-2 border-white rounded-sm rotate-45' />
                      </div>
                      
                      <h3 className='text-xl font-bold mb-4 text-white drop-shadow-lg leading-tight'>
                        {project.title}
                      </h3>
                      
                      <div className='w-16 h-0.5 bg-white/50 rounded-full mb-4' />
                      
                      <p className='text-gray-400 text-sm hover:text-white transition-colors duration-300'>
                        Hover to see details
                      </p>
                    </div>
                    
                    {/* Animated border */}
                    <div className='absolute inset-0 rounded-xl border border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                  </div>

                  {/* Back */}
                  <div className={`absolute w-full h-full backface-hidden rotate-y-180 bg-gray-900 rounded-xl border border-gray-700 shadow-2xl hover:border-white transition-all duration-500`}>
                    <div className='h-full p-6 flex flex-col justify-center text-left space-y-4'>
                      
                      <div className='transform transition-all duration-500 hover:translate-x-2'>
                        <h4 className='text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wide'>
                          Description
                        </h4>
                        <p className='text-gray-300 text-sm leading-relaxed hover:text-white transition-colors duration-300'>
                          {project.description}
                        </p>
                      </div>
                      
                      <div className='transform transition-all duration-500 hover:translate-x-2'>
                        <h4 className='text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wide'>
                          Tools
                        </h4>
                        <p className='text-gray-300 text-sm hover:text-white transition-colors duration-300'>
                          {project.tools}
                        </p>
                      </div>
                      
                      <div className='transform transition-all duration-500 hover:translate-x-2'>
                        <h4 className='text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wide'>
                          Result
                        </h4>
                        <p className='text-white text-sm font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text '>
                          {project.result}
                        </p>
                      </div>
                      
                      {/* Bottom accent */}
                      <div className='absolute bottom-4 left-6 right-6 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating action hint */}
        <div className={`mt-16 transition-all duration-1000 delay-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className='inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300'>
            <span className='text-sm'>Hover over cards to explore</span>
            <div className='w-2 h-2 bg-white rounded-full animate-pulse' />
          </div>
        </div>
      </div>

      {/* Custom styles for 3D transforms */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style {
          transform-style: preserve-3d;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default Projects;