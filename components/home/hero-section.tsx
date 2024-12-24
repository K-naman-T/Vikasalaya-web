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
  const [loadedImages, setLoadedImages] = useState([0])

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadedImages([0, 1, 2, 3, 4])
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const animationConfig = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.3 }
  }

  return (
    <section className="relative min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-b 
        from-black/80 via-black/50 to-black/80 z-10" />

      {loadedImages.includes(currentImage) && (
        <Image
          src={backgroundImages[currentImage]}
          alt={`Hero background ${currentImage + 1}`}
          fill
          className="object-cover"
          priority={true}
          loading="eager"
        />
      )}

      <div className="container mx-auto px-4 h-full relative z-20">
        <div className="flex flex-col justify-center h-screen">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <WordRotate
                words={translations}
                duration={3000}
                className="font-playfair 
                  text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
                  font-bold
                  bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF8C00] 
                  bg-clip-text text-transparent
                  drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]
                  leading-[1.2]
                  py-2"
              />
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <span className="font-playfair 
                  text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
                  font-bold
                  bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF8C00] 
                  bg-clip-text text-transparent
                  drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]
                  leading-[1.2]
                  block
                  py-2"
                >
                  Foundation
                </span>
              </motion.div>
            </div>
          </div>
          
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl mb-12 text-white/90 font-medium
              tracking-wide leading-relaxed max-w-3xl
              drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Vikasalaya Foundation is dedicated to holistic development with a strong focus on mental health, 
            child welfare, and women's empowerment. Our initiatives aim to break down societal barriers, 
            empower individuals, and inspire positive change, building a brighter future for communities across India.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <GradientButton>
              <Link 
                href="/donate" 
                className="relative z-10 flex items-center justify-center gap-2 sm:gap-3 w-full"
              >
                <span className="whitespace-nowrap text-sm sm:text-base md:text-lg">
                  Donate Now
                </span>
                <span className="relative flex h-2 w-2 sm:h-3 sm:w-3">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-secondary/60 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
                  <span className="relative inline-flex rounded-full h-2 w-2 sm:h-3 sm:w-3 bg-secondary/90" />
                </span>
              </Link>
            </GradientButton>
            
            <OutlineButton>
              <Link 
                href="#get-involved" 
                className="relative z-10 flex items-center justify-center gap-2 sm:gap-3 w-full"
              >
                <span className="whitespace-nowrap text-sm sm:text-base md:text-lg">
                  Get Involved
                </span>
              </Link>
            </OutlineButton>
          </motion.div>
        </div>
      </div>
    </section>
  )
}) 