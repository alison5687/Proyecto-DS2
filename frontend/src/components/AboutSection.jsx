import { useEffect, useRef } from 'react'
import './AboutSection.css'

const AboutSection = () => {
  const sectionRef = useRef(null)

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
      const elements = sectionRef.current.querySelectorAll('.glass-card, .trait-card')
      elements.forEach((el) => {
        el.style.opacity = '0'
        el.style.transform = 'translateY(30px)'
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
        observer.observe(el)
      })
    }

    return () => observer.disconnect()
  }, [])

  const traits = [
    {
      icon: '💡',
      title: 'Paciente',
      description: 'Mantengo la calma bajo presión y busco soluciones metódicas.'
    },
    {
      icon: '🤝',
      title: 'Compañerismo',
      description: 'Valoro el trabajo en equipo y la colaboración efectiva.'
    },
    {
      icon: '📚',
      title: 'Pedagogía',
      description: 'Me encanta explicar y compartir conocimiento con otros.'
    }
  ]

  return (
    <section id="sobre-mi" className="section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">
          <span className="section-number">01</span>
          Sobre Mí
        </h2>
        <div className="about-content">
          <div className="about-text">
            <div className="card glass-card">
              <h3>Mi Historia</h3>
              <p>
                Soy un desarrollador apasionado por crear soluciones innovadoras. Mi enfoque combina
                habilidades técnicas sólidas con una mentalidad colaborativa y pedagógica.
              </p>
              <p>
                Me encanta compartir conocimiento y explicar conceptos complejos de manera sencilla.
                Creo firmemente en el poder del trabajo en equipo y la comunicación efectiva.
              </p>
            </div>
            <div className="traits">
              {traits.map((trait, index) => (
                <div key={index} className="trait-card">
                  <div className="trait-icon">{trait.icon}</div>
                  <h4>{trait.title}</h4>
                  <p>{trait.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

