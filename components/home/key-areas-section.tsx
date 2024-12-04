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
    },
  ]

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4A154B05_1px,transparent_1px),linear-gradient(to_bottom,#4A154B05_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      <div className="container mx-auto px-4 relative">
        <motion.h2 
          className="text-4xl md:text-5xl font-playfair font-bold text-center mb-16 text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Key Focus Areas
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative h-[300px] overflow-hidden rounded-2xl"
            >
              <Image
                src={area.image}
                alt={area.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              
              <div className="absolute inset-0 p-4 flex flex-col justify-end text-white">
                <h3 className="text-xl font-playfair font-bold mb-2">{area.title}</h3>
                <p className="text-white/90 mb-2 line-clamp-2">{area.description}</p>
                <div className="font-montserrat font-semibold text-yellow-400 text-sm">
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