'use client'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export const MagicCard = ({ 
  children, 
  className = '' 
}: { 
  children: ReactNode; 
  className?: string 
}) => (
  <motion.div
    className={`bg-white rounded-lg shadow-lg p-6 ${className}`}
    whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(0,0,0,0.12)' }}
    transition={{ type: 'spring', stiffness: 300 }}
  >
    {children}
  </motion.div>
) 