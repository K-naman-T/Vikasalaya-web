"use client"
import { motion } from "framer-motion"
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Card } from "@/components/ui/card"
import DotPattern from '@/components/ui/dot-pattern'
import Modal from 'react-modal'

// Types
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
      }
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
      }
    ]
  }
]

export default function ProgramsPage() {
  const [activeProgram, setActiveProgram] = useState<number | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentImages, setCurrentImages] = useState<string[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)

  const openGallery = (folder: string) => {
    let images: string[] = []
    
    switch(folder) {
      case 'images':
        images = programsData[0].images || []
        break
      case 'Vikasalaya Pics':
        images = programsData[1].subPrograms?.[0].images || []
        break
      case 'Wayanad':
        images = programsData[2].initiatives?.[0].images || []
        break
      default:
        images = []
    }
    
    setCurrentImages(images)
    setCurrentIndex(0)
    setIsModalOpen(true)
  }

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % currentImages.length)
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + currentImages.length) % currentImages.length)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-light to-white">
      <DotPattern className="absolute inset-0 h-full w-full opacity-50" width={16} height={16} cr={2} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_200px,rgba(255,226,132,0.1),transparent)]" />

      <div className="container mx-auto px-4 py-24 relative">
        <motion.div className="text-center mb-24">
          <motion.h1
            className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-dark to-primary-dark"
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
                      <h2 className="text-3xl font-bold text-primary-dark">{program.title}</h2>
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
                                <span className="h-2 w-2 rounded-full bg-primary-dark" />
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
                        className="relative h-[400px] rounded-xl overflow-hidden shadow-lg cursor-pointer"
                        onClick={() => openGallery('images')}
                      >
                        <Image
                          src={program.images[0]}
                          alt={program.title}
                          fill
                          className="object-cover object-center"
                        />
                      </motion.div>
                    )}
                  </div>

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
                          <h3 className="text-xl font-semibold text-primary-dark mb-4">{sub.name}</h3>
                          {sub.images && (
                            <div className="mb-4 rounded-lg overflow-hidden cursor-pointer h-[300px] relative"
                                 onClick={() => openGallery('Vikasalaya Pics')}>
                              <Image
                                src={sub.images[0]}
                                alt={sub.name}
                                fill
                                className="object-cover object-center"
                              />
                            </div>
                          )}
                          <p className="text-gray-600 mb-4">{sub.desc}</p>
                          <ul className="space-y-2">
                            {sub.activities.map((activity, idx) => (
                              <li key={idx} className="flex items-center space-x-2 text-gray-700">
                                <span className="h-1.5 w-1.5 rounded-full bg-primary-dark" />
                                <span>{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      ))}
                    </div>
                  )}

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
                          <h3 className="text-xl font-semibold text-primary-dark mb-4">
                            {initiative.name}
                          </h3>
                          {initiative.images && (
                            <div className="mb-6 rounded-lg overflow-hidden cursor-pointer h-[400px] relative"
                                 onClick={() => openGallery('Wayanad')}>
                              <Image
                                src={initiative.images[0]}
                                alt={initiative.name}
                                fill
                                className="object-cover object-center"
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
                                  <span className="h-1.5 w-1.5 rounded-full bg-primary-dark" />
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

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Image Gallery"
        className="fixed inset-0 flex items-center justify-center p-4 bg-black/90 z-50"
        overlayClassName="fixed inset-0"
      >
        <div className="relative w-full max-w-5xl mx-auto bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6">
          <button 
            onClick={() => setIsModalOpen(false)} 
            className="absolute top-4 right-4 z-10 text-white/80 hover:text-white
              bg-black/20 hover:bg-black/40 rounded-full p-2 transition-all duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="relative aspect-[16/9] md:aspect-[3/2] lg:aspect-[16/9] rounded-lg overflow-hidden">
            {currentImages.length > 0 && (
              <Image
                src={currentImages[currentIndex]}
                alt={`Gallery image ${currentIndex + 1}`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              />
            )}
            
            <button 
              onClick={prevImage} 
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 
                bg-black/20 hover:bg-black/40 text-white/80 hover:text-white
                rounded-full p-2 md:p-3 transition-all duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={nextImage} 
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 
                bg-black/20 hover:bg-black/40 text-white/80 hover:text-white
                rounded-full p-2 md:p-3 transition-all duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="mt-4 text-center text-white/80">
            <p className="text-sm md:text-base">
              Image {currentIndex + 1} of {currentImages.length}
            </p>
          </div>
        </div>
      </Modal>
    </div>
  )
}
