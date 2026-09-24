'use client'

import { motion } from 'framer-motion'

export function Mentorship() {
  return (
    <section id="mentorship" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-serif font-semibold text-center mb-10 text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Mentorship
        </motion.h2>

        <motion.div
          className="border-l-2 border-primary/30 pl-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-base text-text-secondary leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            I'm grateful to be mentored by{' '}
            <span className="text-primary font-medium">
              Kiprotich Mibei Amos
            </span>
            , a Senior Infrastructure Engineer. His guidance has shaped how I
            approach backend systems and DevOps not just the code, but how
            you think about reliability, monitoring, and keeping things
            running in production. Having someone who's been through it
            challenge your assumptions makes a real difference.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
