'use client'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { getCalApi } from "@calcom/embed-react"
import { Calendar } from 'lucide-react'

export default function EventsPage() {
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
              Upcoming Events
            </motion.h1>
            <motion.p 
              className="text-xl text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Stay tuned for our upcoming events and initiatives.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Coming Soon Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl shadow-xl p-12 text-center"
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-800/10 to-green-800/10 
              flex items-center justify-center mb-6 mx-auto">
              <Calendar className="w-10 h-10 text-orange-800" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Events Coming Soon</h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              We're currently planning exciting events and initiatives. 
              Subscribe to our newsletter or follow us on social media to stay updated.
            </p>
            <button 
              data-cal-link="vikasalaya/meeting" 
              data-cal-config='{"theme":"light"}'
              className="px-8 py-4 bg-gradient-to-r from-orange-800 to-green-800 text-white rounded-full
                       font-semibold text-lg transition-all duration-300 transform hover:scale-105
                       shadow-lg hover:shadow-xl hover:opacity-90"
            >
              Schedule a Meeting
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
