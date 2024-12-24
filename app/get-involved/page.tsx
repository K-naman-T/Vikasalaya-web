'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Users, Handshake, Heart, ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/ui/page-hero'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

const ways = [
  {
    title: "Volunteer",
    description: "Join our team as a volunteer to work directly on our projects, from organizing workshops to assisting in community outreach programs.",
    icon: Users,
    gradient: "from-primary via-primary-light to-accent",
    action: "Get Started",
    expandable: true
  },
  {
    title: "Fundraiser", 
    description: "Organize a fundraiser to support our cause, whether it's a walkathon, a marathon, or a virtual event.",
    icon: Handshake,
    gradient: "from-accent via-accent-light to-primary-light",
    action: "Learn More",
    link: "/contact"
  },
  {
    title: "Careers",
    description: "Interested in joining our team? Email us your resume and cover letter.",
    icon: Heart,
    gradient: "from-primary-dark via-primary to-accent-light", 
    action: "Email Us",
    link: "mailto:vikasalaya@gmail.com"
  }
]

export default function GetInvolvedPage() {
  const searchParams = useSearchParams()
  const sectionParam = searchParams.get('section')
  
  useEffect(() => {
    if (sectionParam) {
      const sectionIndex = parseInt(sectionParam)
      if (!isNaN(sectionIndex) && sectionIndex >= 0 && sectionIndex < ways.length) {
        if (sectionIndex === 0) {
          setExpandedCard(0)
        }
        const element = document.getElementById(`section-${sectionIndex}`)
        element?.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [sectionParam])

  const [expandedCard, setExpandedCard] = useState<number | null>(null)
  const [volunteerType, setVolunteerType] = useState<'skill' | 'regular' | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    interests: '',
    experience: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ type: volunteerType, ...formData })
  }

  return (
    <div className="min-h-screen bg-gradient-natural">
      <div className="relative">
        <PageHero
          title="Get Involved"
          description="Join us in our mission to create lasting change. Every contribution makes a difference."
        />

        {/* Content Section */}
        <div id="get-involved-content" className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-min">
            {ways.map((way, index) => (
              <motion.div
                key={way.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-secondary rounded-2xl shadow-xl overflow-hidden
                  ${expandedCard === index ? 'md:col-span-3' : ''}`}
              >
                {way.expandable ? (
                  <div 
                    onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                    className="cursor-pointer group"
                  >
                    <div className={`h-2 bg-gradient-to-r ${way.gradient}`} />
                    <div className="p-6">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${way.gradient} 
                        p-[2px] mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <div className="w-full h-full rounded-full bg-secondary flex items-center justify-center">
                          <way.icon className="w-6 h-6 text-text-muted group-hover:text-primary" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-text mb-3">{way.title}</h3>
                      <p className="text-text-muted mb-6">{way.description}</p>
                      <span className="inline-flex items-center text-primary font-medium">
                        {way.action} <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                ) : (
                  <Link href={way.link || '#'} className="group">
                    <div className={`h-2 bg-gradient-to-r ${way.gradient}`} />
                    <div className="p-6">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${way.gradient} 
                        p-[2px] mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <div className="w-full h-full rounded-full bg-secondary flex items-center justify-center">
                          <way.icon className="w-6 h-6 text-text-muted group-hover:text-primary" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-text mb-3">{way.title}</h3>
                      <p className="text-text-muted mb-6">{way.description}</p>
                      <span className="inline-flex items-center text-primary font-medium">
                        {way.action} <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                )}

                {expandedCard === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t-2 border-gray-100"
                  >
                    <div className="p-6">
                      <div className="grid grid-cols-2 gap-4 mb-8">
                        <button
                          onClick={() => setVolunteerType('skill')}
                          className={`p-4 rounded-xl border-2 transition-all
                            ${volunteerType === 'skill' ? 'border-primary bg-primary/5' : 'border-gray-200'}`}
                        >
                          <h3 className="font-bold text-text mb-2">Skill-based Volunteering</h3>
                          <p className="text-sm text-text-muted">Contribute your professional skills and expertise</p>
                        </button>
                        <button
                          onClick={() => setVolunteerType('regular')}
                          className={`p-4 rounded-xl border-2 transition-all
                            ${volunteerType === 'regular' ? 'border-primary bg-primary/5' : 'border-gray-200'}`}
                        >
                          <h3 className="font-bold text-text mb-2">Regular Volunteering</h3>
                          <p className="text-sm text-text-muted">Support our day-to-day activities and events</p>
                        </button>
                      </div>

                      {volunteerType && (
                        <form onSubmit={handleSubmit} className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <label className="block text-sm font-medium text-text-muted mb-2">Name</label>
                              <input
                                type="text"
                                required
                                className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-primary focus:ring-0"
                                onChange={e => setFormData({...formData, name: e.target.value})}
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-text-muted mb-2">Email</label>
                              <input
                                type="email"
                                required
                                className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-primary focus:ring-0"
                                onChange={e => setFormData({...formData, email: e.target.value})}
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <label className="block text-sm font-medium text-text-muted mb-2">Phone</label>
                              <input
                                type="tel"
                                required
                                className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-primary focus:ring-0"
                                onChange={e => setFormData({...formData, phone: e.target.value})}
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-text-muted mb-2">City</label>
                              <input
                                type="text"
                                required
                                className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-primary focus:ring-0"
                                onChange={e => setFormData({...formData, city: e.target.value})}
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-text-muted mb-2">
                              {volunteerType === 'skill' ? 'Skills & Expertise' : 'Areas of Interest'}
                            </label>
                            <textarea
                              required
                              className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-primary focus:ring-0"
                              rows={3}
                              onChange={e => setFormData({...formData, interests: e.target.value})}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-text-muted mb-2">
                              {volunteerType === 'skill' ? 'Relevant Experience' : 'Previous Volunteer Experience (if any)'}
                            </label>
                            <textarea
                              className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-primary focus:ring-0"
                              rows={3}
                              onChange={e => setFormData({...formData, experience: e.target.value})}
                            />
                          </div>
                          <button
                            type="submit"
                            className="w-full py-3 bg-gradient-to-r from-primary to-accent 
                              text-secondary rounded-xl font-bold shadow-lg 
                              hover:shadow-xl transition-all duration-300"
                          >
                            Submit Application
                          </button>
                        </form>
                      )}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}