'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "Evans built our NGO platform from scratch and delivered beyond expectations. His technical skills and communication made the whole process smooth.",
    author: "Project Lead, Women Empowerment SDGs Platform"
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

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          What Clients Say
        </motion.h2>

        <motion.p
          className="text-lg text-text-secondary text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Real feedback from projects I've delivered. More testimonials coming soon!
        </motion.p>

        <motion.div
          className="flex justify-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-card p-8 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 max-w-2xl text-center relative"
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
                className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center"
                whileHover={{
                  scale: 1.2,
                  rotate: 10
                }}
                transition={{ duration: 0.2 }}
              >
                <Quote className="w-4 h-4 text-primary" />
              </motion.div>

              <motion.blockquote
                className="text-lg text-text-secondary italic mb-6 leading-relaxed pt-4"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                "{testimonial.quote}"
              </motion.blockquote>

              <motion.cite
                className="text-primary font-semibold text-base"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                — {testimonial.author}
              </motion.cite>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}