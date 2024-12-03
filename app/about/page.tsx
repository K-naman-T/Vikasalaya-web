"use client"
import { motion } from "framer-motion"
import { Heart, Users, Lightbulb, Shield, Leaf } from 'lucide-react'

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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-12">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="container mx-auto px-4 py-16 relative">
        {/* Mission & Vision Combined Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <motion.div 
            className="bg-white p-8 rounded-2xl shadow-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-yellow-600">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To empower individuals and communities through holistic development initiatives that prioritize mental health, 
              child welfare, and women's empowerment. Vikasalaya Foundation is committed to breaking barriers, fostering 
              resilience, and creating sustainable change for a brighter, more inclusive future.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white p-8 rounded-2xl shadow-lg"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-yellow-600">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              A world where every individual has access to the resources, support, and opportunities needed to thrive—regardless 
              of social or economic barriers. We envision a future where mental health is openly supported, children grow up in 
              nurturing environments, and women are empowered to lead and succeed in all aspects of life.
            </p>
          </motion.div>
        </div>

        {/* Core Values Section */}
        <motion.section 
          className="mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-4xl font-bold text-center mb-16">Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div 
                key={value.title}
                className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <div className="mb-4 flex justify-center">
                  <div className="p-4 rounded-full bg-yellow-50 group-hover:bg-yellow-100 transition-colors">
                    <value.icon className="w-8 h-8 text-yellow-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2 text-yellow-600">{value.title}</h3>
                <p className="text-gray-600 text-center text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Team Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-4xl font-bold text-center mb-16">Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <motion.div 
                key={member.name}
                className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <div className="w-32 h-32 bg-yellow-50 rounded-full mx-auto mb-4 group-hover:bg-yellow-100 transition-colors" />
                <h3 className="font-semibold text-lg mb-2 text-yellow-600">{member.name}</h3>
                {member.linkedin && (
                  <a 
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-yellow-600 transition-colors text-sm"
                  >
                    LinkedIn Profile
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  )
}
