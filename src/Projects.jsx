import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'AI Proposal Generator for Agencies',
      description:
        'Automated the creation of personalized proposals based on client form input. Reduced manual work, improved conversion.',
      tools: 'Tally + Make.com + GPT-4 + PDF Export',
      result: 'Saved 6+ hours/week and helped close 2 clients in 3 days.',
    },
    {
      title: 'CRM Automation for Coaching Business',
      description:
        'Built a workflow to auto-onboard leads, update Airtable, send Slack alerts, and sync Google Calendar events.',
      tools: 'Make.com + Airtable + Slack + Google Workspace',
      result: 'Zero manual effort after a lead signs up — fully hands-off.',
    },
    {
      title: 'Content Insights Bot',
      description:
        'Scraped YouTube comments, summarized them using GPT-4, and logged insights into Notion for content planning.',
      tools: 'Python + GPT-4 + Notion API + Cron Jobs',
      result: 'Delivered audience sentiment analysis automatically every week.',
    },
  ];

  return (
    <div className='bg-black py-16 px-6 text-white'>
      <div className='max-w-5xl mx-auto text-center'>
        <h2 className='text-4xl font-bold mb-10'>Projects</h2>

        <div className='grid md:grid-cols-2 gap-10 place-items-center'>
          {projects.map((project, index) => (
            <div key={index} className='perspective w-[90%] md:w-[95%] lg:w-[90%]'>
              <div className='relative w-full h-64 transition-transform duration-700 transform-style preserve-3d hover:rotate-y-180'>
                
                {/* Front */}
                <div className='absolute w-full h-full backface-hidden bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-xl font-semibold px-4 text-center'>
                  {project.title}
                </div>

                {/* Back */}
                <div className='absolute w-full h-full backface-hidden rotate-y-180 bg-white/10 border border-white/10 rounded-xl p-6 text-sm flex flex-col justify-center overflow-y-auto'>
                  <p className='text-gray-300 mb-2'>{project.description}</p>
                  <p className='text-gray-400'>{project.tools}</p>
                  <p className='italic text-gray-500 mt-1'>{project.result}</p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
