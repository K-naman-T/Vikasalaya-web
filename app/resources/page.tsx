"use client"

import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import YouTube from 'react-youtube'
import { FacebookEmbed } from 'react-social-media-embed'
import { ArrowRight, FileText, Video, Share2, Download, ChevronLeft, ChevronRight } from 'lucide-react'
import { PageHero } from '@/components/ui/page-hero'
import { useSearchParams } from 'next/navigation'
import { useState, useEffect } from "react"
import Image from 'next/image'

// Types
interface Resource {
  title: string
  description: string
  url?: string
  date?: string
  type?: 'video' | 'article' | 'report' | 'publication' | 'facebook' | 'gallery'
  folders?: string[]
}

const resources: { [key: string]: Resource[] } = {
  media: [
    {
      title: "Community Impact Video",
      description: "Experience the transformative impact of our initiatives through this comprehensive video showcase. Watch how our programs are making a real difference in communities across India.",
      url: "wCHqad7nD84",
      type: "video"
    },
    {
      title: "Oxygen Concentrator Donation",
      description: "We donated oxygen concentrators to hospitals in need across India. This is a video showcasing the donation process and the impact it is having on communities.",
      url: "https://fb.watch/lmDKI9o-G4/?mibextid=RUbZ1f",
      type: "facebook"
    },
    {
      title: "Vikasalaya Gallery",
      description: "Explore our visual journey through various initiatives and programs that showcase our impact across communities.",
      type: "gallery",
      folders: [
        'images/Wayanad',
        'images/mental-health',
        'images/after-school',
        'images/play-n-learn',
        'images/aanganwadi-bangalore',
        'images/menstrual-hygiene',
        'images/oxygen-donation',
        'images/kashmir'
      ],
    }
  ],
  reports: [
    {
      title: "Mental Health Awareness for Defense Personnel",
      description: "A comprehensive guide on mental health awareness and support strategies for defense personnel and their families. This report includes detailed findings and recommendations.",
      url: "/reports/Nagpur Activity Report.pdf",
      type: "report",
      date: "2024-03-20"
    },
    {
      title: "Annual Impact Report 2023",
      description: "Explore our comprehensive annual report detailing the impact of our initiatives across mental health, child development, and disaster response programs.",
      url: "#",
      type: "report",
      date: "2024-01-15"
    },
    {
      title: "Community Development Impact Assessment",
      description: "In-depth analysis of our program outcomes and their impact on community development and empowerment.",
      url: "#",
      type: "report",
      date: "2023-12-20"
    }
  ],
  publications: [
    {
      title: "Sustainable Community Development",
      description: "Research paper examining effective strategies for sustainable community development and empowerment initiatives.",
      url: "#",
      type: "publication",
      date: "2024-02-01"
    },
    {
      title: "Mental Health Support Framework",
      description: "Comprehensive overview of our mental health programs, methodologies, and their measured impact on communities.",
      url: "#",
      type: "publication",
      date: "2024-01-10"
    }
  ]
}

// Function to combine all images from different folders
const useGalleryImages = (folders: string[] = []) => {
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
    totalImages: allImages.length,
    currentIndex,
    isLoading,
    error,
    nextImage: () => setCurrentIndex((prev) => (prev + 1) % allImages.length),
    previousImage: () => setCurrentIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1))
  }
}

