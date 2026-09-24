'use client'

import { motion, AnimatePresence } from 'framer-motion'
import React, { useState, useEffect, useRef } from 'react'
import { Menu, X, Home, User, Code2, FolderKanban, GraduationCap, Heart, Github, Mail, Download, Video as LucideIcon } from 'lucide-react'

interface NavItem {
  href: string
  label: string
  icon: typeof LucideIcon
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
        className={`relative flex items-center justify-center w-11 h-11 rounded-md transition-colors duration-200 ${
          isActive
            ? 'bg-primary text-primary-foreground'
            : 'text-muted-foreground hover:text-primary hover:bg-secondary'
        }`}
        onMouseEnter={() => setHoveredItem(item.href)}
        onMouseLeave={() => setHoveredItem(null)}
        title={item.label}
      >
        <Icon size={19} />
        {hoveredItem === item.href && !isActive && (
          <div 
            className="absolute left-full ml-3 px-3 py-1.5 bg-background border border-border rounded-md whitespace-nowrap z-50 shadow-sm"
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
      className="fixed left-0 top-0 h-full w-16 bg-background border-r border-border z-50 hidden md:flex flex-col items-center py-6"
      onMouseLeave={() => setHoveredItem(null)}
    >
      <div className="mb-6">
        <a href="#hero" className="block">
          <div className="w-11 h-11 rounded-full overflow-hidden border border-border">
            <img 
              src="/vanso.jpeg" 
              alt="Evans Kipngeno" 
              className="w-full h-full object-cover"
            />
          </div>
        </a>
      </div>

      <div className="flex flex-col gap-1.5">
        {navSections.main.map((item) => (
          <NavItem 
            key={item.href} 
            item={item} 
            isActive={activeSection === item.href.substring(1)} 
          />
        ))}
      </div>

      <div className="w-7 h-px bg-border my-3" />

      <div className="flex flex-col gap-1.5">
        {navSections.secondary.map((item) => (
          <NavItem 
            key={item.href} 
            item={item} 
            isActive={activeSection === item.href.substring(1)} 
          />
        ))}
      </div>

      <div className="w-7 h-px bg-border my-3" />

      <div className="flex flex-col gap-1.5">
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
          className="flex items-center justify-center w-11 h-11 rounded-md bg-secondary text-muted-foreground hover:text-primary hover:border-primary border border-border transition-colors duration-200"
          onMouseEnter={() => setHoveredItem('download')}
          onMouseLeave={() => setHoveredItem(null)}
          title="Download CV"
        >
          <Download size={17} />
        </a>
        {hoveredItem === 'download' && (
          <div 
            className="absolute left-full ml-3 px-3 py-1.5 bg-background border border-border rounded-md whitespace-nowrap z-50 shadow-sm"
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
      className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border md:hidden"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between px-4 py-3">
        <a href="#hero" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full overflow-hidden border border-border">
            <img 
              src="/vanso.jpeg" 
              alt="Evans Kipngeno" 
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-base font-semibold font-serif text-foreground">
            Evans
          </span>
        </a>

        <div className="flex items-center gap-2">
          <a
            href="/cv.pdf"
            download
            className="p-2 text-muted-foreground hover:text-primary transition-colors"
            title="Download CV"
          >
            <Download size={19} />
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-muted-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
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
            className="overflow-hidden bg-background border-t border-border"
          >
            <div className="px-4 py-2 space-y-0.5">
              {navSections.main.map((item) => {
                const Icon = item.icon
                const isActive = activeSection === item.href.substring(1)
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${
                      isActive
                        ? 'bg-secondary text-primary'
                        : 'text-muted-foreground hover:text-primary hover:bg-secondary/50'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Icon size={19} />
                    <span className="font-medium">{item.label}</span>
                  </a>
                )
              })}
            </div>

            <div className="px-4 py-2 space-y-0.5">
              {navSections.secondary.map((item) => {
                const Icon = item.icon
                const isActive = activeSection === item.href.substring(1)
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${
                      isActive
                        ? 'bg-secondary text-primary'
                        : 'text-muted-foreground hover:text-primary hover:bg-secondary/50'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Icon size={19} />
                    <span className="font-medium">{item.label}</span>
                  </a>
                )
              })}
            </div>

            <div className="px-4 py-2 space-y-0.5 mb-2">
              {navSections.social.map((item) => {
                const Icon = item.icon
                const isActive = activeSection === item.href.substring(1)
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${
                      isActive
                        ? 'bg-secondary text-primary'
                        : 'text-muted-foreground hover:text-primary hover:bg-secondary/50'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Icon size={19} />
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
