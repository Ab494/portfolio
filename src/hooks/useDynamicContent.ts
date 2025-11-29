'use client'

import { useState, useEffect } from 'react'

interface UserBehavior {
  scrollDepth: number
  timeOnPage: number
  sectionsVisited: string[]
  deviceType: 'mobile' | 'tablet' | 'desktop'
  preferredTheme: 'light' | 'dark'
  interactionCount: number
}

export function useDynamicContent() {
  const [behavior, setBehavior] = useState<UserBehavior>({
    scrollDepth: 0,
    timeOnPage: 0,
    sectionsVisited: [],
    deviceType: 'desktop',
    preferredTheme: 'dark',
    interactionCount: 0
  })

  const [adaptations, setAdaptations] = useState({
    showAdvancedSkills: false,
    highlightProjects: false,
    enableVoiceControl: false,
    showExtraAnimations: false,
    personalizedMessage: ''
  })

  // Track scroll depth
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100

      setBehavior(prev => ({
        ...prev,
        scrollDepth: Math.max(prev.scrollDepth, scrollPercent)
      }))
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Track time on page
  useEffect(() => {
    const startTime = Date.now()
    const interval = setInterval(() => {
      setBehavior(prev => ({
        ...prev,
        timeOnPage: (Date.now() - startTime) / 1000 // seconds
      }))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  // Track device type
  useEffect(() => {
    const getDeviceType = () => {
      const width = window.innerWidth
      if (width < 768) return 'mobile'
      if (width < 1024) return 'tablet'
      return 'desktop'
    }

    setBehavior(prev => ({
      ...prev,
      deviceType: getDeviceType()
    }))

    const handleResize = () => {
      setBehavior(prev => ({
        ...prev,
        deviceType: getDeviceType()
      }))
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Track section visibility
  useEffect(() => {
    const observerOptions = {
      threshold: 0.5,
      rootMargin: '-50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id
          setBehavior(prev => ({
            ...prev,
            sectionsVisited: Array.from(new Set([...prev.sectionsVisited, sectionId]))
          }))
        }
      })
    }, observerOptions)

    // Observe all sections
    const sections = document.querySelectorAll('section[id]')
    sections.forEach(section => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  // Track interactions
  useEffect(() => {
    const handleInteraction = () => {
      setBehavior(prev => ({
        ...prev,
        interactionCount: prev.interactionCount + 1
      }))
    }

    // Track clicks, scrolls, and other interactions
    document.addEventListener('click', handleInteraction)
    document.addEventListener('scroll', handleInteraction)

    return () => {
      document.removeEventListener('click', handleInteraction)
      document.removeEventListener('scroll', handleInteraction)
    }
  }, [])

  // Apply adaptations based on behavior
  useEffect(() => {
    const newAdaptations = { ...adaptations }

    // Show advanced skills if user spends time and scrolls deep
    if (behavior.timeOnPage > 30 && behavior.scrollDepth > 50) {
      newAdaptations.showAdvancedSkills = true
    }

    // Highlight projects if user visits projects section multiple times
    if (behavior.sectionsVisited.filter(s => s === 'projects').length > 1) {
      newAdaptations.highlightProjects = true
    }

    // Enable voice control for power users
    if (behavior.interactionCount > 20 && behavior.timeOnPage > 60) {
      newAdaptations.enableVoiceControl = true
    }

    // Show extra animations for engaged users
    if (behavior.scrollDepth > 80 && behavior.timeOnPage > 45) {
      newAdaptations.showExtraAnimations = true
    }

    // Personalized messages based on behavior
    if (behavior.timeOnPage > 120) {
      newAdaptations.personalizedMessage = "Wow! You've been exploring for over 2 minutes. Thanks for your interest! 🚀"
    } else if (behavior.scrollDepth > 90) {
      newAdaptations.personalizedMessage = "You've seen the full portfolio! Impressive dedication! 🎯"
    } else if (behavior.sectionsVisited.length >= 5) {
      newAdaptations.personalizedMessage = "You're checking out all sections - great attention to detail! 💡"
    }

    setAdaptations(newAdaptations)
  }, [behavior])

  return { behavior, adaptations }
}