import { motion } from 'framer-motion'

interface SectionHeaderProps {
  title: string
  description?: string
  className?: string
  gradient?: string
}

export function SectionHeader({ 
  title, 
  description, 
  className = '',
  gradient = 'bg-gradient-gold'
}: SectionHeaderProps) {
  return (
    <motion.div
      className={`text-center mb-16 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">{title}</h2>
      <div className={`w-24 h-1 ${gradient} mx-auto mb-6`} />
      {description && (
        <p className="text-xl text-text-muted max-w-3xl mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  )
} 