'use client'

import { motion } from 'framer-motion'

const educationData = [
  {
    icon: '',
    date: '2024 - 2026 (Expected)',
    title: 'Diploma in Information Communication Technology',
    institution: 'Eldoret National Polytechnic',
    description: 'Comprehensive ICT program covering software development, database management, network administration, and systems analysis.',
    skills: [
      'Software Development Fundamentals',
      'Database Management Systems',
      'Network Administration',
      'Systems Analysis & Design'
    ]
  },
  {
    icon: '',
    date: '2024 - Present',
    title: 'Software Engineering Program',
    institution: 'PLP Academy',
    description: 'Intensive software engineering bootcamp focusing on modern development practices and project-based learning.',
    skills: [
      'Full-stack Web Development',
      'Backend API Development',
      'Modern Development Practices',
      'Project-based Learning'
    ]
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
    }
  }
}

export function Education() {
  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          Education & Learning
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block"></div>

          <motion.div
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                className="relative flex items-start gap-8"
                variants={itemVariants}
              >
                {/* Timeline icon */}
                <motion.div
                  className="flex-shrink-0 w-16 h-16 bg-card border border-border rounded-full flex items-center justify-center text-2xl shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.icon}
                </motion.div>

                {/* Content */}
                <motion.div
                  className="flex-1 bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="text-primary font-medium">{item.date}</span>
                  </div>

                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {item.title}
                  </h3>

                  <p className="text-text-secondary font-medium mb-4">
                    {item.institution}
                  </p>

                  <p className="text-text-secondary mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: (index * 0.2) + (skillIndex * 0.1), duration: 0.3 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Academic Focus */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div
            className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors"
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)",
            }}
          >
            <h3 className="text-xl font-semibold mb-4 text-primary flex items-center gap-2">
               Learning Goals
            </h3>
            <ul className="space-y-2 text-text-secondary">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                Advanced Django Development
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                Cloud Architecture & Deployment
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                DevOps & CI/CD Practices
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                API Security & Best Practices
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors"
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)",
            }}
          >
            <h3 className="text-xl font-semibold mb-4 text-primary">Academic Focus</h3>
            <p className="text-text-secondary mb-4 leading-relaxed">
              My studies combine theoretical computer science foundations with practical
              software development skills, preparing me for modern backend development challenges.
            </p>
            <div className="flex items-center gap-2 text-primary">
              <span className="text-lg"></span>
              <span className="font-medium">Expected Graduation: 2026</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}