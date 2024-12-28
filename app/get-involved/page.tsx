'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Users, Handshake, Heart, ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/ui/page-hero'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

const FORM_ID = '1FAIpQLSdiWWjCeoBZBzcwFARULo63aoVgi7PH1VN8k8Eom5T54h8L0Q'

export default function GetInvolvedPage() {
  const searchParams = useSearchParams()
  const sectionParam = searchParams.get('section')
  const [expandedCard, setExpandedCard] = useState<number | null>(null)
  
  useEffect(() => {
    if (sectionParam) {
      const sectionIndex = parseInt(sectionParam)
      if (!isNaN(sectionIndex) && sectionIndex >= 0 && sectionIndex < ways.length) {
        if (sectionIndex === 0) {
          setExpandedCard(0)
        }
        
        setTimeout(() => {
          const element = document.getElementById(`section-${sectionIndex}`)
          if (element) {
            const headerHeight = 80
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
            const offsetPosition = elementPosition - headerHeight - 24

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            })
          }
        }, 100)
      }
    }
  }, [sectionParam])

  const ways = [
    {
      title: "Volunteer",
      description: "Join our team as a volunteer to work directly on our projects, from organizing workshops to assisting in community outreach programs.",
      icon: Users,
      gradient: "from-primary via-primary-light to-accent",
      action: "Apply Now",
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

  const VolunteerForm = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      city: '',
      volunteerType: '',
      interests: '',
      experience: ''
    })

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      
      try {
        const response = await fetch('/api/submit-form', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
        })

        const data = await response.json()
        
        if (data.success) {
          alert('Thank you for your interest! Your application has been submitted.')
          setFormData({
            name: '',
            email: '',
            phone: '',
            city: '',
            volunteerType: '',
            interests: '',
            experience: ''
          })
        } else {
          throw new Error('Failed to submit form')
        }
      } catch (error) {
        console.error('Error:', error)
        alert('Sorry, there was an error. Please try again.')
      }
    }

    return (
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-text-muted mb-2">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
              required
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text-muted mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})}
              required
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text-muted mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={e => setFormData({...formData, phone: e.target.value})}
              required
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text-muted mb-2">
              City <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.city}
              onChange={e => setFormData({...formData, city: e.target.value})}
              required
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-text-muted mb-2">
            Type of Volunteering <span className="text-red-500">*</span>
          </label>
          <select
            value={formData.volunteerType}
            onChange={e => setFormData({...formData, volunteerType: e.target.value})}
            required
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0"
          >
            <option value="">Select an option</option>
            <option value="Regular">Regular Volunteer</option>
            <option value="Skill-based">Skill-based Volunteer</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-text-muted mb-2">
            Areas of Interest/Skills <span className="text-red-500">*</span>
          </label>
          <textarea
            value={formData.interests}
            onChange={e => setFormData({...formData, interests: e.target.value})}
            required
            rows={4}
            placeholder="Please list your areas of interest and any relevant skills you can contribute..."
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-text-muted mb-2">
            Previous Volunteer Experience
          </label>
          <textarea
            value={formData.experience}
            onChange={e => setFormData({...formData, experience: e.target.value})}
            rows={4}
            placeholder="Tell us about any previous volunteer experience..."
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0"
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
    )
  }

  return (
    <div className="min-h-screen bg-gradient-natural">
      <PageHero
        title="Get Involved"
        description="Join us in our mission to create lasting change. Every contribution makes a difference."
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-min">
          {ways.map((way, index) => (
            <motion.div
              key={way.title}
              id={`section-${index}`}
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
                  className="border-t-2 border-gray-100 p-6"
                >
                  <VolunteerForm />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}