import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
};

export function Input({ className, ...props }: InputProps) {
    return (
        <input
            className={`w-full px-2 py-1 border rounded-lg border-slate-400 placeholder:text-sm outline-none ${className}`}
            {...props}
        />
    )
}