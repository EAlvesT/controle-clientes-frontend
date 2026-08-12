import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    disabled?: boolean;
    className?: string;
};

export function Button({ children, className, disabled = false, ...props }: ButtonProps) {
    return (
        <button
            className={`w-full p-2 rounded-lg bg-access-buton text-white cursor-pointer hover:bg-access-buton/80 duration-200 disabled:cursor-not-allowed disabled:bg-access-buton/70 ${className}`}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    )
}