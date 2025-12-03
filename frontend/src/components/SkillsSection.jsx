import { useEffect, useRef, useState } from 'react'
import './SkillsSection.css'

const SkillsSection = () => {
  const sectionRef = useRef(null)
  const [skills, setSkills] = useState([])

  useEffect(() => {
    // Obtener habilidades desde la API
    fetch('/api/skills/')
      .then(res => res.json())
      .then(data => {
        const skillsData = data.results || (Array.isArray(data) ? data : [])
        // Agrupar por categoría
        const grouped = {}
        skillsData.forEach(skill => {
          if (!grouped[skill.category]) {
            grouped[skill.category] = []
          }
          grouped[skill.category].push(skill)
        })
        setSkills(grouped)
      })
      .catch(err => console.error('Error cargando habilidades:', err))
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'translateY(0)'

            // Animar barras de habilidades
            if (entry.target.classList.contains('skill-item')) {
              const progressBar = entry.target.querySelector('.skill-progress')
              const level = entry.target.getAttribute('data-level')
              if (progressBar && level) {
                setTimeout(() => {
                  progressBar.style.width = `${level}%`
                }, 300)
              }
            }
          }
        })
      },
      { threshold: 0.3, rootMargin: '0px 0px -100px 0px' }
    )

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.section-title, .skill-item')
      elements.forEach((el) => {
        el.style.opacity = '0'
        el.style.transform = 'translateY(30px)'
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
        observer.observe(el)
      })
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="habilidades" className="section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">
          <span className="section-number">02</span>
          Habilidades Técnicas
        </h2>
        <div className="skills-grid">
          {Object.keys(skills).length > 0 ? (
            Object.entries(skills).map(([category, categorySkills]) => {
              const categoryLabels = {
                programming: 'Lenguajes de Programación',
                frontend: 'Frontend',
                backend: 'Backend',
                database: 'Base de Datos',
                tools: 'Herramientas',
                other: 'Otros'
              }
              return (
                <div key={category} className="skill-category">
                  <h3>{categoryLabels[category] || category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                  <div className="skill-items">
                    {categorySkills.map((skill, index) => (
                      <div key={skill.id || index} className="skill-item" data-level={skill.level}>
                        <span className="skill-name">{skill.name}</span>
                        <div className="skill-bar">
                          <div className="skill-progress" style={{ width: '0%' }}></div>
                        </div>
                        <span className="skill-percent">{skill.level}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })
          ) : (
            <p>Cargando habilidades...</p>
          )}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection

