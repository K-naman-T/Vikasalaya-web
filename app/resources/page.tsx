"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import YouTube from 'react-youtube'

// Types
interface Resource {
  title: string
  description: string
  url: string
  date?: string
  type?: 'video' | 'article' | 'report' | 'publication'
}

const resources: { [key: string]: Resource[] } = {
  media: [
    {
      title: "Community Impact Video",
      description: "Watch our latest impact video on YouTube",
      url: "wCHqad7nD84",
      type: "video"
    },
    {
      title: "Community Impact Feature on Facebook",
      description: "Watch our latest impact video on Facebook",
      url: "https://fb.watch/lmDKI9o-G4/?mibextid=RUbZ1f",
      type: "article"
    }
  ],
  reports: [
    {
      title: "Mental Health Awareness for Defense Personnel",
      description: "A comprehensive guide on mental health awareness and support strategies for defense personnel and their families",
      url: "/reports/Nagpur Activity Report.pdf",
      type: "report",
      date: "2024-03-20"
    },
    {
      title: "Annual Report 2023",
      description: "Our comprehensive annual report detailing our impact and initiatives",
      url: "#",
      type: "report",
      date: "2024-01-15"
    },
    {
      title: "Impact Assessment 2023",
      description: "Detailed analysis of our program outcomes",
      url: "#",
      type: "report",
      date: "2023-12-20"
    }
  ],
  publications: [
    {
      title: "Community Development Study",
      description: "Research paper on effective community development strategies",
      url: "#",
      type: "publication",
      date: "2024-02-01"
    },
    {
      title: "Mental Health Initiatives",
      description: "Overview of our mental health programs and their impact",
      url: "#",
      type: "publication",
      date: "2024-01-10"
    }
  ]
}

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-light to-white py-24">
      <div className="container mx-auto px-4">
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
              <Card>
                <CardHeader>
                  <CardTitle>Media Resources</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {resources.media.map((resource) => (
                    <div key={resource.title} className="space-y-4">
                      {resource.type === 'video' ? (
                        <div className="aspect-video">
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
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reports">
              <Card>
                <CardHeader>
                  <CardTitle>Reports</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {resources.reports.map((resource) => (
                    <ResourceCard key={resource.title} resource={resource} />
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="publications">
              <Card>
                <CardHeader>
                  <CardTitle>Publications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {resources.publications.map((resource) => (
                    <ResourceCard key={resource.title} resource={resource} />
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

function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all"
    >
      <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
      {resource.date && (
        <p className="text-sm text-primary-light0 mb-2">{resource.date}</p>
      )}
      <p className="text-gray-600 mb-4">{resource.description}</p>
      <a
        href={resource.url}
        className="text-primary-dark hover:text-yellow-700 font-medium"
      >
        {resource.type === 'report' ? 'Download Report →' : 'Read More →'}
      </a>
    </motion.div>
  )
}