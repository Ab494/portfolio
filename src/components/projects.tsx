'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Badge } from './ui/badge'
import { X, ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'

type ProjectCategory = 'All' | 'Full-Stack' | 'Backend' | 'DevOps'

interface Project {
  title: string
  description: string
  tech: string[]
  link: string
  github: string
  image: string
  featured: boolean
  category: Exclude<ProjectCategory, 'All'>
}

const projects: Project[] = [
  {
    title: 'Women Empowerment SDGs Platform',
    description: 'A MERN platform connecting women entrepreneurs with resources and mentorship opportunities. Built with role-based access and content management.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    link: 'https://women-empowermentsdgs.netlify.app/',
    github: 'https://github.com/Ab494/women-empowerment-sdgs',
    image: '/images/women.png',
    featured: true,
    category: 'Full-Stack',
  },
  {
    title: 'Learning Management System',
    description: 'LMS with separate dashboards for students, instructors, and admins. Includes automated certificate generation and progress tracking.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    link: 'https://eldohub-academy-lms.vercel.app/',
    github: 'https://github.com/Ab494/learning-management-system',
    image: '/images/lms.png',
    featured: true,
    category: 'Full-Stack',
  },
  {
    title: 'AI Buddy Study',
    description: 'A study assistance app built during a hackathon. Uses AI APIs to help students plan and organize their study sessions.',
    tech: ['JavaScript', 'HTML', 'CSS', 'AI API'],
    link: 'https://aibuddystudy.netlify.app/',
    github: 'https://github.com/Ab494/ai-buddy-study',
    image: '/images/aibuddy.png',
    featured: true,
    category: 'Full-Stack',
  },
  {
    title: 'Ecommerce Platform',
    description: 'Full-stack ecommerce site with product management, cart, and an admin dashboard for tracking orders.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    link: 'https://www.254convexcomltd.co.ke/',
    github: 'https://github.com/Ab494/Ecommerce-254',
    image: '/images/ecommerce.png',
    featured: false,
    category: 'Full-Stack',
  },
  {
    title: 'Roommate Finder',
    description: 'A Django backend for finding compatible roommates. Uses a weighted matching algorithm, real-time WebSocket chat via Django Channels, and SMS notifications through Africa\'s Talking.',
    tech: ['Django', 'DRF', 'Next.js 14', 'PostgreSQL', 'Redis', 'Celery'],
    link: '#',
    github: '#',
    image: '/images/lms.png',
    featured: false,
    category: 'Backend',
  },
  {
    title: 'SMS Hub Pro',
    description: 'Production SMS platform with Docker containerization, GitHub Actions CI/CD, Terraform for infrastructure, and Winston structured logging with UptimeRobot monitoring.',
    tech: ['Node.js', 'Express.js', 'Docker', 'GitHub Actions', 'Terraform'],
    link: 'https://254convexcomltd.africa/',
    github: 'https://github.com/Ab494/sms-hub-pro.git',
    image: '/images/sms-hub.png',
    featured: false,
    category: 'DevOps',
  },
  {
    title: 'School Dashboard',
    description: 'A full-stack school management dashboard with Dockerized setup, CI/CD automation via GitHub Actions, and deployment to Linux/Nginx servers.',
    tech: ['Django', 'Python', 'PostgreSQL'],
    link: 'https://school-dashboard-lqng.onrender.com/',
    github: 'https://github.com/Ab494/school-dashboard.git',
    image: '/images/school.png',
    featured: true,
    category: 'Backend',
  },
]

const categories: ProjectCategory[] = ['All', 'Full-Stack', 'Backend', 'DevOps']

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] as [number, number, number, number] },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.2 },
  },
}

export function Projects() {
  const [filter, setFilter] = useState<ProjectCategory>('All')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-serif font-semibold text-center mb-3 text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        <motion.p
          className="text-base text-text-secondary text-center mb-10 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          A selection of things I&apos;ve built. Some are live, some are personal projects I use to learn.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                filter === cat
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'bg-card border border-border text-muted-foreground hover:border-primary hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="popLayout">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            layout
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredProjects.map(project => (
              <motion.div
                key={project.title}
                layout
                variants={cardVariants}
                exit="exit"
                whileHover={{ y: -6 }}
                className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/40 hover:shadow-lg transition-all flex flex-col cursor-pointer group"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-44 overflow-hidden border-b border-border bg-secondary">
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <span className="text-xs font-medium text-primary">Click for details</span>
                  </div>
                  {project.featured && (
                    <div className="absolute top-3 left-3">
                      <Badge variant="secondary" className="text-xs shadow-sm">
                        Featured
                      </Badge>
                    </div>
                  )}
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono text-primary font-medium">{project.category}</span>
                  </div>

                  <h3 className="text-base font-medium mb-2 text-foreground">
                    {project.title}
                  </h3>

                  <p className="text-sm text-text-secondary mb-4 leading-relaxed flex-1 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.slice(0, 4).map(tech => (
                      <Badge key={tech} variant="outline" className="text-xs font-normal">
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 4 && (
                      <Badge variant="outline" className="text-xs font-normal">
                        +{project.tech.length - 4}
                      </Badge>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-card border border-border rounded-lg max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              onClick={e => e.stopPropagation()}
            >
              <div className="relative h-52 overflow-hidden border-b border-border bg-secondary">
                <Image
                  src={selectedProject.image}
                  alt={`${selectedProject.title} screenshot`}
                  fill
                  className="object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-3 right-3 w-9 h-9 bg-background/80 backdrop-blur-sm border border-border rounded-md flex items-center justify-center hover:bg-background transition-colors"
                  aria-label="Close"
                >
                  <X size={18} className="text-foreground" />
                </button>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-mono text-primary font-medium">{selectedProject.category}</span>
                  {selectedProject.featured && (
                    <Badge variant="secondary" className="text-xs">Featured</Badge>
                  )}
                </div>

                <h3 className="text-xl font-serif font-semibold mb-3 text-foreground">
                  {selectedProject.title}
                </h3>

                <p className="text-sm text-text-secondary leading-relaxed mb-5">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tech.map(tech => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  {selectedProject.link && selectedProject.link !== '#' && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground rounded-md hover:bg-primary-hover transition-colors text-sm font-medium"
                    >
                      <ExternalLink size={16} />
                      Live site
                    </a>
                  )}
                  {selectedProject.github && selectedProject.github !== '#' && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 border border-border text-foreground rounded-md hover:border-primary hover:text-primary transition-colors text-sm font-medium"
                    >
                      <Github size={16} />
                      Source code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
