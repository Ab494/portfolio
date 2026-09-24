'use client'

import { motion } from 'framer-motion'
import { Globe, Server, Shield, Database } from 'lucide-react'

const services = [
  {
    title: 'Web Applications',
    description: 'Full-stack apps built with Django, Laravel, or Next.js from auth flows to deployment.',
    icon: Globe
  },
  {
    title: 'REST API Development',
    description: 'APIs with Django REST Framework or Express, including M-Pesa Daraja integration and webhook handling.',
    icon: Server
  },
  {
    title: 'Authentication & Security',
    description: 'JWT auth, role-based access control, and securing payment callbacks.',
    icon: Shield
  },
  {
    title: 'Database Design',
    description: 'PostgreSQL and MySQL schemas that hold up under real usage, not just in development.',
    icon: Database
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    }
  }
}

export function Services() {
  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-serif font-semibold text-center mb-3 text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          What I work on
        </motion.h2>

        <motion.p
          className="text-base text-text-secondary text-center mb-12 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Day-to-day, this is the kind of work I actually do.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={service.title}
                className="flex gap-4"
                variants={itemVariants}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-md bg-secondary border border-border flex items-center justify-center">
                  <IconComponent className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1.5 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
