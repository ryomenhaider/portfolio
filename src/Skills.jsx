import React from 'react';

const Skills = () => {
  const skills = [
    {
      title: 'AI Automation',
      description:
        'I build AI-powered systems that automate repetitive workflows — lead gen, onboarding, proposal generation, CRM sync, and more.',
      tools: 'Tools: Make.com, Zapier, Tally, Airtable,',
      level: 'Proficiency: Expert — built 15+ business-ready automations',
    },
    {
      title: 'AI Agents',
      description:
        'I design and deploy autonomous AI agents that perform tasks, make decisions, and interact with APIs using Python + LLMs.',
      tools: 'Tools: GPT-4, OpenAI API, n8n',
      level: 'Proficiency: Intermediate — still expanding with real use cases',
    },
    {
      title: 'AI Chatbots',
      description:
        'I create intelligent chatbots that handle customer support, lead qualification, and appointment booking with human-like flow.',
      tools: 'Tools: Voiceflow, GPT-4, Google Sheets, Calendly, Webhooks',
      level: 'Proficiency: Advanced — deployed on multiple client websites',
    },
    {
      title: 'Prompt Engineering',
      description:
        'I craft high-performing prompts that drive consistent, useful outputs from AI models for writing, analysis, and task automation.',
      tools: 'Tools: GPT-4, Claude, ChatGPT, System prompts, Role-based chaining',
      level: 'Proficiency: Expert — mastered through hundreds of prompt tests',
    },
  ];

  return (
    <div className='bg-gradient-to-b from-black to-gray-900 py-16 px-6 text-white'>
      <div className='max-w-5xl mx-auto text-center'>
        <h2 className='text-4xl font-bold mb-10'>Core Skills</h2>

        <div className='grid md:grid-cols-2 gap-8 text-left'>
          {skills.map((skill, index) => (
            <div
              key={index}
              className='border border-white/10 rounded-xl p-6 bg-white/5 hover:bg-white/10 hover:scale-105 pointer-none: transition duration-300'
            >
              <h3 className='text-2xl font-semibold mb-2'>{skill.title}</h3>
              <p className='text-gray-300 mb-2'>{skill.description}</p>
              <p className='text-sm text-gray-400'>{skill.tools}</p>
              <p className='text-sm text-gray-500 italic'>{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
