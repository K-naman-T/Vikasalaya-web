"use client"

import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { useGalleryImages } from '../hooks/useGalleryImages'
import { motion, AnimatePresence } from 'framer-motion'

interface GalleryViewProps {
  folders: string[]
}

export function GalleryView({ folders }: GalleryViewProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const {
    currentImage,
    totalImages,
    currentIndex,
    isLoading,
    nextImage,
    previousImage
  } = useGalleryImages(folders)

  if (isLoading) {
    return (
      <div className="aspect-video w-full bg-gray-100 animate-pulse rounded-lg" />
    )
  }

  if (!currentImage) {
    return (
      <div className="aspect-video w-full flex items-center justify-center bg-gray-100 rounded-lg">
        <p className="text-text-muted">No images available</p>
      </div>
    )
  }

  return (
    <>
      <div className="relative aspect-video w-full group">
        <div className="absolute inset-0 rounded-lg overflow-hidden">
          <Image
            src={currentImage}
            alt={`Gallery image ${currentIndex + 1}`}
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Navigation buttons */}
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            onClick={(e) => {
              e.stopPropagation()
              previousImage()
            }}
            className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              nextImage()
            }}
            className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <button
          onClick={() => setSelectedImage(currentImage)}
          className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white 
            opacity-0 group-hover:opacity-100 hover:bg-black/70 transition-all"
          aria-label="View fullscreen"
        >
          <Maximize2 className="w-5 h-5" />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/50 text-white rounded-full text-sm">
          {currentIndex + 1} / {totalImages}
        </div>
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 z-50 text-white p-2 hover:bg-white/10 rounded-full"
            onClick={(e) => {
              e.stopPropagation()
              setSelectedImage(null)
            }}
          >
            <X className="w-6 h-6" />
          </button>
          <div className="relative w-full h-full" onClick={e => e.stopPropagation()}>
            <Image
              src={currentImage}
              alt="Full screen image"
              fill
              className="object-contain"
              priority
            />

            {/* Fullscreen Navigation */}
            <div className="absolute inset-0 flex items-center justify-between p-4">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  previousImage()
                }}
                className="p-4 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  nextImage()
                }}
                className="p-4 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-3 bg-black/50 text-white rounded-full text-lg">
              {currentIndex + 1} / {totalImages}
            </div>
          </div>
        </div>
      )}
    </>
  )
} 