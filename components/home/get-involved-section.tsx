'use client'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Users, Handshake, Heart, ArrowRight, X } from 'lucide-react'
import { useState, useCallback } from 'react'

export function GetInvolvedSection() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const ways = [
    {
      title: "Volunteer",
      description: "Join our team as a volunteer to work directly on our projects, from organizing workshops to assisting in community outreach programs.",
      icon: Users,
      gradient: "from-primary via-primary-light to-accent",
      action: "Get Started",
      link: "/get-involved?section=0" // Links to volunteer section
    },
    {
      title: "Partner",
      description: "Collaborate with us as an organization or institution to create larger impact through combined resources and expertise.",
      icon: Handshake,
      gradient: "from-accent via-accent-light to-primary-light",
      action: "Learn More",
      link: "/get-involved?section=1" // Links to partner section
    },
    {
      title: "Careers",
      description:"Join our organization as a professional to work directly with our projects, from organizing workshops to assisting in community outreach programs.",
      icon: Heart,
      gradient: "from-primary-dark via-primary to-accent-light",
      action: "Apply Now",
      link: "/get-involved?section=2" // Links to careers section
    }
  ]

  // Debounce state changes
  const debouncedSetActiveCard = useCallback(
    (index: number | null) => {
      const timer = setTimeout(() => {
        setActiveCard(index)
      }, 100)
      return () => clearTimeout(timer)
    },
    []
  )

  return (
    <section className="py-24 bg-gradient-natural relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">Get Involved</h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-6" />
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            Join us in our mission to create lasting change. Every contribution makes a difference.
          </p>
        </motion.div>

        {/* Icon Menu */}
        <div className="flex justify-center gap-8 md:gap-16 mb-8">
          {ways.map((way, index) => (
            <motion.button
              key={way.title}
              onClick={() => debouncedSetActiveCard(activeCard === index ? null : index)}
              className={`group relative ${activeCard === index ? 'scale-110' : ''}`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2, type: "tween" }}
            >
              <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${way.gradient} 
                p-[2px] transition-transform duration-300`}>
                <div className="w-full h-full rounded-full bg-secondary flex items-center justify-center">
                  <way.icon className={`w-8 h-8 ${activeCard === index ? 'text-primary' : 'text-text-muted'}`} />
                </div>
              </div>
              <motion.span 
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-sm font-medium text-text-muted whitespace-nowrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {way.title}
              </motion.span>
            </motion.button>
          ))}
        </div>

        {/* Expandable Card */}
        <AnimatePresence>
          {activeCard !== null && (
            <motion.div
              initial={{ opacity: 0, y: 20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: 20, height: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-2xl mx-auto"
            >
              <div className="bg-secondary rounded-2xl shadow-xl overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${ways[activeCard].gradient}`} />
                <div className="p-8">
                  <button 
                    onClick={() => setActiveCard(null)}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-primary/10 transition-colors"
                  >
                    <X className="w-5 h-5 text-primary" />
                  </button>
                  <h3 className="text-2xl font-bold text-text mb-4">{ways[activeCard].title}</h3>
                  <p className="text-text-muted leading-relaxed mb-6">{ways[activeCard].description}</p>
                  <Link 
                    href={ways[activeCard].link}
                    className={`inline-flex items-center px-6 py-3 rounded-full text-secondary 
                      bg-gradient-to-r ${ways[activeCard].gradient} hover:opacity-90 transition-opacity`}
                  >
                    {ways[activeCard].action}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
} 