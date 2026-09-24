'use client'

import { motion } from 'framer-motion'

const interestsData = [
  {
    title: 'Technology & Innovation',
    items: [
      'Exploring emerging tech trends',
      'AI/ML applications in backend systems',
      'Cloud computing and infrastructure',
      'Open source contributions'
    ]
  },
  {
    title: 'Problem Solving',
    items: [
      'Debugging production issues',
      'System design challenges',
      'Performance optimization',
      'Payment integration puzzles'
    ]
  },
  {
    title: 'Learning & Growth',
    items: [
      'Reading tech blogs and docs',
      'Attending developer meetups',
      'Building side projects to learn new tools',
      'Mentoring at TechBridge Africa'
    ]
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

export function Interests() {
  return (
    <section id="interests" className="py-20 px-4 bg-secondary/50">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-serif font-semibold text-center mb-3 text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Beyond the code
        </motion.h2>

        <motion.p
          className="text-base text-text-secondary text-center mb-12 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          What I care about when I'm not shipping features.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {interestsData.map((interest) => (
            <motion.div key={interest.title} variants={itemVariants}>
              <h3 className="text-base font-medium mb-3 text-primary">
                {interest.title}
              </h3>
              <ul className="space-y-1.5">
                {interest.items.map((item) => (
                  <li key={item} className="text-text-secondary text-sm flex items-start gap-2">
                    <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
