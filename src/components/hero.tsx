'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const techStack = [
  'Python',
  'Django',
  'Django REST',
  'Next.js',
  'PostgreSQL',
  'Docker',
  'AWS',
]

const roles = [
  'Backend & Full-Stack Engineer',
  'Backend Engineer',
  'Full-Stack Engineer',
  'DevOps Engineer',
]

const positioningLine = 'Backend \u2022 APIs \u2022 Full-Stack \u2022 DevOps'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99] as [number, number, number, number],
    },
  },
}

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

function RoleRotator() {
  const [text, setText] = useState(roles[0])
  const [roleIndex, setRoleIndex] = useState(0)
  const [phase, setPhase] = useState<'holding' | 'fading'>('holding')

  useEffect(() => {
    if (phase === 'holding') {
      const hold = setTimeout(() => setPhase('fading'), 3000)
      return () => clearTimeout(hold)
    }

    const fadeTimeout = setTimeout(() => {
      const next = (roleIndex + 1) % roles.length
      setText(roles[next])
      setRoleIndex(next)
      setPhase('holding')
    }, 400)

    return () => clearTimeout(fadeTimeout)
  }, [phase, roleIndex])

  return (
    <motion.span
      key={text}
      className="text-primary"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {text}
    </motion.span>
  )
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 pt-32 pb-12 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-secondary rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT: Content */}
          <motion.div
            className="text-center lg:text-left order-2 lg:order-1"
            variants={itemVariants}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold mb-4 text-foreground leading-tight"
              variants={itemVariants}
            >
              Evans Kipngeno
              <br />
              Cheruiyot
            </motion.h1>

            <motion.div
              className="text-base md:text-lg font-medium mb-5 h-7"
              variants={itemVariants}
            >
              <RoleRotator />
            </motion.div>

            <motion.p
              className="text-lg md:text-xl font-medium text-foreground mb-4 max-w-xl mx-auto lg:mx-0 leading-snug"
              variants={itemVariants}
            >
              I build reliable backend systems, APIs, and production-ready web applications.
            </motion.p>

            <motion.p
              className="text-sm md:text-base text-text-secondary mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              variants={itemVariants}
            >
              I build backend systems, APIs, and full-stack applications with Python, Django, Next.js, and PostgreSQL. I also handle Docker-based deployments, CI/CD, third-party integrations, and production infrastructure.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8"
              variants={itemVariants}
            >
              {techStack.map((tech) => (
                <motion.span key={tech} variants={badgeVariants}>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-md text-sm font-medium border border-border bg-secondary text-text-secondary transition-all duration-200 hover:border-primary/40 hover:text-primary cursor-default">
                    {tech}
                  </span>
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 mb-5"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary-hover transition-all font-medium shadow-sm hover:shadow-md"
              >
                View my work
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground rounded-md hover:border-primary hover:text-primary transition-colors font-medium"
              >
                Get in touch
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                Download CV
              </a>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-xs font-mono text-muted-foreground tracking-wide"
            >
              {positioningLine}
            </motion.p>
          </motion.div>

          {/* RIGHT: Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-end order-1 lg:order-2"
            variants={itemVariants}
          >
            <div className="relative group">
              <div className="absolute -inset-4 rounded-full border border-primary/20 group-hover:border-primary/40 transition-colors duration-500" />
              <div className="absolute -inset-8 rounded-full border border-border/50 group-hover:border-border transition-colors duration-700" />

              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-primary/30 shadow-xl group-hover:shadow-2xl transition-shadow duration-500">
                <img
                  src="/vanso.jpeg"
                  alt="Evans Kipngeno Cheruiyot"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
              </div>

              <motion.div
                className="absolute -bottom-2 -left-4 bg-card border border-border rounded-md px-3 py-1.5 shadow-md"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                <span className="text-xs font-mono text-muted-foreground">Django + DRF</span>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-8 bg-card border border-border rounded-md px-3 py-1.5 shadow-md hidden md:block"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <span className="text-xs font-mono text-muted-foreground">Docker</span>
              </motion.div>

              <motion.div
                className="absolute -top-2 right-6 bg-card border border-border rounded-md px-3 py-1.5 shadow-md hidden md:block"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
              >
                <span className="text-xs font-mono text-muted-foreground">PostgreSQL</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
