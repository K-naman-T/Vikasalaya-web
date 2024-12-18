'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function KeyAreasSection() {
  const areas = [
    {
      title: "Mental Health",
      description: "Empowering Minds, Breaking Barriers. We're committed to reshaping how society perceives mental health by encouraging open, judgment-free conversations.",
      image: "/images/mental-health.jpg",
      stats: "2000+ Lives Impacted"
    },
    {
      title: "Child Development",
      description: "Supporting the Next Generation's Journey. Our holistic child development initiatives nurture children from their primary years all the way to their career paths.",
      image: "/images/child-development.jpeg",
      stats: "1500+ Children Supported"
    },
    {
      title: "Women's Empowerment",
      description: "Enabling Women to Lead and Thrive. We provide essential training and resources that empower women economically and socially.",
      image: "/images/women-empowerment.jpg",
      stats: "1000+ Women Empowered"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-white via-orange-50 to-green-50/40">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Key Focus Areas</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-800 to-green-800 mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering communities through targeted initiatives that create lasting impact
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
            >
              <div className={`h-2 bg-gradient-to-r ${
                index === 0 ? "from-orange-800 to-orange-700" :
                index === 1 ? "from-green-800 to-green-700" :
                "from-orange-800 to-green-800"
              }`} />
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={area.image}
                  alt={area.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{area.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{area.description}</p>
                <div className="text-sm font-semibold text-orange-800">
                  {area.stats}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 