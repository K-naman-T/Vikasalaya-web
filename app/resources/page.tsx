"use client"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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

  const newsletters = [
    {
      title: "Spring 2024 Newsletter",
      description: "Updates on our recent initiatives and upcoming events.",
      downloadUrl: "#"
    },
    {
      title: "Winter 2023 Newsletter",
      description: "Highlights from our winter programs and community impact stories.",
      downloadUrl: "#"
    }
  ]

  const projectReports = [
    {
      title: "Mental Health Initiative Impact Report",
      description: "Detailed analysis of our mental health programs and their outcomes.",
      downloadUrl: "#"
    },
    {
      title: "Child Development Program Report",
      description: "Overview of our educational initiatives and their impact on children.",
      downloadUrl: "#"
    },
    {
      title: "Women Empowerment Project Report",
      description: "Results and insights from our women's skill development programs.",
      downloadUrl: "#"
    }
  ]

  const policies = [
    {
      title: "Child Protection Policy",
      description: "Our commitment to ensuring child safety and well-being.",
      downloadUrl: "#"
    },
    {
      title: "Privacy Policy",
      description: "How we handle and protect personal information.",
      downloadUrl: "#"
    },
    {
      title: "Code of Conduct",
      description: "Guidelines for staff, volunteers, and partners.",
      downloadUrl: "#"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-center mb-6">Resources</h1>
        <p className="text-gray-600 text-center mb-12">
          Access our reports, newsletters, and policy documents to learn more about our work and impact.
        </p>

        <Tabs defaultValue="reports" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="reports">Annual Reports</TabsTrigger>
            <TabsTrigger value="newsletters">Newsletters</TabsTrigger>
            <TabsTrigger value="projects">Project Reports</TabsTrigger>
            <TabsTrigger value="policies">Policies</TabsTrigger>
          </TabsList>

          <TabsContent value="reports">
            <Card>
              <CardHeader>
                <CardTitle>Annual Reports</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {reports.map((report) => (
                  <motion.div
                    key={report.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-yellow-50 rounded-lg"
                  >
                    <h3 className="font-semibold mb-2">{report.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{report.description}</p>
                    <a
                      href={report.downloadUrl}
                      className="text-yellow-500 hover:text-yellow-600 text-sm font-medium"
                    >
                      Download PDF →
                    </a>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="newsletters">
            <Card>
              <CardHeader>
                <CardTitle>Newsletters</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {newsletters.map((newsletter) => (
                    <motion.div 
                      key={newsletter.title}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-yellow-50 rounded-lg"
                    >
                      <h3 className="font-semibold mb-2">{newsletter.title}</h3>
                      <p className="text-sm text-gray-600 mb-3">{newsletter.description}</p>
                      <a
                        href={newsletter.downloadUrl}
                        className="text-yellow-500 hover:text-yellow-600 text-sm font-medium"
                      >
                        Read More →
                      </a>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold mb-4">Subscribe to Our Newsletter</h3>
                  <form className="space-y-4">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full p-2 border rounded-md"
                    />
                    <button
                      type="submit"
                      className="bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="projects">
            <Card>
              <CardHeader>
                <CardTitle>Project Reports</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {projectReports.map((report) => (
                  <motion.div
                    key={report.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-yellow-50 rounded-lg"
                  >
                    <h3 className="font-semibold mb-2">{report.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{report.description}</p>
                    <a
                      href={report.downloadUrl}
                      className="text-yellow-500 hover:text-yellow-600 text-sm font-medium"
                    >
                      Download Report →
                    </a>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="policies">
            <Card>
              <CardHeader>
                <CardTitle>Policy Documents</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {policies.map((policy) => (
                  <motion.div
                    key={policy.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-yellow-50 rounded-lg"
                  >
                    <h3 className="font-semibold mb-2">{policy.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{policy.description}</p>
                    <a
                      href={policy.downloadUrl}
                      className="text-yellow-500 hover:text-yellow-600 text-sm font-medium"
                    >
                      View Policy →
                    </a>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  )
}