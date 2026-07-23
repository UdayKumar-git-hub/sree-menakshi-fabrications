// src/components/BeforeAfterSlider.jsx
import { useState, useRef, useEffect } from 'react'

export default function BeforeAfterSlider({ 
  beforeImage = '/project-photo-1.jpeg', 
  afterImage = '/project-warehouse.png',
  beforeLabel = 'On-Site Framework (WIP)',
  afterLabel = 'Finished PEB Warehouse'
}) {
  const [sliderPos, setSliderPos] = useState(50)
  const containerRef = useRef(null)
  const isDragging = useRef(false)

  const handleMove = (clientX) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPos(percentage)
  }

  const handleMouseDown = () => {
    isDragging.current = true
  }

  const handleMouseMove = (e) => {
    if (!isDragging.current) return
    handleMove(e.clientX)
  }

  const handleTouchMove = (e) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX)
    }
  }

  useEffect(() => {
    const handleMouseUp = () => {
      isDragging.current = false
    }

    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('touchend', handleMouseUp)

    return () => {
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('touchend', handleMouseUp)
    }
  }, [])

  return (
    <section className="before-after-section" id="site-comparison">
      <div className="section__inner">
        <div className="section__header" style={{ textAlign: 'center', marginBottom: 32 }}>
          <span className="eyebrow">Transformation</span>
          <h2 className="heading-lg">Before & After</h2>
          <p className="body-lg" style={{ maxWidth: 600, margin: '0 auto' }}>
            Slide the handle to view the transition from raw structural rigging to finished pre-engineered industrial buildings.
          </p>
        </div>

        <div 
          className="ba-slider-container"
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          onMouseDown={(e) => {
            handleMouseDown()
            handleMove(e.clientX)
          }}
          onTouchStart={(e) => {
            handleMouseDown()
            if (e.touches.length > 0) handleMove(e.touches[0].clientX)
          }}
        >
          {/* Before Image (Background) */}
          <img 
            src={beforeImage} 
            alt="Before" 
            className="ba-image ba-image--before" 
          />
          <span className="ba-label ba-label--before">{beforeLabel}</span>

          {/* After Image (Foreground, clipped) */}
          <img 
            src={afterImage} 
            alt="After" 
            className="ba-image ba-image--after"
            style={{
              clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)`,
              WebkitClipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)`
            }}
          />
          <span className="ba-label ba-label--after">{afterLabel}</span>

          {/* Draggable Divider Line */}
          <div 
            className="ba-slider-bar"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="ba-slider-handle">
              <svg viewBox="0 0 24 24">
                <path d="M8 7l-5 5 5 5M16 7l5 5-5 5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
