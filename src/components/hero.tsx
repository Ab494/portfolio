'use client'

import { motion } from 'framer-motion'
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
}

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 pt-32 pb-8"
    >
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            className="text-center lg:text-left order-2 lg:order-1"
            variants={itemVariants}
          >
            <motion.div variants={itemVariants}>
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold mb-4 text-foreground leading-tight"
                variants={itemVariants}
              >
                Evans Kipngeno Cheruiyot
              </motion.h1>
            </motion.div>

            <motion.p
              className="text-lg text-primary mb-6 font-medium"
              variants={itemVariants}
            >
              Backend Developer & DevOps Engineer
            </motion.p>

            <motion.div variants={itemVariants} className="mb-6">
              <Badge
                variant="outline"
                className="text-sm px-3 py-1 border-border text-muted-foreground"
              >
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
                <motion.div
                  key={tech}
                  variants={badgeVariants}
                >
                  <Badge
                    variant="secondary"
                    className="text-sm px-3 py-1"
                  >
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
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary-hover transition-colors font-medium"
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
                href="/Evans-Kipngeno-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                Download resume
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-end order-1 lg:order-2"
            variants={itemVariants}
          >
            <div className="relative">
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border border-border">
                <img
                  src="/vanso.jpeg"
                  alt="Evans Kipngeno Cheruiyot"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
