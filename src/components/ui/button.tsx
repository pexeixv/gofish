import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/src/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 uppercase",
  {
    variants: {
      variant: {
        default:  "bg-[#E8293B] text-white hover:bg-[#e05200]",
        outline:  "border border-[rgba(255,92,0,0.4)] text-zinc-900 bg-transparent hover:border-[#E8293B] hover:bg-[rgba(255,92,0,0.08)]",
        ghost:    "bg-transparent text-zinc-900 hover:bg-white/5",
        muted:    "bg-zinc-100 text-zinc-900 hover:bg-[#222]",
        link:     "text-zinc-900 underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        default: "h-11 px-8 py-3",
        sm:      "h-9 px-5 text-xs",
        lg:      "h-14 px-10",
        icon:    "h-10 w-10",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
