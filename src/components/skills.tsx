'use client'

import { motion } from 'framer-motion'

const skillsData = {
  frontend: [
    'JavaScript (ES6+)',
    'React.js',
    'HTML5 & CSS3',
    'Tailwind CSS'
  ],
  backend: [
    'Node.js',
    'Express.js',
    'Python',
    'Django / Django REST Framework',
    'Flask'
  ],
  databases: [
    'MySQL',
    'PostgreSQL',
    'MongoDB',
    'SQLite'
  ],
  tools: [
    'Git & GitHub',
    'Linux',
    'Bash Scripting',
    'Postman / Thunder Client',
    'Render, Vercel, Railway, Netlify',
    'REST API Development',
    'Nginx',
    'VS Code'
  ]
}

const specializationData = {
  primary: {
    title: 'MERN Stack (Primary)',
    items: [
      'Full-stack MERN apps',
      'Authentication & Authorization (JWT, RBAC)',
      'REST API development',
      'MongoDB schema design',
      'State management'
    ]
  },
  secondary: {
    title: 'Python Backend Development (Secondary)',
    items: [
      'Django REST Framework APIs',
      'Automation scripts',
      'Authentication systems',
      'System tools and utilities'
    ]
  }
}

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
  hidden: { opacity: 0, y: 50, rotateX: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
    }
  }
}

const skillItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    }
  }
}

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          Skills & Technologies
        </motion.h2>

        <motion.p
          className="text-lg text-text-secondary text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          My technical expertise spans full-stack development, from frontend to backend, databases, and essential tools.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {Object.entries(skillsData).map(([key, skills], index) => (
            <motion.div
              key={key}
              className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300"
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)",
                transition: { duration: 0.3 }
              }}
            >
              <motion.h3
                className="text-xl font-semibold mb-4 text-primary capitalize"
                variants={skillItemVariants}
              >
                {key === 'tools' ? 'Tools & Technologies' : key}
              </motion.h3>
              <motion.ul
                className="space-y-2"
                variants={containerVariants}
              >
                {skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skill}
                    className="text-text-secondary flex items-center gap-2"
                    variants={skillItemVariants}
                    whileHover={{ x: 5, color: "#3B82F6" }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="w-1.5 h-1.5 bg-primary rounded-full"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: (index * 0.1) + (skillIndex * 0.05), duration: 0.3 }}
                      viewport={{ once: true }}
                    />
                    {skill}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.h3
          className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Specialization
        </motion.h3>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {Object.values(specializationData).map((spec, index) => (
            <motion.div
              key={spec.title}
              className={`p-6 rounded-lg border ${
                index === 0
                  ? 'bg-card border-border hover:border-primary/50'
                  : 'bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20'
              }`}
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                boxShadow: index === 0
                  ? "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                  : "0 25px 50px -12px rgba(59, 130, 246, 0.15)",
                transition: { duration: 0.3 }
              }}
            >
              <motion.h4
                className="text-xl font-semibold mb-4 text-primary"
                variants={skillItemVariants}
              >
                {spec.title}
              </motion.h4>
              <motion.ul
                className="space-y-2 text-text-secondary"
                variants={containerVariants}
              >
                {spec.items.map((item, itemIndex) => (
                  <motion.li
                    key={item}
                    className="flex items-center gap-2"
                    variants={skillItemVariants}
                    whileHover={{ x: 5, color: "#3B82F6" }}
                    transition={{ duration: 0.2 }}
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
      </div>
    </section>
  )
}