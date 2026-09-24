'use client'

import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.15,
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

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-secondary/50">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-serif font-semibold text-center mb-12 text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          About me
        </motion.h2>

        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.p
            className="text-lg text-text-secondary leading-relaxed"
            variants={itemVariants}
          >
            I'm a backend developer based in Nairobi. Most of my work is in
            Django and Python building APIs, fixing production bugs, and
            keeping services running. I also work with Laravel and Next.js
            when the project calls for it.
          </motion.p>

          <motion.p
            className="text-lg text-text-secondary leading-relaxed"
            variants={itemVariants}
          >
            On the DevOps side, I handle Docker containerization, GitHub
            Actions CI/CD pipelines, and deployment to VPS and cPanel
            environments. I've worked with Terraform for infrastructure
            as code and set up monitoring with Winston logging and
            UptimeRobot.
          </motion.p>

          <motion.p
            className="text-lg text-text-secondary leading-relaxed"
            variants={itemVariants}
          >
            Recent work includes fixing a POS reversal bug in a Django
            system, consolidating M-Pesa Daraja callback URLs for client
            integrations, building a Laravel CMS for a SACCO client, and
            debugging SMS delivery issues via Africa's Talking.
          </motion.p>

          <motion.div
            className="pt-6 mt-6 border-t border-border"
            variants={itemVariants}
          >
            <h3 className="text-lg font-medium mb-4 text-foreground">
              Day-to-day, I work on:
            </h3>
            <ul className="space-y-2.5 text-text-secondary">
              {[
                'Backend development with Django, DRF, and Laravel',
                'Integrating M-Pesa Daraja API and payment webhooks',
                'Docker, CI/CD with GitHub Actions, VPS deployment',
                'Debugging production issues (SMS delivery, payment callbacks, database migrations)',
                'Building and maintaining REST APIs',
                'PostgreSQL and MySQL schema design',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
