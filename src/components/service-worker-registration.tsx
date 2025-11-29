'use client'

import { useEffect } from 'react'

export function ServiceWorkerRegistration() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/sw.js')
          .then((registration) => {
            console.log('SW registered: ', registration)

            // Check for updates
            registration.addEventListener('updatefound', () => {
              const newWorker = registration.installing
              if (newWorker) {
                newWorker.addEventListener('statechange', () => {
                  if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                    // New content is available, show update prompt
                    showUpdatePrompt()
                  }
                })
              }
            })
          })
          .catch((registrationError) => {
            console.log('SW registration failed: ', registrationError)
          })
      })
    }

    // Request notification permission
    if ('Notification' in window && 'serviceWorker' in navigator) {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          console.log('Notification permission granted')
        }
      })
    }
  }, [])

  const showUpdatePrompt = () => {
    // Create update notification
    const updateDiv = document.createElement('div')
    updateDiv.innerHTML = `
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
      ">
        <p style="margin: 0 0 0.5rem 0; font-weight: 600;">Update Available!</p>
        <p style="margin: 0 0 1rem 0; font-size: 0.9rem;">New version of the portfolio is ready.</p>
        <div style="display: flex; gap: 0.5rem;">
          <button onclick="window.location.reload()" style="
            background: white;
            color: #3B82F6;
            border: none;
            padding: 0.5rem 1rem;
            border-radius: 4px;
            cursor: pointer;
            font-weight: 600;
          ">Update Now</button>
          <button onclick="this.parentElement.parentElement.remove()" style="
            background: transparent;
            color: white;
            border: 1px solid white;
            padding: 0.5rem 1rem;
            border-radius: 4px;
            cursor: pointer;
          ">Later</button>
        </div>
      </div>
    `
    document.body.appendChild(updateDiv)
  }

  return null // This component doesn't render anything
}