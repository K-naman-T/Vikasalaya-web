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
        styles: { branding: { brandColor: "#FF7A00" } },
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
          </motion.div>
        </div>
      </div>
    </div>
  )
}
