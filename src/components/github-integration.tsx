'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface GitHubStats {
  repos: number
  followers: number
  following: number
  stars: number
  contributions: number
}

interface GitHubRepo {
  name: string
  description: string
  stars: number
  language: string
  updatedAt: string
}

export function GitHubIntegration() {
  const [stats, setStats] = useState<GitHubStats>({
    repos: 0,
    followers: 0,
    following: 0,
    stars: 0,
    contributions: 0
  })
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate GitHub API calls (replace with real API calls)
    const fetchGitHubData = async () => {
      try {
        // Mock data - replace with real GitHub API calls
        setStats({
          repos: 24,
          followers: 156,
          following: 89,
          stars: 342,
          contributions: 1247
        })

        setRepos([
          {
            name: 'portfolio-nextjs',
            description: 'Modern portfolio built with Next.js, featuring advanced animations and interactions',
            stars: 45,
            language: 'TypeScript',
            updatedAt: '2024-01-15'
          },
          {
            name: 'mern-ecommerce',
            description: 'Full-stack e-commerce platform with MERN stack and Stripe integration',
            stars: 78,
            language: 'JavaScript',
            updatedAt: '2024-01-10'
          },
          {
            name: 'django-api-boilerplate',
            description: 'Production-ready Django REST API boilerplate with authentication and documentation',
            stars: 92,
            language: 'Python',
            updatedAt: '2024-01-08'
          }
        ])

        setLoading(false)
      } catch (error) {
        console.error('Failed to fetch GitHub data:', error)
        setLoading(false)
      }
    }

    fetchGitHubData()
  }, [])

  const statItems = [
    { label: 'Repositories', value: stats.repos, icon: '' },
    { label: 'Followers', value: stats.followers, icon: '' },
    { label: 'Following', value: stats.following, icon: '' },
    { label: 'Stars Earned', value: stats.stars, icon: '' },
    { label: 'Contributions', value: stats.contributions, icon: '' }
  ]

  return (
    <section id="github" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          GitHub Activity
        </motion.h2>

        <motion.p
          className="text-lg text-text-secondary text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Live GitHub statistics and recent repository activity
        </motion.p>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {statItems.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-card p-4 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 text-center"
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: "0 10px 25px rgba(59, 130, 246, 0.15)"
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <motion.div
                className="text-2xl font-bold text-primary mb-1"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
              >
                {loading ? '...' : stat.value.toLocaleString()}
              </motion.div>
              <div className="text-xs text-text-secondary">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Recent Repositories */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {repos.map((repo, index) => (
            <motion.div
              key={repo.name}
              className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 group"
              whileHover={{
                scale: 1.02,
                y: -5,
                boxShadow: "0 15px 35px rgba(59, 130, 246, 0.1)"
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-primary group-hover:text-primary-hover transition-colors">
                  {repo.name}
                </h3>
                <div className="flex items-center gap-1 text-sm text-text-secondary">
                  <span></span>
                  <span>{repo.stars}</span>
                </div>
              </div>

              <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                {repo.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{
                      backgroundColor: getLanguageColor(repo.language)
                    }}
                  />
                  <span className="text-xs text-text-secondary">{repo.language}</span>
                </div>
                <span className="text-xs text-text-secondary">
                  Updated {new Date(repo.updatedAt).toLocaleDateString()}
                </span>
              </div>

              <motion.a
                href={`https://github.com/Ab494/${repo.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-primary hover:text-primary-hover transition-colors text-sm font-medium"
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                View Repository
                <motion.svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  initial={{ x: 0 }}
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </motion.svg>
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* Contribution Graph Placeholder */}
        <motion.div
          className="mt-12 bg-card p-6 rounded-lg border border-border"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-4 text-primary">Contribution Activity</h3>
          <div className="grid grid-cols-7 gap-1 mb-4">
            {Array.from({ length: 35 }, (_, i) => (
              <motion.div
                key={i}
                className="w-3 h-3 rounded-sm bg-primary/20"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: Math.random(), scale: 1 }}
                transition={{ delay: i * 0.02, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.5, opacity: 1 }}
              />
            ))}
          </div>
          <p className="text-sm text-text-secondary">
            <span className="text-primary font-medium">{stats.contributions}</span> contributions in the last year
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function getLanguageColor(language: string): string {
  const colors: { [key: string]: string } = {
    TypeScript: '#3178c6',
    JavaScript: '#f1e05a',
    Python: '#3572A5',
    HTML: '#e34c26',
    CSS: '#563d7c',
    'C++': '#f34b7d',
    Java: '#ed8e00',
    PHP: '#777BB4',
    Ruby: '#701516',
    Go: '#00ADD8',
    Rust: '#dea584'
  }
  return colors[language] || '#586069'
}