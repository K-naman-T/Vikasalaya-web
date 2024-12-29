import { useState, useEffect } from 'react'

export function useGalleryImages(folders: string[] = []) {
  const [allImages, setAllImages] = useState<string[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadImages = async () => {
      try {
        setIsLoading(true)
        setError(null)
        
        const imagePromises = folders.map(async (folder) => {
          const response = await fetch(`/api/images?folder=${encodeURIComponent(folder)}`)
          if (!response.ok) {
            throw new Error(`Failed to load images from ${folder}`)
          }
          const data = await response.json()
          return data.images || []
        })

        const results = await Promise.all(imagePromises)
        const combinedImages = results.flat()
        
        if (combinedImages.length === 0) {
          setError('No images found in the specified folders')
        }        
        setAllImages(combinedImages)
      } catch (error) {
        console.error('Error loading images:', error)
        setError('Failed to load images')
      } finally {
        setIsLoading(false)
      }
    }

    if (folders.length > 0) {
      loadImages()
    }
  }, [folders])

  return {
    currentImage: allImages[currentIndex],
    allImages,
    totalImages: allImages.length,
    currentIndex,
    isLoading,
    error,
    nextImage: () => setCurrentIndex((prev) => (prev + 1) % allImages.length),
    previousImage: () => setCurrentIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1))
  }
} 