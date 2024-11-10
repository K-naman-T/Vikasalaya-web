'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MagicCard } from '@/components/ui/magic-card'
import { MagicButton } from '@/components/ui/magic-button'
import { HandHeart, Handshake, Brain, HeartHandshake, Gift } from 'lucide-react'

export function GetInvolvedSection() {
  const opportunities = [
    {
      title: "Volunteer with Us",
      description: "Join our team as a volunteer to work directly on our projects, from organizing workshops to assisting in community outreach programs.",
      icon: HandHeart,
      gradient: "from-yellow-500/10 to-yellow-500/5",
      hoverGradient: "hover:from-yellow-500/20 hover:to-yellow-500/10",
      iconColor: "text-yellow-600",
    },
    {
      title: "Partner with Us",
      description: "Collaborate with us as a partner organization, sponsor, or community ally to expand our initiatives and reach more people in need.",
      icon: Handshake,
      gradient: "from-orange-500/10 to-orange-500/5",
      hoverGradient: "hover:from-orange-500/20 hover:to-orange-500/10",
      iconColor: "text-orange-600",
    },
    {
      title: "Skill-Based Volunteering",
      description: "Use your skills to contribute—whether it's in marketing, counselling, teaching, or administration. Your expertise can make a big difference.",
      icon: Brain,
      gradient: "from-rose-500/10 to-rose-500/5",
      hoverGradient: "hover:from-rose-500/20 hover:to-rose-500/10",
      iconColor: "text-rose-600",
    },
    {
      title: "Become a Fundraiser",
      description: "Organize your own fundraising events to support our causes and involve your community in making a difference.",
      icon: HeartHandshake,
      gradient: "from-pink-500/10 to-pink-500/5",
      hoverGradient: "hover:from-pink-500/20 hover:to-pink-500/10",
      iconColor: "text-pink-600",
    },
    {
      title: "Become a Donor",
      description: "Your contributions make a lasting impact. Support our mission by donating to our programs in mental health, child welfare, and women's empowerment.",
      icon: Gift,
      gradient: "from-purple-500/10 to-purple-500/5",
      hoverGradient: "hover:from-purple-500/20 hover:to-purple-500/10",
      iconColor: "text-purple-600",
    },
  ]

  return (
    <section className="py-24 relative overflow-hidden bg-gray-50">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,#FFE28419,transparent)]" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Get Involved</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join us in making a difference. There are many ways you can contribute to our mission.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {opportunities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <MagicCard 
                className={`group h-full backdrop-blur-sm bg-white/50 border-0
                  transition-all duration-300 hover:shadow-xl hover:-translate-y-1
                  bg-gradient-to-br ${item.gradient} ${item.hoverGradient}`}
              >
                <div className="p-8 relative">
                  {/* Icon with animated background */}
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-white/80 blur-xl rounded-full transform group-hover:scale-110 transition-transform duration-300" />
                    <div className="relative flex justify-center">
                      <item.icon className={`w-10 h-10 ${item.iconColor} transform group-hover:scale-110 transition-all duration-300`} />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 text-center group-hover:text-yellow-700 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 text-center leading-relaxed">
                    {item.description}
                  </p>
                  
                  <MagicButton 
                    className="w-full bg-white/80 backdrop-blur hover:bg-white/90
                      text-gray-800 border border-gray-200 hover:border-yellow-300
                      transform transition-all duration-300 group-hover:shadow-md"
                  >
                    <Link href="/get-involved" className="w-full text-center">
                      Learn More →
                    </Link>
                  </MagicButton>
                </div>
              </MagicCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 