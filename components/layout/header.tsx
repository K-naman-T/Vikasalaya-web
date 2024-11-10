"use client"
import Link from 'next/link'
import Image from 'next/image'
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { useState } from "react"
import { Menu, X } from "lucide-react" // Make sure lucide-react is installed

const navItems = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Programs', link: '/programs' },
  { name: 'Resources', link: '/resources' },
  { name: 'Events', link: '/events' },
  { name: 'Contact', link: '/contact' }
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-md z-50 border-b border-gray-800"
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          <Link href="/" className="relative flex items-center">
            <div className="relative w-16 h-16 transform hover:scale-105 transition-transform">
              <Image
                src="/images/vikas-logo.jpg"
                alt="Vikasalaya Foundation Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className={cn(
                  "text-sm font-medium text-gray-300 hover:text-yellow-400 transition-colors relative group",
                  "after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0",
                  "after:bg-yellow-400 after:transition-all after:duration-300",
                  "hover:after:w-full"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link 
              href="/donate" 
              className="px-6 py-2.5 bg-gradient-to-r from-yellow-400 to-yellow-500 
                text-gray-900 font-medium rounded-full hover:shadow-lg hover:shadow-yellow-500/20 
                hover:-translate-y-0.5 transition-all duration-300"
            >
              Donate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-yellow-400 transition-colors"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
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
              <Link
                key={item.name}
                href={item.link}
                onClick={() => setIsOpen(false)}
                className="block text-gray-300 hover:text-yellow-400 transition-colors px-4 py-2"
              >
                {item.name}
              </Link>
            ))}
            <Link 
              href="/donate" 
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 bg-gradient-to-r from-yellow-400 to-yellow-500 
                text-gray-900 font-medium rounded-full hover:shadow-lg hover:shadow-yellow-500/20 
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
