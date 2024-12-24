import { ButtonHTMLAttributes } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface OutlineButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
}

export function OutlineButton({ children, className, ...props }: OutlineButtonProps) {
  return (
    <Button 
      className={cn(
        // Base styles
        "bg-transparent border-2 border-white text-white",
        "transition-all duration-300",
        "hover:bg-white hover:text-primary-dark",
        "shadow-lg hover:shadow-xl",
        "rounded-xl font-bold tracking-wide",
        "hover:scale-105 transform",
        
        // Responsive padding and width
        "px-6 sm:px-7 md:px-8",
        "py-3 sm:py-3.5 md:py-4",
        "min-w-[140px] sm:min-w-[160px] md:min-w-[180px]",
        
        // Responsive text
        "text-sm sm:text-base md:text-lg",
        
        // Flex layout
        "flex justify-center items-center",
        
        // Custom classes
        className
      )}
      {...props}
    >
      {children}
    </Button>
  )
} 