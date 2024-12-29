"use client"

import { motion } from "framer-motion"
import Link from 'next/link'
import { FileText } from 'lucide-react'
import { resources } from '../data'
import { Resource } from '../types'

function groupResourcesByCategory(resources: Resource[]) {
  return resources.reduce((acc, resource) => {
    const category = resource.category || 'Other'
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(resource)
    return acc
  }, {} as { [key: string]: Resource[] })
}

export function PublicationsContent() {
  const groupedPublications = groupResourcesByCategory(resources.publications)

  return (
    <div className="space-y-12">
      {/* Non-Policy Categories */}
      {Object.entries(groupedPublications)
        .filter(([category]) => category !== 'Policies')
        .map(([category, items]) => (
          <motion.div 
            key={category} 
            id={category.toLowerCase()}
            className="space-y-6 scroll-mt-32"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-text mb-6 px-4">{category}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {items.map((resource, index) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-secondary rounded-2xl shadow-xl hover:shadow-2xl 
                    transition-all duration-500 hover:-translate-y-1 overflow-hidden"
                >
                  <div className={`h-1 bg-gradient-to-r ${
                    index % 2 === 0 
                      ? 'from-primary via-primary-light to-accent' 
                      : 'from-accent via-accent-light to-primary-light'
                  }`} />
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-text mb-4">{resource.title}</h3>
                    <p className="text-text-muted mb-6">{resource.description}</p>
                    {resource.url && (
                      <Link
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center px-6 py-3 rounded-full text-secondary 
                          bg-gradient-to-r ${
                            index % 2 === 0 
                              ? 'from-primary to-accent' 
                              : 'from-accent to-primary-light'
                          } hover:opacity-90 transition-opacity`}
                      >
                        <FileText className="w-4 h-4 mr-2" />
                        View Article
                      </Link>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

      {/* Policies Section */}
      {groupedPublications['Policies'] && (
        <motion.div 
          id="policies"
          className="space-y-6 scroll-mt-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-text mb-6 px-4">Policies</h2>
          <div className="space-y-2 px-4">
            {groupedPublications['Policies'].map((resource) => (
              <Link
                key={resource.title}
                href={resource.url || ''}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center group hover:bg-primary/5 p-3 rounded-lg transition-colors"
              >
                <span className="text-text group-hover:text-primary transition-colors">
                  {resource.title}
                </span>
                <div className="ml-auto text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <FileText className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  )
} 