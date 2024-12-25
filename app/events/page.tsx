'use client'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { getCalApi } from "@calcom/embed-react"
import { Calendar, ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/ui/page-hero'

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
    <div className="min-h-screen bg-gradient-natural">
      <PageHero
        title="Events"
        description="Stay updated with our upcoming events and initiatives that create positive change."
      />

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-secondary rounded-2xl shadow-xl p-12 text-center"
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 
              flex items-center justify-center mb-6 mx-auto">
              <Calendar className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-text mb-4">Events Coming Soon</h2>
            <p className="text-text-muted text-lg mb-8 mx-auto">
              We're currently planning exciting events and initiative. Follow us on social media to stay updated.
            </p>
            <button 
              data-cal-link="vikasalaya/meeting" 
              data-cal-config='{"theme":"light"}'
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-accent 
                text-secondary rounded-full font-semibold text-lg transition-all duration-300 
                hover:opacity-90 shadow-lg hover:shadow-xl group"
            >
              Schedule a Meeting
              <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
