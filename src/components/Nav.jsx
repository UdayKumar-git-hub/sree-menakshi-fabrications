// src/components/Nav.jsx
import { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  const links = [
    { to: '/',         label: 'Home' },
    { to: '/about',    label: 'About' },
    { to: '/products', label: 'Products' },
    { to: '/#projects',  label: 'Projects',  isHash: true },
    { to: '/#services',  label: 'Services',  isHash: true },
    { to: '/contact',  label: 'Contact' },
  ]

  const handleNavClick = (link, e) => {
    if (link.isHash) {
      e.preventDefault()
      if (location.pathname !== '/') {
        navigate('/')
        // Wait for navigation, then scroll
        setTimeout(() => {
          const el = document.querySelector(link.to.replace('/', ''))
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      } else {
        const el = document.querySelector(link.to.replace('/', ''))
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`} id="mainNav">
      <div className="nav__inner">
        <Link to="/" className="nav__logo">
          <img src="/SMFInal.png" alt="Sree Meenakshi Fabricators" className="nav__logo-img" />
        </Link>

        <div className="nav__links">
          {links.map(l => (
            l.isHash ? (
              <a
                key={l.to}
                href={l.to}
                className="nav__link"
                onClick={(e) => handleNavClick(l, e)}
              >
                {l.label}
              </a>
            ) : (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) => `nav__link${isActive ? ' active' : ''}`}
              >
                {l.label}
              </NavLink>
            )
          ))}
        </div>

        <Link to="/contact" className="nav__cta">Get Quote</Link>

        <button
          className={`nav__burger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`nav__mobile${menuOpen ? ' open' : ''}`}>
        {links.map(l => (
          l.isHash ? (
            <a
              key={l.to}
              href={l.to}
              className="nav__mobile-link"
              onClick={(e) => { handleNavClick(l, e); setMenuOpen(false) }}
            >
              {l.label}
            </a>
          ) : (
            <Link
              key={l.to}
              to={l.to}
              className="nav__mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          )
        ))}
        <Link to="/contact" className="nav__mobile-cta" onClick={() => setMenuOpen(false)}>
          Get Quote
        </Link>
      </div>
    </nav>
  )
}
