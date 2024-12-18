"use client"
import { motion } from "framer-motion"
import { Heart, Users, Lightbulb, Shield, Leaf } from 'lucide-react'
import Image from 'next/image'

export default function AboutPage() {
  const coreValues = [
    {
      title: "Compassion",
      description: "We believe in the power of empathy and kindness to drive change. Our programs are designed to meet the unique needs of each community with understanding and care.",
      icon: Heart
    },
    {
      title: "Inclusivity",
      description: "We are committed to creating spaces where all voices are heard and respected. Our work embraces diversity and ensures equal opportunities for everyone, regardless of background.",
      icon: Users
    },
    {
      title: "Empowerment",
      description: "We aim to build self-reliance and confidence, enabling individuals to take charge of their own lives and create positive change within their communities.",
      icon: Lightbulb
    },
    {
      title: "Integrity",
      description: "We operate with transparency, accountability, and ethical practices. Every action is guided by honesty and a commitment to uphold trust within the communities we serve.",
      icon: Shield
    },
    {
      title: "Sustainability",
      description: "Our approach is rooted in long-term impact, creating programs that promote sustainable growth and development to benefit future generations.",
      icon: Leaf
    }
  ]

  const team = [
    {
      name: "Vikash Kumar Paul",
      linkedin: "https://www.linkedin.com/in/vikash-kumar-paul-3035ba26b/"
    },
    {
      name: "Priyadarshni Rawal",
      linkedin: "https://www.linkedin.com/in/priyadarshni-rawal-96162863/"
    },
    {
      name: "Prerna Maheshwari",
      linkedin: ""
    },
    {
      name: "Sidhanshu Monga",
      linkedin: "https://www.linkedin.com/in/sidhanshumonga/"
    }
  ]

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
              About Us
            </motion.h1>
            <motion.p 
              className="text-xl text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Building a brighter future through compassion, innovation, and community empowerment.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Mission & Vision Section */}
        <div className="relative mb-32">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="h-2 bg-gradient-to-r from-orange-500 to-orange-600" />
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed">
                  To empower individuals and communities through holistic development initiatives that prioritize mental health, 
                  child welfare, and women's empowerment. Vikasalaya Foundation is committed to breaking barriers, fostering 
                  resilience, and creating sustainable change for a brighter, more inclusive future.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="h-2 bg-gradient-to-r from-green-500 to-green-600" />
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
                <p className="text-gray-600 leading-relaxed">
                  A world where every individual has access to the resources, support, and opportunities needed to thrive—regardless 
                  of social or economic barriers. We envision a future where mental health is openly supported, children grow up in 
                  nurturing environments, and women are empowered to lead and succeed in all aspects of life.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Core Values Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500/10 to-green-500/10 
                    flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Team Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Team</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-6 
                  hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br 
                    from-orange-500/10 to-green-500/10 flex items-center justify-center
                    group-hover:scale-110 transition-transform duration-500">
                    <Users className="w-12 h-12 text-primary" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-primary hover:text-primary-dark 
                          transition-colors duration-300"
                      >
                        <span>View Profile</span>
                        <svg
                          className="w-4 h-4 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  )
}
