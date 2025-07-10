import React from 'react'
import HeroSection from './HeroSection'
import AboutMe from './AboutMe'
import WhyMe from './WhyME'
import Skills from './Skills'
import Projects from './Projects'
import CTA from './CTA'
import Footer from './footer'
import Todos from './Todos'

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

    </div>
    
  )
}

export default App