export default function ResourcesPage() {
  const searchParams = useSearchParams()
  const tabParam = searchParams.get('tab')
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  
  // Set default tab value based on URL parameter
  const defaultTab = tabParam && ['media', 'reports', 'publications'].includes(tabParam) 
    ? tabParam 
    : 'media'

  return (
    <div className="min-h-screen bg-gradient-natural">
      <PageHero
        title="Resources"
        description="Explore our collection of media, reports, and publications showcasing our work and impact."
      />

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          <Tabs defaultValue={defaultTab} className="space-y-12">
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-3 p-1 bg-secondary rounded-full">
              <TabsTrigger 
                value="media" 
                className="rounded-full data-[state=active]:bg-gradient-to-r from-primary to-accent"
              >
                <Video className="w-4 h-4 mr-2" />
                Media
              </TabsTrigger>
              <TabsTrigger 
                value="reports"
                className="rounded-full data-[state=active]:bg-gradient-to-r from-primary to-accent"
              >
                <FileText className="w-4 h-4 mr-2" />
                Reports
              </TabsTrigger>
              <TabsTrigger 
                value="publications"
                className="rounded-full data-[state=active]:bg-gradient-to-r from-primary to-accent"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Publications
              </TabsTrigger>
            </TabsList>

            <TabsContent value="media">
              <div className="space-y-8">
                {resources.media.map((resource, index) => (
                  <motion.div 
                    key={resource.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-secondary rounded-2xl shadow-xl overflow-hidden"
                  >
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-text mb-4">{resource.title}</h3>
                      <p className="text-text-muted mb-6">{resource.description}</p>
                    </div>
                    <div className={`${resource.type === 'gallery' ? 'p-8 pt-0' : 'aspect-video'} w-full`}>
                      {resource.type === 'video' ? (
                        <YouTube
                          videoId={resource.url}
                          className="w-full h-full"
                          opts={{
                            width: '100%',
                            height: '100%',
                            playerVars: { autoplay: 0 },
                          }}
                        />
                      ) : resource.type === 'facebook' ? (
                        <div className="w-full h-full relative" style={{ paddingTop: '56.25%' }}>
                          <div className="absolute top-0 left-0 right-0 bottom-0">
                            <FacebookEmbed 
                              url={resource.url || ''}
                              width="100%"
                              height="100%"
                              style={{ border: 'none', overflow: 'hidden', width: '100%', height: '100%' }}
                            />
                          </div>
                        </div>
                      ) : resource.type === 'gallery' && resource.folders ? (
                        <GalleryView folders={resource.folders} />
                      ) : null}
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="reports">
              <div className="grid md:grid-cols-2 gap-8">
                {resources.reports.map((resource, index) => (
                  <ResourceCard key={resource.title} resource={resource} index={index} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="publications">
              <div className="grid md:grid-cols-2 gap-8">
                {resources.publications.map((resource, index) => (
                  <ResourceCard key={resource.title} resource={resource} index={index} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  )
}

function ResourceCard({ resource, index = 0 }: { resource: Resource; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-secondary rounded-2xl shadow-xl hover:shadow-2xl 
        transition-all duration-500 hover:-translate-y-1 overflow-hidden"
    >
      <div className={`h-1 bg-gradient-to-r ${
        index % 2 === 0 
          ? 'from-primary via-primary-light to-accent' 
          : 'from-accent via-accent-light to-primary-light'
      }`} />
      <div className="p-8">
        <h3 className="text-2xl font-bold text-text mb-2">{resource.title}</h3>
        {resource.date && (
          <p className="text-sm text-primary mb-3">{resource.date}</p>
        )}
        <p className="text-text-muted mb-6 leading-relaxed">{resource.description}</p>
        <a
          href={resource.url}
          className={`inline-flex items-center px-6 py-3 rounded-full text-secondary 
            bg-gradient-to-r ${
              index % 2 === 0 
                ? 'from-primary to-accent' 
                : 'from-accent to-primary-light'
            } hover:opacity-90 transition-opacity`}
        >
          {resource.type === 'report' ? (
            <>
              <Download className="w-4 h-4 mr-2" />
              Download Report
            </>
          ) : (
            <>
              Read More
              <ArrowRight className="ml-2 w-4 h-4" />
            </>
          )}
        </a>
      </div>
    </motion.div>
  )
}

// New GalleryView component
function GalleryView({ folders }: { folders: string[] }) {
  const {
    currentImage,
    totalImages,
    currentIndex,
    isLoading,
    error,
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
    <div className="relative aspect-video w-full">
      <div className="absolute inset-0 rounded-lg overflow-hidden">
        <Image
          src={currentImage}
          alt={`Gallery image ${currentIndex + 1}`}
          fill
          className="object-contain"
          priority
        />
      </div>
      
      {/* Navigation buttons */}
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={previousImage}
          className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextImage}
          className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Image counter */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/50 text-white rounded-full text-sm">
        {currentIndex + 1} / {totalImages}
      </div>
    </div>
  )
}