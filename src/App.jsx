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
      <div>
      <HeroSection />
      <Break />

      <AboutMe />
      <Break />

      <WhyMe />
      <Skills />

      <Break />
      <Projects />

      <CTA />
      <Footer />
    </div>
    </div>
  )
}

export default App
