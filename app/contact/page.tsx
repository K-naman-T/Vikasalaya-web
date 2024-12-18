'use client'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { getCalApi } from "@calcom/embed-react"
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook, Calendar } from 'lucide-react'

export default function ContactPage() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi()
      cal("ui", {
        theme: "light",
        styles: {
          branding: { brandColor: "#FF7A00" },
        },
      })
    })()
  }, [])

  const locations = [
    {
      city: "Dhanbad",
      address: "Pradhan Khanta, Baliapur, Dhanbad",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29221.937969283572!2d86.48897429851438!3d23.720896919311663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f69588e372c699%3A0x8c607f1f9a23ed4a!2sBaliapur%2C%20Jharkhand%20828201!5e0!3m2!1sen!2sin!4v1733499363430!5m2!1sen!2sin"
    },
    {
      city: "Bangalore",
      address: "Ohana 857, KR Puram, Bangalore, 560049",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.215936920719!2d77.71276547488108!3d13.021916587298069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae104c3eac4347%3A0xfff5c57cacfadf9!2sOhana%20857!5e0!3m2!1sen!2sin!4v1733499437758!5m2!1sen!2sin"
    }
  ]

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/vikasalaya/",
      color: "hover:text-pink-600"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/vikasalaya-foundation-253323258",
      color: "hover:text-blue-600"
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/people/Vikasalaya-Vikasalaya/100087451647205/",
      color: "hover:text-blue-500"
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
              Get in Touch
            </motion.h1>
            <motion.p 
              className="text-xl text-white/90"
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
        <div className="max-w-6xl mx-auto">
          {/* Schedule Meeting Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-xl p-8 mb-12"
          >
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-800/10 to-green-800/10 
                flex items-center justify-center">
                <Calendar className="w-8 h-8 text-orange-800" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Schedule a Meeting</h2>
                <p className="text-gray-600">Choose a convenient time to discuss how we can help.</p>
              </div>
            </div>
            <button 
              data-cal-link="vikasalaya/meeting" 
              data-cal-config='{"theme":"light"}'
              className="px-8 py-4 bg-gradient-to-r from-orange-800 to-green-800 text-white rounded-full
                       font-semibold text-lg transition-all duration-300 transform hover:scale-105
                       shadow-lg hover:shadow-xl hover:opacity-90"
            >
              Schedule Now
            </button>
          </motion.div>

          {/* Contact Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Locations Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Locations</h2>
              <div className="space-y-8">
                {locations.map((location, index) => (
                  <div key={location.city} className="space-y-4">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-5 h-5 text-orange-800 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900">{location.city} Office</h3>
                        <p className="text-gray-600">{location.address}</p>
                      </div>
                    </div>
                    <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                      <iframe
                        src={location.mapUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Contact Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Quick Contact</h2>
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-800/10 to-green-800/10 
                    flex items-center justify-center">
                    <Mail className="w-6 h-6 text-orange-800" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <a href="mailto:vikasalaya@gmail.com" 
                       className="text-orange-800 hover:text-green-800 transition-colors">
                      vikasalaya@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-800/10 to-green-800/10 
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
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br from-orange-800/10 to-green-800/10 
                          flex items-center justify-center transition-transform hover:scale-110 ${social.color}`}
                        aria-label={social.name}
                      >
                        <social.icon className="w-6 h-6" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
