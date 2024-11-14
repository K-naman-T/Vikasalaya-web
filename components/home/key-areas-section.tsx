'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import DotPattern from '@/components/ui/dot-pattern'

export function KeyAreasSection() {
  const [activeArea, setActiveArea] = useState<number | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveArea((prev) => (prev ?? 0) === 2 ? 0 : (prev ?? 0) + 1)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const areas = [
    {
      title: "Mental Health",
      description: "Empowering Minds, Breaking Barriers. We're committed to reshaping how society perceives mental health by encouraging open, judgment-free conversations.",
      image: "/images/mental-health.jpg"
    },
    {
      title: "Child Development",
      description: "Supporting the Next Generation's Journey. Our holistic child development initiatives nurture children from their primary years all the way to their career paths.",
      image: "/images/child-development.jpeg"
    },
    {
      title: "Women's Empowerment",
      description: "Enabling Women to Lead and Thrive. We provide essential training and resources that empower women economically and socially.",
      image: "/images/women-empowerment.jpg"
    },
  ]

  return (
    <section className="py-24 flex-grow relative overflow-hidden">
      <DotPattern className="absolute inset-0 h-full w-full" width={16} height={16} cr={2} />

      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,rgba(255,226,132,0.1),transparent)] -z-10" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Key Areas of Focus</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our initiatives focus on three primary areas where we believe we can make the most significant impact
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card 
                className="relative h-[400px] overflow-hidden border-0 shadow-lg cursor-pointer group"
                onClick={() => setActiveArea(index)}
              >
                <Image
                  src={area.image}
                  alt={area.title}
                  fill
                  className={`object-cover transition-all duration-500
                    ${activeArea === index ? 'scale-110 blur-sm' : 'group-hover:scale-105'}`}
                />
                
                {/* Base gradient overlay - always visible */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80" />
                
                {/* Additional overlay for active state */}
                <div className={`absolute inset-0 bg-black/50 transition-opacity duration-500
                  ${activeArea === index ? 'opacity-60' : 'opacity-0'}`} 
                />
                
                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-sm">
                    {area.title}
                  </h3>
                  
                  <AnimatePresence>
                    {activeArea === index && (
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                        className="text-white/90 leading-relaxed drop-shadow-sm"
                      >
                        {area.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 