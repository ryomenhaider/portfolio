import React, { useState } from 'react';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    {
      title: 'AI Automation',
      description:
        'I build AI-powered systems that automate repetitive workflows — lead gen, onboarding, proposal generation, CRM sync, and more.',
      tools: ['Make.com', 'Zapier', 'Tally', 'Airtable'],
      level: 'Expert',
      experience: '15+ business-ready automations',
      proficiency: 95
    },
    {
      title: 'AI Agents',
      description:
        'I design and deploy autonomous AI agents that perform tasks, make decisions, and interact with APIs using Python + LLMs.',
      tools: ['GPT-4', 'OpenAI API', 'n8n'],
      level: 'Intermediate',
      experience: 'Expanding with real use cases',
      proficiency: 75
    },
    {
      title: 'AI Chatbots',
      description:
        'I create intelligent chatbots that handle customer support, lead qualification, and appointment booking with human-like flow.',
      tools: ['Voiceflow', 'GPT-4', 'Google Sheets', 'Calendly', 'Webhooks'],
      level: 'Advanced',
      experience: 'Deployed on multiple client websites',
      proficiency: 90
    },
    {
      title: 'Prompt Engineering',
      description:
        'I craft high-performing prompts that drive consistent, useful outputs from AI models for writing, analysis, and task automation.',
      tools: ['GPT-4', 'Claude', 'ChatGPT', 'System prompts', 'Role-based chaining'],
      level: 'Expert',
      experience: 'Mastered through hundreds of prompt tests',
      proficiency: 98
    },
  ];

  const getProficiencyColor = (level) => {
    switch (level) {
      case 'Expert': return 'from-white to-gray-300';
      case 'Advanced': return 'from-gray-300 to-gray-500';
      case 'Intermediate': return 'from-gray-500 to-gray-700';
      default: return 'from-gray-700 to-gray-900';
    }
  };

  return (
    <div className='relative min-h-screen bg-black text-white overflow-hidden'>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 right-32 w-1 h-1 bg-white rounded-full opacity-30 animate-ping"></div>
        <div className="absolute bottom-40 left-40 w-2 h-2 bg-white rounded-full opacity-20 animate-ping delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white rounded-full opacity-25 animate-ping delay-2000"></div>
      </div>

      <div className='relative z-10 py-20 px-6'>
        <div className='max-w-7xl mx-auto'>
          {/* Header Section */}
          <div className='text-center mb-16'>
            <div className='inline-block mb-4'>
              <span className='text-gray-400 text-sm uppercase tracking-wider font-semibold'>
                What I Bring
              </span>
            </div>
            <h2 className='text-6xl md:text-7xl font-bold mb-8 leading-tight'>
              Core{' '}
              <span className='relative'>
                Skills
                <div className='absolute bottom-2 left-0 w-full h-1 bg-white'></div>
              </span>
            </h2>
            <p className='text-gray-300 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed'>
              These are the tools and expertise I use to{' '}
              <span className='text-white font-semibold hover:bg-white hover:text-black px-2 py-1 rounded transition-all duration-300'>
                transform your business
              </span>
            </p>
          </div>

          {/* Skills Grid */}
          <div className='grid md:grid-cols-2 gap-8 mb-16'>
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`group relative border rounded-2xl p-8 transition-all duration-500 cursor-pointer transform hover:scale-105 ${
                  hoveredSkill === index
                    ? 'border-white bg-white/10 shadow-2xl'
                    : 'border-gray-800 bg-gray-900/50 hover:border-gray-600'
                }`}
                onMouseEnter={() => setHoveredSkill(index)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                {/* Static tubelight effect at top */}
                <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-60 rounded-t-2xl'></div>

                <div className='relative z-10'>
                  {/* Header */}
                  <div className='flex items-center justify-between mb-6'>
                    <h3 className='text-2xl font-bold group-hover:text-gray-200 transition-colors duration-300'>
                      {skill.title}
                    </h3>
                    <div className='flex items-center space-x-2'>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        skill.level === 'Expert' ? 'bg-white text-black' :
                        skill.level === 'Advanced' ? 'bg-gray-300 text-black' :
                        'bg-gray-600 text-white'
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className='text-gray-300 text-base leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300'>
                    {skill.description}
                  </p>

                  {/* Tools */}
                  <div className='mb-6'>
                    <p className='text-sm text-gray-400 mb-2'>Tools & Technologies:</p>
                    <div className='flex flex-wrap gap-2'>
                      {skill.tools.map((tool, toolIndex) => (
                        <span
                          key={toolIndex}
                          className='px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700 hover:border-gray-500 hover:bg-gray-700 transition-all duration-300'
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Experience & Proficiency */}
                  <div className='space-y-4'>
                    <div>
                      <div className='flex justify-between items-center mb-2'>
                        <span className='text-sm text-gray-400'>Experience:</span>
                        <span className='text-sm text-gray-300'>{skill.proficiency}%</span>
                      </div>
                      <div className='w-full bg-gray-800 rounded-full h-2 overflow-hidden'>
                        <div 
                          className={`h-full bg-gradient-to-r ${getProficiencyColor(skill.level)} transition-all duration-1000 ease-out`}
                          style={{ 
                            width: hoveredSkill === index ? `${skill.proficiency}%` : '0%',
                            transitionDelay: hoveredSkill === index ? '200ms' : '0ms'
                          }}
                        ></div>
                      </div>
                    </div>
                    <p className='text-sm text-gray-400 italic'>
                      {skill.experience}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Stats Section */}
          <div className='text-center'>
            <div className='inline-block p-8 border border-gray-800 rounded-3xl bg-gray-900/30 hover:border-white hover:bg-gray-900/60 transition-all duration-500 group'>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
                <div className='group-hover:scale-105 transition-transform duration-300'>
                  <div className='text-3xl font-bold text-white mb-2'>15+</div>
                  <div className='text-sm text-gray-400'>Automations Built</div>
                </div>
                <div className='group-hover:scale-105 transition-transform duration-300'>
                  <div className='text-3xl font-bold text-white mb-2'>500+</div>
                  <div className='text-sm text-gray-400'>Hours Saved</div>
                </div>
                <div className='group-hover:scale-105 transition-transform duration-300'>
                  <div className='text-3xl font-bold text-white mb-2'>10+</div>
                  <div className='text-sm text-gray-400'>Happy Clients</div>
                </div>
                <div className='group-hover:scale-105 transition-transform duration-300'>
                  <div className='text-3xl font-bold text-white mb-2'>2+</div>
                  <div className='text-sm text-gray-400'>Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;