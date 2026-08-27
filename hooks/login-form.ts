import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginFormData, loginSchema } from "@/schemas/login";
import { useMutation } from "@tanstack/react-query";
import { login } from "@/services/auth/login";

export type LoginResponse = {
    success: boolean;
    message: string;
};

export function useLoginForm() {
    return useForm({
        resolver: zodResolver(loginSchema),
        mode: "onChange"
    })
};

export function useLoginMutation() {
    return useMutation<LoginResponse, Error, LoginFormData>({
        mutationFn: login
    })
}