// src/hooks/useReveal.js
// Ultra-smooth IntersectionObserver & dynamic reveal orchestrator
import { useEffect } from 'react'

const REVEAL_SELECTOR = '.reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-scale, .reveal-blur, .reveal-stagger, .reveal-img'

export function useReveal(deps = []) {
  useEffect(() => {
    // Reveal any elements already visible on screen immediately
    const checkImmediateVisibility = (elements) => {
      const windowHeight = window.innerHeight
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect()
        // If element is already in viewport or above it
        if (rect.top <= windowHeight - 40 && rect.bottom >= 0) {
          el.classList.add('vis')
        }
      })
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('vis')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -40px 0px',
      }
    )

    const observeAll = () => {
      const elements = document.querySelectorAll(REVEAL_SELECTOR)
      checkImmediateVisibility(elements)
      elements.forEach((el) => {
        if (!el.classList.contains('vis')) {
          observer.observe(el)
        }
      })
    }

    // Initial pass
    observeAll()

    // Short timeout to catch layout shifts after images/fonts load
    const timer = setTimeout(observeAll, 120)

    // MutationObserver to automatically catch dynamically rendered cards or filters
    const mutationObserver = new MutationObserver(() => {
      observeAll()
    })

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    })

    return () => {
      clearTimeout(timer)
      observer.disconnect()
      mutationObserver.disconnect()
    }
  }, deps)
}
