'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Cal from '@calcom/embed-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-primary-light py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Schedule a meeting or reach out to us directly. We're here to help!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Calendar Embed */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-6">Schedule a Meeting</h2>
            <div className="aspect-video">
              <Cal 
                calLink="vikasalaya/meeting"  // Replace with your Cal.com link
                style={{width: "100%", height: "100%", overflow: "hidden"}}
                config={{
                  name: "Vikasalaya Foundation",
                  email: "vikasalaya@gmail.com",
                  theme: "light",
                  hideEventTypeDetails: "false",
                }}
              />
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            {/* Quick Contact */}
            <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
              <h2 className="text-2xl font-semibold mb-6">Quick Contact</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-700">Email</h3>
                  <p className="text-primary-dark">vikasalaya@gmail.com</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700">Phone</h3>
                  <p>7204453790; 8088212774</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700">Social Media</h3>
                  <div className="flex space-x-4 mt-2">
                    <a href="https://www.instagram.com/vikasalaya/" 
                       className="text-gray-600 hover:text-primary-dark"
                       target="_blank"
                       rel="noopener noreferrer"
                    >
                      Instagram
                    </a>
                    <a href="https://www.linkedin.com/in/vikasalaya-foundation-253323258" 
                       className="text-gray-600 hover:text-primary-dark"
                       target="_blank"
                       rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                    <a href="https://www.facebook.com/people/Vikasalaya-Vikasalaya/100087451647205/" 
                       className="text-gray-600 hover:text-primary-dark"
                       target="_blank"
                       rel="noopener noreferrer"
                    >
                      Facebook
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Locations */}
            <div className="space-y-8">
              {[
                {
                  city: "Dhanbad",
                  address: "Pradhan Khanta, Baliapur, Dhanbad",
                  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14577.035913..." // Replace with actual map URL
                },
                {
                  city: "Bangalore",
                  address: "Ohana 857, KR Puram, Bangalore, 560049",
                  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15554.890..." // Replace with actual map URL
                }
              ].map((location, index) => (
                <motion.div
                  key={location.city}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.2 }}
                  className="bg-white p-8 rounded-lg shadow-lg"
                >
                  <h2 className="text-2xl font-semibold mb-4">{location.city} Office</h2>
                  <p className="text-gray-600 mb-4">{location.address}</p>
                  <div className="relative h-[300px] rounded-lg overflow-hidden">
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
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
