'use client'

import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

const principles = [
  {
    number: '01',
    title: 'Reliability',
    description:
      'I build systems that remain dependable when real users and real transactions rely on them.',
  },
  {
    number: '02',
    title: 'Simplicity',
    description:
      'I prefer clear architecture and maintainable solutions over unnecessary complexity.',
  },
  {
    number: '03',
    title: 'Ownership',
    description:
      'I care about the full lifecycle of a system, from API design and development to deployment and debugging.',
  },
]

const areas = [
  'Backend systems',
  'REST APIs',
  'Payment integrations',
  'Database design',
  'Cloud deployment',
  'Production debugging',
]

export function About() {
  return (
    <section id="about" className="py-24 px-4 bg-secondary/50">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
            About
          </h2>

          <p className="mt-4 text-base md:text-lg text-text-secondary">
            Backend engineering, APIs, and the infrastructure behind them.
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.div
            className="grid md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-start"
            variants={itemVariants}
          >
            <div className="space-y-5">
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                I'm a backend and full-stack engineer based in Nairobi,
                focused on building reliable applications, APIs, and the
                infrastructure behind them.
              </p>

              <p className="text-base md:text-lg text-text-secondary leading-relaxed">
                My primary stack is Python and Django, with experience across
                REST APIs, PostgreSQL, authentication, third-party integrations,
                and production deployments. I also work with Next.js, Laravel,
                Docker, and CI/CD when a project requires a broader full-stack
                approach.
              </p>

              <p className="text-base md:text-lg text-text-secondary leading-relaxed">
                I enjoy working on the parts of software that need to be
                dependable from payment integrations and database design to
                deployment, monitoring, and solving production issues.
              </p>
            </div>

            {/* Small identity block */}
            <div className="md:min-w-[170px] pt-1">
              <div className="border-l-2 border-primary pl-5">
                <p className="text-sm text-text-secondary mb-1">
                  Based in
                </p>
                <p className="font-medium text-foreground">
                  Nairobi, Kenya
                </p>

                <div className="mt-5">
                  <p className="text-sm text-text-secondary mb-1">
                    Focus
                  </p>
                  <p className="font-medium text-foreground">
                    Backend & Full-Stack
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Principles */}
          <motion.div
            className="mt-16 pt-10 border-t border-border"
            variants={itemVariants}
          >
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-8">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-primary font-medium">
                  Engineering principles
                </p>

                <h3 className="mt-2 text-2xl md:text-3xl font-serif font-semibold text-foreground">
                  How I approach engineering
                </h3>
              </div>

              <p className="text-sm text-text-secondary max-w-sm">
                The principles I try to bring into the systems and products I build.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {principles.map((principle) => (
                <motion.div
                  key={principle.number}
                  className="group p-6 border border-border bg-background/40 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-sm"
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-sm font-mono text-primary">
                    {principle.number}
                  </span>

                  <h4 className="mt-4 text-lg font-medium text-foreground">
                    {principle.title}
                  </h4>

                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    {principle.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Areas of work */}
          <motion.div
            className="mt-14 pt-10 border-t border-border"
            variants={itemVariants}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-primary font-medium">
                  Day-to-day
                </p>

                <h3 className="mt-2 text-2xl font-serif font-semibold text-foreground">
                  What I work on
                </h3>
              </div>

              <div className="flex flex-wrap gap-2.5 md:max-w-xl md:justify-end">
                {areas.map((area) => (
                  <span
                    key={area}
                    className="px-3.5 py-2 text-sm text-text-secondary border border-border rounded-full bg-background/40 transition-colors duration-200 hover:border-primary/40 hover:text-foreground"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}