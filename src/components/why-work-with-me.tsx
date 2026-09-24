'use client'

import { motion } from 'framer-motion'

const reasons = [
  {
    title: 'I fix things that are broken in production',
    description:
      'Reversal bugs in a Django POS system, SMS delivery failures via Africa\'s Talking, M-Pesa callback URLs that weren\'t firing — I\'ve tracked down and fixed these in live systems.',
  },
  {
    title: 'I handle deployment, not just the code',
    description:
      'Dockerizing apps, setting up GitHub Actions CI/CD, deploying to VPS and cPanel, configuring Nginx. I don\'t hand off a repo and hope it runs.',
  },
  {
    title: 'I work across the stack when needed',
    description:
      'A Laravel CMS for a SACCO client, a Next.js frontend for a Django API, consolidating M-Pesa Daraja callback URLs across client integrations. Real projects, real deadlines.',
  },
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    }
  }
}

export function WhyWorkWithMe() {
  return (
    <section id="why-work-with-me" className="py-20 px-4 bg-secondary/50">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-serif font-semibold text-center mb-3 text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          What I bring to a team
        </motion.h2>

        <motion.p
          className="text-base text-text-secondary text-center mb-12 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Not a list of buzzwords — here's what I actually do when I join a project.
        </motion.p>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={itemVariants}
              className="border-l-2 border-primary/30 pl-6"
            >
              <h3 className="text-lg font-medium mb-2 text-foreground">
                {reason.title}
              </h3>
              <p className="text-text-secondary leading-relaxed text-sm">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
