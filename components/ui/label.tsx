import { LabelHTMLAttributes } from "react";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
    required?: boolean;
    children: React.ReactNode;
    className?: string;
};

export function Label({ required = false, children, className }: LabelProps) {
    return (
        <label
            className={`text-sm ${className}`}
        >
            {children}
            {required && <span className="ml-1 text-red-500 text-xs font-bold">*</span>}
        </label>
    )
}