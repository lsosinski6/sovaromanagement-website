import * as React from "react"
import { cn } from "@/lib/utils"

const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'default' | 'outline' | 'ghost' }>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center text-sm font-mono tracking-widest transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 h-12 px-8 uppercase",
          variant === 'default' && "bg-primary text-primary-foreground hover:bg-primary/90",
          variant === 'outline' && "border border-border bg-transparent hover:border-primary hover:text-primary text-foreground",
          variant === 'ghost' && "hover:bg-accent hover:text-accent-foreground text-foreground",
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"
export { Button }
