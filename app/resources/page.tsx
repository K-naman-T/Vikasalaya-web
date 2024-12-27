"use client"

import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import YouTube from 'react-youtube'
import { FacebookEmbed } from 'react-social-media-embed'
import { ArrowRight, FileText, Video, Share2, Download, ChevronLeft, ChevronRight, Mail, Shield } from 'lucide-react'
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
  type?: 'video' | 'article' | 'report' | 'publication' | 'facebook' | 'gallery' | 'newsletter' | 'policy'
  category?: string
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
      type: "report"
    },
    {
      title: "Annual Report 2022-2023",
      description: "A detailed annual report covering Vikasalaya Foundation's activities, achievements, and impact over the period of 2022-2023.",
      url: "/reports/ANNUAL REPORT 2022-2023.pdf",
      type: "report"
    },
    {
      title: "Annual Report 2023-2024",
      description: "A detailed annual report covering Vikasalaya Foundation's activities, achievements, and impact over the period of 2023-2024.",
      url: "/reports/ANNUAL REPORT 2023-24.pdf",
      type: "report"
    }
  ],
  publications: [
    {
      title: "Governance, Digital Economy, Start-ups and new horizons in employment sector",
      description: "An in-depth analysis by Vikash Kumar Paul & Priyadarshni Rawal exploring the evolving landscape of governance in the digital age, examining how technological advancements are reshaping economic structures, fostering innovation through start-ups, and creating new employment opportunities across sectors. The article provides valuable insights into the intersection of policy, technology, and workforce development.",
      type: "article",
      category: "Articles",
      url: "/reports/Governance, Digital Economy, Start-ups and new horizons in employment sector - An article by Vikash Kumar Paul & Priyadarshni Rawal.pdf"
    },
    {
      title: "Revisiting the Asian identity and IR",
      description: "A comprehensive analysis by Priyadarshni Rawal examining the complex dynamics of Asian identity in the context of International Relations, exploring historical perspectives, contemporary challenges, and future implications for regional cooperation and global diplomacy.",
      type: "article",
      category: "Articles",
      url: "/reports/Revisiting the Asian identity and IR - Article by Priyadarshni Rawal.pdf"
    },
    {
      title: "The altering dichotomy of self and other",
      description: "A thought-provoking academic paper by Priyadarshni Rawal exploring the evolving relationship between self-identity and otherness in modern society, examining how traditional boundaries and definitions are being redefined in our interconnected world.",
      type: "article",
      category: "Articles",
      url: "/reports/The altering dichotomy of self and other - Paper by Priyadarshni Rawal.pdf"
    },
    {
      title: "Dualism of human rights violations in North Korea",
      description: "An article by Priyadarshni Rawal exploring the human rights violations in North Korea, examining how the regime's policies are impacting the lives of its citizens. The article provides valuable insights into the intersection of policy, technology, and workforce development.",
      type: "article",
      category: "Articles",
      url: "/reports/Dualism of human right violations in North Korea.pdf"
    },
    {
      title: "Newsletters Coming Soon",
      description: "We're working on our newsletter system. Stay tuned for updates on our first newsletter launch!",
      type: "newsletter",
      category: "Newsletters"
    },
    {
      title: "Vikasalaya Foundation fraud & anti corruption Policy",
      description: "A comprehensive policy on fraud and anti-corruption measures to protect the integrity of Vikasalaya Foundation's operations and ensure transparency in all activities.",
      type: "policy",
      category: "Policies",
      url: "/reports/Vikasalaya Foundation fraud & anti corruption Policy.pdf"
    },
    {
      title: "Vikasalaya Foundation finance manual",
      description: "A comprehensive guide covering budgeting, accounting standards, internal controls, and reporting requirements to ensure transparent and efficient financial management across the organization.",
      type: "policy",
      category: "Policies",
      url: "/reports/Vikasalaya Foundation finance manual.pdf"
    },
    {
      title: "Vikasalaya Foundation HR manual",
      description: "A detailed overview of HR policies including recruitment, benefits, performance management, and professional development, designed to support employee wellbeing and organizational growth.",
      type: "policy",
      category: "Policies",
      url: "/reports/Vikasalaya Foundation HR manual.pdf"
    },
    {
      title: "Vikasalaya Foundation proccurement Policy",
      description: "Guidelines for vendor selection, bidding processes, and quality control measures to ensure cost-effective and transparent procurement while maintaining high standards in our supply chain.",
      type: "policy",
      category: "Policies",
      url: "/reports/Vikasalaya Foundation proccurement Policy.pdf"
    },
    {
      title: "Vikasalaya Foundation workplace harassment policy",
      description: "Essential framework addressing workplace harassment and discrimination, including reporting procedures, investigation protocols, and preventive measures to maintain a safe and inclusive environment.",
      type: "policy",
      category: "Policies",
      url: "/reports/Vikasalaya Foundation workplace harassment policy.pdf"
    }
  ]
}

// Function to combine all images from different folders for the gallery view
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

// Add a function to group resources by category
const groupResourcesByCategory = (resources: Resource[]) => {
  return resources.reduce((acc, resource) => {
    const category = resource.category || 'Other'
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(resource)
    return acc
  }, {} as { [key: string]: Resource[] })
}

// Update the Publications TabsContent section
function PublicationsContent() {
  const groupedPublications = groupResourcesByCategory(resources.publications)

  return (
    <div className="space-y-12">
      {Object.entries(groupedPublications).map(([category, items]) => (
        <div key={category} id={category.toLowerCase()} className="space-y-6">
          <h2 className="text-2xl font-bold text-text mb-6 px-4">{category}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {items.map((resource, index) => (
              <ResourceCard key={resource.title} resource={resource} index={index} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default function ResourcesPage() {
  const searchParams = useSearchParams()
  const tabParam = searchParams.get('tab')
  const hash = typeof window !== 'undefined' ? window.location.hash : ''

  useEffect(() => {
    // Scroll to the section if hash exists
    if (hash) {
      const sectionId = hash.replace('#', '')
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [hash])

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
              <PublicationsContent />
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  )
}

function ResourceCard({ resource, index = 0 }: { resource: Resource; index?: number }) {
  const getIcon = () => {
    switch (resource.type) {
      case 'article':
        return <FileText className="w-4 h-4 mr-2" />
      case 'newsletter':
        return <Mail className="w-4 h-4 mr-2" />
      case 'policy':
        return <Shield className="w-4 h-4 mr-2" />
      default:
        return <ArrowRight className="w-4 h-4 mr-2" />
    }
  }

  const getButtonText = () => {
    switch (resource.type) {
      case 'article':
        return 'Read Article'
      case 'newsletter':
        return 'Coming Soon'
      case 'policy':
        return 'View Policy'
      default:
        return 'Read More'
    }
  }

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
        {resource.url ? (
          <a
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center px-6 py-3 rounded-full text-secondary 
              bg-gradient-to-r ${
                index % 2 === 0 
                  ? 'from-primary to-accent' 
                  : 'from-accent to-primary-light'
              } hover:opacity-90 transition-opacity`}
          >
            {getIcon()}
            {getButtonText()}
            <Download className="w-4 h-4 ml-2" />
          </a>
        ) : (
          <span className={`inline-flex items-center px-6 py-3 rounded-full text-secondary 
            bg-gradient-to-r ${
              index % 2 === 0 
                ? 'from-primary to-accent' 
                : 'from-accent to-primary-light'
            } opacity-70 cursor-not-allowed`}
          >
            {getIcon()}
            {getButtonText()}
          </span>
        )}
      </div>
    </motion.div>
  )
}

// GalleryView component
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
