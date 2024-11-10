'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Brain, GraduationCap, Users } from 'lucide-react'

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
      icon: Brain,
      gradient: "from-yellow-100 via-yellow-50 to-white",
      borderColor: "border-yellow-200"
    },
    {
      title: "Child Development",
      description: "Supporting the Next Generation's Journey. Our holistic child development initiatives nurture children from their primary years all the way to their career paths.",
      icon: GraduationCap,
      gradient: "from-orange-100 via-orange-50 to-white",
      borderColor: "border-orange-200"
    },
    {
      title: "Women's Empowerment",
      description: "Enabling Women to Lead and Thrive. We provide essential training and resources that empower women economically and socially.",
      icon: Users,
      gradient: "from-rose-100 via-rose-50 to-white",
      borderColor: "border-rose-200"
    },
  ]

  return (
    <section className="py-24 flex-grow relative overflow-hidden">
      {/* Background decoration */}
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
                className={`h-full border-2 transition-all duration-300 cursor-pointer bg-gradient-to-b ${area.gradient} ${area.borderColor} 
                  ${activeArea === index ? 'ring-2 ring-yellow-400 shadow-lg scale-105' : 'hover:shadow-md hover:scale-102'}`}
                onClick={() => setActiveArea(index)}
              >
                <div className="p-6">
                  <div className="mb-6 flex items-center justify-center">
                    <div className="p-3 rounded-full bg-yellow-100">
                      {/* Using the Lucide icon directly */}
                      <area.icon className="w-8 h-8 text-yellow-600" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 text-center">{area.title}</h3>
                  
                  <AnimatePresence mode="wait">
                    {activeArea === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <p className="text-gray-600 text-center leading-relaxed">
                          {area.description}
                        </p>
                      </motion.div>
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