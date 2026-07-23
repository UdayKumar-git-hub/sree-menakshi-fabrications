// src/components/ScrollingGallery.jsx
import { useState, useEffect, useRef } from 'react'

// Import all 12 project images from the assets folder
import img1 from '../assets/WhatsApp Image 2026-07-23 at 13.17.59.jpeg'
import img2 from '../assets/WhatsApp Image 2026-07-23 at 13.18.00.jpeg'
import img3 from '../assets/WhatsApp Image 2026-07-23 at 13.18.00 (1).jpeg'
import img4 from '../assets/WhatsApp Image 2026-07-23 at 13.18.01.jpeg'
import img5 from '../assets/WhatsApp Image 2026-07-23 at 13.18.01 (1).jpeg'
import img6 from '../assets/WhatsApp Image 2026-07-23 at 13.18.02.jpeg'
import img7 from '../assets/WhatsApp Image 2026-07-23 at 13.18.02 (1).jpeg'
import img8 from '../assets/WhatsApp Image 2026-07-23 at 13.18.03.jpeg'
import img9 from '../assets/WhatsApp Image 2026-07-23 at 13.18.03 (1).jpeg'
import img10 from '../assets/WhatsApp Image 2026-07-23 at 13.18.03 (2).jpeg'
import img11 from '../assets/WhatsApp Image 2026-07-23 at 13.18.04.jpeg'
import img12 from '../assets/WhatsApp Image 2026-07-23 at 13.18.04 (1).jpeg'

const GALLERY_IMAGES = [
  { id: 0, src: img1, title: 'Precision Roller Shutter Fabrication', desc: 'Manufactured with high-grade galvanized steel slats.' },
  { id: 1, src: img2, title: 'Heavy Structural Fabrication', desc: 'Heavy-duty steel beams assembled for structural integrity.' },
  { id: 2, src: img3, title: 'Motorized Rolling Shutter Assembly', desc: 'Sleek, automated rolling shutter system under testing.' },
  { id: 3, src: img4, title: 'Pre-Engineered Building Framework', desc: 'Solid PEB steel columns and rafters erected on site.' },
  { id: 4, src: img5, title: 'Industrial Storage Shed Construction', desc: 'Spacious industrial shed layout with premium tin cladding.' },
  { id: 5, src: img6, title: 'Automated Sliding Gate Installation', desc: 'Robust sliding gate with integrated drive mechanism.' },
  { id: 6, src: img7, title: 'Precision CNC Plasma Steel Cutting', desc: 'High-accuracy plate cutting for customized brackets.' },
  { id: 7, src: img8, title: 'Custom Steel Truss Support Structure', desc: 'Precisely engineered roof trusses ready for sheeting.' },
  { id: 8, src: img9, title: 'CO2 Robotic Welding Station', desc: 'Continuous premium welds ensuring strong steel joints.' },
  { id: 9, src: img10, title: 'Finished Warehouse Project Site', desc: 'Turnkey industrial shed handover in Hyderabad.' },
  { id: 10, src: img11, title: 'Structural Steel Column Rigging', desc: 'On-site rigging and vertical positioning of heavy posts.' },
  { id: 11, src: img12, title: 'Heavy-Duty Industrial Rolling Gate', desc: 'Double-reinforced security gates for plant entrances.' },
]

// Duplicate images array to enable seamless infinite looping
const DOUBLE_IMAGES = [
  ...GALLERY_IMAGES.map((img) => ({ ...img, uniqueId: `set1-${img.id}` })),
  ...GALLERY_IMAGES.map((img) => ({ ...img, uniqueId: `set2-${img.id}` })),
]

