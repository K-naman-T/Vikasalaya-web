"use client"
import { motion } from "framer-motion"

export default function AboutPage() {
  const coreValues = [
    {
      title: "Compassion",
      description: "We believe in the power of empathy and kindness to drive change. Our programs are designed to meet the unique needs of each community with understanding and care."
    },
    {
      title: "Inclusivity",
      description: "We are committed to creating spaces where all voices are heard and respected. Our work embraces diversity and ensures equal opportunities for everyone, regardless of background."
    },
    {
      title: "Empowerment",
      description: "We aim to build self-reliance and confidence, enabling individuals to take charge of their own lives and create positive change within their communities."
    },
    {
      title: "Integrity",
      description: "We operate with transparency, accountability, and ethical practices. Every action is guided by honesty and a commitment to uphold trust within the communities we serve."
    },
    {
      title: "Sustainability",
      description: "Our approach is rooted in long-term impact, creating programs that promote sustainable growth and development to benefit future generations."
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
    <div className="container mx-auto px-4 py-12">
      {/* Mission Section */}
      <motion.section 
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-3xl font-bold text-center mb-6">Our Mission</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center">
          To empower individuals and communities through holistic development initiatives that prioritize mental health, 
          child welfare, and women's empowerment. Vikasalaya Foundation is committed to breaking barriers, fostering 
          resilience, and creating sustainable change for a brighter, more inclusive future.
        </p>
      </motion.section>

      {/* Vision Section */}
      <motion.section 
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold text-center mb-6">Our Vision</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center">
          A world where every individual has access to the resources, support, and opportunities needed to thrive—regardless 
          of social or economic barriers. We envision a future where mental health is openly supported, children grow up in 
          nurturing environments, and women are empowered to lead and succeed in all aspects of life.
        </p>
      </motion.section>

      {/* Core Values Section */}
      <motion.section 
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-3xl font-bold text-center mb-12">Core Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreValues.map((value, index) => (
            <motion.div 
              key={value.title}
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-yellow-500 mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <motion.div 
              key={member.name}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
            >
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">{member.name}</h3>
              {member.linkedin && (
                <a 
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  LinkedIn Profile
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  )
}
