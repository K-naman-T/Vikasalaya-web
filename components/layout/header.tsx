"use client"
import Link from 'next/link'
import Image from 'next/image'
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Menu, X, ChevronDown } from "lucide-react"

const navItems = [
  { name: 'Home', link: '/' },
  { name: 'About Us', link: '/about' },
  { name: 'Get Involved', link: '/get-involved' },
  { name: 'Programs', link: '/programs' },
  { 
    name: 'Resources', 
    link: '/resources',
    subItems: [
      { name: 'Reports', items: [
        { name: 'Annual Report', link: '/resources#annual-report' },
        { name: 'Activity Report', link: '/resources#activity-report' },
        { name: 'Projects', link: '/resources#projects' },
      ]},
      { name: 'Publications', link: '/resources#publications' },
    ]
  },
  { name: 'Events', link: '/events' },
  { name: 'Contact', link: '/contact' }
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        "bg-gradient-soft shadow-lg backdrop-blur-sm bg-opacity-90"
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          <Link href="/" className="relative flex items-center">
            <div className="relative w-16 h-16 transform hover:scale-105 transition-transform">
              <img
                src="/images/logo/logo.png"
                alt="Vikasalaya Foundation Logo"
                className="object-contain"
              />
            </div>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div 
                key={item.name} 
                className="relative group"
                onMouseEnter={() => item.name === 'Resources' && setIsResourcesOpen(true)}
                onMouseLeave={() => item.name === 'Resources' && setIsResourcesOpen(false)}
              >
                <Link
                  href={item.link}
                  className="text-sm font-medium text-text hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
                {item.subItems && isResourcesOpen && (
                  <div className="absolute left-0 mt-1 w-48 bg-secondary rounded-xl shadow-xl overflow-hidden">
                    <div className="py-2">
                      {item.subItems.map((subItem) => (
                        <div key={subItem.name}>
                          {subItem.items ? (
                            <>
                              <div className="px-4 py-2 text-text-muted font-medium">
                                {subItem.name}
                              </div>
                              <div className="ml-4 space-y-1">
                                {subItem.items.map((subSubItem) => (
                                  <Link 
                                    key={subSubItem.name}
                                    href={subSubItem.link} 
                                    className="block px-4 py-2 text-text hover:bg-primary/10 hover:text-primary transition-colors"
                                  >
                                    {subSubItem.name}
                                  </Link>
                                ))}
                              </div>
                            </>
                          ) : (
                            <Link 
                              href={subItem.link}
                              className="block px-4 py-2 text-text hover:bg-primary/10 hover:text-primary transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link 
              href="/donate" 
              className="px-6 py-2.5 rounded-full font-medium bg-gradient-to-r from-primary to-accent 
                text-secondary hover:opacity-90 transition-opacity"
            >
              Donate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <Link 
              href="/donate" 
              className="px-6 py-2.5 rounded-full font-medium bg-gradient-to-r from-primary to-accent 
                text-secondary hover:opacity-90 transition-opacity"
            >
              Donate
            </Link>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="ml-4 p-2 rounded-full hover:bg-primary/10 transition-colors"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-primary" />
              ) : (
                <Menu className="h-6 w-6 text-primary" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden bg-secondary rounded-xl shadow-xl mb-4"
            >
              <div className="py-4">
                {navItems.map((item) => (
                  <div key={item.name} className="relative">
                    {item.subItems ? (
                      <button
                        onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                        className="w-full flex items-center justify-between px-6 py-3 text-text 
                          hover:text-primary hover:bg-primary/5 transition-colors"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={cn(
                          "w-4 h-4 transition-transform",
                          mobileResourcesOpen && "rotate-180"
                        )} />
                      </button>
                    ) : (
                      <Link
                        href={item.link}
                        onClick={() => setIsOpen(false)}
                        className="block px-6 py-3 text-text hover:text-primary hover:bg-primary/5 transition-colors"
                      >
                        {item.name}
                      </Link>
                    )}
                    
                    {item.subItems && mobileResourcesOpen && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="bg-secondary/50"
                      >
                        {item.subItems.map((subItem) => (
                          <div key={subItem.name}>
                            {subItem.items ? (
                              <>
                                <div className="px-8 py-2 text-text-muted font-medium">
                                  {subItem.name}
                                </div>
                                <div className="space-y-1">
                                  {subItem.items.map((subSubItem) => (
                                    <Link
                                      key={subSubItem.name}
                                      href={subSubItem.link}
                                      onClick={() => setIsOpen(false)}
                                      className="block px-12 py-2 text-text hover:text-primary 
                                        hover:bg-primary/5 transition-colors"
                                    >
                                      {subSubItem.name}
                                    </Link>
                                  ))}
                                </div>
                              </>
                            ) : (
                              <Link
                                href={subItem.link}
                                onClick={() => setIsOpen(false)}
                                className="block px-8 py-2 text-text hover:text-primary 
                                  hover:bg-primary/5 transition-colors"
                              >
                                {subItem.name}
                              </Link>
                            )}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
