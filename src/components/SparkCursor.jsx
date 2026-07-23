// src/components/SparkCursor.jsx
import { useEffect, useRef } from 'react'

export default function SparkCursor() {
  const canvasRef = useRef(null)
  const particles = useRef([])
  const maxParticles = 120

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Spark particle creator helper
    const createParticle = (x, y, count = 1) => {
      const colors = ['#f97316', '#ea580c', '#d97706', '#d8c2a0', '#ffffff', '#b45309']
      for (let i = 0; i < count; i++) {
        if (particles.current.length >= maxParticles) {
          particles.current.shift() // Remove oldest if limit reached
        }

        // Random velocity vector
        const angle = Math.random() * Math.PI * 2
        // Stronger burst for click spawns
        const speed = count > 2 ? Math.random() * 5 + 2 : Math.random() * 2 + 1

        particles.current.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - (Math.random() * 1.5), // Drift upwards slightly
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: 1,
          size: Math.random() * 3 + 1.5,
          decay: Math.random() * 0.02 + 0.015,
        })
      }
    }

    // Event listeners for pointer updates
    const handleMouseMove = (e) => {
      createParticle(e.clientX, e.clientY, 1)
    }

    const handleMouseDown = (e) => {
      createParticle(e.clientX, e.clientY, 18) // Spawns a nice burst on clicks!
    }

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        createParticle(e.touches[0].clientX, e.touches[0].clientY, 1)
      }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mousedown', handleMouseDown, { passive: true })
    window.addEventListener('touchmove', handleTouchMove, { passive: true })

    // Animation Loop
    let animId
    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = particles.current.length - 1; i >= 0; i--) {
        const p = particles.current[i]
        
        // Update positions
        p.x += p.vx
        p.y += p.vy
        p.alpha -= p.decay
        p.size *= 0.96 // shrink gradually

        // Gravity pull/resistance simulation
        p.vy += 0.05

        // If particle faded out or shrunk to nothing, remove it
        if (p.alpha <= 0 || p.size <= 0.2) {
          particles.current.splice(i, 1)
          continue
        }

        // Draw particle
        ctx.save()
        ctx.globalAlpha = p.alpha
        ctx.shadowBlur = 10
        ctx.shadowColor = p.color
        ctx.fillStyle = p.color
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }

      animId = requestAnimationFrame(tick)
    }
    tick()

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('touchmove', handleTouchMove)
      cancelAnimationFrame(animId)
    }
  }, [])

  return <canvas ref={canvasRef} className="spark-canvas" />
}
