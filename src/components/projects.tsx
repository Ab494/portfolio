'use client'

import { motion } from 'framer-motion'
import { Badge } from './ui/badge'
import { useMagneticEffect } from '@/hooks/useMagneticEffect'

const projects = [
  {
    title: 'Women Empowerment SDGs Platform',
    description: 'A comprehensive platform promoting women\'s empowerment through SDGs initiatives.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    link: 'https://women-empowermentsdgs.netlify.app/',
    github: 'https://github.com/Ab494/women-empowerment-sdgs'
  },
  {
    title: 'DevOps MERN Dashboard',
    description: 'A dashboard for DevOps monitoring and management built with the MERN stack.',
    tech: ['MERN Stack'],
    link: 'https://devopsmern.netlify.app/',
    github: 'https://github.com/Ab494/devops-mern-dashboard'
  },
  {
    title: 'TaskFlow Pro – Task Management App',
    description: 'A professional task management application for productivity and collaboration.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    link: 'https://taskflowprova.netlify.app/',
    github: 'https://github.com/Ab494/taskflow-pro'
  },
  {
    title: 'BestLady – Beauty & Cosmetics Website',
    description: 'An elegant website for a beauty and cosmetics brand.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    link: 'https://bestlady.netlify.app/',
    github: 'https://github.com/Ab494/bestlady'
  },
  {
    title: 'Big Spoon Cafe Website',
    description: 'A modern website for a cafe showcasing menu and ambiance.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    link: 'https://bigspooncafe.netlify.app/',
    github: 'https://github.com/Ab494/big-spoon-cafe'
  },
  {
    title: 'AI Buddy Study',
    description: 'A hackathon project integrating AI for study assistance.',
    tech: ['JavaScript', 'HTML', 'CSS', 'AI API Integration'],
    link: 'https://aibuddystudy.netlify.app/',
    github: 'https://github.com/Ab494/ai-buddy-study'
  },
  {
    title: 'School Dashboard',
    description: 'A full-featured school management dashboard for managing students, teachers, classes, and performance analytics.',
    tech: ['Python', 'Django', 'Django REST Framework', 'MySQL'],
    link: '#',
    github: 'https://github.com/Ab494/school_dashboard.git'
  },
  {
    title: 'Students API',
    description: 'A fully functional REST API for student management, enabling CRUD operations and integration with other systems.',
    tech: ['Python', 'Django', 'Django REST Framework', 'MySQL'],
    link: '#',
    github: 'https://github.com/Ab494/students_api.git'
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

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    }
  }
}

export function Projects() {
  const magneticRefs = projects.map(() => useMagneticEffect<HTMLDivElement>({ strength: 0.15, range: 120 }))

  return (
    <section id="projects" className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          Featured Projects
        </motion.h2>

        <motion.p
          className="text-lg text-text-secondary text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Here are some of my recent projects showcasing my full-stack development skills in MERN and Python.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              ref={magneticRefs[index]}
              className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 group preserve-3d"
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                y: -10,
                rotateX: 5,
                rotateY: 5,
                boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              <motion.h3
                className="text-xl font-semibold mb-3 text-primary group-hover:text-primary-hover transition-colors"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {project.title}
              </motion.h3>

              <motion.p
                className="text-text-secondary mb-4 leading-relaxed"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.1 }}
                viewport={{ once: true }}
              >
                {project.description}
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-2 mb-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {project.tech.map((tech, techIndex) => (
                  <motion.div
                    key={tech}
                    variants={badgeVariants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Badge
                      variant="secondary"
                      className="text-xs border-border hover:border-primary transition-colors"
                    >
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>

              <div className="flex gap-3">
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-all duration-300 shadow-lg hover:shadow-xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.span
                      whileHover={{ x: 2 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      GitHub
                    </motion.span>
                  </motion.a>
                )}

                {project.link && project.link !== '#' && (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-hover transition-all duration-300 shadow-lg hover:shadow-xl group/btn"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.25 }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.4), 0 10px 10px -5px rgba(59, 130, 246, 0.2)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.span
                      whileHover={{ x: 3 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      Live Demo
                    </motion.span>
                    <motion.svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="ml-2"
                      initial={{ x: 0 }}
                      whileHover={{ x: 3 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </motion.svg>
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}