'use client'

import { motion } from 'framer-motion'

const educationData = [
  {
    date: '2024, Completed',
    title: 'Diploma in Information Communication Technology',
    institution: 'Eldoret National Polytechnic',
    description: 'Software development, database management, network administration, and systems analysis.',
    skills: [
      'Software Development Fundamentals',
      'Database Management Systems',
      'Network Administration',
      'Systems Analysis & Design'
    ]
  },
  {
    date: '2025 (June to November)',
    title: 'Software Engineering Program',
    institution: 'PLP Academy',
    description: 'Project-based bootcamp covering full-stack development and modern engineering practices.',
    skills: [
      'Full-stack Web Development',
      'Python & Django',
      'Web Technologies',
      'Startup building'
    ]
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.15,
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

export function Education() {
  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-serif font-semibold text-center mb-12 text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>

        <div className="relative">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-border hidden md:block"></div>

          <motion.div
            className="space-y-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                className="relative flex items-start gap-6"
                variants={itemVariants}
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-primary bg-background mt-1 hidden md:block" />

                <div className="flex-1 pl-2">
                  <span className="text-sm text-primary font-medium">{item.date}</span>
                  <h3 className="text-lg font-medium mt-1 mb-1 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary text-sm mb-3">{item.institution}</p>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 bg-secondary border border-border rounded-md text-xs text-muted-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="mt-12 pt-8 border-t border-border"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-base font-medium mb-3 text-foreground">Currently learning</h3>
          <ul className="space-y-2 text-text-secondary text-sm">
            <li className="flex items-center gap-2">
              <div className="w-1 h-1 bg-primary rounded-full" />
              Advanced Django and DRF patterns
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1 h-1 bg-primary rounded-full" />
              Cloud architecture and deployment strategies
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1 h-1 bg-primary rounded-full" />
              API security best practices
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