export default function ScrollingGallery() {
  const [activeIdx, setActiveIdx] = useState(null)
  const scrollTrackRef = useRef(null)

  // Autoplay states
  const [isHovered, setIsHovered] = useState(false)
  const scrollPosition = useRef(0)

  // Drag scrolling refs
  const [isMouseDown, setIsMouseDown] = useState(false)
  const startX = useRef(0)
  const scrollLeftState = useRef(0)
  const [dragged, setDragged] = useState(false)

  // Swipe touch scrolling states
  const touchStartX = useRef(0)
  const touchScrollLeft = useRef(0)

  // Initial sync of scroll position
  useEffect(() => {
    if (scrollTrackRef.current) {
      scrollPosition.current = scrollTrackRef.current.scrollLeft
    }
  }, [])

  // Autoplay loop using hardware-accelerated requestAnimationFrame with delta-time scaling
  useEffect(() => {
    if (isMouseDown || isHovered || activeIdx !== null) return

    let animId
    let lastTime = performance.now()

    const loop = (time) => {
      if (scrollTrackRef.current) {
        const track = scrollTrackRef.current
        const halfWidth = track.scrollWidth / 2
        if (halfWidth > 0) {
          const delta = Math.min(32, time - lastTime)
          lastTime = time

          // 0.8px per 16.6ms is roughly 0.048px per 1ms delta
          scrollPosition.current += 0.048 * delta

          // Loop right boundary safety
          if (scrollPosition.current >= halfWidth) {
            scrollPosition.current = scrollPosition.current - halfWidth
          }

          track.scrollLeft = scrollPosition.current
        }
      } else {
        lastTime = time
      }
      animId = requestAnimationFrame(loop)
    }

    animId = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(animId)
  }, [isMouseDown, isHovered, activeIdx])

  // Handle keyboard events when lightbox is active
  useEffect(() => {
    if (activeIdx === null) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveIdx(null)
      } else if (e.key === 'ArrowRight') {
        setActiveIdx((prev) => (prev + 1) % GALLERY_IMAGES.length)
      } else if (e.key === 'ArrowLeft') {
        setActiveIdx((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [activeIdx])

  // Mouse Drag Event Handlers
  const handleMouseDown = (e) => {
    setIsMouseDown(true)
    setDragged(false)
    startX.current = e.pageX - scrollTrackRef.current.offsetLeft
    scrollLeftState.current = scrollTrackRef.current.scrollLeft
  }

  const handleMouseMove = (e) => {
    if (!isMouseDown) return
    e.preventDefault()
    const x = e.pageX - scrollTrackRef.current.offsetLeft
    const walk = (x - startX.current) * 1.5
    if (Math.abs(walk) > 5) {
      setDragged(true)
    }
    const targetScroll = scrollLeftState.current - walk
    scrollTrackRef.current.scrollLeft = targetScroll
    scrollPosition.current = scrollTrackRef.current.scrollLeft
  }

  const handleMouseUpOrLeave = () => {
    setIsMouseDown(false)
  }

  // Touch Event Handlers for Swiping
  const handleTouchStart = (e) => {
    setDragged(false)
    touchStartX.current = e.touches[0].pageX
    touchScrollLeft.current = scrollTrackRef.current.scrollLeft
  }

  const handleTouchMove = (e) => {
    const walk = (e.touches[0].pageX - touchStartX.current) * 1.2
    if (Math.abs(walk) > 5) {
      setDragged(true)
    }
    const targetScroll = touchScrollLeft.current - walk
    scrollTrackRef.current.scrollLeft = targetScroll
    scrollPosition.current = scrollTrackRef.current.scrollLeft
  }

  // Native Scroll Event Handler for Seamless Loop Wrapping
  const handleScroll = () => {
    if (!scrollTrackRef.current) return
    const track = scrollTrackRef.current
    const halfWidth = track.scrollWidth / 2
    if (halfWidth === 0) return

    // Loop right
    if (track.scrollLeft >= halfWidth) {
      track.scrollLeft = track.scrollLeft - halfWidth
      scrollPosition.current = track.scrollLeft
    } 
    // Loop left (when user is dragging or swiping backwards)
    else if (track.scrollLeft <= 0 && (isMouseDown || dragged)) {
      track.scrollLeft = track.scrollLeft + halfWidth
      scrollPosition.current = track.scrollLeft
    } 
    // Only overwrite scrollPosition from the browser scrollLeft during active user interaction
    // to preserve subpixel floating precision during continuous autoplay
    else if (isMouseDown || dragged) {
      scrollPosition.current = track.scrollLeft
    }
  }

  // Button scroll handlers
  const scroll = (direction) => {
    if (scrollTrackRef.current) {
      const scrollAmount = direction === 'next' ? 440 : -440
      const track = scrollTrackRef.current
      track.scrollBy({ left: scrollAmount, behavior: 'smooth' })

      // Sync internal reference state after smooth animation settles
      setTimeout(() => {
        if (track) {
          scrollPosition.current = track.scrollLeft
        }
      }, 500)
    }
  }

  const openLightbox = (id) => {
    setActiveIdx(id)
  }

  const closeLightbox = () => {
    setActiveIdx(null)
  }

  const navigatePrev = (e) => {
    e.stopPropagation()
    setActiveIdx((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length)
  }

  const navigateNext = (e) => {
    e.stopPropagation()
    setActiveIdx((prev) => (prev + 1) % GALLERY_IMAGES.length)
  }

  return (
    <section className="scrolling-gallery" id="site-gallery">
      <div className="scrolling-gallery__inner">
        
        {/* Header with Navigation Controls */}
        <div className="scrolling-gallery__header">
          <div className="scrolling-gallery__header-content">
            <span className="eyebrow reveal">Portfolio Showroom</span>
            <h2 className="heading-lg reveal reveal-d1">Project Gallery</h2>
            <p className="body-lg reveal reveal-d2">
              Explore our recent fabrication assemblies, plant operations, and successful industrial structures.
            </p>
          </div>
          
          <div className="bento-scroll-controls">
            <button
              className="bento-scroll-btn"
              onClick={() => scroll('prev')}
              aria-label="Scroll Left"
            >
              &#10216;
            </button>
            <button
              className="bento-scroll-btn"
              onClick={() => scroll('next')}
              aria-label="Scroll Right"
            >
              &#10217;
            </button>
          </div>
        </div>

        {/* Bento Scroll Viewport */}
        <div
          className="bento-scroll-viewport"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className="bento-scroll-track"
            ref={scrollTrackRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onScroll={handleScroll}
          >
            {DOUBLE_IMAGES.map((img) => (
              <div
                key={img.uniqueId}
                className="bento-scroll-card"
                onClick={() => {
                  if (!dragged) {
                    openLightbox(img.id)
                  }
                }}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="bento-scroll-card__img"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeIdx !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox__close" onClick={closeLightbox} aria-label="Close Lightbox">
            &times;
          </button>

          <button className="lightbox__nav lightbox__nav--prev" onClick={navigatePrev} aria-label="Previous Image">
            &#10216;
          </button>

          <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox__image-wrap">
              <img
                src={GALLERY_IMAGES[activeIdx].src}
                alt={GALLERY_IMAGES[activeIdx].title}
                className="lightbox__img"
              />
            </div>
            <div className="lightbox__caption">
              <h3 className="lightbox__title">{GALLERY_IMAGES[activeIdx].title}</h3>
              <p className="lightbox__desc">{GALLERY_IMAGES[activeIdx].desc}</p>
            </div>
          </div>

          <button className="lightbox__nav lightbox__nav--next" onClick={navigateNext} aria-label="Next Image">
            &#10217;
          </button>
        </div>
      )}
    </section>
  )
}
