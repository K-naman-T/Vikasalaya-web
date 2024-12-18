'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Users, Gift, Briefcase, Brain, HandHeart, ArrowRight } from 'lucide-react'

export function GetInvolvedSection() {
  const ways = [
    {
      title: "Donate",
      description: "Your contributions make a lasting impact. Support our mission by donating to our programs in mental health, child welfare, and women's empowerment. Every donation helps us reach more people and transform lives.",
      icon: Gift,
      gradient: "from-orange-800 to-orange-700",
      action: "Become a Donor",
      link: "/donate"
    },
    {
      title: "Volunteer with Us",
      description: "Join our team as a volunteer to work directly on our projects, from organizing workshops to assisting in community outreach programs.",
      icon: Users,
      gradient: "from-green-800 to-green-700",
      action: "Get Started",
      link: "/volunteer"
    },
    {
      title: "Partner with Us",
      description: "Collaborate with us as a partner organization, sponsor, or community ally to expand our initiatives and reach more people in need.",
      icon: Briefcase,
      gradient: "from-orange-800 to-green-800",
      action: "Learn More",
      link: "/partner"
    },
    {
      title: "Skill-Based Volunteering",
      description: "Use your skills to contribute—whether it's in marketing, counselling, teaching, or administration. Your expertise can make a big difference.",
      icon: Brain,
      gradient: "from-green-700 to-orange-700",
      action: "Share Your Skills",
      link: "/skills"
    },
    {
      title: "Become a Fundraiser",
      description: "Organize your own fundraising events to support our causes and involve your community in making a difference.",
      icon: HandHeart,
      gradient: "from-orange-700 to-green-700",
      action: "Start Fundraising",
      link: "/fundraise"
    }
  ]

  return (
    <section id="get-involved" className="py-24 bg-gradient-to-b from-green-50/40 via-orange-50/30 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get Involved</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-800 to-green-800 mx-auto mb-6" />
          <p className="text-xl text-gray-600 mx-auto">
            Join us in our mission to create lasting change. Every contribution makes a difference.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ways.map((way, index) => (
            <motion.div
              key={way.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
            >
              <div className={`h-2 bg-gradient-to-r ${way.gradient}`} />
              <div className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-800/10 to-green-800/10 
                  flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <way.icon className="w-8 h-8 text-orange-800" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{way.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{way.description}</p>
                <Link 
                  href={way.link}
                  className={`inline-flex items-center px-6 py-3 rounded-full text-white 
                    bg-gradient-to-r ${way.gradient} hover:opacity-90 transition-opacity`}
                >
                  {way.action}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 