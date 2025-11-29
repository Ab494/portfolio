'use client'

import { motion } from 'framer-motion'

export function Mentorship() {
  return (
    <section id="mentorship" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
           Mentorship Spotlight
        </motion.h2>

        <motion.div
          className="bg-card p-8 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.02,
            boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)",
            transition: { duration: 0.3 }
          }}
        >
          <motion.p
            className="text-lg leading-relaxed text-text-secondary text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            I'm incredibly grateful to be mentored by{' '}
            <motion.span
              className="text-green-400 font-semibold"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Kiprotich Mibei Amos
            </motion.span>
            , a{' '}
            <motion.span
              className="text-purple-400 font-semibold italic"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Senior Infrastructure Engineer
            </motion.span>{' '}
            whose wisdom and experience have played a pivotal role in my growth as a backend developer.
            His unwavering guidance, technical insights, and belief in my potential have not only
            strengthened my skills but also deepened my confidence to pursue ambitious goals.
            Having a mentor like him has reminded me that behind every rising developer
            is someone who chooses to guide, challenge, and inspire them to go further.
          </motion.p>

          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center gap-2 text-primary font-medium"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-2xl"></span>
              <span>Thank you for the guidance and inspiration</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}