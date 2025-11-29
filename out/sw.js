const CACHE_NAME = 'evans-portfolio-v1'
const STATIC_CACHE = 'evans-portfolio-static-v1'
const DYNAMIC_CACHE = 'evans-portfolio-dynamic-v1'

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/manifest.json',
  '/favicon.ico',
  // Add your actual asset paths here
]

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...')
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Service Worker: Caching static assets')
        return cache.addAll(STATIC_ASSETS)
      })
      .catch((error) => {
        console.error('Service Worker: Failed to cache static assets:', error)
      })
  )
  self.skipWaiting()
})

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...')
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
            console.log('Service Worker: Deleting old cache:', cacheName)
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
  self.clients.claim()
})

// Fetch event - serve from cache or network
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  // Skip non-GET requests
  if (request.method !== 'GET') return

  // Skip external requests
  if (!url.origin.includes(self.location.origin)) return

  // Handle API requests differently
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Cache successful API responses
          if (response.ok) {
            const responseClone = response.clone()
            caches.open(DYNAMIC_CACHE).then((cache) => {
              cache.put(request, responseClone)
            })
          }
          return response
        })
        .catch(() => {
          // Return cached API response if available
          return caches.match(request)
        })
    )
    return
  }

  // Handle static assets and pages
  event.respondWith(
    caches.match(request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse
        }

        return fetch(request)
          .then((response) => {
            // Don't cache non-successful responses
            if (!response.ok) return response

            const responseClone = response.clone()

            // Cache the response
            caches.open(DYNAMIC_CACHE).then((cache) => {
              cache.put(request, responseClone)
            })

            return response
          })
          .catch(() => {
            // Return offline fallback for navigation requests
            if (request.mode === 'navigate') {
              return caches.match('/')
            }
          })
      })
  )
})

// Background sync for contact form
self.addEventListener('sync', (event) => {
  if (event.tag === 'contact-form-sync') {
    event.waitUntil(syncContactForm())
  }
})

async function syncContactForm() {
  try {
    const cache = await caches.open(DYNAMIC_CACHE)
    const keys = await cache.keys()

    // Find contact form requests in cache
    const contactRequests = keys.filter(request =>
      request.url.includes('/api/contact') ||
      request.url.includes('formspree.io')
    )

    // Retry sending contact form data
    await Promise.all(
      contactRequests.map(async (request) => {
        try {
          const response = await fetch(request)
          if (response.ok) {
            await cache.delete(request)
            console.log('Contact form synced successfully')
          }
        } catch (error) {
          console.error('Failed to sync contact form:', error)
        }
      })
    )
  } catch (error) {
    console.error('Background sync failed:', error)
  }
}

// Push notifications (for future new project announcements)
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json()

    const options = {
      body: data.body,
      icon: '/icon-192x192.png',
      badge: '/icon-192x192.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: data.primaryKey
      },
      actions: [
        {
          action: 'explore',
          title: 'View Project',
          icon: '/icon-192x192.png'
        },
        {
          action: 'close',
          title: 'Close',
          icon: '/icon-192x192.png'
        }
      ]
    }

    event.waitUntil(
      self.registration.showNotification(data.title, options)
    )
  }
})

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  event.notification.close()

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/#projects')
    )
  } else {
    event.waitUntil(
      clients.openWindow('/')
    )
  }
})

// Periodic background sync (check for updates)
self.addEventListener('periodicsync', (event) => {
  if (event.tag === 'content-update-check') {
    event.waitUntil(checkForUpdates())
  }
})

async function checkForUpdates() {
  try {
    // Check for new projects or content updates
    const response = await fetch('/api/updates')
    if (response.ok) {
      const updates = await response.json()

      if (updates.hasNewContent) {
        // Notify user of new content
        self.registration.showNotification('Portfolio Update', {
          body: 'New projects and updates available!',
          icon: '/icon-192x192.png',
          badge: '/icon-192x192.png'
        })
      }
    }
  } catch (error) {
    console.error('Update check failed:', error)
  }
}