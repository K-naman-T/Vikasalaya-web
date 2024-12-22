'use client'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import WordRotate from '@/components/ui/word-rotate'

const backgroundImages = [
  '/images/ration_wayanad.webp',
  '/images/vikasalaya.webp',
  '/images/vikasalaya1.webp',
  '/images/kashmir.webp',
  '/images/nagpur2.jpg'
]

const translations = [
  'Vikasalaya',
  'विकासालया',
  'বিকাশালয়',
  'விகாசாலயா',
  'వికాసాలయ',
  'ବିକାଶାଳୟ',
  'വികസാലയ',
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
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Background images remain the same */}
      {backgroundImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentImage === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image}
            alt={`Hero background ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      <div className="container mx-auto px-4 h-full relative z-20">
        <div className="flex flex-col justify-center h-screen max-w-4xl">
          <div className="min-h-[120px] md:min-h-[160px] lg:min-h-[200px] flex items-center">
            <WordRotate
              words={translations}
              duration={3000}
              className="font-playfair text-6xl md:text-7xl lg:text-8xl font-bold
                bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF8C00] 
                bg-clip-text text-transparent drop-shadow-lg
                leading-[1.6] tracking-normal"
            />
          </div>
          
          <motion.span 
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 
              text-gradient-gold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Foundation
          </motion.span>

          <motion.p 
            className="text-xl md:text-2xl mb-12 text-white font-medium tracking-wide leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Vikasalaya Foundation is dedicated to holistic development with a strong focus on mental health, 
            child welfare, and women's empowerment. Our initiatives aim to break down societal barriers, 
            empower individuals, and inspire positive change, building a brighter future for communities across India.
          </motion.p>

          <motion.div 
            className="flex gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button className="text-lg px-8 py-4 bg-primary hover:bg-primary-dark text-white 
              transition-all duration-300 shadow-lg hover:shadow-xl">
              <Link href="/donate">Donate Now</Link>
            </Button>
            <Button className="text-lg px-8 py-4 bg-transparent border-2 border-white 
              text-white hover:bg-white hover:text-primary-dark transition-all duration-300 
              shadow-lg hover:shadow-xl">
              <Link href="#get-involved">Get Involved</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 