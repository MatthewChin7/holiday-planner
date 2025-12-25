import { HTMLAttributes, forwardRef } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "glass";
}

const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ className, variant = "default", ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={twMerge(
                    clsx(
                        "rounded-2xl p-6",
                        {
                            "bg-white dark:bg-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700":
                                variant === "default",
                            "glass text-foreground": variant === "glass",
                        },
                        className
                    )
                )}
                {...props}
            />
        );
    }
);
Card.displayName = "Card";

export { Card };
