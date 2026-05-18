import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner section-inner">
        <div className="footer-col footer-brand">
          <div className="footer-logo-icon" aria-hidden="true">
            <svg viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="30" cy="10" rx="7" ry="8" fill="white" opacity="0.7"/>
              <path d="M14 22 Q30 18 46 22 L42 60 Q30 65 18 60 Z" fill="white" opacity="0.6"/>
              <path d="M18 60 L16 72 M42 60 L44 72" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.6"/>
              <line x1="10" y1="73" x2="50" y2="73" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.6"/>
            </svg>
          </div>
          <div>
            <p className="footer-brand-name">Modni salon Renate</p>
            <p className="footer-brand-sub">Renata Pečnik s.p.</p>
            <p className="footer-brand-tagline">Šivanje po meri</p>
          </div>
        </div>

        <div className="footer-col">
          <h3 className="footer-col-title">Kontakt</h3>
          <ul className="footer-contact" role="list">
            <li>
              <a href="mailto:modnisalonrenate@gmail.com" className="footer-link">
                modnisalonrenate@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+38640897097" className="footer-link">
                +386 40 897097
              </a>
            </li>
            <li className="footer-address">
              Male Braslovče 12b<br />
              3314 Braslovče, Slovenija
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="footer-col-title">Sledite nam</h3>
          <a
            href="https://www.facebook.com/modnisalonrenate"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="Facebook"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Facebook
          </a>
        </div>
      </div>

      <div className="footer-bottom section-inner">
        <p className="footer-copy">
          © {year} Modni salon Renate – Renata Pečnik Šporn. Vse pravice pridržane.
        </p>
      </div>
    </footer>
  )
}
