'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const skillsData: Record<string, { name: string; level: number }[]> = {
  backend: [
    { name: 'Python', level: 90 },
    { name: 'Django / DRF', level: 92 },
    { name: 'Laravel (PHP)', level: 80 },
    { name: 'Flask', level: 70 },
    { name: 'Node.js / Express.js', level: 75 },
  ],
  frontend: [
    { name: 'Next.js 14', level: 82 },
    { name: 'React.js', level: 85 },
    { name: 'TypeScript', level: 72 },
    { name: 'JavaScript (ES6+)', level: 85 },
    { name: 'HTML5 & CSS3', level: 80 },
    { name: 'Tailwind CSS', level: 88 },
  ],
  databases: [
    { name: 'PostgreSQL', level: 85 },
    { name: 'MySQL', level: 80 },
    { name: 'MongoDB', level: 78 },
    { name: 'SQLite', level: 75 },
  ],
  devops: [
    { name: 'Docker & Compose', level: 85 },
    { name: 'GitHub Actions (CI/CD)', level: 82 },
    { name: 'Terraform (IaC)', level: 70 },
    { name: 'VPS / cPanel deployment', level: 88 },
    { name: 'Nginx', level: 75 },
    { name: 'Linux & Bash scripting', level: 80 },
    { name: 'Winston structured logging', level: 72 },
    { name: 'UptimeRobot monitoring', level: 78 },
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

const categoryLabels: Record<string, string> = {
  backend: 'Backend',
  frontend: 'Frontend',
  databases: 'Databases',
  devops: 'DevOps',
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    }
  }
}

const columnVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const }
  }
}

const skillVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: 'easeOut' as const, delay: i * 0.06 }
  })
}

const specVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' as const }
  }
}

function SkillBar({ name, level, index }: { name: string; level: number; index: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      custom={index}
      variants={skillVariants}
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-center justify-between mb-1">
        <span className="text-text-secondary text-sm transition-colors group-hover:text-foreground">
          {name}
        </span>
        <span className={`text-xs font-mono tabular-nums transition-colors ${hovered ? 'text-primary' : 'text-muted-foreground'}`}>
          {level}%
        </span>
      </div>
      <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 + index * 0.06 }}
          whileHover={{ backgroundColor: 'hsl(var(--primary) / 0.9)' }}
        />
      </div>
    </motion.div>
  )
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
          Skills &amp; tools
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
          {Object.entries(skillsData).map(([key, skills]) => (
            <motion.div key={key} variants={columnVariants}>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-primary mb-4">
                {categoryLabels[key] || key}
              </h3>
              <div className="space-y-3">
                {skills.map((skill, i) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} index={i} />
                ))}
              </div>
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
              variants={specVariants}
            >
              <h4 className="text-base font-medium mb-3 text-foreground">
                {spec.title}
              </h4>
              <ul className="space-y-1.5 text-text-secondary text-sm">
                {spec.items.map((item, i) => (
                  <motion.li
                    key={item}
                    className="flex items-start gap-2"
                    custom={i}
                    variants={skillVariants}
                  >
                    <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
