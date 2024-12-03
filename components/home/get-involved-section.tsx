'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Users, Gift } from 'lucide-react'

export function GetInvolvedSection() {
  const ways = [
    {
      title: "Skill-Based Volunteering",
      description: "Leverage your professional skills to make a meaningful impact in our programs.",
      icon: Users,
      gradient: "from-gray-50 to-white",
      borderColor: "border-gray-200",
      iconColor: "text-yellow-500",
    },
    {
      title: "Volunteer with Us",
      description: "Join our community of dedicated volunteers and make a direct impact in the lives of those we serve.",
      icon: Users,
      gradient: "from-gray-50 to-white",
      borderColor: "border-gray-200",
      iconColor: "text-yellow-500",
    },
    {
      title: "Become a Donor",
      description: "Your contributions make a lasting impact. Support our mission by donating to our programs in mental health, child welfare, and women's empowerment.",
      icon: Gift,
      gradient: "from-gray-50 to-white",
      borderColor: "border-gray-200",
      iconColor: "text-yellow-500",
    },
  ]

  return (
    <section id="get-involved" className="py-24 relative overflow-hidden bg-gray-50">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-gray-900">
            Get Involved
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join us in our mission to create lasting change. There are many ways you can contribute to our cause.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {ways.map((way, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`p-8 rounded-2xl bg-gradient-to-br ${way.gradient} border ${way.borderColor} hover:border-yellow-400 transition-all duration-300 group hover:shadow-lg`}
            >
              <way.icon className={`w-12 h-12 ${way.iconColor} mb-6 transform transition-transform group-hover:scale-110`} />
              <h3 className="text-2xl font-playfair font-bold mb-4 text-gray-900">
                {way.title}
              </h3>
              <p className="text-gray-600">
                {way.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 