import './FloatingNav.css'

const FloatingNav = ({ activeSection }) => {
  const sections = ['inicio', 'sobre-mi', 'habilidades', 'tecnologias', 'contacto']
  const labels = ['Inicio', 'Sobre Mí', 'Habilidades', 'Tecnologías', 'Contacto']

  const handleClick = (e, section) => {
    e.preventDefault()
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav className="floating-nav">
      {sections.map((section, index) => (
        <a
          key={section}
          href={`#${section}`}
          className={`nav-item ${activeSection === section ? 'active' : ''}`}
          data-section={section}
          onClick={(e) => handleClick(e, section)}
        >
          {labels[index]}
        </a>
      ))}
    </nav>
  )
}

export default FloatingNav

