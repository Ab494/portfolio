'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Star, GitFork } from 'lucide-react'

interface GitHubStats {
  public_repos: number
  followers: number
  following: number
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
    following: 0
  })
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const userResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
        if (!userResponse.ok) throw new Error('Failed to fetch GitHub user data')
        const userData = await userResponse.json()

        setStats({
          public_repos: userData.public_repos || 0,
          followers: userData.followers || 0,
          following: userData.following || 0
        })

        const reposResponse = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`
        )
        if (!reposResponse.ok) throw new Error('Failed to fetch repositories')
        const reposData = await reposResponse.json()

        setRepos(reposData)
        setLoading(false)
      } catch (err) {
        console.error('Failed to fetch GitHub data:', err)
        setError('Could not load GitHub data right now')
        setLoading(false)
      }
    }

    fetchGitHubData()
  }, [])

  const statItems = [
    { label: 'Repositories', value: stats.public_repos },
    { label: 'Followers', value: stats.followers },
    { label: 'Following', value: stats.following }
  ]

  return (
    <section id="github" className="py-20 px-4 bg-secondary/50">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-serif font-semibold text-center mb-3 text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          GitHub
        </motion.h2>

        <motion.p
          className="text-base text-text-secondary text-center mb-10 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Recent activity from @{GITHUB_USERNAME}.
        </motion.p>

        {error && (
          <p className="text-center text-muted-foreground text-sm mb-6">{error}</p>
        )}

        {/* Stats */}
        <motion.div
          className="grid grid-cols-3 gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {statItems.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-serif font-semibold text-foreground">
                {loading ? '—' : stat.value.toLocaleString()}
              </div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Recent Repositories */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {loading ? (
            [1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-card border border-border rounded-md p-4 animate-pulse">
                <div className="h-4 bg-secondary rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-secondary rounded w-full mb-1"></div>
                <div className="h-3 bg-secondary rounded w-1/2"></div>
              </div>
            ))
          ) : (
            repos.map((repo) => (
              <div
                key={repo.id}
                className="bg-card border border-border rounded-md p-4 hover:border-primary/40 transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-sm font-medium text-primary truncate">
                    {repo.name}
                  </h3>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground flex-shrink-0">
                    <Star size={12} />
                    <span>{repo.stargazers_count}</span>
                  </div>
                </div>

                <p className="text-xs text-text-secondary mb-3 line-clamp-2 leading-relaxed">
                  {repo.description || 'No description available'}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: getLanguageColor(repo.language) }}
                    />
                    <span className="text-xs text-muted-foreground">{repo.language || 'Unknown'}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <GitFork size={11} />
                    <span>{repo.forks_count}</span>
                  </div>
                </div>

                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-xs text-primary hover:text-primary-hover transition-colors font-medium"
                >
                  View repo →
                </a>
              </div>
            ))
          )}
        </motion.div>

        <div className="text-center mt-8">
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2.5 border border-border text-foreground rounded-md hover:border-primary hover:text-primary transition-colors text-sm font-medium"
          >
            See all repositories on GitHub →
          </a>
        </div>
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
    PHP: '#777BB4',
    'C++': '#f34b7d',
    Java: '#ed8e00',
    Ruby: '#701516',
    Go: '#00ADD8',
    Rust: '#dea584',
    Shell: '#89e051',
    Vue: '#41b883',
    Dart: '#00B4AB',
    Kotlin: '#A97BFF'
  }
  return colors[language || ''] || '#6B645C'
}
