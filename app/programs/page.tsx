"use client"
import { motion } from "framer-motion"
import Image from 'next/image'
import { useState, useEffect, useCallback } from 'react'
import Modal from 'react-modal'
import { ChevronRight, ArrowRight, X, ChevronDown } from 'lucide-react'
import { PageHero } from '@/components/ui/page-hero'

// Types
interface Program {
  title: string
  description: string
  details?: string[]
  subPrograms?: SubProgram[]
  initiatives?: Initiative[]
  imageFolder: string
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

// Add new type for gallery
interface GalleryImage {
  src: string
  caption?: string
}

// Data
const programsData: Program[] = [
  {
    title: "Mental Health Awareness",
    description: "Mental Health Program is a dynamic, ongoing initiative dedicated to delivering comprehensive mental health support through evidence-based counseling, community interventions, and specialized programs tailored to diverse populations and settings.",
    subPrograms: [
      {
        name: "One-to-One Counseling",
        desc: "Personalized therapeutic sessions using evidence-based methods to address individual emotional and psychological challenges.",
        activities: [
          "Individual assessment and treatment planning",
          "Evidence-based therapeutic interventions", 
          "Progress monitoring and outcome evaluation",
          "Referral coordination when needed"
        ]
      },
      {
        name: "Group Counseling",
        desc: "Facilitated peer support groups to enhance emotional healing through shared experiences and coping strategy development.",
        activities: [
          "Structured group therapy sessions",
          "Peer support facilitation",
          "Coping skills development",
          "Social connection building"
        ]
      },
      {
        name: "Defense Personnel Counseling",
        desc: "Targeted mental health support for defense personnel, addressing unique stressors and promoting resilience.",
        activities: [
          "Stress management techniques",
          "PTSD and trauma support",
          "Reintegration assistance",
          "Family support services"
        ],
        images: ['/images/mental-health/1.jpg', '/images/mental-health/2.jpg']
      },
      {
        name: "Corporate Counseling",
        desc: "Tailored mental health services for corporate employees, focusing on stress management, well-being, and workplace productivity.",
        activities: [
          "Workplace stress management",
          "Work-life balance coaching",
          "Team dynamics support",
          "Leadership mental wellness"
        ]
      },
      {
        name: "Disaster Victim Counseling",
        desc: "Offering trauma recovery and emotional resilience support to survivors of natural disasters. Vikasalaya contributed technical assistance for mental health programs supporting Wayanad landslide survivors in collaboration with TATA and DFY.",
        activities: [
          "Trauma recovery support",
          "Crisis intervention",
          "Community resilience building",
          "Long-term recovery planning"
        ]
      },
      {
        name: "Community-Based Intervention",
        desc: "Mental health initiatives within communities to promote awareness, reduce stigma, and provide accessible support.",
        activities: [
          "Mental health awareness workshops",
          "Stigma reduction programs",
          "Community support networks",
          "Resource connection services"
        ]
      },
      {
        name: "Onco-Psychology",
        desc: "Psychological support for cancer patients and their families to manage the emotional impact of diagnosis, treatment, and recovery.",
        activities: [
          "Treatment coping support",
          "Family counseling",
          "Grief and loss processing",
          "Recovery journey support"
        ]
      },
      {
        name: "Psychological First Aid",
        desc: "Immediate support for individuals facing mental health crises, with a focus on providing stabilization, comfort, and connection to further care.",
        activities: [
          "Crisis stabilization",
          "Safety planning",
          "Resource coordination",
          "Follow-up care planning"
        ]
      },
      {
        name: "Telecounseling",
        desc: "Offering remote counseling services, ensuring accessibility for individuals unable to attend in-person sessions, via secure and confidential platforms.",
        activities: [
          "Virtual therapy sessions",
          "Crisis helpline support",
          "Digital resource provision",
          "Remote progress monitoring"
        ]
      },
      {
        name: "Family Counseling",
        desc: "Providing therapy to families to address collective mental health challenges, improve communication, and strengthen relationships.",
        activities: [
          "Family dynamics assessment",
          "Communication skills building",
          "Conflict resolution support",
          "Relationship strengthening"
        ]
      },
      {
        name: "Trauma-Informed Care",
        desc: "Approaching counseling with sensitivity to individuals' trauma history, ensuring a safe, supportive, and effective therapeutic environment.",
        activities: [
          "Trauma assessment",
          "Safety-focused interventions",
          "Empowerment strategies",
          "Healing environment creation"
        ]
      },
      {
        name: "De-addiction Counseling",
        desc: "Specialized support for individuals struggling with addiction, incorporating strategies for recovery, relapse prevention, and emotional well-being.",
        activities: [
          "Addiction assessment",
          "Recovery planning",
          "Relapse prevention",
          "Support system building"
        ]
      }
    ],
    imageFolder: 'mental-health',
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
    ],
    imageFolder: 'child-development',

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
    ],
    imageFolder: 'women-empowerment',
  },
  {
    title: "Disaster Response",
    description: "Rapid response and comprehensive support for communities affected by natural disasters.",
    subPrograms: [
      {
        name: "Wayanad Landslide Response",
        desc: "Comprehensive relief program providing urgent support to affected families in Wayanad.",
        activities: [
          "Distribution of ration & hygiene kits", 
          "Menstrual hygiene training for women",
          "Child support through art and play therapy",
          "Technical support for mental health counseling"
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
    ],
    imageFolder: 'disaster-response',
  }
]

async function getImagesFromFolder(folderName: string): Promise<string[]> {
  try {
    const response = await fetch(`/api/images?folder=${folderName}`)
    const data = await response.json()
    return data.images || []
  } catch (error) {
    console.error(`Error fetching images for ${folderName}:`, error)
    return []
  }
}

export default function ProgramsPage() {
  const [activeProgram, setActiveProgram] = useState<number | null>(0)
  const [activeSubProgram, setActiveSubProgram] = useState<number | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentImages, setCurrentImages] = useState<string[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showGallery, setShowGallery] = useState(false)
  const [programImages, setProgramImages] = useState<Record<string, string[]>>({})

  useEffect(() => {
    const loadProgramImages = async () => {
      const imagePromises = programsData
        .filter(program => program.imageFolder)
        .map(async program => {
          const images = await getImagesFromFolder(program.imageFolder)
          return [program.imageFolder, images]
        })

      const results = await Promise.all(imagePromises)
      const imagesMap = Object.fromEntries(results)
      setProgramImages(imagesMap)
    }

    loadProgramImages()
  }, [])

  const openGallery = (folder: string) => {
    let images: string[] = []
    
    switch(folder) {
      case 'images':
        images = programImages[programsData[0].imageFolder || ''] || []
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

  const nextImage = () => setCurrentIndex((prev) => 
    prev === currentImages.length - 1 ? 0 : prev + 1
  )

  const prevImage = () => setCurrentIndex((prev) => 
    prev === 0 ? currentImages.length - 1 : prev - 1
  )

  // Program Overview Section Update
  const ProgramOverview = ({ program, index }: { program: Program, index: number }) => {
    const [images, setImages] = useState<string[]>([])
    
    // Load images for this specific program
    useEffect(() => {
      const loadImages = async () => {
        if (program.imageFolder) {
          const programImages = await getImagesFromFolder(program.imageFolder)
          setImages(programImages)
        }
      }
      loadImages()
    }, [program.imageFolder])

    return (
      <section className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-x-12 gap-y-8">
          {/* Content Column */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-text">
              {program.title}
            </h2>
            <p className="text-lg text-text-muted">
              {program.description}
            </p>
            {program.details && (
              <ul className="space-y-4 mt-6">
                {program.details.map((detail, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-text-muted">{detail}</span>
                  </motion.li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>
    )
  }

  // Enhanced Modal Component
  const GalleryModal = ({
    isOpen,
    onClose,
    images,
    currentIndex,
    setCurrentIndex,
  }: {
    isOpen: boolean
    onClose: () => void
    images: string[]
    currentIndex: number
    setCurrentIndex: (index: number) => void
  }) => {
    const handleKeyDown = useCallback((e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        const newIndex = (currentIndex + 1) % images.length
        setCurrentIndex(newIndex)
      } else if (e.key === 'ArrowLeft') {
        const newIndex = (currentIndex - 1 + images.length) % images.length
        setCurrentIndex(newIndex) 
      } else if (e.key === 'Escape') {
        onClose()
      }
    }, [images.length, onClose, setCurrentIndex, currentIndex])

    useEffect(() => {
      if (isOpen) {
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
      }
    }, [isOpen, handleKeyDown])

    if (!isOpen) return null

    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Image Gallery"
        className="fixed inset-0 z-50"
        overlayClassName="fixed inset-0 bg-black/95 backdrop-blur-sm"
      >
        <div className="h-full flex flex-col p-4">
          {/* Header */}
          <div className="flex justify-between items-center text-white mb-4">
            <p className="text-sm">
              {currentIndex + 1} / {images.length}
            </p>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Close gallery"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Main Image */}
          <div className="relative flex-1 flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src={images[currentIndex]}
                alt={`Gallery image ${currentIndex + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={() => {
                const newIndex = (currentIndex - 1 + images.length) % images.length
                setCurrentIndex(newIndex)
              }}
              className="absolute left-4 p-2 rounded-full bg-black/50 hover:bg-black/75 
                transition-colors text-white"
              aria-label="Previous image"
            >
              <ChevronRight className="w-6 h-6 rotate-180" />
            </button>
            <button
              onClick={() => {
                const newIndex = (currentIndex + 1) % images.length
                setCurrentIndex(newIndex)
              }}
              className="absolute right-4 p-2 rounded-full bg-black/50 hover:bg-black/75 
                transition-colors text-white"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Thumbnails */}
          <div className="mt-4">
            <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
              {images.map((image, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden 
                    ${currentIndex === idx ? 'ring-2 ring-primary' : 'opacity-50 hover:opacity-100'} 
                    transition-all duration-200`}
                >
                  <Image
                    src={image}
                    alt={`Thumbnail ${idx + 1}`}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </Modal>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-natural">
      <PageHero
        title="Our Programs"
        description="Comprehensive initiatives focused on creating lasting positive change in our communities."
      />

      {/* Programs Navigation */}
      <div className="sticky top-20 z-30 bg-gradient-soft shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto gap-8 py-4 no-scrollbar">
            {programsData.map((program, idx) => (
              <button
                key={program.title}
                onClick={() => setActiveProgram(idx)}
                className={`flex items-center gap-2 whitespace-nowrap px-4 py-2 rounded-full 
                  transition-all duration-300 ${activeProgram === idx 
                    ? 'bg-gradient-to-r from-primary to-accent text-secondary shadow-lg' 
                    : 'text-text-muted hover:text-primary'}`}
              >
                <span className="text-sm font-medium">{program.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          {activeProgram !== null && (
            <motion.div
              key={activeProgram}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-16"
            >
              {/* Program Overview */}
              <ProgramOverview program={programsData[activeProgram]} index={activeProgram} />

              {/* Sub Programs */}
              {programsData[activeProgram].subPrograms && (
                <section className="space-y-8">
                  <h3 className="text-2xl font-bold text-text">Related Programs</h3>
                  <div className="grid gap-6">
                    {programsData[activeProgram].subPrograms.map((sub, idx) => (
                      <motion.div
                        key={sub.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                      >
                        <button
                          onClick={() => setActiveSubProgram(activeSubProgram === idx ? null : idx)}
                          className={`w-full bg-secondary rounded-xl shadow-lg hover:shadow-xl 
                            transition-all duration-300 overflow-hidden`}
                        >
                          <div className={`h-1 bg-gradient-to-r ${
                            idx % 2 === 0 
                              ? 'from-primary via-primary-light to-accent' 
                              : 'from-accent via-accent-light to-primary-light'
                          }`} />
                          <div className="p-6 flex items-center justify-between">
                            <h4 className="text-xl font-semibold text-text">{sub.name}</h4>
                            <ChevronDown className={`w-5 h-5 text-primary transition-transform duration-300 
                              ${activeSubProgram === idx ? 'rotate-180' : ''}`} 
                            />
                          </div>
                        </button>
                        
                        {activeSubProgram === idx && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-4 bg-secondary/50 rounded-xl p-6"
                          >
                            <p className="text-text-muted mb-6">{sub.desc}</p>
                            
                            {sub.images && (
                              <div className="grid grid-cols-2 gap-4 mb-6">
                                {sub.images.map((img, imgIdx) => (
                                  <div 
                                    key={imgIdx}
                                    className="relative aspect-video rounded-lg overflow-hidden cursor-pointer
                                      transform hover:scale-105 transition-transform duration-300"
                                    onClick={() => openGallery('subProgram')}
                                  >
                                    <Image
                                      src={img}
                                      alt={`${sub.name} image ${imgIdx + 1}`}
                                      fill
                                      className="object-cover"
                                    />
                                  </div>
                                ))}
                              </div>
                            )}
                            
                            <div className="grid md:grid-cols-2 gap-4">
                              {sub.activities.map((activity, actIdx) => (
                                <div 
                                  key={actIdx}
                                  className="flex items-start gap-3"
                                >
                                  <ArrowRight className="w-5 h-5 text-primary mt-1" />
                                  <span className="text-text-muted">{activity}</span>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </section>
              )}

              {/* Special Initiatives */}
              {programsData[activeProgram].initiatives && (
                <section className="space-y-8">
                  <h3 className="text-2xl font-bold text-text">Special Initiatives</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    {programsData[activeProgram].initiatives.map((initiative, idx) => (
                      <motion.div
                        key={initiative.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-secondary rounded-xl shadow-lg hover:shadow-xl 
                          transition-all duration-300 overflow-hidden group"
                      >
                        {initiative.images && (
                          <div 
                            className="relative aspect-video cursor-pointer overflow-hidden"
                            onClick={() => openGallery('initiative')}
                          >
                            <Image
                              src={initiative.images[0]}
                              alt={initiative.name}
                              fill
                              className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                          </div>
                        )}
                        <div className="p-6">
                          <h4 className="text-xl font-semibold text-text mb-4">{initiative.name}</h4>
                          {initiative.desc && (
                            <p className="text-text-muted mb-6">{initiative.desc}</p>
                          )}
                          {initiative.activities && (
                            <div className="space-y-3">
                              {initiative.activities.map((activity, actIdx) => (
                                <div 
                                  key={actIdx}
                                  className="flex items-start gap-3"
                                >
                                  <ArrowRight className="w-5 h-5 text-primary mt-1" />
                                  <span className="text-text-muted">{activity}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </section>
              )}
            </motion.div>
          )}
        </div>
      </div>

      {/* Enhanced Gallery Modal */}
      <GalleryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        images={currentImages}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </div>
  )
}
