import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-gradient-cta text-primary-foreground hover:shadow-glow shadow-medium transition-all hover:scale-105 bg-[length:200%_200%] animate-gradient-shift font-semibold",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border-2 border-primary/30 bg-background hover:bg-primary/5 hover:border-primary transition-all",
        secondary: "bg-gradient-accent text-secondary-foreground hover:shadow-large shadow-soft transition-all hover:scale-105 font-semibold",
        ghost: "hover:bg-accent/10 hover:text-accent-foreground transition-all",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-gradient-cta text-primary-foreground shadow-large hover:shadow-glow transition-all hover:scale-110 bg-[length:200%_200%] animate-gradient-shift font-bold",
        "hero-outline": "border-2 border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 hover:border-white/50 shadow-medium hover:shadow-glow transition-all hover:scale-105 font-semibold",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
