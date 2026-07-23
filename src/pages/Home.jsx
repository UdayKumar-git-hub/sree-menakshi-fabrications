// src/pages/Home.jsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ContactForm from '../components/ContactForm'
import ScrollingGallery from '../components/ScrollingGallery'
import BeforeAfterSlider from '../components/BeforeAfterSlider'
import { useTestimonials } from '../hooks/useTestimonials'
import { useReveal } from '../hooks/useReveal'
import { SERVICES, PROJECT_VIDEOS, WHY_CHOOSE, HOME_PRODUCTS } from '../lib/data'

// ── Lucide-style SVG icons for services ────────────────────
const SERVICE_ICONS = {
  fabrication: (
    <svg viewBox="0 0 24 24"><path d="M2 20h20" /><path d="M5 20V8l7-5 7 5v12" /><path d="M9 20v-6h6v6" /></svg>
  ),
  installation: (
    <svg viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
  ),
  engineering: (
    <svg viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
  ),
  maintenance: (
    <svg viewBox="0 0 24 24"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="M12 6v6l4 2" /></svg>
  ),
  consultation: (
    <svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
  ),
}

export default function Home() {
  const { testimonials } = useTestimonials()
  useReveal([])

  const [mouseCoords, setMouseCoords] = useState({ x: '50%', y: '50%' })
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = `${e.clientX - rect.left}px`
    const y = `${e.clientY - rect.top}px`
    setMouseCoords({ x, y })
  }

  return (
    <div>
      {/* ════════════════════════════════════════════════════════
          SECTION 1 — HERO (SUBTLE & PREMIUM)
      ════════════════════════════════════════════════════════ */}
      <section
        className="hero hero--subtle"
        id="hero"
        onMouseMove={handleMouseMove}
        style={{ '--mouse-x': mouseCoords.x, '--mouse-y': mouseCoords.y }}
      >
        {/* Cinematic ambient background video showing active industrial steelwork */}
        <div className="hero__video-wrap">
          <video
            src="/project-video-6.mp4"
            className="hero__video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
          <div className="hero__video-overlay" />
        </div>

        <div className="hero__inner">
          <div className="hero__content">
            <span className="hero__tagline reveal">SREE MEENAKSHI FABRICATORS</span>

            <h1 className="hero__title reveal reveal-d1">
              Precision Steel.<br />
              <span className="accent">Engineered to Last.</span>
            </h1>

            <p className="hero__subtitle reveal reveal-d2">
              Ultra-premium rolling shutters, heavy-duty industrial sheds, and custom structural steel solutions built for permanence.
            </p>

            <div className="hero__actions reveal reveal-d3">
              <Link to="/contact" className="btn btn--primary">Request Custom Proposal</Link>
              <Link to="/packages" className="btn btn--ghost">Explore Packages →</Link>
            </div>
          </div>
        </div>

        <div className="hero__scroll">
          <span className="hero__scroll-line" />
          <span className="hero__scroll-text">Scroll</span>
        </div>
      </section>

      {/* ── CLIENT & PARTNER LOGOS SCROLLING MARQUEE ────────────── */}
      <div className="logo-marquee">
        <div className="logo-marquee__inner">
          <div className="logo-marquee__track">
            {[
              'TATA STEEL', 'JSW STEEL', 'REDDY COLD STORAGE', 'KUMAR TEXTILES', 'L&T CONSTRUCTION', 'GMR INFRA', 'SHARMA INDUSTRIES', 'JINDAL STEEL',
              'TATA STEEL', 'JSW STEEL', 'REDDY COLD STORAGE', 'KUMAR TEXTILES', 'L&T CONSTRUCTION', 'GMR INFRA', 'SHARMA INDUSTRIES', 'JINDAL STEEL'
            ].map((logo, idx) => (
              <div key={idx} className="logo-marquee__item">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 2v20M2 12h20" />
                </svg>
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════
          SECTION 2 — COMPANY / ABOUT
      ════════════════════════════════════════════════════════ */}
      <section className="section section--bg2" id="company">
        <div className="section__inner">
          <div className="about-split">
            <div className="about-img-wrap reveal-img">
              <img src="/about.png" alt="Premium fabrication facility" />
            </div>
            <div className="about-content">
              <span className="eyebrow reveal">Since 2013</span>
              <h2 className="heading-lg reveal reveal-d1">
                Built with precision.<br />Trusted by industries.
              </h2>
              <p className="body-lg reveal reveal-d2">
                Sree Meenakshi Fabricators designs, manufactures, and installs premium rolling shutters, heavy-duty gates, PEB structures, and industrial steel fabrication with engineering precision.
              </p>
              <p className="body-lg reveal reveal-d3" style={{ opacity: 0.7 }}>
                Based in IDA Jeedimetla, Hyderabad — our facility integrates advanced roll-forming machinery, CNC plasma cutters, and robotic welding systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST & CREDIBILITY SECTION ─────────────────────────── */}
      <section className="trust-highlights reveal">
        <div className="section__inner">
          <div className="section__header" style={{ textAlign: 'center' }}>
            <span className="eyebrow">Enterprise Credentials</span>
            <h2 className="heading-lg">Why Leading Industries Trust Us</h2>
          </div>

          <div className="trust-grid">
            {[
              { 
                icon: <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>, 
                num: 'Since 2013', 
                label: '13+ Years Experience' 
              },
              { 
                icon: <svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>, 
                num: '1,000+', 
                label: 'Projects Delivered' 
              },
              { 
                icon: <svg viewBox="0 0 24 24"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>, 
                num: '100%', 
                label: 'Custom Fabrication' 
              },
              { 
                icon: <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>, 
                num: '24/7', 
                label: 'Support & Service' 
              },
              { 
                icon: <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>, 
                num: 'JSW & TATA', 
                label: 'Certified Raw Steel' 
              }
            ].map((item, idx) => (
              <div key={idx} className="trust-card">
                <div className="trust-card__icon">{item.icon}</div>
                <div className="trust-card__num">{item.num}</div>
                <div className="trust-card__label">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════════
          SECTION 4 — PRODUCTS
      ════════════════════════════════════════════════════════ */}
      <section className="section section--bg2" id="home-products">
        <div className="section__inner">
          <div className="section__header">
            <span className="eyebrow reveal">Our Expertise</span>
            <h2 className="heading-lg reveal reveal-d1">Products & Solutions</h2>
            <p className="body-lg reveal reveal-d2">
              Engineered for performance, built for permanence.
            </p>
          </div>

          <div className="products-grid products-grid--5">
            {HOME_PRODUCTS.map((prod, idx) => (
              <Link
                key={idx}
                to={prod.link}
                className={`product-card reveal reveal-d${Math.min(idx + 1, 5)}`}
              >
                <div className="product-card__img-wrap">
                  <img src={prod.image} alt={prod.title} className="product-card__img" loading="lazy" />
                </div>
                <div className="product-card__body">
                  <h3 className="product-card__title">{prod.title}</h3>
                  <p className="product-card__desc">{prod.desc}</p>
                  <span className="product-card__link">Learn More →</span>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 56 }} className="reveal">
            <Link to="/products" className="btn btn--ghost">
              View Entire Catalog →
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          SECTION 5 — SERVICES
      ════════════════════════════════════════════════════════ */}
      <section className="section section--bg" id="services">
        <div className="section__inner">
          <div className="section__header">
            <span className="eyebrow reveal">What We Do</span>
            <h2 className="heading-lg reveal reveal-d1">Services</h2>
            <p className="body-lg reveal reveal-d2">
              End-to-end engineering solutions from consultation to commissioning.
            </p>
          </div>

          <div className="services-grid">
            {SERVICES.map((svc, idx) => (
              <div key={idx} className={`service-card reveal reveal-d${Math.min(idx + 1, 5)}`}>
                <div className="service-card__icon">
                  {SERVICE_ICONS[svc.icon]}
                </div>
                <h3 className="service-card__title">{svc.title}</h3>
                <p className="service-card__desc">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          SECTION 6 — PROJECT FOOTAGES
      ════════════════════════════════════════════════════════ */}
      <section className="section section--bg2" id="projects">
        <div className="section__inner">
          <div className="section__header">
            <span className="eyebrow reveal">On-Site Media</span>
            <h2 className="heading-lg reveal reveal-d1">Project Footages</h2>
            <p className="body-lg reveal reveal-d2">
              Real installation and manufacturing footages from our active site operations across Telangana and AP.
            </p>
          </div>

          <div className="video-grid">
            {PROJECT_VIDEOS.map((vid, idx) => (
              <div
                key={vid.id}
                className={`video-card reveal reveal-d${Math.min(idx + 1, 6)}`}
              >
                <div className="video-card__player-wrap">
                  <video
                    src={vid.src}
                    className="video-card__player"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                  />
                </div>
                <div className="video-card__info">
                  <span className="video-card__cat">{vid.category}</span>
                  <h3 className="video-card__title">{vid.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          SECTION 6B — PROJECT GALLERY (SCROLLING PREVIEWS)
      ════════════════════════════════════════════════════════ */}
      <ScrollingGallery />

      {/* ════════════════════════════════════════════════════════
          SECTION 7 — WHY CHOOSE US (TIMELINE)
      ════════════════════════════════════════════════════════ */}
      <section className="section section--bg" id="why">
        <div className="section__inner">
          <div className="section__header">
            <span className="eyebrow reveal">Our Promise</span>
            <h2 className="heading-lg reveal reveal-d1">Why Choose Us</h2>
          </div>

          <div className="timeline">
            {WHY_CHOOSE.map((item, idx) => (
              <div key={idx} className={`timeline-item reveal reveal-d${Math.min(idx + 1, 6)}`}>
                <div className="timeline-item__dot" />
                <h3 className="timeline-item__title">{item.title}</h3>
                <p className="timeline-item__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BEFORE & AFTER INTERACTIVE SLIDER ──────────────────── */}
      <BeforeAfterSlider />

      {/* ════════════════════════════════════════════════════════
          SECTION 8 — TESTIMONIALS
      ════════════════════════════════════════════════════════ */}
      <section className="section section--bg2" id="testimonials">
        <div className="section__inner">
          <div className="section__header">
            <span className="eyebrow reveal">Client Feedback</span>
            <h2 className="heading-lg reveal reveal-d1">What our clients say</h2>
          </div>

          <div className="testi-grid">
            {testimonials.slice(0, 3).map((testi, idx) => (
              <div key={testi.id || idx} className={`testi-card reveal reveal-d${idx + 1}`}>
                <div className="testi-stars">
                  {Array.from({ length: testi.rating || 5 }).map((_, i) => (
                    <span key={i} className="testi-star">★</span>
                  ))}
                </div>
                <p className="testi-quote">"{testi.content}"</p>
                <div className="testi-author">
                  <strong>{testi.author}</strong>
                  <span>{testi.company}</span>
                </div>
                {/* Specific industrial site location and project information for credibility */}
                <div className="testi-meta">
                  <div className="testi-meta__row">
                    <span>Project:</span>
                    <span className="testi-meta__val">{testi.project}</span>
                  </div>
                  <div className="testi-meta__row">
                    <span>Location:</span>
                    <span className="testi-meta__val">{testi.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          SECTION 9 — CTA
      ════════════════════════════════════════════════════════ */}
      <section className="cta-section" id="cta">
        <div className="cta-glow" />
        <div className="cta-section__inner">
          <span className="eyebrow reveal">Start Your Project</span>
          <h2 className="heading-lg reveal reveal-d1">
            Let's build something<br />extraordinary.
          </h2>
          <p className="body-lg reveal reveal-d2">
            Connect with our engineering team for a free site survey and custom proposal.
          </p>
          <div className="reveal reveal-d3">
            <Link to="/contact" className="btn btn--primary">
              Book Site Inspection
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
