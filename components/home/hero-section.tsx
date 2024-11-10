'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

const backgroundImages = [
  '/images/hero1.jpg',
  '/images/hero2.jpg',
  '/images/hero3.jpg',
]

export function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Images */}
      {backgroundImages.map((image, index) => (
        <motion.div
          key={image}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: currentImage === index ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={image}
            alt={`Slide ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/50" /> {/* Overlay */}
        </motion.div>
      ))}


      {/* Content */}
      <div className="container mx-auto px-4 h-full relative z-20 flex flex-col justify-center">
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Vikasalaya Foundation
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl mb-12 max-w-4xl text-white/90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Vikasalaya Foundation is dedicated to holistic development with a strong focus on mental health, child welfare, and women's empowerment. Our initiatives aim to break down societal barriers, empower individuals, and inspire positive change, building a brighter future for communities across India.
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button className="text-lg px-8 py-4 bg-white text-yellow-500 hover:bg-gray-100">
            <Link href="/donate">Donate</Link>
          </Button>
          <Button className="text-lg px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-yellow-500">
            <Link href="/get-involved">Get Involved</Link>
          </Button>
        </motion.div>

        {/* Image Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                currentImage === index ? 'bg-white scale-125' : 'bg-white/50'
              }`}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
} 