import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <header className={`navbar-wrapper${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-topbar">
        <a href="mailto:modnisalonrenate@gmail.com" className="topbar-link">
          modnisalonrenate@gmail.com
        </a>
        <a href="tel:+38640897097" className="topbar-link">
          +386 40 897097
        </a>
        <a
          href="https://www.facebook.com/modnisalonrenate"
          target="_blank"
          rel="noopener noreferrer"
          className="topbar-link topbar-social"
          aria-label="Facebook"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </a>
      </div>

      <nav className="navbar-main">
        <Link to="/" className="navbar-brand" aria-label="Modni salon Renate – domov">
          <div className="navbar-logo-icon" aria-hidden="true">
            <svg viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="30" cy="10" rx="7" ry="8" fill="white"/>
              <path d="M14 22 Q30 18 46 22 L42 60 Q30 65 18 60 Z" fill="white" opacity="0.9"/>
              <path d="M18 60 L16 72 M42 60 L44 72" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="10" y1="73" x2="50" y2="73" stroke="white" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="navbar-brand-text">
            <span className="navbar-brand-name">Modni salon Renate</span>
            <span className="navbar-brand-sub">Renata Pečnik s.p.</span>
            <span className="navbar-brand-tagline">Šivanje po meri</span>
          </div>
        </Link>

        <button
          className={`navbar-hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label={menuOpen ? 'Zapri meni' : 'Odpri meni'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`navbar-links${menuOpen ? ' open' : ''}`} role="list">
          <li>
            <Link
              to="/"
              className={`navbar-link${location.pathname === '/' ? ' active' : ''}`}
            >
              Domov
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className={`navbar-link${location.pathname.startsWith('/blog') ? ' active' : ''}`}
            >
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
