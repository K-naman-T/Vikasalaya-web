'use client'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import WordRotate from '@/components/ui/word-rotate'

const backgroundImages = [
  'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1920',
  'https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1920',
  'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=1920',
  'https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1920',
  'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1920'
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
      {/* Consistent dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Background images with fade transition */}
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
          <WordRotate
            words={translations}
            duration={3000}
            className="font-playfair text-7xl md:text-8xl lg:text-9xl font-bold mb-2 text-white drop-shadow-lg"
          />
          
          <motion.span 
            className="text-7xl md:text-8xl lg:text-9xl font-bold mb-8 text-primary drop-shadow-lg"
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
              text-white hover:bg-white hover:text-secondary-dark transition-all duration-300 
              shadow-lg hover:shadow-xl">
              <Link href="#get-involved">Get Involved</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 