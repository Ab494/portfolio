'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const commands = [
  {
    command: 'git status',
    output: "On branch main\nYour branch is up to date with 'origin/main'.\n\nChanges to be committed:\n  modified:   src/api/views.py\n  modified:   src/mpesa/callbacks.py",
    delay: 2000
  },
  {
    command: 'docker compose up -d',
    output: 'Creating network "app_default" with the default driver\nCreating app-db      ... done\nCreating app-redis   ... done\nCreating app-web     ... done\nCreating app-celery  ... done',
    delay: 2500
  },
  {
    command: 'python manage.py migrate',
    output: 'Operations to perform:\n  Apply all migrations: admin, auth, contenttypes, sessions\nRunning migrations:\n  Applying auth.0012_alter_user_username... OK\n  Applying sessions.0001_initial... OK',
    delay: 2000
  },
  {
    command: 'curl -X POST https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest',
    output: '{"ResponseCode":"0","ResponseDescription":"Accept the service request successfully.","MerchantRequestID":"29415-34201-1","CheckoutRequestID":"ws_CO_120420241230"}',
    delay: 3000
  },
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

    setIsTyping(true)
    let commandIndex = 0
    const typeCommand = () => {
      if (commandIndex < currentCommand.command.length) {
        setDisplayedCommand(prev => prev + currentCommand.command[commandIndex])
        commandIndex++
        setTimeout(typeCommand, 60)
      } else {
        setIsTyping(false)
        outputTimeout = setTimeout(() => {
          let outputIndex = 0
          const typeOutput = () => {
            if (outputIndex < currentCommand.output.length) {
              setDisplayedOutput(prev => prev + currentCommand.output[outputIndex])
              outputIndex++
              setTimeout(typeOutput, 15)
            } else {
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
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-serif font-semibold text-center mb-3 text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          A look at my terminal
        </motion.h2>

        <motion.p
          className="text-base text-text-secondary text-center mb-10 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          The kind of commands I run during a normal work session.
        </motion.p>

        <motion.div
          className="bg-[#1F1B16] rounded-md p-5 font-mono text-sm border border-border"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
            <div className="w-3 h-3 bg-[#B23B3B] rounded-full"></div>
            <div className="w-3 h-3 bg-[#C9A227] rounded-full"></div>
            <div className="w-3 h-3 bg-[#4A8B5C] rounded-full"></div>
            <span className="text-white/40 ml-3 text-xs">bash — evans@workstation</span>
          </div>

          {/* Terminal Content */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-[#4A8B5C]">evans@workstation:~$</span>
              <span className="text-white/90">
                {displayedCommand}
                <AnimatePresence>
                  {isTyping && showCursor && (
                    <motion.span
                      className="inline-block w-2 h-4 bg-white/80 ml-1"
                      initial={{ opacity: 1 }}
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                    />
                  )}
                </AnimatePresence>
              </span>
            </div>

            <AnimatePresence>
              {displayedOutput && (
                <motion.div
                  className="text-white/60 whitespace-pre-line leading-relaxed text-xs"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {displayedOutput}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
