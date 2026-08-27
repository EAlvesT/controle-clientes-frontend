import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { registerSchema, type RegisterFormData } from "@/schemas/register";
import { useMutation } from "@tanstack/react-query";
import { register } from "@/services/auth/register";

export type RegisterResponse = {
    success: boolean;
    message: string;
};

export function useRegisterForm() {
    return useForm({
        resolver: zodResolver(registerSchema),
        mode: "onChange"
    })
};

export function useRegisterMutation() {
    return useMutation<RegisterResponse, Error, RegisterFormData>({
        mutationFn: register
    })
}