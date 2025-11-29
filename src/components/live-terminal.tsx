'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const commands = [
  { command: 'npm install', output: 'Installing dependencies...', delay: 1000 },
  { command: 'git status', output: 'On branch main\nYour branch is up to date with \'origin/main\'.\n\nChanges to be committed:\n  (use "git restore --staged <file>..." to unstage)\n        modified:   src/components/hero.tsx', delay: 1500 },
  { command: 'python manage.py runserver', output: 'Watching for file changes with StatReloader\nPerforming system checks...\n\nSystem check identified no issues (0 silenced).\n\nYou have 18 unapplied migration(s). Your project may not work properly until you apply the migrations for app(s): admin, auth, contenttypes, sessions.\nRun \'python manage.py migrate\' to apply them.\n\nDjango version 4.2.7, using settings \'config.settings\'\nStarting development server at http://127.0.0.1:8000/\nQuit the server with CONTROL-C.', delay: 2000 },
  { command: 'docker build -t portfolio .', output: 'Sending build context to Docker daemon  2.048kB\nStep 1/8 : FROM node:18-alpine\nStep 2/8 : WORKDIR /app\nStep 3/8 : COPY package*.json ./\nStep 4/8 : RUN npm ci --only=production\nStep 5/8 : COPY . .\nStep 6/8 : RUN npm run build\nStep 7/8 : EXPOSE 3000\nStep 8/8 : CMD ["npm", "start"]\nSuccessfully built 123456789abc\nSuccessfully tagged portfolio:latest', delay: 2500 },
  { command: 'npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch', output: 'Rebuilding...\nDone in 1.2s.', delay: 1000 },
]

export function LiveTerminal() {
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0)
  const [displayedCommand, setDisplayedCommand] = useState('')
  const [displayedOutput, setDisplayedOutput] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  useEffect(() => {
    const currentCommand = commands[currentCommandIndex]
    if (!currentCommand) return

    let commandTimeout: NodeJS.Timeout
    let outputTimeout: NodeJS.Timeout

    // Type the command
    setIsTyping(true)
    let commandIndex = 0
    const typeCommand = () => {
      if (commandIndex < currentCommand.command.length) {
        setDisplayedCommand(prev => prev + currentCommand.command[commandIndex])
        commandIndex++
        setTimeout(typeCommand, 100)
      } else {
        setIsTyping(false)
        // Show output after command is typed
        outputTimeout = setTimeout(() => {
          let outputIndex = 0
          const typeOutput = () => {
            if (outputIndex < currentCommand.output.length) {
              setDisplayedOutput(prev => prev + currentCommand.output[outputIndex])
              outputIndex++
              setTimeout(typeOutput, 20)
            } else {
              // Move to next command after delay
              commandTimeout = setTimeout(() => {
                setCurrentCommandIndex(prev => (prev + 1) % commands.length)
                setDisplayedCommand('')
                setDisplayedOutput('')
              }, currentCommand.delay)
            }
          }
          typeOutput()
        }, 500)
      }
    }

    typeCommand()

    return () => {
      clearTimeout(commandTimeout)
      clearTimeout(outputTimeout)
    }
  }, [currentCommandIndex])

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          Live Development Terminal
        </motion.h2>

        <motion.p
          className="text-lg text-text-secondary text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Watch real development commands and their outputs in action
        </motion.p>

        <motion.div
          className="bg-black rounded-lg p-6 font-mono text-sm shadow-2xl border border-primary/20"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-700">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-gray-400 ml-4">Terminal - Development Session</span>
          </div>

          {/* Terminal Content */}
          <div className="space-y-2">
            {/* Command Prompt */}
            <div className="flex items-center gap-2">
              <span className="text-green-400">evans@portfolio:~$</span>
              <span className="text-white">
                {displayedCommand}
                <AnimatePresence>
                  {isTyping && showCursor && (
                    <motion.span
                      className="inline-block w-2 h-4 bg-white ml-1"
                      initial={{ opacity: 1 }}
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                    />
                  )}
                </AnimatePresence>
              </span>
            </div>

            {/* Command Output */}
            <AnimatePresence>
              {displayedOutput && (
                <motion.div
                  className="text-gray-300 whitespace-pre-line leading-relaxed"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {displayedOutput}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Status Indicator */}
          <motion.div
            className="mt-4 flex items-center gap-2 text-xs text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <motion.div
              className="w-2 h-2 bg-green-400 rounded-full"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span>Active Development Session</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}