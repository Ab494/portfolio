'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from './ui/button'

// Type declarations for Speech Recognition API
declare global {
  interface Window {
    SpeechRecognition: any
    webkitSpeechRecognition: any
  }
}

interface VoiceCommand {
  keywords: string[]
  action: () => void
  description: string
}

export function VoiceControl() {
  const [isListening, setIsListening] = useState(false)
  const [transcript, setTranscript] = useState('')
  const [isSupported, setIsSupported] = useState(true)
  const [showTranscript, setShowTranscript] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [voiceFeedbackEnabled, setVoiceFeedbackEnabled] = useState(true)
  const recognitionRef = useRef<any>(null)
  const synthRef = useRef<SpeechSynthesis | null>(null)

  // Voice commands
  const commands: VoiceCommand[] = [
    {
      keywords: ['show me your projects', 'projects', 'portfolio', 'work'],
      action: () => scrollToSection('projects'),
      description: '"Show me your projects"'
    },
    {
      keywords: ['tell me about yourself', 'about', 'who are you', 'introduction'],
      action: () => scrollToSection('about'),
      description: '"Tell me about yourself"'
    },
    {
      keywords: ['skills', 'technologies', 'tech stack', 'what can you do'],
      action: () => scrollToSection('skills'),
      description: '"Show me your skills"'
    },
    {
      keywords: ['contact', 'get in touch', 'reach you', 'email'],
      action: () => scrollToSection('contact'),
      description: '"Contact information"'
    },
    {
      keywords: ['education', 'learning', 'background', 'study'],
      action: () => scrollToSection('education'),
      description: '"Your education"'
    },
    {
      keywords: ['interests', 'hobbies', 'what do you like'],
      action: () => scrollToSection('interests'),
      description: '"Your interests"'
    },
    {
      keywords: ['terminal', 'code', 'development', 'commands'],
      action: () => scrollToSection('projects'), // Terminal is after projects
      description: '"Show terminal"'
    },
    {
      keywords: ['top', 'home', 'beginning', 'start'],
      action: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
      description: '"Go to top"'
    }
  ]

  useEffect(() => {
    // Initialize speech synthesis
    if ('speechSynthesis' in window) {
      synthRef.current = window.speechSynthesis
      console.log('Speech synthesis supported and initialized')
    } else {
      console.log('Speech synthesis not supported')
    }

    // Check if speech recognition is supported
    const SpeechRecognition = window.SpeechRecognition || (window as any).webkitSpeechRecognition
    if (SpeechRecognition) {
      setIsSupported(true)
      recognitionRef.current = new SpeechRecognition()
      recognitionRef.current.continuous = false
      recognitionRef.current.interimResults = false
      recognitionRef.current.lang = 'en-US'

      recognitionRef.current.onresult = (event: any) => {
        const result = event.results[0][0].transcript.toLowerCase()
        setTranscript(result)
        setShowTranscript(true)
        console.log('Voice recognized:', result)

        // Hide transcript after 3 seconds
        setTimeout(() => setShowTranscript(false), 3000)

        // Process the command
        processCommand(result)
      }

      recognitionRef.current.onend = () => {
        setIsListening(false)
        console.log('Voice recognition ended')
      }

      recognitionRef.current.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error)
        setIsListening(false)
      }
    } else {
      setIsSupported(false)
      console.log('Speech recognition not supported')
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop()
      }
      if (synthRef.current) {
        synthRef.current.cancel()
      }
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })

      // Add a highlight effect
      element.style.boxShadow = '0 0 0 4px rgba(59, 130, 246, 0.5)'
      setTimeout(() => {
        element.style.boxShadow = ''
      }, 2000)
    }
  }

  const speak = (text: string) => {
    console.log('Speak called with:', text, 'isSpeaking:', isSpeaking, 'voiceFeedbackEnabled:', voiceFeedbackEnabled, 'synth available:', !!synthRef.current)

    if (synthRef.current && !isSpeaking && voiceFeedbackEnabled) {
      setIsSpeaking(true)
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.rate = 0.9
      utterance.pitch = 1
      utterance.volume = 0.8
      utterance.lang = 'en-US'

      utterance.onstart = () => {
        console.log('Speech started')
      }

      utterance.onend = () => {
        console.log('Speech ended')
        setIsSpeaking(false)
      }

      utterance.onerror = (event) => {
        console.error('Speech synthesis error:', event)
        setIsSpeaking(false)
        // Fallback to visual notification
        showFallbackNotification(text)
      }

      console.log('Speaking:', text)
      synthRef.current.speak(utterance)
    } else {
      console.log('Speech synthesis not available or conditions not met')
      // Fallback to visual notification
      if (voiceFeedbackEnabled) {
        showFallbackNotification(text)
      }
    }
  }

  const showFallbackNotification = (text: string) => {
    // Create a visual notification when audio isn't available
    const notification = document.createElement('div')
    notification.innerHTML = `
      <div style="
        position: fixed;
        top: 20px;
        right: 20px;
        background: #3B82F6;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        z-index: 10000;
        font-family: system-ui, sans-serif;
        max-width: 300px;
        animation: slideInRight 0.5s ease-out;
      ">
        <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
          <span style="font-size: 1.2rem;">🔊</span>
          <span style="font-weight: 600;">Voice Response</span>
        </div>
        <p style="margin: 0; font-size: 0.9rem; line-height: 1.4;">${text}</p>
      </div>
    `

    const style = document.createElement('style')
    style.textContent = `
      @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
    `
    document.head.appendChild(style)
    document.body.appendChild(notification)

    setTimeout(() => {
      notification.style.animation = 'slideInRight 0.5s ease-in reverse'
      setTimeout(() => {
        document.body.removeChild(notification)
        document.head.removeChild(style)
      }, 500)
    }, 3000)
  }

  const processCommand = (spokenText: string) => {
    for (const command of commands) {
      for (const keyword of command.keywords) {
        if (spokenText.includes(keyword)) {
          command.action()

          // Show success feedback
          showFeedback(`🎯 Executed: ${command.description}`)

          // Provide audio feedback
          const successMessages = [
            `Navigating to ${command.description.split('"')[1]}`,
            `Opening ${command.description.split('"')[1]}`,
            `Going to ${command.description.split('"')[1]}`,
            `Showing ${command.description.split('"')[1]}`
          ]
          const randomMessage = successMessages[Math.floor(Math.random() * successMessages.length)]
          speak(randomMessage)

          return
        }
      }
    }

    // If no command matched
    showFeedback('❓ Command not recognized. Try "show me your projects" or "contact information"')
    speak('Command not recognized. Try saying show me your projects or contact information.')
  }

  const showFeedback = (message: string) => {
    // Create a temporary feedback element
    const feedback = document.createElement('div')
    feedback.textContent = message
    feedback.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(0, 0, 0, 0.9);
      color: white;
      padding: 1rem 2rem;
      border-radius: 8px;
      font-size: 1.1rem;
      z-index: 10000;
      pointer-events: none;
      animation: fadeInOut 3s ease-in-out;
    `

    const style = document.createElement('style')
    style.textContent = `
      @keyframes fadeInOut {
        0%, 100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
        10%, 90% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
      }
    `
    document.head.appendChild(style)
    document.body.appendChild(feedback)

    setTimeout(() => {
      document.body.removeChild(feedback)
      document.head.removeChild(style)
    }, 3000)
  }

  const startListening = () => {
    if (recognitionRef.current && !isListening) {
      setIsListening(true)
      recognitionRef.current.start()

      // Immediate audio feedback
      if (voiceFeedbackEnabled) {
        speak("Listening...")
      }

      // Welcome message after a delay
      if (voiceFeedbackEnabled) {
        setTimeout(() => {
          speak("Voice control activated. Try saying 'show me your projects' or 'contact information'.")
        }, 1500)
      }
    }
  }

  const stopListening = () => {
    if (recognitionRef.current && isListening) {
      setIsListening(false)
      recognitionRef.current.stop()
    }
  }

  // Always render the component, but disable functionality if not supported

  return (
    <>
      {/* Voice Control Button */}
      <motion.div
        className="fixed bottom-6 left-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 3, type: "spring", stiffness: 200 }}
      >
        <Button
          onClick={isSupported ? (isListening ? stopListening : startListening) : undefined}
          disabled={!isSupported}
          className={`rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 ${
            !isSupported
              ? 'bg-gray-500 cursor-not-allowed opacity-50'
              : isListening
              ? 'bg-red-500 hover:bg-red-600 animate-pulse'
              : isSpeaking
              ? 'bg-green-500 hover:bg-green-600 animate-pulse'
              : 'bg-primary hover:bg-primary-hover'
          }`}
          aria-label={
            !isSupported
              ? 'Voice control not supported in this browser'
              : isListening
              ? 'Stop voice control'
              : isSpeaking
              ? 'Speaking response'
              : 'Start voice control'
          }
        >
          <motion.div
            animate={
              isListening
                ? { scale: [1, 1.2, 1] }
                : isSpeaking
                ? { scale: [1, 1.1, 1] }
                : { scale: 1 }
            }
            transition={{
              duration: isListening ? 1 : 0.5,
              repeat: (isListening || isSpeaking) ? Infinity : 0
            }}
          >
            {!isSupported ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <line x1="15" y1="9" x2="9" y2="15"/>
                <line x1="9" y1="9" x2="15" y2="15"/>
              </svg>
            ) : isListening ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 2L7 9L2 7L9 9L7 16L9 9L16 11L9 9L11 2L9 2Z"/>
              </svg>
            ) : isSpeaking ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                <path d="M15.54 8.46C16.477 9.397 17.024 10.629 17.024 11.897C17.024 13.165 16.477 14.397 15.54 15.334"/>
                <path d="M19.07 4.93C21.049 6.908 22.127 9.523 22.127 12.192C22.127 14.861 21.049 17.476 19.07 19.454"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 1C9.79 1 8 2.79 8 5V11C8 13.21 9.79 15 12 15C14.21 15 16 13.21 16 11V5C16 2.79 14.21 1 12 1Z"/>
                <path d="M19 11V12C19 16.97 14.97 21 10 21C5.03 21 1 16.97 1 12V11"/>
                <path d="M12 19V23"/>
                <path d="M8 23H16"/>
              </svg>
            )}
          </motion.div>
        </Button>

        {/* Status indicators */}
        <AnimatePresence>
          {isListening && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center"
            >
              <motion.div
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="w-2 h-2 bg-white rounded-full"
              />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {!isSupported && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute -top-2 -right-2 w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Transcript Display */}
      <AnimatePresence>
        {showTranscript && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-card border border-border rounded-lg px-4 py-2 shadow-lg"
          >
            <p className="text-sm text-text-secondary">
              Heard: <span className="font-medium text-primary">"{transcript}"</span>
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Voice Commands Help */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 4, type: "spring", stiffness: 200 }}
      >
        <Button
          variant="outline"
          size="sm"
          className="bg-card/80 backdrop-blur-md border-border hover:border-primary"
          onClick={() => {
            const help = document.getElementById('voice-help')
            if (help) {
              help.style.display = help.style.display === 'none' ? 'block' : 'none'
            }
          }}
        >
          🎤 Help
        </Button>
      </motion.div>

      {/* Voice Commands Modal */}
      <div
        id="voice-help"
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 hidden"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            (e.target as HTMLElement).style.display = 'none'
          }
        }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-card p-6 rounded-lg border border-border max-w-md w-full mx-4">
          <h3 className="text-lg font-semibold mb-4 text-primary">🎤 Voice Commands</h3>

          {/* Voice Feedback Toggle */}
          <div className="flex items-center justify-between mb-4 p-3 bg-muted/50 rounded-lg">
            <div>
              <p className="font-medium text-sm">Voice Feedback</p>
              <p className="text-xs text-text-secondary">Audio responses when commands are executed</p>
            </div>
            <button
              onClick={() => setVoiceFeedbackEnabled(!voiceFeedbackEnabled)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                voiceFeedbackEnabled ? 'bg-primary' : 'bg-muted'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  voiceFeedbackEnabled ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          {/* Test Voice Button */}
          <div className="mb-4">
            <Button
              onClick={() => speak('Hello! Voice synthesis is working correctly.')}
              className="w-full"
              disabled={!voiceFeedbackEnabled}
            >
              🔊 Test Voice
            </Button>
          </div>

          <div className="space-y-2 text-sm mb-4">
            {commands.map((cmd, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-text-secondary">{cmd.description}</span>
                <span className="text-primary font-medium">→ {cmd.keywords[0]}</span>
              </div>
            ))}
          </div>
          <Button
            className="w-full"
            onClick={() => document.getElementById('voice-help')!.style.display = 'none'}
          >
            Got it!
          </Button>
        </div>
      </div>
    </>
  )
}