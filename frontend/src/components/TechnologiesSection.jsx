import { useEffect, useRef, useState } from 'react'
import './TechnologiesSection.css'

const TechnologiesSection = () => {
  const sectionRef = useRef(null)
  const [technologies, setTechnologies] = useState({})

  useEffect(() => {
    // Obtener tecnologías desde la API
    fetch('/api/technologies/')
      .then(res => res.json())
      .then(data => {
        const techs = data.results || (Array.isArray(data) ? data : [])
        // Agrupar por categoría
        const grouped = {}
        techs.forEach(tech => {
          if (!grouped[tech.category]) {
            grouped[tech.category] = []
          }
          grouped[tech.category].push({
            icon: tech.icon || '💻',
            name: tech.name
          })
        })
        setTechnologies(grouped)
      })
      .catch(err => console.error('Error cargando tecnologías:', err))
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'translateY(0)'
          }
        })
      },
      { threshold: 0.3, rootMargin: '0px 0px -100px 0px' }
    )

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.section-title, .tech-card')
      elements.forEach((el) => {
        el.style.opacity = '0'
        el.style.transform = 'translateY(30px)'
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
        observer.observe(el)
      })
    }

    return () => observer.disconnect()
  }, [])

  const categoryLabels = {
    frontend: 'Frontend',
    backend: 'Backend',
    database: 'Base de Datos',
    tools: 'Herramientas',
    other: 'Otros'
  }

  return (
    <section id="tecnologias" className="section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">
          <span className="section-number">03</span>
          Tecnologías & Frameworks
        </h2>
        <div className="tech-container">
          {Object.keys(technologies).length > 0 ? (
            Object.entries(technologies).map(([category, techs]) => (
              <div key={category} className="tech-category">
                <h3>{categoryLabels[category] || category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                <div className="tech-grid">
                  {techs.map((tech, index) => (
                    <div key={index} className="tech-card">
                      <div className="tech-icon">{tech.icon}</div>
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p>Cargando tecnologías...</p>
          )}
        </div>
      </div>
    </section>
  )
}

export default TechnologiesSection

