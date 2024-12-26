'use client'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { getCalApi } from "@calcom/embed-react"
import { Mail, Phone, Building2, ExternalLink, Calendar, Facebook, ArrowRight, Linkedin, Instagram, Youtube} from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { PageHero } from '@/components/ui/page-hero'

const Map = dynamic(() => import('./components/map'), { 
  ssr: false,
  loading: () => (
    <div className="h-[500px] w-full bg-gray-100 animate-pulse rounded-lg" />
  )
})

export default function ContactPage() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi()
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#FF7A00" } },
      })
    })()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-natural relative">
      <PageHero
        title="Get in Touch"
        description="Have questions? We'd love to hear from you. Schedule a meeting or reach out directly."
      />

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16 relative z-[5]">
        <div className="max-w-6xl mx-auto space-y-12">

          {/* Schedule Meeting Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-secondary rounded-2xl shadow-xl p-8 relative z-[5]"
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
            <a 
              href="https://cal.com/vikasalaya"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-accent 
                text-secondary rounded-full font-semibold text-lg transition-all duration-300 
                hover:opacity-90 shadow-lg hover:shadow-xl group"
            >
              Schedule Now
              <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Location Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-secondary rounded-2xl shadow-xl overflow-hidden relative"
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

            {/* Map Display */}
            <div className="relative z-[1]">
              <Map />
              <a 
                href={`https://www.openstreetmap.org/#map=5/20.5937/78.9629`}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 px-4 py-2 bg-white rounded-lg shadow-lg 
                  flex items-center gap-2 text-sm font-medium text-gray-700 hover:bg-gray-50 
                  transition-colors duration-200 z-[2]"
              >
                Open in OpenStreetMap
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Quick Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-secondary rounded-2xl shadow-xl p-8 relative z-[5]"
          >
            <h2 className="text-2xl font-bold text-text mb-8">Quick Contact</h2>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 
                  flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-text">Legal Entity</p>
                  <p className="text-text-muted">Vikasalaya Foundation</p>
                </div>
              </div>

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
                  <div className="flex flex-col gap-1">
                    <a href="https://wa.me/917204453790" className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors">
                      +91 72044 53790
                      <FaWhatsapp className="w-4 h-4 text-green-600" />
                    </a>
                    <a href="https://wa.me/918088212774" className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors">
                      +91 80882 12774
                      <FaWhatsapp className="w-4 h-4 text-green-600" />
                    </a>
                  </div>
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
                    <a
                      href="https://www.instagram.com/vikasalaya"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-dark/10 to-secondary/10 
                        flex items-center justify-center transition-transform hover:scale-110"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-6 h-6" />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/vikasalaya"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-dark/10 to-secondary/10 
                        flex items-center justify-center transition-transform hover:scale-110"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a
                      href="https://youtube.com/@vikasalaya?si=TveV85QaHOJP2PK1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-dark/10 to-secondary/10 
                        flex items-center justify-center transition-transform hover:scale-110"
                      aria-label="YouTube"
                    >
                      <Youtube className="w-6 h-6" />
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
