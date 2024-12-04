'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Users, Gift } from 'lucide-react'

export function GetInvolvedSection() {
  const ways = [
    {
      title: "Donate",
      description: "Support our programs with your contribution.",
      icon: Users,
      iconColor: "text-yellow-500",
    },
    {
      title: "Volunteer",
      description: "Join our community of dedicated volunteers.",
      icon: Users,
      iconColor: "text-yellow-500",
    },
    {
      title: "Career",
      description: "Join our team and make a difference.",
      icon: Gift,
      iconColor: "text-yellow-500",
    },
  ]

  return (
    <section id="get-involved" className="py-24 relative overflow-hidden bg-gray-50">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-gray-900">
            Get Involved
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join us in our mission to create lasting change.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 gap-3 md:gap-8">
          {ways.map((way, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group text-center hover:transform hover:scale-105 transition-all duration-300"
            >
              <way.icon className={`w-8 h-8 md:w-12 md:h-12 ${way.iconColor} mx-auto mb-3 md:mb-4`} />
              <h3 className="text-base md:text-2xl font-playfair font-bold mb-2 md:mb-4 text-gray-900">
                {way.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600 hidden md:block">
                {way.description}
              </p>
              <p className="text-xs text-gray-600 md:hidden">
                {way.description.split('.')[0]}.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 