// src/pages/About.jsx
import { COMPANY_STATS } from '../lib/data'
import { useReveal } from '../hooks/useReveal'
import AnimatedCounter from '../components/AnimatedCounter'

export default function About() {
  useReveal([])

  return (
    <div>
      <div className="page-hero">
        <div className="section__inner">
          <span className="eyebrow">Since 2013</span>
          <h1>About Sree Meenakshi Fabricators</h1>
          <p>
            An ISO 9001:2015 certified company leading the design and manufacture of high-performance entrance systems and steel structures in Hyderabad.
          </p>
        </div>
      </div>

      <section className="section section--bg">
        <div className="section__inner">
          <div className="about-grid">
            <div className="reveal">
              <h2 className="heading-md" style={{ marginBottom: 24 }}>Legacy of Engineering Excellence</h2>
              <p className="body-md">
                Sree Meenakshi Fabricators began in 2013 with a vision to provide commercial and industrial spaces with robust, reliable, and premium-grade rolling shutter doors and sliding gates. Over the years, we have scaled our capacity to fabricate advanced automated portals and massive span PEB structures.
              </p>
              <p className="body-md">
                Based in IDA Jeedimetla, Hyderabad, our state-of-the-art facility integrates advanced roll-forming machinery, high-power CNC plasma cutters, and automatic CO2 welding systems to ensure flawless weld joints and slat sizing.
              </p>
              <div className="about-gst">
                🛡 <strong>GST Registration:</strong>&nbsp; 36DCPPP2551D1ZH (Registered Active)
              </div>
            </div>

            <div className="about-card-grid">
              <div className="about-card reveal reveal-d1">
                <h4>Manufacturing Controls</h4>
                <p>Every product undergoes extensive deflection and cycle testing prior to dispatch.</p>
              </div>
              <div className="about-card reveal reveal-d2">
                <h4>Primary Steel Sourcing</h4>
                <p>We source raw mild steel and stainless steel exclusively from JSW, TATA, and SAIL.</p>
              </div>
              <div className="about-card reveal reveal-d3">
                <h4>Automated Drives</h4>
                <p>Partnered with certified European and Taiwanese drive system manufacturers for motors.</p>
              </div>
              <div className="about-card reveal reveal-d4">
                <h4>Erection Guarantee</h4>
                <p>Complete on-site alignment using laser levels for 100% true horizontal deployment.</p>
              </div>
            </div>
          </div>

          <div className="stats-row reveal" style={{ marginTop: 72 }}>
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
    </div>
  )
}
