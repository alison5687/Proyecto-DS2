import { useEffect, useRef } from 'react'
import './ContactSection.css'

const ContactSection = () => {
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
      const elements = sectionRef.current.querySelectorAll('.section-title, .glass-card')
      elements.forEach((el) => {
        el.style.opacity = '0'
        el.style.transform = 'translateY(30px)'
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
        observer.observe(el)
      })
    }

    return () => observer.disconnect()
  }, [])

  const contactInfo = [
    { 
      icon: '📧', 
      text: 'alisonji5697@gmail.com',
      link: 'mailto:alisonji5697@gmail.com',
      type: 'email'
    },
    { 
      icon: '💼', 
      text: 'LinkedIn',
      link: 'https://www.linkedin.com/in/alison-jim%C3%A9nez-808a0529b/',
      type: 'linkedin'
    },
    { 
      icon: '💻', 
      text: 'GitHub: ali5697',
      link: 'https://github.com/ali5697',
      type: 'github'
    }
  ]

  return (
    <section id="contacto" className="section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">
          <span className="section-number">04</span>
          Contacto
        </h2>
        <div className="contact-content">
          <div className="contact-card glass-card">
            <h3>¿Trabajamos juntos?</h3>
            <p>
              Estoy siempre abierto a nuevas oportunidades y proyectos interesantes. No dudes en
              contactarme.
            </p>
            <div className="contact-info">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target={item.type !== 'email' ? '_blank' : '_self'}
                  rel={item.type !== 'email' ? 'noopener noreferrer' : ''}
                  className="contact-item"
                >
                  <span className="contact-icon">{item.icon}</span>
                  <span>{item.text}</span>
                </a>
              ))}
            </div>
            <p className="contact-note">💡 Puedes editar esta información en el componente ContactSection</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection

