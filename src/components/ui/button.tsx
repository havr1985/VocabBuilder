import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
  {
    variants: {
      variant: {
        default: " bg-prim-green text-prim-white hover:bg-sec-green",
        secondary: " bg-prim-white text-prim-black hover:bg-sec-white hover:text-prim-green ",
        cancel: "bg-inherrit border border-prim-white text-prim-white hover:bg-prim-white hover:text-prim-black",
        pagDefault: "bg-inherrit border border-slate-200 text-prim-black ",
        pagActive: "bg-prim-green text-prim-white",
      },
      size: {
        default: "py-4 rounded-3xl",
        pagBase: "px-2.5 py-1 ronded-sm"
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
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
