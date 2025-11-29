'use client'

import { motion } from 'framer-motion'

const interestsData = [
  {
    icon: '',
    title: 'Technology & Innovation',
    color: 'text-primary',
    items: [
      'Exploring emerging tech trends',
      'AI/ML applications in backend systems',
      'Cloud computing innovations',
      'Open source contributions'
    ]
  },
  {
    icon: '',
    title: 'Problem Solving',
    color: 'text-green-400',
    items: [
      'Algorithm challenges',
      'System design puzzles',
      'Debugging complex issues',
      'Optimization strategies'
    ]
  },
  {
    icon: '',
    title: 'Learning & Growth',
    color: 'text-purple-400',
    items: [
      'Reading tech blogs & books',
      'Attending developer meetups',
      'Online courses & tutorials',
      'Knowledge sharing'
    ]
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

export function Interests() {
  return (
    <section id="interests" className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          My Interests
        </motion.h2>

        <motion.p
          className="text-lg text-text-secondary text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Beyond coding, I'm passionate about technology trends, problem-solving, and continuous learning.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {interestsData.map((interest, index) => (
            <motion.div
              key={interest.title}
              className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 text-center"
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                y: -10,
                boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)",
                transition: { duration: 0.3 }
              }}
            >
              <motion.div
                className="text-4xl mb-4"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.5, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.2, rotate: 10 }}
              >
                {interest.icon}
              </motion.div>

              <motion.h3
                className={`text-xl font-semibold mb-4 ${interest.color}`}
                variants={cardVariants}
              >
                {interest.title}
              </motion.h3>

              <motion.ul
                className="space-y-2 text-text-secondary"
                variants={containerVariants}
              >
                {interest.items.map((item, itemIndex) => (
                  <motion.li
                    key={item}
                    className="flex items-center justify-center gap-2"
                    variants={cardVariants}
                  >
                    <motion.div
                      className="w-1.5 h-1.5 bg-primary rounded-full"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: (index * 0.2) + (itemIndex * 0.1), duration: 0.3 }}
                      viewport={{ once: true }}
                    />
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Personal Philosophy */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div
            className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors"
            variants={cardVariants}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)",
            }}
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              What Drives Me
            </h3>
            <p className="text-text-secondary italic mb-4 leading-relaxed">
              "I believe technology should solve real-world problems and make life better for people.
              Every line of code I write is an opportunity to create something meaningful."
            </p>
            <ul className="space-y-2 text-text-secondary">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                Building scalable solutions
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                Writing clean, maintainable code
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                Mentoring fellow developers
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                Contributing to open source
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-lg border border-primary/20"
            variants={cardVariants}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.15)",
            }}
          >
            <h3 className="text-xl font-semibold mb-4">Beyond Technology</h3>
            <p className="text-text-secondary mb-4 leading-relaxed">
              When I'm not coding, you'll find me exploring new places, reading about tech innovations,
              or discussing the future of software development with fellow enthusiasts.
            </p>
            <div className="flex flex-wrap gap-2">
              {[' Travel', ' Reading', ' Music', ' Sports'].map((item, index) => (
                <motion.span
                  key={item}
                  className="px-3 py-1 bg-white/10 text-text-primary rounded-full text-sm backdrop-blur-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}