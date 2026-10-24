// src/components/ScrollExperience.jsx
import { useState, useEffect } from 'react'

export default function ScrollExperience() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight
          if (totalHeight > 0) {
            const currentScroll = window.scrollY
            const progress = Math.min(100, Math.max(0, (currentScroll / totalHeight) * 100))
            setScrollProgress(progress)
            setShowBackToTop(currentScroll > 320)
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    // Spotlight cursor effect on corporate cards
    const handleGlobalMouseMove = (e) => {
      const cards = document.querySelectorAll(
        '.product-card, .service-card, .pkg-card, .trust-card, .testi-card, .about-card, .video-card, .bento-card, .stat'
      )
      
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect()
        // Check if mouse is near or inside card to optimize
        if (
          e.clientX >= rect.left - 60 &&
          e.clientX <= rect.right + 60 &&
          e.clientY >= rect.top - 60 &&
          e.clientY <= rect.bottom + 60
        ) {
          const x = `${e.clientX - rect.left}px`
          const y = `${e.clientY - rect.top}px`
          card.style.setProperty('--mouse-x', x)
          card.style.setProperty('--mouse-y', y)
        }
      })
    }

    window.addEventListener('mousemove', handleGlobalMouseMove, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleGlobalMouseMove)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  // Radius and circumference for circular progress ring
  const strokeWidth = 2.5
  const radius = 20
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference

  return (
    <>
      {/* ── BACK TO TOP FLOATING BUTTON WITH RADIAL PROGRESS ───── */}
      <button
        type="button"
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll back to top"
        title="Scroll to top"
      >
        <svg className="back-to-top__ring" width="48" height="48" viewBox="0 0 48 48">
          <circle
            className="back-to-top__ring-bg"
            cx="24"
            cy="24"
            r={radius}
            strokeWidth={strokeWidth}
          />
          <circle
            className="back-to-top__ring-fill"
            cx="24"
            cy="24"
            r={radius}
            strokeWidth={strokeWidth}
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: strokeDashoffset,
            }}
          />
        </svg>
        <span className="back-to-top__icon">
          <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </span>
      </button>
    </>
  )
}
