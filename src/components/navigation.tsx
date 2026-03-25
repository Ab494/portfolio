'use client'

import { motion, AnimatePresence } from 'framer-motion'
import React, { useState, useEffect, useRef } from 'react'
import { 
  Menu, 
  X, 
  Home, 
  User, 
  Code2, 
  FolderKanban, 
  GraduationCap, 
  Heart, 
  Github, 
  Mail,
  Download,
  LucideIcon
} from 'lucide-react'

interface NavItem {
  href: string
  label: string
  icon: LucideIcon
}

const navSections: { main: NavItem[], secondary: NavItem[], social: NavItem[] } = {
  main: [
    { href: '#hero', label: 'Home', icon: Home },
    { href: '#about', label: 'About', icon: User },
    { href: '#skills', label: 'Skills', icon: Code2 },
    { href: '#projects', label: 'Projects', icon: FolderKanban },
  ],
  secondary: [
    { href: '#education', label: 'Education', icon: GraduationCap },
    { href: '#interests', label: 'Interests', icon: Heart },
  ],
  social: [
    { href: '#github', label: 'GitHub', icon: Github },
    { href: '#contact', label: 'Contact', icon: Mail },
  ]
}

export function Navigation(): React.ReactNode {
  const [activeSection, setActiveSection] = useState('hero')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const sidebarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const allItems = [...navSections.main, ...navSections.secondary, ...navSections.social]
      const sections = allItems.map(item => item.href.substring(1))
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 150 && rect.bottom >= 150
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const NavItem = ({ item, isActive }: { item: NavItem; isActive: boolean }) => {
    const Icon = item.icon
    
    return (
      <a
        href={item.href}
        className={`relative flex items-center justify-center w-12 h-12 rounded-xl transition-colors duration-200 ${
          isActive
            ? 'bg-primary text-white'
            : 'text-text-secondary hover:text-primary hover:bg-primary/10'
        }`}
        onMouseEnter={() => setHoveredItem(item.href)}
        onMouseLeave={() => setHoveredItem(null)}
        title={item.label}
      >
        <Icon size={20} />
        {hoveredItem === item.href && !isActive && (
          <div 
            className="absolute left-full ml-3 px-3 py-1.5 bg-card border border-border rounded-lg shadow-lg whitespace-nowrap z-50"
            style={{ pointerEvents: 'none' }}
          >
            <span className="text-sm font-medium text-foreground">{item.label}</span>
          </div>
        )}
      </a>
    )
  }

  const Sidebar = () => (
    <div
      ref={sidebarRef}
      className="fixed left-0 top-0 h-full w-20 bg-card/95 backdrop-blur-xl border-r border-border/50 z-50 hidden md:flex flex-col items-center py-6"
      onMouseLeave={() => setHoveredItem(null)}
    >
      {/* Profile Image - GitHub style */}
      <div className="mb-8">
        <a href="#hero" className="block">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/30 shadow-lg">
            <img 
              src="/vanso.jpeg" 
              alt="Evans Kipngeno" 
              className="w-full h-full object-cover"
            />
          </div>
        </a>
      </div>

      <div className="flex flex-col gap-2">
        {navSections.main.map((item) => (
          <NavItem 
            key={item.href} 
            item={item} 
            isActive={activeSection === item.href.substring(1)} 
          />
        ))}
      </div>

      <div className="w-8 h-px bg-border/50 my-4" />

      <div className="flex flex-col gap-2">
        {navSections.secondary.map((item) => (
          <NavItem 
            key={item.href} 
            item={item} 
            isActive={activeSection === item.href.substring(1)} 
          />
        ))}
      </div>

      <div className="w-8 h-px bg-border/50 my-4" />

      <div className="flex flex-col gap-2">
        {navSections.social.map((item) => (
          <NavItem 
            key={item.href} 
            item={item} 
            isActive={activeSection === item.href.substring(1)} 
          />
        ))}
      </div>

      <div className="mt-auto mb-2">
        <a
          href="/cv.pdf"
          download
          className="flex items-center justify-center w-12 h-12 rounded-xl bg-secondary text-text-secondary hover:text-primary hover:bg-secondary/80 transition-colors duration-200 border border-border/50"
          onMouseEnter={() => setHoveredItem('download')}
          onMouseLeave={() => setHoveredItem(null)}
          title="Download CV"
        >
          <Download size={18} />
        </a>
        {hoveredItem === 'download' && (
          <div 
            className="absolute left-full ml-3 px-3 py-1.5 bg-card border border-border rounded-lg shadow-lg whitespace-nowrap z-50"
            style={{ pointerEvents: 'none' }}
          >
            <span className="text-sm font-medium text-foreground">Download CV</span>
          </div>
        )}
      </div>
    </div>
  )

  const MobileHeader = () => (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-xl border-b border-border/50 md:hidden"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between px-4 py-3">
        <a href="#hero" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full overflow-hidden border border-primary/30 shadow-md">
            <img 
              src="/vanso.jpeg" 
              alt="Evans Kipngeno" 
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-lg font-bold bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
            Evans
          </span>
        </a>

        <div className="flex items-center gap-2">
          <a
            href="/cv.pdf"
            download
            className="p-2 text-text-secondary hover:text-primary transition-colors"
            title="Download CV"
          >
            <Download size={20} />
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-text-secondary hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-card/98 backdrop-blur-xl border-t border-border/50"
          >
            <div className="px-4 py-3 border-b border-border/30">
              <span className="text-xs font-medium text-text-secondary uppercase tracking-wider">Main</span>
            </div>
            <div className="px-4 py-2 space-y-1">
              {navSections.main.map((item) => {
                const Icon = item.icon
                const isActive = activeSection === item.href.substring(1)
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                      isActive
                        ? 'bg-primary/15 text-primary'
                        : 'text-text-secondary hover:text-primary hover:bg-primary/5'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{item.label}</span>
                  </a>
                )
              })}
            </div>

            <div className="px-4 py-3 border-b border-border/30">
              <span className="text-xs font-medium text-text-secondary uppercase tracking-wider">More</span>
            </div>
            <div className="px-4 py-2 space-y-1">
              {navSections.secondary.map((item) => {
                const Icon = item.icon
                const isActive = activeSection === item.href.substring(1)
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                      isActive
                        ? 'bg-primary/15 text-primary'
                        : 'text-text-secondary hover:text-primary hover:bg-primary/5'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{item.label}</span>
                  </a>
                )
              })}
            </div>

            <div className="px-4 py-3 border-b border-border/30">
              <span className="text-xs font-medium text-text-secondary uppercase tracking-wider">Connect</span>
            </div>
            <div className="px-4 py-2 space-y-1 mb-2">
              {navSections.social.map((item) => {
                const Icon = item.icon
                const isActive = activeSection === item.href.substring(1)
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                      isActive
                        ? 'bg-primary/15 text-primary'
                        : 'text-text-secondary hover:text-primary hover:bg-primary/5'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{item.label}</span>
                  </a>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )

  return (
    <>
      <Sidebar />
      <MobileHeader />
    </>
  )
}
