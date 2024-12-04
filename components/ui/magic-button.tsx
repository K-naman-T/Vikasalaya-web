'use client'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export const MagicButton = ({ 
  children, 
  className = '', 
  ...props 
}: { 
  children: ReactNode; 
  className?: string; 
  [key: string]: any; 
}) => (
  <motion.button
    className={`px-6 py-2 rounded-full font-semibold ${className}`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    {...props}
  >
    {children}
  </motion.button>
) 