'use client'

import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
    }
  }
}

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    }
  }
}

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div
            className="space-y-6"
            variants={cardVariants}
          >
            <motion.p
              className="text-lg text-text-secondary leading-relaxed"
              variants={textVariants}
            >
              I'm a Software Engineer and DevOps Engineer passionate about
              building, deploying, and maintaining scalable digital products.
              My expertise spans full-stack development with React, Node.js,
              Python, Django, and modern cloud-native technologies.
            </motion.p>

            <motion.p
              className="text-lg text-text-secondary leading-relaxed"
              variants={textVariants}
            >
              I design secure, efficient, and maintainable systems, leveraging
              Docker, CI/CD pipelines, Infrastructure as Code (Terraform),
              PostgreSQL, Redis, and Linux-based environments to deliver
              reliable production-ready applications. My focus is on clean
              code, scalable architecture, automation, and operational
              excellence.
            </motion.p>

            <motion.div
              className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors"
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                boxShadow:
                  '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
              }}
            >
              <motion.h3
                className="text-xl font-semibold mb-4 text-primary"
                variants={textVariants}
              >
                What I Do
              </motion.h3>

              <motion.ul
                className="space-y-3 text-text-secondary"
                variants={containerVariants}
              >
                {[
                  'Full-Stack Application Development',
                  'Cloud & DevOps Engineering',
                  'Docker & Containerization',
                  'CI/CD Pipeline Automation',
                  'Infrastructure as Code (Terraform)',
                  'Backend Systems & API Development',
                  'System Architecture & Scalability',
                  'Technical Mentorship (TechBridge Africa)',
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    variants={textVariants}
                    className="flex items-center gap-3"
                  >
                    <motion.div
                      className="w-2 h-2 bg-primary rounded-full"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{
                        delay: index * 0.1,
                        duration: 0.3
                      }}
                      viewport={{ once: true }}
                    />
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div
              className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-lg border border-primary/20"
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                boxShadow:
                  '0 20px 25px -5px rgba(59, 130, 246, 0.1), 0 10px 10px -5px rgba(59, 130, 246, 0.04)'
              }}
            >
              <motion.h3
                className="text-xl font-semibold mb-3"
                variants={textVariants}
              >
                Philosophy
              </motion.h3>

              <motion.p
                className="text-text-secondary italic leading-relaxed"
                variants={textVariants}
              >
                "Building software is only half the job. Great engineering
                ensures systems are scalable, reliable, secure, and
                maintainable long after deployment."
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}