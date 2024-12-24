import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface GradientCardProps {
  gradient?: string
  className?: string
  children: ReactNode
  initial?: any
  whileInView?: any
  viewport?: any
  transition?: any
  onClick?: () => void
}

export function GradientCard({
  gradient = 'from-primary via-primary-light to-accent',
  className = '',
  children,
  initial,
  whileInView,
  viewport,
  transition,
  onClick
}: GradientCardProps) {
  return (
    <motion.div
      className={`bg-secondary rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl 
        transition-all duration-500 ${className}`}
      initial={initial || { opacity: 0, y: 20 }}
      whileInView={whileInView || { opacity: 1, y: 0 }}
      viewport={viewport || { once: true }}
      transition={transition}
      onClick={onClick}
    >
      <div className={`h-2 bg-gradient-to-r ${gradient}`} />
      {children}
    </motion.div>
  )
} 