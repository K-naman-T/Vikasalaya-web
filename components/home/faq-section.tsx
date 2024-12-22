'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "How can I get involved with Vikasalaya Foundation?",
      answer: "You can get involved by volunteering, becoming a fundraiser, or making a donation. Visit our Get Involved page to learn more about these opportunities.",
      gradient: "from-primary to-primary-light"
    },
    {
      question: "Where does my donation go?",
      answer: "Your donations directly support our programs in mental health, child development, and women's empowerment initiatives across India.",
      gradient: "from-accent to-accent-light"
    },
    {
      question: "Can I volunteer remotely?",
      answer: "Yes, we offer both remote and in-person volunteering opportunities. Contact us to learn more about current openings.",
      gradient: "from-primary to-accent"
    },
    {
      question: "How can organizations partner with Vikasalaya?",
      answer: "We welcome partnerships with organizations that share our vision. Please reach out to us at vikasalaya@gmail.com to discuss collaboration opportunities.",
      gradient: "from-accent to-primary"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-white to-secondary/10">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
          <p className="text-xl text-gray-600 mx-auto">
            Find answers to common questions about our programs and involvement opportunities
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <div className={`h-2 bg-gradient-to-r ${faq.gradient}`} />
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between"
              >
                <span className="font-bold text-gray-900">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-primary-dark transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="px-8 pb-6 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 