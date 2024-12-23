"use client"
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Instagram, Facebook } from 'lucide-react'

export function Footer() {
  const quickLinks = [
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Get Involved', path: '/get-involved' },
    { name: 'Resources', path: '/resources' },
    { name: 'Events', path: '/events' },
    { name: 'Contact', path: '/contact' },
    { name: 'Donate', path: '/donate' }
  ]

  return (
    <footer className="bg-gradient-to-br from-secondary-dark via-secondary to-secondary/80 text-text py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <img
                src="/images/logo/logo.png"
                alt="Vikasalaya Foundation Logo"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-6 text-primary">Contact Us</h3>
            <div className="space-y-3 text-text-muted">
              <p>Email: vikasalaya@gmail.com</p>
              <p>Phone: 7204453790; 8088212774</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-primary">Our Locations</h3>
            <ul className="space-y-3 text-text-muted">
              <li>Jharkhand - Baliapur, Dhanbad</li>
              <li>Rajasthan - Udaipur & Jaipur</li>
              <li>Karnataka - Bangalore</li>
              <li>Uttar Pradesh - Bareilly</li>
              <li>Kerala - Wayanad</li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-primary">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.path}
                    className="text-text-muted hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-primary">Follow Us</h3>
            <div className="flex space-x-4">
              <Link 
                href="https://www.instagram.com/vikasalaya/"
                className="w-10 h-10 rounded-full bg-text-muted/10 flex items-center justify-center hover:bg-primary/10 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-text-muted hover:text-primary transition-colors duration-200" />
              </Link>
              <Link 
                href="https://www.facebook.com/vikasalaya"
                className="w-10 h-10 rounded-full bg-text-muted/10 flex items-center justify-center hover:bg-primary/10 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-text-muted hover:text-primary transition-colors duration-200" />
              </Link>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-primary/10 text-center text-text-muted">
          <p>© 2024 Vikasalaya Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
