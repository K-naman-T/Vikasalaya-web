"use client"
import { motion } from "framer-motion"
import { Heart, Users, Lightbulb, Shield, Leaf } from 'lucide-react'
import Image from 'next/image'
import { PageHero } from '@/components/ui/page-hero'
import { GradientCard } from '@/components/ui/gradient-card'
import { GradientIcon } from '@/components/ui/gradient-icon'
import { SectionHeader } from '@/components/ui/section-header'

export default function AboutPage() {
  const coreValues = [
    {
      title: "Compassion",
      description: "We believe in the power of empathy and kindness to drive change. Our programs are designed to meet the unique needs of each community with understanding and care.",
      icon: Heart,
      gradient: "from-primary via-primary-light to-accent"
    },
    {
      title: "Inclusivity", 
      description: "We are committed to creating spaces where all voices are heard and respected. Our work embraces diversity and ensures equal opportunities for everyone, regardless of background.",
      icon: Users,
      gradient: "from-accent via-accent-light to-primary-light"
    },
    {
      title: "Empowerment",
      description: "We aim to build self-reliance and confidence, enabling individuals to take charge of their own lives and create positive change within their communities.",
      icon: Lightbulb,
      gradient: "from-primary-dark via-primary to-accent-light"
    },
    {
      title: "Integrity",
      description: "We operate with transparency, accountability, and ethical practices. Every action is guided by honesty and a commitment to uphold trust within the communities we serve.",
      icon: Shield,
      gradient: "from-primary via-accent to-primary-light"
    },
    {
      title: "Sustainability",
      description: "Our approach is rooted in long-term impact, creating programs that promote sustainable growth and development to benefit future generations.",
      icon: Leaf,
      gradient: "from-accent via-primary to-accent-light"
    }
  ]

  const team = [
    {
      name: "Vikash Kumar Paul",
      linkedin: "https://www.linkedin.com/in/vikash-kumar-paul-3035ba26b/",
      image: "/images/pfp/vikash.png",
      gradient: "from-primary via-primary-light to-accent"
    },
    {
      name: "Priyadarshni Rawal",
      linkedin: "https://www.linkedin.com/in/priyadarshni-rawal-96162863/",
      image: "/images/pfp/priya.jpeg",
      gradient: "from-accent via-accent-light to-primary-light"
    },
    {
      name: "Prerna Maheshwari",
      linkedin: "https://www.linkedin.com/in/prerna-maheshwari-183a05a7/",
      image: "/images/pfp/prerna.png",
      gradient: "from-primary-dark via-primary to-accent-light"
    },
    {
      name: "Sidhanshu Monga",
      linkedin: "https://www.linkedin.com/in/sidhanshumonga/",
      image: "/images/pfp/sidhanshu.jpeg",
      gradient: "from-primary via-accent to-primary-light"
    },
    {
      name: "Ellahi Bilal",
      linkedin: "https://www.linkedin.com/in/ellahi-bilal-642611118",
      image: "/images/pfp/bilal.jpeg",
      gradient: "from-primary-dark via-primary to-accent-light"
    },
    {
      name: "Dr. Chefriesh R B",
      linkedin: "https://www.linkedin.com/in/dr-chefriesh-rb",
      image: "/images/pfp/chefreish.jpeg",
      gradient: "from-primary-dark via-primary to-accent-light"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-natural">
      <PageHero
        title="About Us"
        description="Building a brighter future through compassion, innovation, and community empowerment."
      />
      
      <div className="container mx-auto px-4 py-16">
        {/* Mission & Vision Section */}
        <div className="relative mb-32">
          <div className="grid md:grid-cols-2 gap-8">
            <GradientCard
              gradient="from-primary via-primary-light to-accent"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="p-8">
                <h2 className="text-3xl font-bold text-text mb-6">Our Mission</h2>
                <p className="text-text-muted leading-relaxed">
                  To empower individuals and communities through holistic development initiatives that prioritize mental health, 
                  child welfare, and women's empowerment. Vikasalaya Foundation is committed to breaking barriers, fostering 
                  resilience, and creating sustainable change for a brighter, more inclusive future.
                </p>
              </div>
            </GradientCard>

            <GradientCard
              gradient="from-accent via-accent-light to-primary-light"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="p-8">
                <h2 className="text-3xl font-bold text-text mb-6">Our Vision</h2>
                <p className="text-text-muted leading-relaxed">
                  A world where every individual has access to the resources, support, and opportunities needed to thrive—regardless 
                  of social or economic barriers. We envision a future where mental health is openly supported, children grow up in 
                  nurturing environments, and women are empowered to lead and succeed in all aspects of life.
                </p>
              </div>
            </GradientCard>
          </div>
        </div>

        {/* Core Values Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <SectionHeader
            title="Our Core Values"
            description="The principles that guide our mission and shape our impact"
            className="mb-16"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative text-center"
              >
                <GradientIcon
                  Icon={value.icon}
                  gradient={value.gradient}
                  size="lg"
                  className="group-hover:scale-110 transition-transform duration-500 cursor-pointer mx-auto"
                />
                <h3 className="text-lg md:text-xl font-bold text-text mt-4 mb-2">{value.title}</h3>
                <div className="absolute left-1/2 -translate-x-1/2 w-64 p-4 bg-secondary rounded-lg shadow-xl 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none
                  mt-2 z-10">
                  <p className="text-sm text-text-muted">{value.description}</p>
                </div>
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
          <h2 className="text-4xl font-bold text-center text-text mb-16">Our Team</h2>
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
                <div className="bg-secondary rounded-2xl shadow-xl overflow-hidden p-6 
                  hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                  <div className={`w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r ${member.gradient}
                    p-[2px] group-hover:scale-110 transition-transform duration-500 overflow-hidden`}>
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={96}
                        height={96}
                        className="w-full h-full rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full rounded-full bg-secondary flex items-center justify-center">
                        <Users className="w-12 h-12 text-primary" />
                      </div>
                    )}
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-text mb-2">{member.name}</h3>
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
