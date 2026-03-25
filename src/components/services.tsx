'use client'

import { motion } from 'framer-motion'
import { Globe, Server, Shield, Database } from 'lucide-react'

const services = [
  {
    title: 'Full-Stack Web Applications',
    description: 'End-to-end MERN stack applications with modern UI/UX and scalable architecture',
    icon: Globe
  },
  {
    title: 'REST API Development',
    description: 'Secure, well-documented APIs with Django REST Framework or Node.js/Express',
    icon: Server
  },
  {
    title: 'Authentication & Security',
    description: 'JWT-based auth, role-based access control, and security best practices',
    icon: Shield
  },
  {
    title: 'Database Design & Optimization',
    description: 'Efficient MongoDB, PostgreSQL, or MySQL schemas optimized for performance',
    icon: Database
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

export function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          What I Can Build For You
        </motion.h2>

        <motion.p
          className="text-lg text-text-secondary text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Specialized in creating robust, scalable solutions that drive business growth and user satisfaction
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={service.title}
                className="bg-card p-8 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 group"
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  rotateX: 5,
                  rotateY: 5,
                  boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)",
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                <motion.div
                  className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors"
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
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {service.title}
                </motion.h3>

                <motion.p
                  className="text-text-secondary leading-relaxed"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.1 }}
                  viewport={{ once: true }}
                >
                  {service.description}
                </motion.p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}