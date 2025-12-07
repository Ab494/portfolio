'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { FaXTwitter, FaLinkedin, FaGithub } from 'react-icons/fa6'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      }
    }
  }

  const contactItemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      }
    }
  }

  const socialIconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      }
    }
  }

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          Let's Connect
        </motion.h2>

        <motion.p
          className="text-lg text-text-secondary text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          I'm always interested in discussing new opportunities, collaborations, or just talking about technology.
          Feel free to reach out!
        </motion.p>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            variants={cardVariants}
          >
            <motion.div
              className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors"
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)",
                transition: { duration: 0.3 }
              }}
            >
              <motion.h3
                className="text-xl font-semibold mb-6 text-primary"
                variants={contactItemVariants}
              >
                Get In Touch
              </motion.h3>

              <motion.div
                className="space-y-4"
                variants={containerVariants}
              >
                <motion.div
                  className="flex items-start gap-4"
                  variants={contactItemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(59, 130, 246, 0.2)"
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-primary text-lg"></span>
                  </motion.div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-text-secondary">cheruiyotevans646@gmail.com</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4"
                  variants={contactItemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(59, 130, 246, 0.2)"
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-primary text-lg"></span>
                  </motion.div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p className="text-text-secondary">+254 711546105</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4"
                  variants={contactItemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(59, 130, 246, 0.2)"
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-primary text-lg"></span>
                  </motion.div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-text-secondary">Eldoret, Kenya</p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                className="mt-8"
                variants={cardVariants}
              >
                <motion.h4
                  className="text-lg font-semibold mb-4 text-primary"
                  variants={contactItemVariants}
                >
                  Follow Me
                </motion.h4>
                <motion.div
                  className="flex gap-4"
                  variants={containerVariants}
                >
                  {[
                    { href: "https://x.com/EvansCheru48487", label: "X (Twitter)", icon: FaXTwitter },
                    { href: "https://www.linkedin.com/in/evans-kipngeno-cheruiyot-448458346/", label: "LinkedIn", icon: FaLinkedin },
                    { href: "https://github.com/Ab494", label: "GitHub", icon: FaGithub }
                  ].map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-all duration-300"
                      aria-label={social.label}
                      variants={socialIconVariants}
                      whileHover={{
                        scale: 1.2,
                        backgroundColor: "rgba(59, 130, 246, 0.3)",
                        rotate: 5
                      }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                    >
                      <social.icon className="text-primary text-lg" />
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={cardVariants}
          >
            <motion.div
              className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors"
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)",
                transition: { duration: 0.3 }
              }}
            >
              <motion.h3
                className="text-xl font-semibold mb-6 text-primary"
                variants={contactItemVariants}
              >
                Send a Message
              </motion.h3>

              <motion.form
                onSubmit={handleSubmit}
                className="space-y-4"
                variants={containerVariants}
              >
                <motion.div variants={contactItemVariants}>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-border focus:border-primary"
                  />
                </motion.div>

                <motion.div variants={contactItemVariants}>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-border focus:border-primary"
                  />
                </motion.div>

                <motion.div variants={contactItemVariants}>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2 text-foreground">
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
                    className="border-border focus:border-primary"
                  />
                </motion.div>

                <motion.div variants={contactItemVariants}>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or just say hello!"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="border-border focus:border-primary"
                  />
                </motion.div>

                <motion.div
                  variants={contactItemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-hover text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      Send Message
                    </motion.span>
                  </Button>
                </motion.div>
              </motion.form>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}