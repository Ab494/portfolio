'use client'

import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
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
    <section
      id="about"
      className="relative overflow-hidden bg-secondary/50 px-4 py-24 md:py-28"
    >
      <div className="mx-auto max-w-5xl">
        {/* Section heading */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-primary">
            About
          </p>

          <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Building software that works in the real world.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg">
            Backend engineering, APIs, and the infrastructure behind
            dependable applications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* Main introduction */}
          <motion.div
            variants={itemVariants}
            className="border-y border-border py-10 md:py-12"
          >
            <div className="grid gap-10 md:grid-cols-[1fr_220px] md:gap-16">
              {/* About copy */}
              <div className="space-y-6">
                <p className="text-xl leading-relaxed text-foreground md:text-2xl">
                  I'm a backend and full-stack engineer based in Eldoret,
                  focused on building reliable applications, APIs, and the
                  infrastructure behind them.
                </p>

                <p className="text-base leading-7 text-text-secondary md:text-lg">
                  My primary stack is Python and Django, with experience across
                  REST APIs, PostgreSQL, authentication, third-party
                  integrations, and production deployments. I also work with
                  Next.js, Laravel, Docker, and CI/CD when a project requires
                  a broader full-stack approach.
                </p>

                <p className="text-base leading-7 text-text-secondary md:text-lg">
                  I enjoy working on the parts of software that need to be
                  dependable from payment integrations and database design
                  to deployment, monitoring, and solving production issues.
                </p>
              </div>

              {/* Quick profile */}
              <div className="flex md:justify-end">
                <div className="w-full border-l-2 border-primary pl-5 md:max-w-[190px]">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-text-secondary">
                      Based in
                    </p>

                    <p className="mt-2 font-medium text-foreground">
                      Eldoret, Kenya
                    </p>
                  </div>

                  <div className="mt-7">
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-text-secondary">
                      Focus
                    </p>

                    <p className="mt-2 font-medium leading-relaxed text-foreground">
                      Backend & Full-Stack Engineering
                    </p>
                  </div>

                  <div className="mt-7">
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-text-secondary">
                      Core stack
                    </p>

                    <p className="mt-2 leading-relaxed text-text-secondary">
                      Python · Django · PostgreSQL
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Engineering principles */}
          <motion.div
            variants={itemVariants}
            className="py-14 md:py-16"
          >
            <div className="mb-9 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">
                  Engineering principles
                </p>

                <h3 className="mt-2 font-serif text-2xl font-semibold text-foreground md:text-3xl">
                  How I approach engineering
                </h3>
              </div>

              <p className="max-w-sm text-sm leading-relaxed text-text-secondary md:text-right">
                The principles I try to bring into the systems and products I
                build.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {principles.map((principle) => (
                <motion.article
                  key={principle.number}
                  className="group relative overflow-hidden rounded-xl border border-border bg-background/35 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-background/60 hover:shadow-sm"
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                >
                  {/* Accent line */}
                  <div className="absolute left-0 top-0 h-full w-[2px] origin-top scale-y-0 bg-primary transition-transform duration-300 group-hover:scale-y-100" />

                  <span className="font-mono text-xs tracking-wider text-primary">
                    {principle.number}
                  </span>

                  <h4 className="mt-5 text-lg font-medium text-foreground">
                    {principle.title}
                  </h4>

                  <p className="mt-3 text-sm leading-6 text-text-secondary">
                    {principle.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </motion.div>

          {/* Day-to-day work */}
          <motion.div
            variants={itemVariants}
            className="border-t border-border pt-10 md:pt-12"
          >
            <div className="grid gap-7 md:grid-cols-[220px_1fr] md:items-start md:gap-12">
              {/* Label */}
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">
                  Day-to-day
                </p>

                <h3 className="mt-2 font-serif text-2xl font-semibold text-foreground">
                  What I work on
                </h3>
              </div>

              {/* Work tags */}
              <div className="flex flex-wrap gap-2.5">
                {areas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-border bg-background/35 px-4 py-2 text-sm text-text-secondary transition-all duration-200 hover:border-primary/40 hover:bg-background/70 hover:text-foreground"
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