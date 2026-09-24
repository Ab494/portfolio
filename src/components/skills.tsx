'use client'

import { motion } from 'framer-motion'

const skillsData = {
  backend: [
    'Python',
    'Django / Django REST Framework',
    'Laravel (PHP)',
    'Flask',
    'Node.js / Express.js',
  ],
  frontend: [
    'Next.js 14',
    'React.js',
    'TypeScript',
    'JavaScript (ES6+)',
    'HTML5 & CSS3',
    'Tailwind CSS',
  ],
  databases: [
    'PostgreSQL',
    'MySQL',
    'MongoDB',
    'SQLite',
  ],
  devops: [
    'Docker & Docker Compose',
    'GitHub Actions (CI/CD)',
    'Terraform (IaC)',
    'VPS / cPanel deployment',
    'Nginx',
    'Linux & Bash scripting',
    'Winston structured logging',
    'UptimeRobot monitoring',
  ],
}

const specializationData = [
  {
    title: 'Python / Django Backend',
    items: [
      'Django REST Framework APIs',
      'Celery & Redis task queues',
      'Django Channels (WebSocket real-time)',
      'M-Pesa Daraja API integration',
      'JWT auth & role-based access control',
    ]
  },
  {
    title: 'DevOps & Infrastructure',
    items: [
      'Docker containerization & Compose',
      'GitHub Actions CI/CD pipelines',
      'Terraform Infrastructure as Code',
      'VPS and cPanel deployment',
      'Nginx, Winston logging, UptimeRobot monitoring',
    ]
  },
  {
    title: 'Full-Stack When Needed',
    items: [
      'Laravel CMS development',
      'Next.js frontends for Django APIs',
      'M-Pesa Daraja callback URL consolidation',
      'Africa\'s Talking SMS integration',
      'Cloudinary, Celery, Redis',
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
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    }
  }
}

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-serif font-semibold text-center mb-3 text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Skills & tools
        </motion.h2>

        <motion.p
          className="text-base text-text-secondary text-center mb-12 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          The technologies I reach for in real projects.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {Object.entries(skillsData).map(([key, skills], index) => (
            <motion.div
              key={key}
              variants={itemVariants}
            >
              <h3 className="text-sm font-semibold uppercase tracking-wide text-primary mb-3">
                {key}
              </h3>
              <ul className="space-y-1.5">
                {skills.map((skill, skillIndex) => (
                  <li
                    key={skill}
                    className="text-text-secondary text-sm"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.h3
          className="text-2xl font-serif font-semibold text-center mb-8 text-foreground"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Where I specialize
        </motion.h3>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {specializationData.map((spec, index) => (
            <motion.div
              key={spec.title}
              className={index === 0 ? "pl-6 border-l-2 border-primary" : "pl-6 border-l border-border"}
              variants={itemVariants}
            >
              <h4 className="text-base font-medium mb-3 text-foreground">
                {spec.title}
              </h4>
              <ul className="space-y-1.5 text-text-secondary text-sm">
                {spec.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
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
