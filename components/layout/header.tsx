"use client"
import Link from 'next/link'
import Image from 'next/image'
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react" // Import Menu and X for the hamburger icon

const navItems = [
  { name: 'Home', link: '/' },
  { name: 'About Us', link: '/about' },
  { name: 'Programs', link: '/programs' },
  { name: 'Resources', link: '/resources' },
  { name: 'Events', link: '/events' },
  { name: 'Contact', link: '/contact' }
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)

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
        isScrolled || isOpen ? "bg-secondary-dark backdrop-blur-md shadow-lg" : "bg-gray-700/70"
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          <Link href="/" className="relative flex items-center">
            <div className="relative w-16 h-16 transform hover:scale-105 transition-transform">
              <img
                src="images/logo/logo.png"  // Update with your actual logo path
                alt="Vikasalaya Foundation Logo"
                className="object-contain"
              />
            </div>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 relative">
            {navItems.map((item) => (
              <div 
                key={item.name} 
                className="relative group"
                onMouseEnter={() => item.name === 'Resources' && setIsResourcesOpen(true)}
                onMouseLeave={() => item.name === 'Resources' && setIsResourcesOpen(false)}
              >
                <Link
                  href={item.link}
                  className={cn(
                    "text-sm font-medium transition-colors relative group",
                    isScrolled ? "text-gray-200 hover:text-primary" : "text-white hover:text-primary",
                    "after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0",
                    "after:bg-current after:transition-all after:duration-300",
                    "hover:after:w-full"
                  )}
                >
                  {item.name}
                </Link>
                {item.name === 'Resources' && isResourcesOpen && (
                  <div 
                    className="absolute left-0 mt-1 w-48 bg-white rounded-md shadow-lg z-10"
                    onMouseEnter={() => setIsResourcesOpen(true)}
                    onMouseLeave={() => setIsResourcesOpen(false)}
                  >
                    <div className="py-2">
                      <div className="px-4 py-2 text-secondary-dark hover:bg-yellow-100 cursor-pointer">
                        Reports
                      </div>
                      <div className="ml-4 space-y-1">
                        <Link 
                          href="/resources#annual-report" 
                          className="block px-4 py-2 text-secondary-dark hover:bg-yellow-100"
                        >
                          Annual Report
                        </Link>
                        <Link 
                          href="/resources#activity-report" 
                          className="block px-4 py-2 text-secondary-dark hover:bg-yellow-100"
                        >
                          Activity Report
                        </Link>
                        <Link 
                          href="/resources#projects" 
                          className="block px-4 py-2 text-secondary-dark hover:bg-yellow-100"
                        >
                          Projects
                        </Link>
                      </div>
                      <Link 
                        href="/resources#publications" 
                        className="block px-4 py-2 text-secondary-dark hover:bg-yellow-100"
                      >
                        Publications
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link 
              href="/donate" 
              className={cn(
                "px-6 py-2.5 rounded-full font-medium transition-all duration-300",
                isScrolled
                  ? "bg-primary-dark text-secondary-dark hover:bg-primary-dark"
                  : "bg-primary text-secondary-dark hover:bg-yellow-300"
              )}
            >
              Donate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <Link 
              href="/donate" 
              className={cn(
                "px-6 py-2.5 rounded-full font-medium transition-all duration-300",
                isScrolled
                  ? "bg-primary-dark text-secondary-dark hover:bg-primary-dark"
                  : "bg-primary text-secondary-dark hover:bg-yellow-300"
              )}
            >
              Donate
            </Link>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="ml-4 text-gray-300 hover:text-primary transition-colors"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <motion.div
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: { opacity: 1, height: "auto" },
            closed: { opacity: 0, height: 0 }
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                <Link
                  href={item.link}
                  onClick={() => setIsOpen(false)}
                  className="flex-block text-gray-300 hover:text-primary transition-colors px-4 py-2 flex items-center"
                >
                  {item.name}
                </Link>
                {item.name === 'Resources' && isOpen && (
                  <div className="mt-2 ml-10">
                    <div className="block text-gray-300 hover:text-primary">Reports</div>
                    <div className="mt-2 ml-4">
                      <Link href="/resources#annual-report" className="block text-gray-300 hover:text-primary">Annual Report</Link>
                      <Link href="/resources#activity-report" className="block text-gray-300 hover:text-primary">Activity Report</Link>
                      <Link href="/resources#projects" className="block text-gray-300 hover:text-primary">Projects</Link>
                    </div>
                    <Link href="/resources#publications" className="block text-gray-300 hover:text-primary">Publications</Link>
                  </div>
                )}
              </div>
            ))}
            <Link 
              href="/donate" 
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 bg-gradient-to-r from-primary to-primary-dark 
                text-secondary-dark font-medium rounded-full hover:shadow-lg hover:shadow-primary-dark/20 
                transition-all duration-300 mx-4"
            >
              Donate
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.header>
  )
}
