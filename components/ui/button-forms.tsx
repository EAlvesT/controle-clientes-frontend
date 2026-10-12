import { ButtonHTMLAttributes } from "react";
import { clsx } from "clsx";

type ButtonVariants = "primary" | "secondary" | "danger" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonFormsProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: React.ReactNode;
    variant?: ButtonVariants;
    size?: ButtonSize;
}

const variants: Record<ButtonVariants, string> = {
    primary: "bg-fundo-botao-forms text-white hover:bg-fundo-botao-forms/80",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700",
    outline: "border border-fundo-botao-forms text-purple-600 hover:bg-purple-50",
}

const sizes: Record<ButtonSize, string> = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
}

export function ButtonForms({
    className,
    children,
    variant = "primary",
    size = "md",
    type = "submit",
    ...props
}: ButtonFormsProps) {
    return (
        <button
            type={type}
            className={clsx(
                "w-full rounded-lg font-medium transition-colors cursor-pointer",
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {children}
        </button>
    )
};