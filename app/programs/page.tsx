"use client"
import { motion } from "framer-motion"
import Image from 'next/image'
import { useState } from 'react'
import Modal from 'react-modal'
import { ChevronRight, ArrowRight } from 'lucide-react'

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
    description: "Mental Health Program is a dynamic, ongoing initiative dedicated to delivering mental health support across a range of settings, including communities, disaster-affected areas, security forces, schools, and corporate environments.",
    details: [
      "Group and individual counseling sessions",
      "Breaking down mental health stigma",
      "Support for domestic violence and sexual abuse survivors",
      "Addressing phobias and communication barriers",
      "Child developmental support",
      "Community mental health awareness workshops",
      "Specialized support for security forces",
      "Corporate mental health programs"
    ],
    images: ['/images/1.webp']
  },
  {
    title: "Child Development and Education",
    description: "Our Child Development and Education Program is an ongoing initiative aimed at providing holistic support to children from primary school through to their career-building years.",
    subPrograms: [
      {
        name: "After School Support",
        desc: "A safe and engaging environment where children receive academic help, participate in skill-building activities, and receive personalized guidance.",
        activities: [
          "Academic tutoring and homework assistance",
          "Skill-building activities",
          "Personalized mentoring",
          "Confidence building exercises"
        ],
        images: ['/images/after school classes1.webp', '/images/after school classes 3.webp']
      },
      {
        name: "Play and Learn",
        desc: "Interactive program combining education with play to promote holistic development.",
        activities: [
          "Interactive educational games",
          "Storytelling sessions",
          "Creative activities",
          "Social skills development"
        ],
        images: ['/images/after school classes 4.webp', '/images/after school classes 5.webp']
      },
      {
        name: "Festivals Together",
        desc: "Celebrating cultural and religious festivals with children while providing nutritious meals.",
        activities: [
          "Cultural celebrations",
          "Festival traditions",
          "Community gatherings",
          "Nutritious meal distribution"
        ]
      },
      {
        name: "WASH Training Programs",
        desc: "Education on Water, Sanitation, and Hygiene practices through hands-on sessions.",
        activities: [
          "Hygiene education",
          "Soap distribution",
          "Sanitation awareness",
          "Health outcome monitoring"
        ]
      },
      {
        name: "Aanganwadi Activities",
        desc: "Supporting early childhood development through educational and nutritional support.",
        activities: [
          "Structured play sessions",
          "Learning activities",
          "Health monitoring",
          "Nutritional guidance"
        ]
      }
    ]
  },
  {
    title: "Women Empowerment and Skill Development",
    description: "A continuous initiative dedicated to fostering independence and resilience among women in communities across India.",
    subPrograms: [
      {
        name: "Skill Development Trainings",
        desc: "Practical skills training focusing on stitching, tailoring, and product creation from recycled materials.",
        activities: [
          "Stitching workshops",
          "Tailoring classes",
          "Recycled material crafts",
          "Income generation skills"
        ]
      },
      {
        name: "Menstrual Hygiene Trainings",
        desc: "Education about menstrual health, hygiene practices, and dispelling common myths.",
        activities: [
          "Hygiene education",
          "Resource distribution",
          "Myth-busting sessions",
          "Health awareness workshops"
        ]
      },
      {
        name: "Financial Literacy Trainings",
        desc: "Essential financial skills training including budgeting, saving, and basic financial planning.",
        activities: [
          "Budgeting workshops",
          "Savings education",
          "Financial planning basics",
          "Economic empowerment"
        ]
      }
    ]
  },
  {
    title: "Disaster Response",
    description: "Rapid response and comprehensive support for communities affected by natural disasters.",
    initiatives: [
      {
        name: "Wayanad Landslide Response",
        desc: "Comprehensive relief program providing urgent support to affected families in Wayanad.",
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
      {
        name: "Healthcare Support Program",
        desc: "Essential assistance to government health facilities through equipment provision.",
        activities: [
          "Oxygen concentrator distribution",
          "Healthcare facility support",
          "Infrastructure strengthening",
          "Medical resource provision"
        ]
      },
      {
        name: "Winter Care Program",
        desc: "Support for vulnerable communities in Kashmir facing extreme winter conditions.",
        activities: [
          "Blanket distribution",
          "Winter essentials provision",
          "Community outreach",
          "Cold weather support"
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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-gradient-to-br from-orange-800 to-green-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/40" />
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Our Programs
            </motion.h1>
            <motion.p 
              className="text-xl text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Comprehensive initiatives focused on creating lasting positive change in our communities.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="space-y-32">
          {programsData.map((program, idx) => (
            <motion.section
              key={program.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              {/* Program Header */}
              <div className="flex flex-col md:flex-row gap-12 items-start">
                <div className="md:w-1/2 sticky top-8">
                  <span className="text-sm font-medium text-orange-600 mb-2 block">
                    Program {idx + 1}
                  </span>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">{program.title}</h2>
                  <p className="text-lg text-gray-600 mb-8">{program.description}</p>
                  
                  {program.details && (
                    <ul className="space-y-4">
                      {program.details.map((detail, index) => (
                        <motion.li 
                          key={index}
                          className="flex items-start gap-4 text-gray-700"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <ChevronRight className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                          <span>{detail}</span>
                        </motion.li>
                      ))}
                    </ul>
                  )}
                </div>

                {program.images && (
                  <div className="md:w-1/2">
                    <motion.div
                      className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl cursor-pointer
                        transform hover:scale-[1.02] transition-all duration-500"
                      onClick={() => openGallery('images')}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                    >
                      <Image
                        src={program.images[0]}
                        alt={program.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </motion.div>
                  </div>
                )}
              </div>

              {/* Sub Programs */}
              {program.subPrograms && (
                <div className="mt-24">
                  <h3 className="text-2xl font-bold text-gray-900 mb-12">Related Programs</h3>
                  <div className="grid md:grid-cols-2 gap-12">
                    {program.subPrograms.map((sub, index) => (
                      <motion.div
                        key={sub.name}
                        className="group"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                      >
                        {sub.images && (
                          <div 
                            className="aspect-[16/9] relative rounded-xl overflow-hidden mb-6 cursor-pointer"
                            onClick={() => openGallery('Vikasalaya Pics')}
                          >
                            <Image
                              src={sub.images[0]}
                              alt={sub.name}
                              fill
                              className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        )}
                        <h4 className="text-xl font-semibold text-gray-900 mb-3">{sub.name}</h4>
                        <p className="text-gray-600 mb-4">{sub.desc}</p>
                        <ul className="space-y-2">
                          {sub.activities.map((activity, idx) => (
                            <li key={idx} className="flex items-center gap-3 text-gray-700">
                              <ArrowRight className="w-4 h-4 text-orange-600" />
                              <span>{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Initiatives */}
              {program.initiatives && (
                <div className="mt-24">
                  <h3 className="text-2xl font-bold text-gray-900 mb-12">Special Initiatives</h3>
                  {program.initiatives.map((initiative, index) => (
                    <motion.div
                      key={initiative.name}
                      className="bg-white rounded-2xl shadow-xl overflow-hidden"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                    >
                      {initiative.images && (
                        <div 
                          className="aspect-[21/9] relative cursor-pointer"
                          onClick={() => openGallery('Wayanad')}
                        >
                          <Image
                            src={initiative.images[0]}
                            alt={initiative.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div className="p-8">
                        <h4 className="text-2xl font-bold text-gray-900 mb-4">{initiative.name}</h4>
                        {initiative.desc && (
                          <p className="text-gray-600 mb-6">{initiative.desc}</p>
                        )}
                        {initiative.activities && (
                          <ul className="grid md:grid-cols-2 gap-4">
                            {initiative.activities.map((activity, idx) => (
                              <li key={idx} className="flex items-center gap-3 text-gray-700">
                                <ArrowRight className="w-4 h-4 text-green-600" />
                                <span>{activity}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
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
