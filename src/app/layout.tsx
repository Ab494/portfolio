import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ServiceWorkerRegistration } from '@/components/service-worker-registration'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Evans Kipngeno Cheruiyot - Full-Stack Developer',
  description: 'Full-Stack Developer specializing in the MERN Stack (MongoDB, Express.js, React.js, Node.js) and Python backend development (Django, DRF, Flask).',
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    siteName: 'Evans Kipngeno Cheruiyot',
    title: 'Evans Kipngeno Cheruiyot - Full-Stack Developer',
    description: 'Full-Stack Developer specializing in MERN Stack and Python backend development',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Evans Kipngeno Cheruiyot - Full-Stack Developer',
    description: 'Full-Stack Developer specializing in MERN Stack and Python backend development',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#3B82F6',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <ServiceWorkerRegistration />
      </body>
    </html>
  )
}