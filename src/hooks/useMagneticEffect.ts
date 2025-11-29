'use client'

import { useEffect, useRef } from 'react'

interface MagneticOptions {
  strength?: number
  range?: number
}

export function useMagneticEffect<T extends HTMLElement = HTMLElement>(options: MagneticOptions = {}) {
  const { strength = 0.3, range = 100 } = options
  const elementRef = useRef<T>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const deltaX = e.clientX - centerX
      const deltaY = e.clientY - centerY
      const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2)

      if (distance < range) {
        const force = (range - distance) / range
        const moveX = deltaX * force * strength
        const moveY = deltaY * force * strength

        element.style.transform = `translate(${moveX}px, ${moveY}px)`
      } else {
        element.style.transform = 'translate(0px, 0px)'
      }
    }

    const handleMouseLeave = () => {
      element.style.transform = 'translate(0px, 0px)'
    }

    element.addEventListener('mousemove', handleMouseMove)
    element.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      element.removeEventListener('mousemove', handleMouseMove)
      element.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [strength, range])

  return elementRef
}