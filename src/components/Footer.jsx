// src/components/Footer.jsx
import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <Link to="/" className="footer__logo-link">
            <img src="/SMFInal.png" alt="Sree Meenakshi Fabricators" className="footer__logo-img" />
          </Link>
          <p className="footer__addr">
            Sree Meenakshi Fabricators<br />
            Phase V, IDA Jeedimetla,<br />
            Hyderabad, Telangana 500055<br />
            <span style={{ fontSize: 12, opacity: 0.6 }}>GST: 36DCPPP2551D1ZH</span>
          </p>
        </div>

        <div className="footer__nav">
          <div className="footer__col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/contact">Get a Quote</Link></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>Products</h4>
            <ul>
              <li><Link to="/products?cat=rolling_shutter">Rolling Shutters</Link></li>
              <li><Link to="/products?cat=sliding_gate">Sliding Gates</Link></li>
              <li><Link to="/products?cat=swing_gate">Swing Gates</Link></li>
              <li><Link to="/products?cat=peb_shed">PEB Structures</Link></li>
              <li><Link to="/products?cat=fabrication">Fabrication</Link></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:+918047635547">+91 80476 35547</a></li>
              <li><a href="mailto:info@sreemeenakshifabricators.com">info@smfabricators.com</a></li>
              <li><span>Hyderabad, Telangana</span></li>
              <li><span>Mon – Sat, 9am – 7pm</span></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {year} Sree Meenakshi Fabricators. All rights reserved.</p>
        <div className="footer__socials">
          {/* LinkedIn */}
          <a href="#" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          {/* Instagram */}
          <a href="#" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          {/* WhatsApp */}
          <a href="https://wa.me/918047635547" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
