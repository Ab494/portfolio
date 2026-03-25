'use client'

import { motion } from 'framer-motion'
import { Badge } from './ui/badge'
import { useMagneticEffect } from '@/hooks/useMagneticEffect'
import Image from 'next/image'

const projects = [
  {
    title: 'Women Empowerment SDGs Platform',
    impact: 'Connected 500+ women entrepreneurs with 99.9% uptime',
    features: ['Scalable MERN platform', 'Resources and mentorship access', '60% reduction in admin workload'],
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    link: 'https://women-empowermentsdgs.netlify.app/',
    github: 'https://github.com/Ab494/women-empowerment-sdgs',
    image: '/images/women.png',
    featured: true
  },

  {
    title: 'Learning Management System',
    impact: 'Production-grade LMS with role-based access and real-time tracking',
    features: ['Secure dashboards for students, instructors, admins', 'Automated certificate analytics', 'Real-time progress monitoring'],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    link: 'https://eldohub-academy-lms.vercel.app/',
    github: 'https://github.com/Ab494/learning-management-system',
    image: '/images/lms.png',
    featured: true
  },


  {
    title: 'AI Buddy Study',
    impact: 'Won hackathon with 35% improvement in study efficiency',
    features: ['AI-powered study assistance', 'Innovative AI integration', 'Competition-winning platform'],
    tech: ['JavaScript', 'HTML', 'CSS', 'AI API'],
    link: 'https://aibuddystudy.netlify.app/',
    github: 'https://github.com/Ab494/ai-buddy-study',
    image: '/images/aibuddy.png',
    featured: true
  },
  {
    title: 'Ecommerce ',
    impact: 'Handled 5,000+ monthly users with secure transactions',
    features: ['Fullstack ecommerce platform', 'Secure payment integration', 'User friendly product management', 'Admin dashboard for order tracking'],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    link: 'https://www.254convexcomltd.co.ke/',
    github: 'https://github.com/Ab494/Ecommerce-254',
    image: '/images/ecommerce.png',
    featured: false
  },
 
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              ref={magneticRefs[index]}
              className={`bg-card p-5 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 group preserve-3d ${project.featured ? 'ring-2 ring-primary/20' : ''}`}
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
              {project.featured && (
                <motion.div
                  className="flex justify-center mb-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Badge className="bg-primary text-primary-foreground px-3 py-1 text-xs font-medium">
                    ⭐ Featured
                  </Badge>
                </motion.div>
              )}

              <motion.div
                className="mb-4 h-48 overflow-hidden rounded-lg border-2 border-primary/40 shadow-lg bg-card/80"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)" }}
              >
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  width={400}
                  height={256}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.h3
                className="text-lg font-bold mb-1 text-primary group-hover:text-primary-hover transition-colors"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.1 }}
                viewport={{ once: true }}
              >
                {project.title}
              </motion.h3>

              <motion.p
                className="text-xs text-primary font-medium mb-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.15 }}
                viewport={{ once: true }}
              >
                {project.impact}
              </motion.p>

              <motion.ul
                className="text-text-secondary mb-4 space-y-0.5"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                viewport={{ once: true }}
              >
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-primary mr-1">•</span>
                    <span className="text-xs leading-relaxed">{feature}</span>
                  </li>
                ))}
              </motion.ul>

              <motion.div
                className="flex flex-wrap gap-1.5 mb-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {project.tech.slice(0, 2).map((tech, techIndex) => (
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

              <div className="flex gap-2 mt-auto">
                {project.link && project.link !== '#' && (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-3 py-1.5 bg-primary text-primary-foreground rounded-md hover:bg-primary-hover transition-all duration-300 shadow-md hover:shadow-lg text-xs"
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
                      View Live System
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

                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-3 py-1.5 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-all duration-300 shadow-md hover:shadow-lg text-xs"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.span
                      whileHover={{ x: 2 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      View Source Code
                    </motion.span>
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