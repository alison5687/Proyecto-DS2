import { useState, useEffect } from 'react'
import ParticlesCanvas from './components/ParticlesCanvas'
import FloatingNav from './components/FloatingNav'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import TechnologiesSection from './components/TechnologiesSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('inicio')

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      let current = 'inicio'

      sections.forEach(section => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
        if (window.pageYOffset >= sectionTop - 200) {
          current = section.getAttribute('id')
        }
      })

      if (window.pageYOffset < 100) {
        current = 'inicio'
      }

      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="App">
      <ParticlesCanvas />
      <FloatingNav activeSection={activeSection} />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <TechnologiesSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App

