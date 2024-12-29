"use client"

import { motion } from "framer-motion"
import { resources } from '../data'
import { FileText, Download } from 'lucide-react'

export function ReportsContent() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {resources.reports.map((resource, index) => (
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
            <h3 className="text-2xl font-bold text-text mb-2">{resource.title}</h3>
            <p className="text-text-muted mb-6 leading-relaxed">{resource.description}</p>
            {resource.url && (
              <a
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
                View Report
                <Download className="w-4 h-4 ml-2" />
              </a>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  )
}