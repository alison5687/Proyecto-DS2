import { useState, useEffect } from 'react'
import './HeroSection.css'
import fotoPerfil from '../foto.jpg'

const HeroSection = () => {
  const [typewriterText, setTypewriterText] = useState('')
  const texts = ['Full Stack', 'Web Developer', 'Problem Solver']
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const typeWriter = () => {
      const currentText = texts[textIndex]

      if (isDeleting) {
        setTypewriterText(currentText.substring(0, charIndex - 1))
        setCharIndex(prev => prev - 1)
      } else {
        setTypewriterText(currentText.substring(0, charIndex + 1))
        setCharIndex(prev => prev + 1)
      }

      let typeSpeed = isDeleting ? 50 : 100

      if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = 2000
        setIsDeleting(true)
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false)
        setTextIndex(prev => (prev + 1) % texts.length)
        typeSpeed = 500
      }

      setTimeout(typeWriter, typeSpeed)
    }

    const timer = setTimeout(typeWriter, 100)
    return () => clearTimeout(timer)
  }, [textIndex, charIndex, isDeleting])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="inicio" className="hero-section">
      <div className="hero-content">
        <div className="profile-image-container">
          <div className="profile-ring"></div>
          <div className="profile-image">
            <img 
              src={fotoPerfil} 
              alt="Foto de perfil" 
              className="profile-photo"
            />
          </div>
        </div>
        <h1 className="hero-title">
          <span className="gradient-text">Desarrollador</span>
          <span className="typewriter">{typewriterText}</span>
        </h1>
        <p className="hero-subtitle">Transformando ideas en código, código en soluciones</p>
        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={() => scrollToSection('sobre-mi')}>
            Conoce Más
          </button>
          <button className="btn btn-secondary" onClick={() => scrollToSection('contacto')}>
            Contáctame
          </button>
        </div>
        <div className="scroll-indicator">
          <div className="mouse"></div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

