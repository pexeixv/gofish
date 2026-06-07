import * as React from "react"
import { cn } from "@/src/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[120px] w-full bg-zinc-100 border border-[rgba(255,255,255,0.08)] px-4 py-3 text-sm text-zinc-900 placeholder:text-[#666260] transition-colors focus-visible:outline-none focus-visible:border-[#E8293B] resize-none disabled:cursor-not-allowed disabled:opacity-50 rounded-none",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
