import React from 'react'
import NavBar from './NavBar'
import HeroSection from './HeroSection'
import AboutMe from './AboutMe'
import Break from './Break'
import WhyMe from './WhyME'
import Skills from './Skills'
import Projects from './Projects'
import CTA from './CTA'
import Footer from './footer'

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
