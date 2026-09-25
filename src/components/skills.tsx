'use client'

import { motion } from 'framer-motion'

type Category = {
  title: string
  techs: { name: string; core: boolean }[]
  capabilities: string[]
}

const categories: Category[] = [
  {
    title: 'Backend Engineering',
    techs: [
      { name: 'Python', core: true },
      { name: 'Django', core: true },
      { name: 'Django REST Framework', core: true },
      { name: 'Laravel', core: false },
      { name: 'Flask', core: false },
      { name: 'Node.js / Express.js', core: false },
    ],
    capabilities: [
      'REST APIs',
      'JWT Authentication',
      'Role-Based Access Control',
      'Background Jobs',
      'WebSockets',
      'Third-Party API Integrations',
    ],
  },
  {
    title: 'Frontend Engineering',
    techs: [
      { name: 'Next.js', core: true },
      { name: 'React', core: true },
      { name: 'TypeScript', core: true },
      { name: 'JavaScript', core: false },
      { name: 'HTML5 / CSS3', core: false },
      { name: 'Tailwind CSS', core: false },
    ],
    capabilities: [
      'Responsive Interfaces',
      'API Integration',
      'Component Architecture',
    ],
  },
  {
    title: 'Data & Databases',
    techs: [
      { name: 'PostgreSQL', core: true },
      { name: 'MySQL', core: false },
      { name: 'MongoDB', core: false },
      { name: 'SQLite', core: false },
      { name: 'Redis', core: false },
    ],
    capabilities: [
      'Database Design',
      'Query Optimization',
      'Data Modeling',
      'Caching',
    ],
  },
  {
    title: 'DevOps & Cloud',
    techs: [
      { name: 'Docker & Compose', core: true },
      { name: 'GitHub Actions', core: true },
      { name: 'Terraform', core: false },
      { name: 'AWS', core: true },
      { name: 'Linux / Bash', core: false },
      { name: 'Nginx', core: false },
      { name: 'VPS / cPanel Deployment', core: false },
      { name: 'Winston Logging', core: false },
      { name: 'UptimeRobot Monitoring', core: false },
    ],
    capabilities: [
      'CI/CD',
      'Containerization',
      'Deployment',
      'Infrastructure as Code',
      'Monitoring',
    ],
  },
]

const integrations = [
  'M-Pesa Daraja API',
  "Africa's Talking",
  'Cloudinary',
  'Celery',
  'Redis',
  'WebSockets',
  'JWT',
  'Docker',
  'GitHub Actions',
  'Terraform',
]

const specializations = [
  {
    number: '01',
    title: 'Backend Systems',
    description:
      'Designing APIs and backend services with Django, authentication, background processing, real-time capabilities, and third-party integrations.',
  },
  {
    number: '02',
    title: 'DevOps & Production Infrastructure',
    description:
      'Containerizing applications, automating deployments, managing Linux/Nginx environments, and building reliable production infrastructure.',
  },
  {
    number: '03',
    title: 'Full-Stack Product Engineering',
    description:
      'Building complete applications from database and API architecture through responsive frontend experiences.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const categoryVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
}

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: 'easeOut' as const },
  },
}

const specCardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
}

function TechBadge({ name, core }: { name: string; core: boolean }) {
  return (
    <motion.span variants={badgeVariants}>
      <span
        className={`inline-flex items-center px-3 py-1.5 rounded-md text-xs font-medium border transition-all duration-200 cursor-default ${
          core
            ? 'border-primary/30 bg-primary/8 text-primary hover:border-primary/50 hover:bg-primary/12'
            : 'border-border bg-secondary text-muted-foreground hover:border-primary/30 hover:text-foreground'
        }`}
      >
        {name}
      </span>
    </motion.span>
  )
}

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-serif font-semibold mb-3 text-foreground"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            Technical Expertise
          </motion.h2>
          <motion.p
            className="text-base text-text-secondary max-w-lg mx-auto"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            Building reliable products from backend architecture to production.
          </motion.p>
        </motion.div>

        {/* Technology Categories */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={categoryVariants}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/20 transition-colors duration-300"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
                {cat.title}
              </h3>

              <motion.div
                className="flex flex-wrap gap-2 mb-5"
                variants={containerVariants}
              >
                {cat.techs.map((tech) => (
                  <TechBadge key={tech.name} name={tech.name} core={tech.core} />
                ))}
              </motion.div>

              <div className="flex flex-wrap gap-x-3 gap-y-1.5 pt-4 border-t border-border/60">
                {cat.capabilities.map((cap) => (
                  <span
                    key={cap}
                    className="text-xs text-muted-foreground flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary/50 flex-shrink-0" />
                    {cap}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Real-World Integrations Strip */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-50px' }}
        >
          <p className="text-center text-xs font-mono text-muted-foreground uppercase tracking-wider mb-4">
            Integrations &amp; tooling from production work
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {integrations.map((tool, i) => (
              <motion.span
                key={tool}
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border border-border bg-background text-text-secondary hover:border-primary/30 hover:text-primary transition-colors duration-200"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Specialization Section */}
        <motion.h3
          className="text-2xl font-serif font-semibold text-center mb-10 text-foreground"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          What I specialize in
        </motion.h3>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {specializations.map((spec) => (
            <motion.div
              key={spec.number}
              variants={specCardVariants}
              whileHover={{ y: -4 }}
              className="bg-card border border-border rounded-lg p-6 transition-shadow duration-300 hover:shadow-md"
            >
              <div className="flex items-baseline gap-3 mb-3">
                <span className="text-2xl font-serif font-semibold text-primary/70 tabular-nums">
                  {spec.number}
                </span>
                <h4 className="text-base font-medium text-foreground leading-tight">
                  {spec.title}
                </h4>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">
                {spec.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
