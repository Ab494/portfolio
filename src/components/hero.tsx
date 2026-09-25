'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Badge } from './ui/badge'

const techStack = [
  'Python',
  'Django',
  'Laravel',
  'Next.js',
  'Docker',
  'PostgreSQL',
  'GitHub Actions',
  'Terraform',
]

const roles = [
  'Backend Developer',
  'DevOps Engineer',
  'Django Specialist',
  'Problem Solver',
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
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

function Typewriter() {
  const [text, setText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (text.length < currentRole.length) {
            setText(currentRole.slice(0, text.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (text.length > 0) {
            setText(currentRole.slice(0, text.length - 1))
          } else {
            setIsDeleting(false)
            setRoleIndex(prev => (prev + 1) % roles.length)
          }
        }
      },
      isDeleting ? 50 : 90
    )

    return () => clearTimeout(timeout)
  }, [text, isDeleting, roleIndex])

  return (
    <span className="text-primary">
      {text}
      <span className="inline-block w-[3px] h-[1.1em] bg-primary ml-1 animate-pulse align-middle" />
    </span>
  )
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 pt-32 pb-8 overflow-hidden"
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="text-center lg:text-left order-2 lg:order-1"
            variants={itemVariants}
          >
            <motion.div variants={itemVariants} className="mb-4">
              <span className="text-sm font-mono text-muted-foreground tracking-wide">
                {"// Hello, I'm"}
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold mb-3 text-foreground leading-tight"
              variants={itemVariants}
            >
              Evans Kipngeno
              <br />
              Cheruiyot
            </motion.h1>

            <motion.div
              className="text-lg md:text-xl font-medium mb-6 h-8"
              variants={itemVariants}
            >
              <Typewriter />
            </motion.div>

            <motion.div variants={itemVariants} className="mb-6">
              <Badge
                variant="outline"
                className="text-sm px-3 py-1 border-border text-muted-foreground"
              >
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                Available for work
              </Badge>
            </motion.div>

            <motion.p
              className="text-base md:text-lg text-text-secondary mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              variants={itemVariants}
            >
              I build and maintain backend systems with Django, Laravel, and
              Next.js. I handle deployment too — Docker, CI/CD pipelines,
              and VPS/cPanel setups. Most of my work involves fixing real
              production issues, integrating payment APIs, and keeping
              services running reliably.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8"
              variants={itemVariants}
            >
              {techStack.map((tech) => (
                <motion.div key={tech} variants={badgeVariants}>
                  <Badge variant="secondary" className="text-sm px-3 py-1">
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary-hover transition-all font-medium shadow-sm hover:shadow-md"
              >
                Get in touch
              </a>

              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground rounded-md hover:border-primary hover:text-primary transition-colors font-medium"
              >
                See my work
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                Download resume
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center lg:justify-end order-1 lg:order-2"
            variants={itemVariants}
          >
            <div className="relative group">
              <div className="absolute -inset-4 rounded-full border border-primary/20 group-hover:border-primary/40 transition-colors duration-500" />
              <div className="absolute -inset-8 rounded-full border border-border/50 group-hover:border-border transition-colors duration-700" />

              <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-primary/30 shadow-xl group-hover:shadow-2xl transition-shadow duration-500">
                <img
                  src="/vanso.jpeg"
                  alt="Evans Kipngeno Cheruiyot"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
              </div>

              <motion.div
                className="absolute -top-2 -right-2 bg-card border border-border rounded-md px-3 py-1.5 shadow-md"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="text-xs font-mono text-primary font-medium">{'</>'}</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-2 -left-4 bg-card border border-border rounded-md px-3 py-1.5 shadow-md"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <span className="text-xs font-mono text-muted-foreground">Django + DRF</span>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-8 bg-card border border-border rounded-md px-3 py-1.5 shadow-md hidden md:block"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                <span className="text-xs font-mono text-muted-foreground">Docker</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
