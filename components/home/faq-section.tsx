'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { SectionHeader } from '@/components/ui/section-header'
import { GradientCard } from '@/components/ui/gradient-card'

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
    <section className="py-24 bg-gradient-natural">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Frequently Asked Questions"
          description="Find answers to common questions about our programs and involvement opportunities"
          gradient="from-primary to-accent"
        />

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <GradientCard
              key={index}
              gradient={faq.gradient}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="hover:shadow-2xl transition-all duration-500"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between"
              >
                <span className="font-bold text-gray-900">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-primary-dark transition-transform duration-300 ease-out ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ 
                      height: 'auto',
                      transition: {
                        duration: 0.4,
                        ease: [0.4, 0, 0.2, 1] // Custom easing
                      }
                    }}
                    exit={{ 
                      height: 0,
                      transition: {
                        duration: 0.3,
                        ease: [0.4, 0, 1, 1]
                      }
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6">
                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ 
                          opacity: 1,
                          transition: { duration: 0.2, delay: 0.1 }
                        }}
                        exit={{ opacity: 0 }}
                        className="text-gray-600"
                      >
                        {faq.answer}
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </GradientCard>
          ))}
        </div>
      </div>
    </section>
  )
} 