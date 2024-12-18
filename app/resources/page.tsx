"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import YouTube from 'react-youtube'
import { ArrowRight } from 'lucide-react'

// Types
interface Resource {
  title: string
  description: string
  url: string
  date?: string
  type?: 'video' | 'article' | 'report' | 'publication'
  thumbnail?: string
}

const resources: { [key: string]: Resource[] } = {
  media: [
    {
      title: "Community Impact Video",
      description: "Experience the transformative impact of our initiatives through this comprehensive video showcase. Watch how our programs are making a real difference in communities across India.",
      url: "wCHqad7nD84",
      type: "video",
      thumbnail: "/images/community-impact.webp"
    },
    {
      title: "Mental Health Awareness Campaign",
      description: "Our latest campaign highlighting the importance of mental health awareness and support in communities.",
      url: "https://fb.watch/lmDKI9o-G4/?mibextid=RUbZ1f",
      type: "article",
      thumbnail: "/images/mental-health-campaign.webp"
    }
  ],
  reports: [
    {
      title: "Mental Health Awareness for Defense Personnel",
      description: "A comprehensive guide on mental health awareness and support strategies for defense personnel and their families. This report includes detailed findings and recommendations.",
      url: "/reports/Nagpur Activity Report.pdf",
      type: "report",
      date: "2024-03-20"
    },
    {
      title: "Annual Impact Report 2023",
      description: "Explore our comprehensive annual report detailing the impact of our initiatives across mental health, child development, and disaster response programs.",
      url: "#",
      type: "report",
      date: "2024-01-15"
    },
    {
      title: "Community Development Impact Assessment",
      description: "In-depth analysis of our program outcomes and their impact on community development and empowerment.",
      url: "#",
      type: "report",
      date: "2023-12-20"
    }
  ],
  publications: [
    {
      title: "Sustainable Community Development",
      description: "Research paper examining effective strategies for sustainable community development and empowerment initiatives.",
      url: "#",
      type: "publication",
      date: "2024-02-01"
    },
    {
      title: "Mental Health Support Framework",
      description: "Comprehensive overview of our mental health programs, methodologies, and their measured impact on communities.",
      url: "#",
      type: "publication",
      date: "2024-01-10"
    }
  ]
}

export default function ResourcesPage() {
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
              Resources
            </motion.h1>
            <motion.p 
              className="text-xl text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Explore our collection of media, reports, and publications showcasing our work and impact.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          <Tabs defaultValue="media" className="space-y-8">
            <TabsList className="w-full md:w-[400px] grid grid-cols-3 gap-2">
              <TabsTrigger value="media">Media</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
              <TabsTrigger value="publications">Publications</TabsTrigger>
            </TabsList>

            <TabsContent value="media">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-gray-900">Media Resources</CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  {resources.media.map((resource, index) => (
                    <motion.div 
                      key={resource.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="space-y-4"
                    >
                      {resource.type === 'video' ? (
                        <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
                          <YouTube
                            videoId={resource.url}
                            className="w-full h-full"
                            opts={{
                              width: '100%',
                              height: '100%',
                              playerVars: { autoplay: 0 },
                            }}
                          />
                        </div>
                      ) : (
                        <ResourceCard resource={resource} />
                      )}
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reports">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-gray-900">Reports</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {resources.reports.map((resource, index) => (
                    <ResourceCard key={resource.title} resource={resource} index={index} />
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="publications">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-gray-900">Publications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {resources.publications.map((resource, index) => (
                    <ResourceCard key={resource.title} resource={resource} index={index} />
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  )
}

function ResourceCard({ resource, index = 0 }: { resource: Resource; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden"
    >
      <div className="h-2 bg-gradient-to-r from-orange-800 to-green-800" />
      <div className="p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{resource.title}</h3>
        {resource.date && (
          <p className="text-sm text-orange-600 mb-3">{resource.date}</p>
        )}
        <p className="text-gray-600 mb-6 leading-relaxed">{resource.description}</p>
        <a
          href={resource.url}
          className="inline-flex items-center px-6 py-3 rounded-full text-white 
            bg-gradient-to-r from-orange-800 to-green-800 hover:opacity-90 transition-opacity"
        >
          {resource.type === 'report' ? 'Download Report' : 'Read More'}
          <ArrowRight className="ml-2 w-4 h-4" />
        </a>
      </div>
    </motion.div>
  )
}