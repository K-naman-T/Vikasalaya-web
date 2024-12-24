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
        "text-lg px-8 py-4 bg-transparent",
        "border-2 border-white text-white",
        "hover:bg-white hover:text-primary-dark",
        "transition-all duration-300",
        "shadow-lg hover:shadow-xl",
        "rounded-xl font-bold tracking-wide",
        "hover:scale-105 transform",
        "min-w-[180px] flex justify-center",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  )
} 