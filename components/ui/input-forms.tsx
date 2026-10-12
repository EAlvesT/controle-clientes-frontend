import { InputHTMLAttributes } from "react";

interface InputFormProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    placeholder: string;
}

export function InputForms({ className, placeholder, ...props }: InputFormProps) {
    return (
        <input
            className={`w-full p-2 border border-slate-200 ${className}`}
            placeholder={placeholder}
            {...props}
        />
    )
}