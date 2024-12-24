import { LucideIcon } from 'lucide-react'

interface GradientIconProps {
  Icon: LucideIcon
  size?: 'sm' | 'md' | 'lg'
  gradient?: string
  className?: string
  iconClassName?: string
}

const sizeClasses = {
  sm: 'w-12 h-12',
  md: 'w-16 h-16',
  lg: 'w-20 h-20'
}

const iconSizes = {
  sm: 'w-6 h-6',
  md: 'w-8 h-8',
  lg: 'w-10 h-10'
}

export function GradientIcon({ 
  Icon, 
  size = 'md',
  gradient = 'from-primary/10 to-accent/10',
  className = '',
  iconClassName = ''
}: GradientIconProps) {
  return (
    <div className={`${sizeClasses[size]} rounded-2xl bg-gradient-to-r from-primary/10 via-primary-light/10 to-accent/10
      flex items-center justify-center ${className}`}
    >
      <Icon className={`${iconSizes[size]} text-primary ${iconClassName}`} />
    </div>
  )
} 