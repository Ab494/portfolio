'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Star, GitFork, Calendar } from 'lucide-react'

interface GitHubStats {
  public_repos: number
  followers: number
  following: number
  contributions: number
}

interface GitHubRepo {
  id: number
  name: string
  description: string
  stargazers_count: number
  forks_count: number
  language: string
  updated_at: string
  html_url: string
}

const GITHUB_USERNAME = 'Ab494'

export function GitHubIntegration() {
  const [stats, setStats] = useState<GitHubStats>({
    public_repos: 0,
    followers: 0,
    following: 0,
    contributions: 0
  })
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // Fetch user data
        const userResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
        if (!userResponse.ok) {
          throw new Error('Failed to fetch GitHub user data')
        }
        const userData = await userResponse.json()

        // Fetch user contributions (requires different endpoint)
        const contribResponse = await fetch(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}`)
        let contributions = 0
        if (contribResponse.ok) {
          const contribData = await contribResponse.json()
          contributions = contribData.contributions || 0
        }

        setStats({
          public_repos: userData.public_repos || 0,
          followers: userData.followers || 0,
          following: userData.following || 0,
          contributions: contributions
        })

        // Fetch repositories (sorted by stars)
        const reposResponse = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=3`
        )
        if (!reposResponse.ok) {
          throw new Error('Failed to fetch repositories')
        }
        const reposData = await reposResponse.json()

        setRepos(reposData)
        setLoading(false)
      } catch (err) {
        console.error('Failed to fetch GitHub data:', err)
        setError('Failed to load GitHub data')
        setLoading(false)
      }
    }

    fetchGitHubData()
  }, [])

  const statItems = [
    { label: 'Repos', value: stats.public_repos },
    { label: 'Followers', value: stats.followers },
    { label: 'Following', value: stats.following }
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
          Live GitHub statistics and recent repository activity from @{GITHUB_USERNAME}
        </motion.p>

        {error && (
          <div className="text-center text-red-400 mb-8">
            {error}. Showing cached data.
          </div>
        )}

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-3 gap-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {statItems.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-card p-2 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 text-center"
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: "0 10px 25px rgba(59, 130, 246, 0.15)"
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="text-lg font-bold text-primary"
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
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {loading ? (
            // Loading skeletons
            [1, 2, 3].map((i) => (
              <div key={i} className="bg-card p-4 rounded-lg border border-border animate-pulse">
                <div className="h-5 bg-primary/20 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-primary/10 rounded w-full mb-1"></div>
                <div className="h-3 bg-primary/10 rounded w-1/2"></div>
              </div>
            ))
          ) : (
            repos.map((repo) => (
              <motion.div
                key={repo.id}
                className="bg-card p-4 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 group"
                whileHover={{
                  scale: 1.02,
                  y: -5,
                  boxShadow: "0 15px 35px rgba(59, 130, 246, 0.1)"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-base font-semibold text-primary group-hover:text-primary-hover transition-colors">
                    {repo.name}
                  </h3>
                  <div className="flex items-center gap-1 text-xs text-text-secondary">
                    <Star size={12} className="text-yellow-500" />
                    <span>{repo.stargazers_count}</span>
                  </div>
                </div>

                <p className="text-text-secondary text-xs mb-3 line-clamp-2">
                  {repo.description || 'No description available'}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div
                      className="w-2.5 h-2.5 rounded-full"
                      style={{
                        backgroundColor: getLanguageColor(repo.language)
                      }}
                    />
                    <span className="text-xs text-text-secondary">{repo.language || 'Unknown'}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-text-secondary">
                    <GitFork size={10} />
                    <span>{repo.forks_count}</span>
                  </div>
                </div>

                <motion.a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-3 text-primary hover:text-primary-hover transition-colors text-xs font-medium"
                  whileHover={{ x: 2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  View
                  <motion.svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    initial={{ x: 0 }}
                    whileHover={{ x: 2 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                  </motion.svg>
                </motion.a>
              </motion.div>
            ))
          )}
        </motion.div>

        {/* View all repos link */}
        <motion.div
          className="text-center mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
        >
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-hover transition-colors"
          >
            View All Repositories on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function getLanguageColor(language: string | null): string {
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
    Rust: '#dea584',
    Shell: '#89e051',
    Vue: '#41b883',
    Dart: '#00B4AB',
    Kotlin: '#A97BFF'
  }
  return colors[language || ''] || '#586069'
}
