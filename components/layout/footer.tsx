"use client"
import Link from 'next/link'
import { motion } from 'framer-motion'

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
    <footer className="bg-gradient-to-br from-secondary-dark to-secondary-dark text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <img
                src="images/logo/logo.png"  // Update with your actual logo path
                alt="Vikasalaya Foundation Logo"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-6 text-primary-dark">Contact Us</h3>
            <div className="space-y-3 text-gray-300">
              <p>Email: vikasalaya@gmail.com</p>
              <p>Phone: 7204453790; 8088212774</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-primary-dark">Our Locations</h3>
            <div className="space-y-3 text-gray-300">
              <p>Pradhan Khanta, Baliapur, Dhanbad</p>
              <p>Ohana 857, KR Puram, Bangalore, 560049</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-primary-dark">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.path}
                    className="text-gray-300 hover:text-primary-dark transition-colors"
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
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-primary-dark">Follow Us</h3>
            <div className="flex space-x-6">
              {[
                { name: 'Instagram', url: 'https://www.instagram.com/vikasalaya/' },
                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/vikasalaya-foundation-253323258' },
                { name: 'Facebook', url: 'https://www.facebook.com/people/Vikasalaya-Vikasalaya/100087451647205/' }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary-dark transition-colors"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Vikasalaya Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
