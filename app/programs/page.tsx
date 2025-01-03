"use client"
import { motion } from "framer-motion"
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { ArrowRight, X, ChevronDown } from 'lucide-react'
import { PageHero } from '@/components/ui/page-hero'
import { useSearchParams } from 'next/navigation'
import { Carousel } from '@/components/ui/carousel'

// Types
interface Program {
  title: string
  description: string
  details?: string[]
  subPrograms?: SubProgram[]
  initiatives?: Initiative[]
}

interface SubProgram {
  name: string
  desc: string
  activities: string[]
  imageFolder?: string
  imagePath?: string
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
    title: "Livelihood Empowerment",
    description: "Empowering rural communities through sustainable livelihood initiatives and traditional crafts preservation.",
    subPrograms: [
      {
        name: "Laghu Udyog",
        desc: "Promoting small-scale industries in rural communities by enabling locals to produce essential items, providing sustainable employment and reducing urban migration.",
        activities: [
          "Skill development for local production",
          "Setting up small-scale manufacturing units",
          "Training in pattal-done, agarbatti, and snack production",
          "Financial literacy and business management support",
          "Market linkage development"
        ]
      },
      {
        name: "VillageKart",
        desc: "A platform connecting rural artisans and producers with broader markets, preserving indigenous crafts while ensuring sustainable livelihoods.",
        activities: [
          "Indigenous craft promotion and preservation",
          "Market access for local artisans",
          "Traditional art form documentation and support",
          "E-commerce platform development",
          "Artisan capacity building and training"
        ]
      }
    ]
  },
  {
    title: "Mental Wellness and Counseling",
    description: "Vikasalaya's “Brain-Whisper” Program offers comprehensive professional mental health services, catering to diverse needs such as individual, family, corporate, trauma, onco-care, tele-counseling, de-addiction, and counseling for defense personnel. The program is dedicated to fostering emotional well-being and resilience through personalized and evidence-based therapeutic approaches.",
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
        imageFolder: '/images/mental-health'
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
        imageFolder: '/images/after-school'
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
        imageFolder: '/images/play-n-learn'
      },
      {
        name: "Festivals Together",
        desc: "Celebrating cultural and religious festivals with children while providing nutritious meals.",
        activities: [
          "Cultural celebrations",
          "Festival traditions",
          "Community gatherings",
          "Nutritious meal distribution"
        ],
        imagePath: '/images/fest1.webp'
      },
      {
        name: "WASH Training Programs",
        desc: "Education on Water, Sanitation, and Hygiene practices through hands-on sessions.",
        activities: [
          "Hygiene education",
          "Soap distribution",
          "Sanitation awareness",
          "Health outcome monitoring"
        ],
        imagePath: '/images/wash-training.webp'
      },
      {
        name: "Aanganwadi Activities",
        desc: "Supporting early childhood development through educational and nutritional support.",
        activities: [
          "Structured play sessions",
          "Learning activities",
          "Health monitoring",
          "Nutritional guidance"
        ],
        imageFolder: '/images/aanganwadi-bangalore'
      }
    ],
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
        ],
        imagePath: '/images/skill-dev.webp'
      },
      {
        name: "Menstrual Hygiene Trainings",
        desc: "Education about menstrual health, hygiene practices, and dispelling common myths.",
        activities: [
          "Hygiene education",
          "Resource distribution",
          "Myth-busting sessions",
          "Health awareness workshops"
        ],
        imageFolder: '/images/menstrual-hygiene'
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
        ],
        imageFolder: '/images/Wayanad'
      },
      {
        name: "Healthcare Support Program", 
        desc: "Essential assistance to government health facilities through equipment provision.",
        activities: [
          "Oxygen concentrator distribution",
          "Healthcare facility support",
          "Infrastructure strengthening", 
          "Medical resource provision"
        ],
        imageFolder: '/images/oxygen-donation'
      },
      {
        name: "Winter Care Program",
        desc: "Support for vulnerable communities in Kashmir facing extreme winter conditions.",
        activities: [
          "Blanket distribution",
          "Winter essentials provision",
          "Community outreach",
          "Cold weather support"
        ],
        imageFolder: '/images/kashmir'
      }
    ],
  }
]

export default function ProgramsPage() {
  const searchParams = useSearchParams()
  const programParam = searchParams.get('program')
  
  useEffect(() => {
    if (programParam) {
      const programIndex = parseInt(programParam)
      if (!isNaN(programIndex) && programIndex >= 0 && programIndex < programsData.length) {
        setActiveProgram(programIndex)
        // Smooth scroll to program content
        const element = document.getElementById('program-content')
        element?.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [programParam])

  const [activeProgram, setActiveProgram] = useState<number | null>(0)
  const [activeSubProgram, setActiveSubProgram] = useState<number | null>(null)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // Program Overview
  const ProgramOverview = ({ program }: { program: Program, index: number }) => {
    return (
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
      <div id="program-content" className="container mx-auto px-4 py-16">
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
                            
                            <div className="grid md:grid-cols-2 gap-4 mb-6">
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

                            {sub.imageFolder && (
                              <Carousel 
                                folder={sub.imageFolder}
                                onImageClick={setSelectedImage}
                              />
                            )}
                            {sub.imagePath && (
                              <Carousel 
                                imagePath={sub.imagePath}
                                onImageClick={setSelectedImage}
                              />
                            )}
                          </motion.div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </section>
              )}
            </motion.div>
          )}
        </div>
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <div className="relative w-full h-full max-w-7xl max-h-[90vh] m-4" onClick={e => e.stopPropagation()}>
            <Image
              src={selectedImage}
              alt="Full screen image"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </div>
  )
}
