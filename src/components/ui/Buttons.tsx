import { cn } from "@/utils/utils";
import React from "react";

const variant = ['white', 'light', 'primary', 'secondary'] as const

interface ButtonProps extends React.ComponentPropsWithRef<"button"> {
    children: React.ReactNode;
    className?: string;
    variant?: typeof variant[number];
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ children, className, ...props }, ref) => {
        return (
            <button
                {...props}
                ref={ref}
                className={cn(
                    'rounded-xl px-6 py-3 text-sm font-normal', 
                    [
                        props.variant === 'white' && 'bg-white text-dark',
                        props.variant === 'light' && 'bg-[#F2F2F2] text-dark',
                        props.variant === 'secondary' && 'bg-secondary text-foreground',
                        props.variant === 'primary' && 'bg-primary text-foreground',
                    ],
                    className)}
            >
                {children}
            </button>
        );
    }
    );

Button.displayName = "Button";