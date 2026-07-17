// src/hooks/useReveal.js
// Sets up IntersectionObserver for scroll-reveal animations
import { useEffect } from 'react'

export function useReveal(deps = []) {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-img')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('vis')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, deps)
}
