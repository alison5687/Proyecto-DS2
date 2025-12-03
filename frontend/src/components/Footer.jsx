import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <p>Hecho con ❤️ y código</p>
      <p className="footer-year">© {currentYear}</p>
    </footer>
  )
}

export default Footer

