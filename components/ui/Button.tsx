import { ButtonHTMLAttributes, forwardRef } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={twMerge(
                    clsx(
                        "inline-flex items-center justify-center rounded-xl font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
                        {
                            "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20":
                                variant === "primary",
                            "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg shadow-secondary/20":
                                variant === "secondary",
                            "border border-input bg-background hover:bg-accent hover:text-accent-foreground":
                                variant === "outline",
                            "hover:bg-accent hover:text-accent-foreground": variant === "ghost",
                            "h-9 px-4 text-sm": size === "sm",
                            "h-11 px-8 text-base": size === "md",
                            "h-14 px-10 text-lg": size === "lg",
                        },
                        className
                    )
                )}
                {...props}
            />
        );
    }
);

Button.displayName = "Button";

export { Button };
