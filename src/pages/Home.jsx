// src/pages/Home.jsx
import { Link } from 'react-router-dom'
import AnimatedCounter from '../components/AnimatedCounter'
import ContactForm from '../components/ContactForm'
import { useTestimonials } from '../hooks/useTestimonials'
import { useReveal } from '../hooks/useReveal'
import { COMPANY_STATS, SERVICES, PROJECTS, WHY_CHOOSE, HOME_PRODUCTS } from '../lib/data'

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

  return (
    <div>
      {/* ════════════════════════════════════════════════════════
          SECTION 1 — HERO
      ════════════════════════════════════════════════════════ */}
      <section className="hero" id="hero">
        <div className="hero__inner">
          <div className="hero__content">
            <div className="hero__eyebrow reveal">Since 2013</div>
            <h1 className="hero__title reveal reveal-d1">
              PRECISION.<br />
              <span className="accent">ENGINEERED</span><br />
              TO LAST.
            </h1>
            <p className="hero__subtitle reveal reveal-d2">
              Premium fabrication solutions for industrial, commercial and infrastructure projects since 2013.
            </p>
            <div className="hero__actions reveal reveal-d3">
              <Link to="/contact" className="btn btn--primary">Get Quote</Link>
              <a href="#projects" className="btn btn--ghost">View Projects</a>
            </div>
          </div>
          <div className="hero__visual reveal-img reveal-d2">
            <img src="/hero.png" alt="Modern industrial steel building" className="hero__image" />
            <div className="hero__glow" />
          </div>
        </div>
        <div className="hero__scroll">
          <span className="hero__scroll-line" />
          <span className="hero__scroll-text">Scroll</span>
        </div>
      </section>

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

      {/* ════════════════════════════════════════════════════════
          SECTION 3 — STATISTICS
      ════════════════════════════════════════════════════════ */}
      <section className="section section--bg" id="stats">
        <div className="section__inner">
          <div className="stats-row reveal">
            {COMPANY_STATS.map((stat, idx) => (
              <div key={idx} className="stat">
                <span className="stat__number">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="stat__label">{stat.label}</span>
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
          SECTION 6 — FEATURED PROJECTS
      ════════════════════════════════════════════════════════ */}
      <section className="section section--bg2" id="projects">
        <div className="section__inner">
          <div className="section__header">
            <span className="eyebrow reveal">Portfolio</span>
            <h2 className="heading-lg reveal reveal-d1">Featured Projects</h2>
            <p className="body-lg reveal reveal-d2">
              A selection of completed industrial and commercial projects.
            </p>
          </div>

          <div className="projects-grid">
            {PROJECTS.map((proj, idx) => (
              <div key={idx} className={`project-card reveal-img reveal-d${idx + 1}`}>
                <img src={proj.image} alt={proj.title} className="project-card__img" loading="lazy" />
                <div className="project-card__overlay">
                  <div className="project-card__meta">
                    <span>{proj.location}</span>
                    <span>{proj.year}</span>
                  </div>
                  <h3 className="project-card__title">{proj.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
