"use client"
import { motion, AnimatePresence } from "framer-motion"
import Image from 'next/image'
import { useState, useEffect } from 'react'
import path from 'path'
import fs from 'fs'

export default function ProgramsPage() {
  const [currentImage, setCurrentImage] = useState(0)
  const images = ['/images/kashmir.webp', '/images/kashmir1.webp','/images/Blanket donation Kashmir.webp']
  const [wayanadImage, setWayanadImage] = useState(0)
  const wayanadImages = [
    '/images/wayanad landslide relief.webp','/images/Blanket donation Kashmir.webp','/images/dispatch for wayanad landslide.webp', '/images/Wayanad flood relief Kerala.webp','/images/sanitary napkin distribution wayanad landslide.webp','/images/sanitary napkins for wayanad landslide victims.webp','/images/Wayanad flood relief Kerala.webp'
    
  ]

  const [imageError, setImageError] = useState(false);

  const [skillDevImage, setSkillDevImage] = useState(0)
  const [menstrualImage, setMenstrualImage] = useState(0)
  const [financialImage, setFinancialImage] = useState(0)

  const skillDevImages = [
    '/images/skill development training Rajasthan.webp'
  ]

  const menstrualImages = [
    '/images/Menstrual Hygiene training Kerala.webp',
    '/images/456506704_480191228239261_8253419709615994981_n.webp',
    '/images/sanitary napkins for wayanad landslide victims.webp'
  ]

  const financialImages = [
    '/images/financial support for surgery.webp',
    '/images/338880724_1259081778344250_1894148396382907997_n.webp'
  ]

  const [afterSchoolImage, setAfterSchoolImage] = useState(0)
  const [playLearnImage, setPlayLearnImage] = useState(0)
  const [festivalsImage, setFestivalsImage] = useState(0)
  const [washImage, setWashImage] = useState(0)

  const afterSchoolImages = [
    '/images/after school classes1.webp',
    '/images/after school classes 3.webp',
    '/images/after school classes 4.webp',
    '/images/after school classes 5.webp'
  ]

  const playLearnImages = [
    '/images/339972536_1062057124753554_6254160109546039817_n.webp',
    '/images/340637503_974970460336792_5485685245489080832_n.webp',
    '/images/343743277_725256999325436_2629195321740752527_n.webp',
    '/images/343761201_223310643651041_7971334690960535972_n.webp'
  ]

  const festivalsImages = [
    '/images/converted_image_new.webp'
   
  ]

  const washImages = [
    '/images/converted_image.webp'
  ]

  const [aanganwadiImage, setAanganwadiImage] = useState(0)

  const aanganwadiImages = [
    '/images/aanganwadi program bangalore4.webp',
    '/images/aanganwadi banagaloree.webp',
    '/images/aangawani bangalore 2.webp',
    '/images/aanganwadi program bangalore.webp'
  ]

  const [currentMentalHealthImage, setCurrentMentalHealthImage] = useState(0);
  const mentalHealthImages = [
    '/images/1.webp'

    // Add more images as needed
  ];

  // Add this useEffect for image transition
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(timer) // Cleanup on unmount
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setAfterSchoolImage((prev) => (prev + 1) % afterSchoolImages.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(timer) // Cleanup on unmount
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setPlayLearnImage((prev) => (prev + 1) % images.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(timer) // Cleanup on unmount
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setMenstrualImage((prev) => (prev + 1) % menstrualImages.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(timer) // Cleanup on unmount
  }, [])

  // Add this useEffect for Wayanad image transition
  useEffect(() => {
    const timer = setInterval(() => {
      setWayanadImage((prev) => (prev + 1) % wayanadImages.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(timer) // Cleanup on unmount
  }, [])

  // Add this useEffect for Aanganwadi images transition
  useEffect(() => {
    const timer = setInterval(() => {
      setAanganwadiImage((prev) => (prev + 1) % aanganwadiImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  // Add this useEffect for Mental Health images transition
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMentalHealthImage((prev) => (prev + 1) % mentalHealthImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setSkillDevImage((prev) => (prev + 1) % skillDevImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  // Modify the Image component to handle errors
  

  const programs = [
    {
      title: "Mental Health Awareness",
      description: "A dynamic, ongoing initiative delivering mental health support across communities, disaster-affected areas, security forces, schools, and corporate environments.",
      details: [
        "Group and individual counseling sessions",
        "Mental health awareness workshops",
        "Stigma reduction campaigns",
        "Support for domestic violence survivors",
        "Child and adolescent mental health programs"
      ]
    },
    {
      title: "Child Development and Education",
      description: "Holistic support program for children from primary school through career-building years.",
      subPrograms: [
        {
          name: "After School Support",
          desc: "Academic help and skill-building activities in a safe environment",
          activities: ["Homework assistance", "Academic tutoring", "Life skills development"]
        },
        {
          name: "Play and Learn",
          desc: "Interactive education through games and creative activities",
          activities: ["Educational games", "Art and craft sessions", "Story-telling workshops"]
        },
        {
          name: "Festivals Together",
          desc: "Cultural celebration and nutritious meal programs",
          activities: ["Cultural events", "Festival celebrations", "Community meals"]
        },
        {
          name: "WASH Training",
          desc: "Water, Sanitation, and Hygiene education with practical resources",
          activities: ["Hygiene workshops", "Sanitation awareness", "Clean water initiatives"]
        },
        {
          name: "Aanganwadi Activities",
          desc: "Early childhood development and nutritional support",
          activities: ["Nutritional programs", "Early education", "Health monitoring"]
        }
      ]
    },
    {
      title: "Women Empowerment and Skill Development",
      description: "Comprehensive initiative fostering independence and resilience among women.",
      subPrograms: [
        {
          name: "Skill Development Trainings",
          desc: "Practical skills like stitching and tailoring",
          activities: ["Vocational training", "Entrepreneurship workshops", "Skill certification"]
        },
        {
          name: "Menstrual Hygiene Trainings",
          desc: "Education and resources for menstrual health",
          activities: ["Health education", "Resource distribution", "Awareness workshops"]
        },
        {
          name: "Financial Literacy Trainings",
          desc: "Essential financial skills and planning",
          activities: ["Basic accounting", "Budget planning", "Investment awareness"]
        }
      ]
    },
    {
      title: "Disaster Response",
      description: "Rapid response and support for communities affected by natural disasters.",
      initiatives: [
        {
          name: "Wayanad Landslide Response",
          activities: [
            "Distribution of ration & hygiene kits",
            "Menstrual hygiene training for women",
            "Child support through art and play therapy",
            "Technical support for mental health counseling"
          ]
        },
        {
          name: "Healthcare Support Program",
          desc: "Providing oxygen concentrators to government health facilities"
        },
        {
          name: "Winter Care Program",
          desc: "Distribution of blankets in Kashmir during extreme winter conditions"
        }
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Our Programs
      </motion.h1>

      <div className="space-y-16">
        {programs.map((program, idx) => (
          <motion.section
            key={program.title}
            className="bg-white rounded-lg shadow-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
          >
            <h2 className="text-2xl font-semibold text-yellow-500 mb-4">{program.title}</h2>
            <p className="text-gray-600 mb-6">{program.description}</p>

            {program.details && (
              <ul className="list-disc list-inside mb-6 space-y-2">
                {program.details.map((detail, index) => (
                  <li key={index} className="text-gray-700">{detail}</li>
                ))}
              </ul>
            )}

            {program.title === "Mental Health Awareness" && (
              <div className="relative w-full h-[400px] max-w-3xl mx-auto mb-8 rounded-lg overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentMentalHealthImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={mentalHealthImages[currentMentalHealthImage]}
                      alt="Mental Health Awareness"
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                      <div className="max-w-2xl">
                        <motion.h3
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-3xl font-bold text-white mb-4"
                        >
                          Mental Health Awareness
                        </motion.h3>
                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="text-lg text-white/90"
                        >
                          Supporting mental well-being across communities
                        </motion.p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            )}

            {program.subPrograms && (
              <div className="grid md:grid-cols-2 gap-6">
                {program.subPrograms.map((sub) => (
                  <div key={sub.name} className="bg-yellow-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-yellow-500 mb-3">{sub.name}</h3>
                    
                    {/* After School Support Images */}
                    {sub.name === "After School Support" && (
                      <div className="relative w-full h-[300px] mb-4 rounded-lg overflow-hidden">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={afterSchoolImage}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                            className="absolute inset-0"
                          >
                            <Image
                              src={afterSchoolImages[afterSchoolImage]}
                              alt="After School Support"
                              fill
                              className="object-cover object-center"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    )}

                    {/* Play and Learn Images */}
                    {sub.name === "Play and Learn" && (
                      <div className="relative w-full h-[300px] mb-4 rounded-lg overflow-hidden">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={playLearnImage}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                            className="absolute inset-0"
                          >
                            <Image
                              src={playLearnImages[playLearnImage]}
                              alt="Play and Learn"
                              fill
                              className="object-cover object-center"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    )}

                    {/* Festivals Together Images */}
                    {sub.name === "Festivals Together" && (
                      <div className="relative w-full h-[300px] mb-4 rounded-lg overflow-hidden">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={festivalsImage}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                            className="absolute inset-0"
                          >
                            <Image
                              src={festivalsImages[festivalsImage]}
                              alt="Festivals Together"
                              fill
                              className="object-cover object-center"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    )}

                    {/* WASH Training Images */}
                    {sub.name === "WASH Training" && (
                      <div className="relative w-full h-[300px] mb-4 rounded-lg overflow-hidden">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={washImage}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                            className="absolute inset-0"
                          >
                            <Image
                              src={washImages[washImage]}
                              alt="WASH Training"
                              fill
                              className="object-cover object-center"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    )}

                    {sub.name === "Aanganwadi Activities" && (
                      <div className="relative w-full h-[300px] mb-4 rounded-lg overflow-hidden">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={aanganwadiImage}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                            className="absolute inset-0"
                          >
                            <Image
                              src={aanganwadiImages[aanganwadiImage]}
                              alt="Aanganwadi Activities"
                              fill
                              className="object-cover object-center"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    )}

                    {/* Skill Development Images */}
                    {sub.name === "Skill Development Trainings" && (
                      <div className="relative w-full h-[300px] mb-4 rounded-lg overflow-hidden">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={skillDevImage}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                            className="absolute inset-0"
                          >
                            <Image
                              src={skillDevImages[skillDevImage]}
                              alt="Skill Development Training"
                              fill
                              loading="lazy"
                              className="object-cover object-center"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    )}

                    {/* Menstrual Hygiene Images */}
                    {sub.name === "Menstrual Hygiene Trainings" && (
                      <div className="relative w-full h-[300px] mb-4 rounded-lg overflow-hidden">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={menstrualImage}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                            className="absolute inset-0"
                          >
                            <Image
                              src={menstrualImages[menstrualImage]}
                              alt="Menstrual Hygiene Training"
                              fill
                              className="object-cover object-center"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    )}

                    {/* Financial Literacy Images */}
                    {sub.name === "Financial Literacy Trainings" && (
                      <div className="relative w-full h-[500px] mb-4 rounded-lg overflow-hidden bg-gray-100">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={financialImage}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                            className="absolute inset-0"
                          >
                            <Image
                              src={financialImages[financialImage]}
                              alt="Financial Literacy Training"
                              fill
                              className="object-contain object-center"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    )}

                    <p className="text-gray-600 mb-4">{sub.desc}</p>
                    {sub.activities && (
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        {sub.activities.map((activity, index) => (
                          <li key={index}>{activity}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}

            {program.initiatives && (
              <div className="space-y-6 mt-6">
                {program.initiatives.map((initiative) => (
                  <div key={initiative.name} className="bg-yellow-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-yellow-500 mb-3">{initiative.name}</h3>
                    {initiative.name === "Wayanad Landslide Response" && (
                      <div className="relative w-full h-[400px] max-w-3xl mx-auto mb-8 rounded-lg overflow-hidden">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={wayanadImage}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                            className="absolute inset-0"
                          >
                            {!imageError ? (
                              <Image
                                src={wayanadImages[wayanadImage]}
                                alt="Wayanad Landslide Response"
                                fill
                                className="object-cover object-center"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
                                priority
                                onError={() => setImageError(true)}
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center bg-gray-100">
                                <p className="text-gray-500">Image not available</p>
                              </div>
                            )}
                            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                              <div className="max-w-2xl">
                                <motion.h3
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  className="text-3xl font-bold text-white mb-4"
                                >
                                  Wayanad Landslide Response
                                </motion.h3>
                                <motion.p
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.2 }}
                                  className="text-lg text-white/90"
                                >
                                  Emergency response and support for communities affected by landslides in Wayanad
                                </motion.p>
                              </div>
                            </div>
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    )}

                    {initiative.name === "Winter Care Program" && (
                      <div className="relative w-full h-[400px] max-w-3xl mx-auto mb-8 rounded-lg overflow-hidden">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={currentImage}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                            className="absolute inset-0"
                          >
                            <Image
                              src={images[currentImage]}
                              alt="Kashmir Winter Care Program"
                              fill
                              className="object-cover object-center"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
                              priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                              <div className="max-w-2xl">
                                <motion.h3
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  className="text-3xl font-bold text-white mb-4"
                                >
                                  Kashmir Winter Care Program
                                </motion.h3>
                                <motion.p
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.2 }}
                                  className="text-lg text-white/90"
                                >
                                  {initiative.desc}
                                </motion.p>
                              </div>
                            </div>
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    )}

                    {initiative.activities && (
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        {initiative.activities.map((activity, index) => (
                          <li key={index}>{activity}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}
          </motion.section>
        ))}
      </div>
    </div>
  )
}
