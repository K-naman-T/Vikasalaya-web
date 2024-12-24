'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, memo } from 'react'
import { GradientButton } from '@/components/ui/gradient-button'
import { OutlineButton } from '@/components/ui/outline-button'
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

export const HeroSection = memo(function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0)
  const [loadedImages, setLoadedImages] = useState([0, 1])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const loadRemainingImages = () => {
      const remainingImages = Array.from(Array(backgroundImages.length).keys())
        .filter(i => !loadedImages.includes(i))
      setLoadedImages([...loadedImages, ...remainingImages])
    }
    const timer = setTimeout(loadRemainingImages, 3000)
    return () => clearTimeout(timer)
  }, [loadedImages])

  return (
    <section className="relative min-h-screen">
      <div className="absolute inset-0 bg-black/50 z-10" />

      {backgroundImages.map((image, index) => (
        loadedImages.includes(index) && (
          <div key={image} className={`absolute inset-0 ${
            currentImage === index ? 'opacity-100' : 'opacity-0'
          }`}>
            <Image
              src={image}
              alt={`Hero background ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
              loading={index <= 1 ? "eager" : "lazy"}
            />
          </div>
        )
      ))}

      <div className="container mx-auto px-4 h-full relative z-20">
        <div className="flex flex-col justify-center h-screen max-w-4xl">
          <div className="min-h-[100px] md:min-h-[140px] lg:min-h-[180px] flex items-end">
            <WordRotate
              words={translations}
              duration={3000}
              className="font-playfair text-6xl md:text-7xl lg:text-8xl font-bold
                bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF8C00] 
                bg-clip-text text-transparent drop-shadow-lg
                leading-[1] tracking-normal"
            />
          </div>
          
          <motion.span 
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-4 
              text-gradient-gold leading-[1]"
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
            <GradientButton>
              <Link href="/donate" className="relative z-10 flex items-center gap-2 sm:gap-3">
                <span className="whitespace-nowrap text-sm sm:text-base md:text-lg">Donate Now</span>
                <span className="relative flex h-2 w-2 sm:h-3 sm:w-3">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-secondary/60 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 sm:h-3 sm:w-3 bg-secondary/90"></span>
                </span>
              </Link>
            </GradientButton>
            
            <OutlineButton>
              <Link href="#get-involved">Get Involved</Link>
            </OutlineButton>
          </motion.div>
        </div>
      </div>
    </section>
  )
}) 