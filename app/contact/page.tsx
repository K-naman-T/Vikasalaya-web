'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { getCalApi } from "@calcom/embed-react"
import { Mail, Phone, Building2, MapPin, ExternalLink, Calendar, Facebook, ArrowRight } from 'lucide-react'

const locations = [
  {
    name: "Headquarters - Dhanbad",
    address: "Pradhan Khanta, Baliapur, Dhanbad",
    region: "East India",
    coordinates: "23.7957885,86.4266154",
    isHQ: true
  },
  {
    name: "Bangalore Office",
    address: "Ohana 857, KR Puram, Bangalore, 560049",
    region: "South India",
    coordinates: "13.0219499,77.7027300",
    isHQ: false
  }
]

// Center coordinates for India
const INDIA_CENTER = "20.5937,78.9629"

export default function ContactPage() {
  const [selectedLocation, setSelectedLocation] = useState(locations[0])

  useEffect(() => {
    (async function () {
      const cal = await getCalApi()
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#FF7A00" } },
      })
    })()
  }, [])

  // Construct the map URL with all markers
  const getMapUrl = () => {
    const baseUrl = "https://www.google.com/maps/embed/v1/view"
    const markers = locations.map(loc => 
      `&markers=icon:${loc.isHQ ? 'https://maps.google.com/mapfiles/ms/icons/red-dot.png' : 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png'}|${loc.coordinates}`
    ).join('')
    
    return `${baseUrl}?key=YOUR_GOOGLE_MAPS_API_KEY&center=${INDIA_CENTER}&zoom=5${markers}`
  }

  return (
    <div className="min-h-screen bg-gradient-natural">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-black/40" />
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-5xl font-bold text-secondary mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Get in Touch
            </motion.h1>
            <motion.p 
              className="text-xl text-secondary/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Have questions? We'd love to hear from you. Schedule a meeting or reach out directly.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Schedule Meeting Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-secondary rounded-2xl shadow-xl p-8"
          >
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 
                flex items-center justify-center">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-text">Schedule a Meeting</h2>
                <p className="text-text-muted">Choose a convenient time to discuss how we can help.</p>
              </div>
            </div>
            <button 
              data-cal-link="vikasalaya/meeting" 
              data-cal-config='{"theme":"light"}'
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-accent 
                text-secondary rounded-full font-semibold text-lg transition-all duration-300 
                hover:opacity-90 shadow-lg hover:shadow-xl group"
            >
              Schedule Now
              <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Location Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-secondary rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="p-8 border-b">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-dark/10 to-secondary/10 
                  flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-primary-dark" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Our Locations</h2>
                  <p className="text-gray-600">Find us across India</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3">
              {/* Location List */}
              <div className="p-6 space-y-6">
                {locations.map((location) => (
                  <div 
                    key={location.name}
                    onClick={() => setSelectedLocation(location)}
                    className={`p-4 cursor-pointer rounded-xl transition-all duration-200
                      ${selectedLocation.name === location.name 
                        ? 'bg-primary-dark/5 shadow-md' 
                        : 'hover:bg-gray-50'}`}
                  >
                    <div className="flex items-start gap-4">
                      <MapPin 
                        className={`w-5 h-5 flex-shrink-0 mt-1 
                          ${location.isHQ ? 'text-primary-dark' : 'text-secondary'}`} 
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-gray-900">{location.name}</h3>
                          {location.isHQ && (
                            <span className="text-xs px-2 py-0.5 bg-primary-dark/10 text-primary-dark rounded-full">
                              HQ
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{location.address}</p>
                        <p className="text-sm text-primary-dark mt-2">{location.region}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Display */}
              <div className="md:col-span-2 relative">
                <div className="aspect-video md:h-full w-full min-h-[400px]">
                  <iframe
                    src={getMapUrl()}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${selectedLocation.coordinates}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 px-4 py-2 bg-white rounded-lg shadow-lg 
                    flex items-center gap-2 text-sm font-medium text-gray-700 hover:bg-gray-50 
                    transition-colors duration-200"
                >
                  Open in Google Maps
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Quick Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-secondary rounded-2xl shadow-xl p-8"
          >
            <h2 className="text-2xl font-bold text-text mb-8">Quick Contact</h2>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 
                  flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-text">Email</p>
                  <a href="mailto:vikasalaya@gmail.com" 
                     className="text-primary hover:text-accent transition-colors">
                    vikasalaya@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-dark/10 to-secondary/10 
                  flex items-center justify-center">
                  <Phone className="w-6 h-6 text-orange-800" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Phone</p>
                  <p className="text-gray-600">7204453790; 8088212774</p>
                </div>
              </div>

              <div>
                <p className="font-medium text-gray-900 mb-4">Connect With Us</p>
                <div className="flex gap-6">
                  <a
                    href="https://www.facebook.com/vikasalaya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br from-primary-dark/10 to-secondary/10 
                      flex items-center justify-center transition-transform hover:scale-110`}
                    aria-label="Facebook"
                    >
                      <Facebook className="w-6 h-6" />
                    </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
