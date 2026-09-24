'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useDynamicContent } from '@/hooks/useDynamicContent'

export function DynamicAdaptation() {
  const { adaptations } = useDynamicContent()

  return (
    <AnimatePresence>
      {adaptations.personalizedMessage && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          className="fixed bottom-24 left-4 right-4 md:left-auto md:right-4 md:w-80 z-50"
        >
          <div className="bg-background border border-border rounded-md p-4 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="flex-1">
                <p className="text-sm text-text-secondary leading-relaxed">
                  {adaptations.personalizedMessage}
                </p>
              </div>
              <button
                onClick={() => window.location.reload()}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                ✕
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
