import React from 'react'
import HeroSection from './HeroSection'
import AboutMe from './AboutMe'
import WhyMe from './WhyME'
import Skills from './Skills'
import Projects from './Projects'
import CTA from './CTA'
import Footer from './footer'
<<<<<<< HEAD
import ChatSalesWidget from './components/chat' // Import here
=======
>>>>>>> 0a0e9479cd8717c1e5505d7f2ccb7c0a6706280b

const App = () => {
  return (
    <div>
      <div id="home">
        <HeroSection />
      </div>

      <div id="about">
        <AboutMe />
      </div>

      <div id="why me">
        <WhyMe />
      </div>

      <div id="projects">
       <Projects />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="contact">
        <CTA />
      </div>

      <div>
        <Footer/>
      </div>

<<<<<<< HEAD
      {/* Chat widget - renders as a floating button in bottom-right */}
      <ChatSalesWidget />
    </div>
  )
}

export default App
=======
    </div>
    
  )
}

export default App
>>>>>>> 0a0e9479cd8717c1e5505d7f2ccb7c0a6706280b
