'use client'

import { motion } from 'framer-motion'
import { Badge } from './ui/badge'
import Image from 'next/image'

const projects = [
  {
    title: 'Women Empowerment SDGs Platform',
    description: 'A MERN platform connecting women entrepreneurs with resources and mentorship opportunities. Built with role-based access and content management.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    link: 'https://women-empowermentsdgs.netlify.app/',
    github: 'https://github.com/Ab494/women-empowerment-sdgs',
    image: '/images/women.png',
    featured: true
  },
  {
    title: 'Learning Management System',
    description: 'LMS with separate dashboards for students, instructors, and admins. Includes automated certificate generation and progress tracking.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    link: 'https://eldohub-academy-lms.vercel.app/',
    github: 'https://github.com/Ab494/learning-management-system',
    image: '/images/lms.png',
    featured: true
  },
  {
    title: 'AI Buddy Study',
    description: 'A study assistance app built during a hackathon. Uses AI APIs to help students plan and organize their study sessions.',
    tech: ['JavaScript', 'HTML', 'CSS', 'AI API'],
    link: 'https://aibuddystudy.netlify.app/',
    github: 'https://github.com/Ab494/ai-buddy-study',
    image: '/images/aibuddy.png',
    featured: true
  },
  {
    title: 'Ecommerce Platform',
    description: 'Full-stack ecommerce site with product management, cart, and an admin dashboard for tracking orders.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    link: 'https://www.254convexcomltd.co.ke/',
    github: 'https://github.com/Ab494/Ecommerce-254',
    image: '/images/ecommerce.png',
    featured: false
  },
  {
    title: 'Roommate Finder',
    description: 'A Django backend for finding compatible roommates. Uses a weighted matching algorithm, real-time WebSocket chat via Django Channels, and SMS notifications through Africa\'s Talking.',
    tech: ['Django', 'DRF', 'Next.js 14', 'PostgreSQL', 'Redis', 'Celery'],
    link: '#',
    github: '#',
    image: '/images/lms.png',
    featured: false
  },
  {
    title: 'SMS Hub Pro',
    description: 'Production SMS platform with Docker containerization, GitHub Actions CI/CD, Terraform for infrastructure, and Winston structured logging with UptimeRobot monitoring.',
    tech: ['Node.js', 'Express.js', 'Docker', 'GitHub Actions', 'Terraform'],
    link: 'https://254convexcomltd.africa/',
    github: 'https://github.com/Ab494/sms-hub-pro.git',
    image: '/images/sms-hub.png',
    featured: false
  },
  {
    title: 'School Dashboard',
    description: 'A full-stack school management dashboard with Dockerized setup, CI/CD automation via GitHub Actions, and deployment to Linux/Nginx servers.',
    tech: ['Django', 'Python', 'PostgreSQL'],
    link: 'https://school-dashboard-lqng.onrender.com/',
    github: 'https://github.com/Ab494/school-dashboard.git',
    image: '/images/school.png',
    featured: true
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

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99],
    }
  }
}

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-serif font-semibold text-center mb-3 text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        <motion.p
          className="text-base text-text-secondary text-center mb-12 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          A selection of things I've built — some are live, some are personal projects I use to learn.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className="bg-card border border-border rounded-md overflow-hidden hover:border-primary/40 transition-colors flex flex-col"
              variants={cardVariants}
            >
              <div className="h-40 overflow-hidden border-b border-border bg-secondary">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5 flex flex-col flex-1">
                {project.featured && (
                  <Badge variant="secondary" className="self-start mb-2 text-xs">
                    Featured
                  </Badge>
                )}

                <h3 className="text-base font-medium mb-2 text-foreground">
                  {project.title}
                </h3>

                <p className="text-sm text-text-secondary mb-4 leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs font-normal"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 mt-auto">
                  {project.link && project.link !== '#' && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:text-primary-hover transition-colors font-medium"
                    >
                      Live site →
                    </a>
                  )}
                  {project.github && project.github !== '#' && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
                    >
                      Source →
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
