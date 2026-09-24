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
      delayChildren: 0.2,
    }
  }
}

const cardVariants = {
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

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-serif font-semibold text-center mb-3 text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          What clients say
        </motion.h2>

        <motion.p
          className="text-base text-text-secondary text-center mb-10 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          More testimonials coming soon.
        </motion.p>

        <motion.div
          className="flex justify-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="max-w-2xl text-center relative pt-8"
              variants={cardVariants}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-secondary border border-border rounded-md flex items-center justify-center">
                <Quote className="w-4 h-4 text-primary" />
              </div>

              <blockquote className="text-lg text-text-secondary italic mb-5 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              <cite className="text-primary font-medium text-sm not-italic">
                — {testimonial.author}
              </cite>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
