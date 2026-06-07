import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/src/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center border font-body text-[0.6875rem] font-semibold tracking-[0.08em] uppercase transition-colors",
  {
    variants: {
      variant: {
        default: "border-transparent bg-[#E8293B] text-[#0A0A0A]",
        outline: "border-[rgba(255,255,255,0.15)] text-zinc-900 bg-transparent",
        muted:   "border-transparent bg-white/6 text-[#666260]",
        orange:  "border-[rgba(255,92,0,0.35)] text-zinc-900 bg-[rgba(255,92,0,0.1)]",
      },
    },
    defaultVariants: { variant: "default" },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  className?: string
}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
