'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface Particle {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  size: number
  color: string
  life: number
  maxLife: number
  shape: 'circle' | 'square' | 'triangle'
}

const TECH_LOGOS = ['JS', '', '', '', '', '', '⚡', '']

export function ParticleSystem() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [particles, setParticles] = useState<Particle[]>([])
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const animationRef = useRef<number>()
  const particleIdRef = useRef(0)

  // Initialize particles
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Create initial particles
    const initialParticles: Particle[] = []
    for (let i = 0; i < 50; i++) {
      initialParticles.push(createParticle())
    }
    setParticles(initialParticles)

    // Mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      setParticles(prevParticles => {
        return prevParticles.map(particle => {
          // Update position
          particle.x += particle.vx
          particle.y += particle.vy

          // Apply mouse attraction/repulsion
          const dx = mousePos.x - particle.x
          const dy = mousePos.y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            const force = (150 - distance) / 150
            const angle = Math.atan2(dy, dx)
            particle.vx -= Math.cos(angle) * force * 0.5
            particle.vy -= Math.sin(angle) * force * 0.5
          }

          // Apply friction
          particle.vx *= 0.99
          particle.vy *= 0.99

          // Bounce off edges
          if (particle.x < 0 || particle.x > canvas.width) {
            particle.vx *= -0.8
            particle.x = Math.max(0, Math.min(canvas.width, particle.x))
          }
          if (particle.y < 0 || particle.y > canvas.height) {
            particle.vy *= -0.8
            particle.y = Math.max(0, Math.min(canvas.height, particle.y))
          }

          // Update life
          particle.life--
          if (particle.life <= 0) {
            return createParticle() // Respawn particle
          }

          // Draw particle
          ctx.save()
          ctx.globalAlpha = particle.life / particle.maxLife

          if (particle.shape === 'circle') {
            ctx.beginPath()
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
            ctx.fillStyle = particle.color
            ctx.fill()
          } else if (particle.shape === 'square') {
            ctx.fillStyle = particle.color
            ctx.fillRect(particle.x - particle.size/2, particle.y - particle.size/2, particle.size, particle.size)
          } else if (particle.shape === 'triangle') {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y - particle.size/2)
            ctx.lineTo(particle.x - particle.size/2, particle.y + particle.size/2)
            ctx.lineTo(particle.x + particle.size/2, particle.y + particle.size/2)
            ctx.closePath()
            ctx.fillStyle = particle.color
            ctx.fill()
          }

          ctx.restore()

          return particle
        })
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [mousePos])

  const createParticle = (): Particle => {
    const shapes: ('circle' | 'square' | 'triangle')[] = ['circle', 'square', 'triangle']
    const colors = [
      '#3B82F6', // blue
      '#10B981', // green
      '#F59E0B', // yellow
      '#EF4444', // red
      '#8B5CF6', // purple
      '#06B6D4', // cyan
    ]

    return {
      id: particleIdRef.current++,
      x: Math.random() * (canvasRef.current?.width || window.innerWidth),
      y: Math.random() * (canvasRef.current?.height || window.innerHeight),
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      life: Math.random() * 1000 + 500,
      maxLife: 1000,
      shape: shapes[Math.floor(Math.random() * shapes.length)]
    }
  }

  // Create particle bursts on scroll
  useEffect(() => {
    const handleScroll = () => {
      // Random chance to create burst on scroll
      if (Math.random() < 0.1) {
        setParticles(prev => {
          const newParticles: Particle[] = []
          for (let i = 0; i < 5; i++) {
            const particle = createParticle()
            // Position near scroll area
            particle.x = Math.random() * window.innerWidth
            particle.y = window.scrollY + Math.random() * window.innerHeight
            particle.vx = (Math.random() - 0.5) * 4
            particle.vy = (Math.random() - 0.5) * 4
            newParticles.push(particle)
          }
          return [...prev, ...newParticles]
        })
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ background: 'transparent' }}
      />

      {/* Tech logo particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {TECH_LOGOS.map((logo, index) => (
          <motion.div
            key={index}
            className="absolute text-2xl opacity-20"
            style={{
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 90}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              rotate: [0, 360],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {logo}
          </motion.div>
        ))}
      </div>
    </>
  )
}