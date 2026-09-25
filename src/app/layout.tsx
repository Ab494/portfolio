import type { Metadata } from 'next'
import { Inter, Fraunces } from 'next/font/google'
import './globals.css'
import { ServiceWorkerRegistration } from '@/components/service-worker-registration'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces', weight: ['400', '500', '600', '700'] })

export const metadata: Metadata = {
  title: 'Evans Kipngeno Cheruiyot - Full-Stack Developer',
  description: 'Backend developer working with Django, Python, Laravel, and Next.js. DevOps with Docker, CI/CD, and VPS deployment.',
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    siteName: 'Evans Kipngeno Cheruiyot',
    title: 'Evans Kipngeno Cheruiyot - Full-Stack Developer',
    description: 'Backend developer working with Django, Python, Laravel, and Next.js.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Evans Kipngeno Cheruiyot - Full-Stack Developer',
    description: 'Backend developer working with Django, Python, Laravel, and Next.js.',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#B5502E',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`} suppressHydrationWarning>
      <body className="font-sans bg-background text-foreground" style={{ fontFamily: 'var(--font-inter), ui-sans-serif, system-ui, sans-serif' }}>
        <ThemeProvider>
          {children}
          <ServiceWorkerRegistration />
        </ThemeProvider>
      </body>
    </html>
  )
}
