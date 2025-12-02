'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useDynamicContent } from '@/hooks/useDynamicContent'

export function DynamicAdaptation() {
  const { adaptations } = useDynamicContent()

  return (
    <AnimatePresence>
      {adaptations.personalizedMessage && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.9 }}
          className="fixed bottom-24 left-4 right-4 md:left-auto md:right-4 md:w-96 z-50"
        >
          <div className="bg-card/95 backdrop-blur-md border border-primary/20 rounded-lg p-4 shadow-2xl">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-primary text-sm"></span>
              </div>
              <div className="flex-1">
                <p className="text-sm text-text-secondary leading-relaxed">
                  {adaptations.personalizedMessage}
                </p>
              </div>
              <button
                onClick={() => {
                  // This would be handled by the hook to clear the message
                  window.location.reload() // Simple way to reset for demo
                }}
                className="text-text-secondary hover:text-primary transition-colors"
              >
                ✕
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Advanced Skills Unlock Notification */}
      <AnimatePresence>
        {adaptations.showAdvancedSkills && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="fixed top-20 left-4 z-50"
          >
            <div className="bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 rounded-lg p-3 shadow-lg">
              <p className="text-sm font-medium text-primary">
                 Advanced Skills Unlocked!
              </p>
              <p className="text-xs text-text-secondary">
                Thanks for exploring deeply
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Voice Control Unlock */}
      <AnimatePresence>
        {adaptations.enableVoiceControl && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="fixed top-4 right-4 z-50"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="bg-primary text-primary-foreground rounded-full p-2 shadow-lg"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 1C9.79 1 8 2.79 8 5V11C8 13.21 9.79 15 12 15C14.21 15 16 13.21 16 11V5C16 2.79 14.21 1 12 1Z"/>
                <path d="M19 11V12C19 16.97 14.97 21 10 21C5.03 21 1 16.97 1 12V11"/>
                <path d="M12 19V23"/>
                <path d="M8 23H16"/>
              </svg>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Extra Animations Toggle */}
      <AnimatePresence>
        {adaptations.showExtraAnimations && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50"
          >
            <div className="bg-card/90 backdrop-blur-md border border-border rounded-full px-4 py-2 shadow-lg">
              <p className="text-xs text-primary font-medium">
                 Enhanced Experience Activated
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatePresence>
  )
}