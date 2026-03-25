'use client'

import { motion } from 'framer-motion'
import { Zap, MessageCircle, Code } from 'lucide-react'

const reasons = [
  {
    title: 'Fast Delivery',
    description: 'Quick turnaround without compromising quality. Regular updates throughout the project.',
    icon: Zap
  },
  {
    title: 'Clear Communication',
    description: 'I keep you informed at every step. No technical jargon, just clear progress updates.',
    icon: MessageCircle
  },
  {
    title: 'Clean, Scalable Code',
    description: 'Well-documented code that\'s easy to maintain and scale as your business grows.',
    icon: Code
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
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

export function WhyWorkWithMe() {
  return (
    <section id="why-work-with-me" className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          Why Work With Me
        </motion.h2>

        <motion.p
          className="text-lg text-text-secondary text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Partner with a developer who prioritizes your success and delivers exceptional results
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon
            return (
              <motion.div
                key={reason.title}
                className="bg-card p-8 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 group text-center"
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)",
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 mx-auto group-hover:bg-primary/20 transition-colors"
                  whileHover={{
                    scale: 1.1,
                    rotate: 5
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <IconComponent className="w-8 h-8 text-primary" />
                </motion.div>

                <motion.h3
                  className="text-xl font-semibold mb-4 text-primary group-hover:text-primary-hover transition-colors"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {reason.title}
                </motion.h3>

                <motion.p
                  className="text-text-secondary leading-relaxed"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.1 }}
                  viewport={{ once: true }}
                >
                  {reason.description}
                </motion.p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}