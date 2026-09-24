'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { FaXTwitter, FaLinkedin, FaGithub } from 'react-icons/fa6'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xqegzoav'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
  }

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-serif font-semibold text-center mb-3 text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Get in touch
        </motion.h2>

        <motion.p
          className="text-base text-text-secondary text-center mb-12 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Open to work, collaborations, or just a conversation about tech. I usually reply within a day.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-primary mb-4">Contact details</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div>
                    <p className="text-sm font-medium text-foreground">Email</p>
                    <p className="text-text-secondary text-sm">cheruiyotevans646@gmail.com</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Phone</p>
                  <p className="text-text-secondary text-sm">+254 741 220 644</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Location</p>
                  <p className="text-text-secondary text-sm">Nairobi, Kenya remote work welcome</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-border">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-primary mb-4">Find me online</h3>
              <div className="flex gap-3">
                {[
                  { href: "https://x.com/EvansCheru48487", label: "X (Twitter)", icon: FaXTwitter },
                  { href: "https://www.linkedin.com/in/evans-kipngeno-cheruiyot-448458346/", label: "LinkedIn", icon: FaLinkedin },
                  { href: "https://github.com/Ab494", label: "GitHub", icon: FaGithub }
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-secondary border border-border rounded-md flex items-center justify-center hover:border-primary hover:text-primary text-muted-foreground transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="text-base" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div id="contact-form" variants={itemVariants}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1.5 text-foreground">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1.5 text-foreground">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1.5 text-foreground">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1.5 text-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project or just say hello."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                />
              </div>

              {status === 'success' && (
                <div className="p-3 bg-secondary border border-border rounded-md text-sm text-foreground text-center">
                  Message sent. I'll get back to you soon.
                </div>
              )}

              {status === 'error' && (
                <div className="p-3 border border-destructive/30 rounded-md text-sm text-destructive text-center">
                  Something went wrong. Please try again or email me directly.
                </div>
              )}

              <Button
                type="submit"
                disabled={status === 'loading'}
                className="w-full"
              >
                {status === 'loading' ? 'Sending...' : 'Send message'}
              </Button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
