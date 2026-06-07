import * as React from "react"
import { cn } from "@/src/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full bg-zinc-100 border border-[rgba(255,255,255,0.08)] px-4 py-3 text-sm text-zinc-900 placeholder:text-[#666260] transition-colors focus-visible:outline-none focus-visible:border-[#E8293B] focus-visible:bg-[rgba(255,92,0,0.04)] disabled:cursor-not-allowed disabled:opacity-50 rounded-none",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
