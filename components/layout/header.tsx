"use client"
import Link from 'next/link'
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { Menu, X, ChevronDown } from "lucide-react"

type SubItem = {
  name: string
  link: string
  items?: SubItem[]
}

type NavItem = {
  name: string
  link: string
  subItems?: SubItem[]
}

const navItems: NavItem[] = [
  { name: 'Home', link: '/' },
  { 
    name: 'About Us', 
    link: '/about',
    subItems: [
      { name: 'Our Mission', link: '/about#mission' },
      { name: 'Our Vision', link: '/about#vision' },
      { name: 'Our Core Values', link: '/about#core-values' },
      { name: 'Our Team', link: '/about#team' },
    ]
  },
  { 
    name: 'Programs', 
    link: '/programs',
    subItems: [
      { name: 'Mental Wellness and Counseling', link: '/programs?program=1' },
      { name: 'Child Development & Education', link: '/programs?program=2' },
      { name: 'Women Empowerment', link: '/programs?program=3' },
      { name: 'Disaster Response', link: '/programs?program=4' },
      { name: 'Livelihood Empowerment', link: '/programs?program=0' },
    ]
  },
  { 
    name: 'Get Involved', 
    link: '/get-involved',
    subItems: [
      { name: 'Volunteer', link: '/get-involved?section=0' },
      { name: 'Fundraiser', link: '/get-involved?section=1' },
      { name: 'Careers', link: '/get-involved?section=2' },
    ]
  },
  { 
    name: 'Resources', 
    link: '/resources',
    subItems: [
      { name: 'Media', link: '/resources?tab=media' },
      { name: 'Reports', link: '/resources?tab=reports' },
      { name: 'Publications', link: '/resources?tab=publications' }
    ]
  },
  { name: 'Events', link: '/events' },
  { name: 'Contact', link: '/contact' }
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null)
  const dropdownTimeoutRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMouseEnter = (itemName: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
    }
    setOpenDropdown(itemName)
  }

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null)
    }, 100)
  }

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
                className="relative"
                onMouseEnter={() => item.subItems && handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex items-center gap-1">
                  <Link
                    href={item.link}
                    className="text-sm font-medium text-text hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                  {item.subItems && (
                    <ChevronDown className={cn(
                      "w-4 h-4 transition-transform",
                      openDropdown === item.name && "rotate-180"
                    )} />
                  )}
                </div>
                
                <AnimatePresence>
                  {item.subItems && openDropdown === item.name && (
                    <motion.div 
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-1 w-48 bg-secondary rounded-xl shadow-xl overflow-hidden"
                      onMouseEnter={() => handleMouseEnter(item.name)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="py-2">
                        {item.subItems.map((subItem) => (
                          <Link 
                            key={subItem.name}
                            href={subItem.link}
                            className="block px-4 py-2 text-text hover:bg-primary/10 hover:text-primary transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            <Link 
              href="/donate" 
              className="px-6 py-2.5 relative group overflow-hidden
                bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%]
                rounded-full font-medium text-secondary transition-all duration-500 
                hover:bg-[100%_0] shadow-[0_0_15px_rgba(255,122,0,0.3)] 
                hover:shadow-[0_0_20px_rgba(255,122,0,0.5)]
                scale-100 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                Donate
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                </span>
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <Link 
              href="/donate" 
              className="px-4 py-2 text-sm relative group overflow-hidden
                bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%]
                rounded-full font-medium text-secondary transition-all duration-500 
                hover:bg-[100%_0] shadow-[0_0_15px_rgba(255,122,0,0.3)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Donate
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                </span>
              </span>
            </Link>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="ml-2 p-2 rounded-full hover:bg-primary/10 transition-colors"
            >
              {isOpen ? (
                <X className="h-8 w-8 text-primary" />
              ) : (
                <Menu className="h-8 w-8 text-primary" />
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
                        onClick={() => setMobileOpenDropdown(mobileOpenDropdown === item.name ? null : item.name)}
                        className="w-full flex items-center justify-between px-6 py-3 text-text 
                          hover:text-primary hover:bg-primary/5 transition-colors"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={cn(
                          "w-4 h-4 transition-transform",
                          mobileOpenDropdown === item.name && "rotate-180"
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
                    
                    {item.subItems && mobileOpenDropdown === item.name && (
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
