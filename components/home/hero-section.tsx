'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import WordRotate from '@/components/ui/word-rotate'

const backgroundImages = [
  '/images/hero1.jpg',
  '/images/hero2.jpg',
  '/images/hero3.jpg',
]

const translations = [
  'Vikasalaya', // English
  'विकासालया', // Hindi
  'বিকাশালয়', // Bengali
  'விகாசாலயா', // Tamil
  'వికాసాలయ', // Telugu
  'ବିକାଶାଳୟ', // Odia
  'വികസാലയ', // Malayalam
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
    <section className="relative min-h-screen">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800">
        <Image
          src="/images/hero1.jpg"
          alt="Hero background"
          fill
          className="object-cover mix-blend-overlay"
          priority
        />
      </div>

      <div className="container mx-auto px-4 h-full relative z-10">
        <div className="flex flex-col justify-center h-screen max-w-4xl">
          <WordRotate
            words={translations}
            duration={3000}
            className="font-playfair text-7xl md:text-8xl lg:text-9xl font-bold mb-2 text-white"
          />
          
          <motion.span 
            className="text-7xl md:text-8xl lg:text-9xl font-bold mb-8 text-primary"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Foundation
          </motion.span>

          <motion.p 
            className="text-xl md:text-2xl mb-12 text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Vikasalaya Foundation is dedicated to holistic development with a strong focus on mental health, child welfare, and women's empowerment. Our initiatives aim to break down societal barriers, empower individuals, and inspire positive change, building a brighter future for communities across India.
          </motion.p>

          <motion.div 
            className="flex gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button className="text-lg px-8 py-4 bg-primary text-secondary-dark hover:bg-primary-dark transition-all duration-300">
              <Link href="/donate">Donate Now</Link>
            </Button>
            <Button className="text-lg px-8 py-4 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-secondary-dark transition-all duration-300">
              <Link href="#get-involved">Get Involved</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 