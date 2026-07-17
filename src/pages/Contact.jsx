// src/pages/Contact.jsx
import { useReveal } from '../hooks/useReveal'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  useReveal([])

  return (
    <div>
      <div className="page-hero">
        <div className="section__inner">
          <span className="eyebrow">On-Site Consultations</span>
          <h1>Connect With Our Engineers</h1>
          <p>
            Request a free site survey, technical blueprints, or custom commercial proposals. Our technical team is active across Hyderabad, Telangana, and AP.
          </p>
        </div>
      </div>

      <section className="section section--bg">
        <div className="section__inner">
          <div className="contact-layout">
            <div className="contact-info reveal">
              <h2 className="heading-md" style={{ marginBottom: 12 }}>Quick Channels</h2>
              <p className="body-md" style={{ marginBottom: 32 }}>
                Visit our factory floor for material inspection or call our sales line directly. We provide free on-site measurements and custom architectural blueprints.
              </p>

              <div className="contact-dets">
                <div className="contact-det">
                  <div className="contact-det__icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <strong>Direct Hotline</strong>
                    <a href="tel:+918047635547">+91 80476 35547</a>
                  </div>
                </div>
                
                <div className="contact-det">
                  <div className="contact-det__icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <strong>Email Queries</strong>
                    <a href="mailto:info@sreemeenakshifabricators.com">info@sreemeenakshifabricators.com</a>
                  </div>
                </div>

                <div className="contact-det">
                  <div className="contact-det__icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <strong>Factory & Registered Office</strong>
                    <span>
                      Sree Meenakshi Fabricators<br />
                      Phase V, IDA Jeedimetla, Near HMT Pipe Road,<br />
                      Hyderabad, Telangana, 500055
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="reveal">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
