'use client'

import { motion, useScroll, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const [scrollPercentage, setScrollPercentage] = useState(0)

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      setScrollPercentage(Math.round(latest * 100))
    })

    return () => unsubscribe()
  }, [scrollYProgress])

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-primary z-50 origin-left"
        style={{ scaleX }}
      />

      <motion.div
        className="fixed top-4 right-4 z-50 bg-background/90 backdrop-blur-sm border border-border rounded-md px-2.5 py-1 text-xs font-medium"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <span className="text-primary font-semibold">
          {scrollPercentage}%
        </span>
      </motion.div>

      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <motion.button
          className="w-10 h-10 bg-secondary border border-border rounded-md flex items-center justify-center cursor-pointer hover:border-primary transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            className="text-primary"
          >
            <path d="M7 14L12 9L17 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.button>
      </motion.div>
    </>
  )
}
