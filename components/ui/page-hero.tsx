import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface PageHeroProps {
  title: string
  description: string
  className?: string
  children?: ReactNode
}

export function PageHero({ 
  title, 
  description, 
  className = '',
  children 
}: PageHeroProps) {
  return (
    <>
      <div className="h-20" />
      
      <div className={`relative h-[40vh] bg-gradient-hero overflow-hidden ${className}`}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-5xl font-bold text-secondary mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {title}
            </motion.h1>
            <motion.p 
              className="text-xl text-white font-medium tracking-wide leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {description}
            </motion.p>
            {children}
          </div>
        </div>
      </div>
    </>
  )
} 