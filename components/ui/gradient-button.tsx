import { ButtonHTMLAttributes } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
}

export function GradientButton({ children, className, ...props }: GradientButtonProps) {
  return (
    <Button 
      className={cn(
        "text-lg px-8 py-4 relative group overflow-hidden",
        "bg-gradient-to-br from-accent-light via-accent to-accent-dark",
        "text-secondary font-bold tracking-wide transition-all duration-500",
        "rounded-xl border-2 border-secondary/20",
        "hover:scale-105 transform hover:border-secondary/40",
        "shadow-[0_5px_30px_rgba(214,143,43,0.4)] hover:shadow-[0_8px_40px_rgba(214,143,43,0.6)]",
        "min-w-[180px] flex justify-center",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  )
} 