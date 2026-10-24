// src/components/SparkCursor.jsx
import { useEffect, useRef } from 'react'

export default function SparkCursor() {
  const canvasRef = useRef(null)
  const particles = useRef([])
  const lastPos = useRef({ x: 0, y: 0 })
  const maxParticles = 28 // Much lower limit for clean, corporate feel

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Subtle, elegant metallic champagne & gold spark palette
    const colors = ['#d8c2a0', '#ffffff', '#e8d5be', '#c2a87d']

    const createParticle = (x, y, count = 1, isClick = false) => {
      for (let i = 0; i < count; i++) {
        if (particles.current.length >= maxParticles) {
          particles.current.shift()
        }

        const angle = Math.random() * Math.PI * 2
        const speed = isClick ? Math.random() * 2.5 + 1 : Math.random() * 1.2 + 0.4

        particles.current.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.4,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: isClick ? 0.75 : 0.55, // Subtle transparency
          size: isClick ? Math.random() * 1.8 + 1 : Math.random() * 1.2 + 0.8, // Delicate micro-sparks
          decay: isClick ? 0.04 : 0.038, // Fast fade out
        })
      }
    }

    // Only spawn a micro-spark when cursor has moved at least 22px
    const handleMouseMove = (e) => {
      const dx = e.clientX - lastPos.current.x
      const dy = e.clientY - lastPos.current.y
      const dist = Math.hypot(dx, dy)

      if (dist > 22) {
        lastPos.current = { x: e.clientX, y: e.clientY }
        createParticle(e.clientX, e.clientY, 1, false)
      }
    }

    // Gentle 4-particle sparkle on clicks (instead of heavy 18)
    const handleMouseDown = (e) => {
      createParticle(e.clientX, e.clientY, 4, true)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mousedown', handleMouseDown, { passive: true })

    // Animation Loop
    let animId
    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = particles.current.length - 1; i >= 0; i--) {
        const p = particles.current[i]

        p.x += p.vx
        p.y += p.vy
        p.alpha -= p.decay
        p.size *= 0.94

        p.vy += 0.03

        if (p.alpha <= 0 || p.size <= 0.2) {
          particles.current.splice(i, 1)
          continue
        }

        ctx.save()
        ctx.globalAlpha = p.alpha
        ctx.shadowBlur = 4
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

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      cancelAnimationFrame(animId)
    }
  }, [])

  return <canvas ref={canvasRef} className="spark-canvas" />
}
