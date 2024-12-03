"use client"
import { motion, AnimatePresence } from "framer-motion"
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Card } from "@/components/ui/card"
import DotPattern from '@/components/ui/dot-pattern'

// Types
interface ImageSliderProps {
  images: string[]
  alt: string
  interval?: number
  height?: string
  objectFit?: 'cover' | 'contain'
}

interface Program {
  title: string
  description: string
  details?: string[]
  subPrograms?: SubProgram[]
  initiatives?: Initiative[]
  images?: string[]
}

interface SubProgram {
  name: string
  desc: string
  activities: string[]
  images?: string[]
}

interface Initiative {
  name: string
  desc?: string
  activities?: string[]
  images?: string[]
}

// Components
const ImageSlider = ({ images, alt, interval = 5000, height = "h-[300px]", objectFit = "cover" }: ImageSliderProps) => {
  const [currentImage, setCurrentImage] = useState(0)
  const [imageError, setImageError] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, interval)
    return () => clearInterval(timer)
  }, [images.length, interval])

  if (images.length === 0) return null

  return (
    <div className={`relative w-full ${height} mb-4 rounded-lg overflow-hidden`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {!imageError ? (
            <Image
              src={images[currentImage]}
              alt={alt}
              fill
              className={`object-${objectFit} object-center`}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-100">
              <p className="text-gray-500">Image not available</p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

// Data
const programsData: Program[] = [
  {
    title: "Mental Health Awareness",
    description: "A dynamic, ongoing initiative delivering mental health support across communities.",
    details: [
      "Group and individual counseling sessions",
      "Mental health awareness workshops",
      "Stigma reduction campaigns",
      "Support for domestic violence survivors",
      "Child and adolescent mental health programs"
    ],
    images: ['/images/1.webp']
  },
  {
    title: "Child Development and Education",
    description: "Holistic support program for children from primary school through career-building years.",
    subPrograms: [
      {
        name: "After School Support",
        desc: "Academic help and skill-building activities in a safe environment",
        activities: ["Homework assistance", "Academic tutoring", "Life skills development"],
        images: [
          '/images/after school classes1.webp',
          '/images/after school classes 3.webp',
          '/images/after school classes 4.webp',
          '/images/after school classes 5.webp'
        ]
      },
      // Add other subPrograms with their respective images
    ]
  },
  {
    title: "Disaster Response",
    description: "Rapid response and support for communities affected by natural disasters.",
    initiatives: [
      {
        name: "Wayanad Landslide Response",
        desc: "Emergency response and support for communities affected by landslides in Wayanad",
        activities: [
          "Distribution of ration & hygiene kits",
          "Menstrual hygiene training for women",
          "Child support through art and play therapy",
          "Technical support for mental health counseling"
        ],
        images: [
          '/images/wayanad landslide relief.webp',
          '/images/Blanket donation Kashmir.webp',
          '/images/dispatch for wayanad landslide.webp',
          '/images/Wayanad flood relief Kerala.webp'
        ]
      },
      // Add other initiatives with their respective images
    ]
  }
]

export default function ProgramsPage() {
  const [activeProgram, setActiveProgram] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <DotPattern className="absolute inset-0 h-full w-full opacity-50" width={16} height={16} cr={2} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_200px,rgba(255,226,132,0.1),transparent)]" />

      <div className="container mx-auto px-4 py-24 relative">
        <motion.div className="text-center mb-24">
          <motion.h1
            className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-500"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Programs
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive initiatives focused on creating lasting positive change in our communities.
          </motion.p>
        </motion.div>

        <div className="space-y-32">
          {programsData.map((program, idx) => (
            <motion.section
              key={program.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
              onViewportEnter={() => setActiveProgram(idx)}
            >
              <Card className="group overflow-hidden backdrop-blur-sm bg-white/80 border-0 shadow-lg 
                hover:shadow-xl transition-all duration-500">
                <div className="p-12 space-y-16">
                  <div className="grid md:grid-cols-2 gap-12">
                    <motion.div 
                      className="space-y-8"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                    >
                      <h2 className="text-3xl font-bold text-yellow-600">{program.title}</h2>
                      <p className="text-lg text-gray-600 leading-relaxed">{program.description}</p>
                      
                      {program.details && (
                        <ul className="space-y-4">
                          {program.details.map((detail, index) => (
                            <motion.li 
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-start space-x-3"
                            >
                              <span className="h-6 w-6 rounded-full bg-yellow-100 flex items-center 
                                justify-center flex-shrink-0 group-hover:bg-yellow-200 transition-colors">
                                <span className="h-2 w-2 rounded-full bg-yellow-500" />
                              </span>
                              <span className="text-gray-700">{detail}</span>
                            </motion.li>
                          ))}
                        </ul>
                      )}
                    </motion.div>

                    {program.images && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative h-[400px] rounded-xl overflow-hidden shadow-lg"
                      >
                        <ImageSlider 
                          images={program.images} 
                          alt={program.title}
                          height="h-[400px]"
                        />
                      </motion.div>
                    )}
                  </div>

                  {/* SubPrograms section with styling from KeyAreasSection */}
                  {program.subPrograms && (
                    <div className="grid md:grid-cols-2 gap-8">
                      {program.subPrograms.map((sub, index) => (
                        <motion.div
                          key={sub.name}
                          className="group bg-gradient-to-br from-yellow-50 to-white p-8 rounded-xl 
                            shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <h3 className="text-xl font-semibold text-yellow-600 mb-4">{sub.name}</h3>
                          {sub.images && (
                            <div className="mb-4 rounded-lg overflow-hidden">
                              <ImageSlider images={sub.images} alt={sub.name} />
                            </div>
                          )}
                          <p className="text-gray-600 mb-4">{sub.desc}</p>
                          <ul className="space-y-2">
                            {sub.activities.map((activity, idx) => (
                              <li key={idx} className="flex items-center space-x-2 text-gray-700">
                                <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
                                <span>{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Initiatives section with styling from AboutPage core values */}
                  {program.initiatives && (
                    <div className="space-y-8">
                      {program.initiatives.map((initiative, index) => (
                        <motion.div
                          key={initiative.name}
                          className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md 
                            transition-all duration-300"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <h3 className="text-xl font-semibold text-yellow-600 mb-4">
                            {initiative.name}
                          </h3>
                          {initiative.images && (
                            <div className="mb-6 rounded-lg overflow-hidden">
                              <ImageSlider 
                                images={initiative.images} 
                                alt={initiative.name}
                                height="h-[400px]"
                              />
                            </div>
                          )}
                          {initiative.desc && (
                            <p className="text-gray-600 mb-4">{initiative.desc}</p>
                          )}
                          {initiative.activities && (
                            <ul className="space-y-2">
                              {initiative.activities.map((activity, idx) => (
                                <li key={idx} className="flex items-center space-x-2 text-gray-700">
                                  <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
                                  <span>{activity}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              </Card>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  )
}
