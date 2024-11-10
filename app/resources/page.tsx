"use client"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ResourcesPage() {
  const reports = [
    {
      title: "Annual Report 2023-2024",
      description: "Comprehensive overview of our initiatives, impact, and financial transparency.",
      downloadUrl: "#"
    },
    {
      title: "Annual Report 2022-2023",
      description: "Detailed report of our programs and their impact on communities.",
      downloadUrl: "#"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-center mb-6">Annual Reports</h1>
          <p className="text-gray-600 text-center mb-12">
            Access our annual reports to learn more about our work, impact, and financial transparency.
          </p>

          <Card className="bg-white/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-yellow-600">Available Reports</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {reports.map((report, index) => (
                <motion.div
                  key={report.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-gradient-to-br from-yellow-50 to-white 
                    rounded-xl shadow-sm hover:shadow-md transition-all duration-300
                    border border-yellow-100/50"
                >
                  <h3 className="font-semibold text-xl mb-3 text-gray-800">{report.title}</h3>
                  <p className="text-gray-600 mb-4">{report.description}</p>
                  <a
                    href={report.downloadUrl}
                    className="inline-flex items-center text-yellow-600 hover:text-yellow-700
                      font-medium transition-colors"
                  >
                    Download PDF →
                  </a>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}