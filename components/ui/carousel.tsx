'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

interface CarouselProps {
  images?: string[]
  folder?: string
  imagePath?: string
  onImageClick?: (image: string) => void
}

export function Carousel({ images: propImages, folder, imagePath, onImageClick }: CarouselProps) {
  const [images, setImages] = useState<string[]>(propImages || [])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(!!folder)

  useEffect(() => {
    if (images.length > 1) {
      const nextIndex = (currentIndex + 1) % images.length
      const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1
      
      // Preload next and previous images using HTMLImageElement
      const preloadNext = document.createElement('img')
      preloadNext.src = images[nextIndex]
      const preloadPrev = document.createElement('img')
      preloadPrev.src = images[prevIndex]
    }
  }, [currentIndex, images])

  useEffect(() => {
    if (folder) {
      const loadImages = async () => {
        try {
          const response = await fetch(`/api/images?folder=${encodeURIComponent(folder)}`)
          const data = await response.json()
          setImages(data.images)
        } catch (error) {
          console.error('Error loading images:', error)
        } finally {
          setIsLoading(false)
        }
      }
      loadImages()
    } else if (imagePath) {
      setImages([imagePath])
      setIsLoading(false)
    }
  }, [folder, imagePath])

  if (isLoading) {
    return (
      <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100 animate-pulse" />
    )
  }

  if (images.length === 0) {
    return null
  }

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="relative aspect-video rounded-lg overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative w-full h-full cursor-pointer"
          onClick={() => onImageClick?.(images[currentIndex])}
        >
          <Image
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={currentIndex === 0}
            loading="eager"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation()
              handlePrevious()
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full 
              bg-black/20 hover:bg-black/40 transition-colors flex items-center justify-center
              text-white backdrop-blur-sm"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              handleNext()
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full 
              bg-black/20 hover:bg-black/40 transition-colors flex items-center justify-center
              text-white backdrop-blur-sm"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation()
                  setCurrentIndex(idx)
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentIndex 
                    ? 'bg-white w-4' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}