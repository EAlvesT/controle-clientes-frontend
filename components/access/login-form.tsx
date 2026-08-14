"use client"

import { useLoginForm, useLoginMutation } from "@/hooks/login-form"
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
    Eye,
    EyeClosed,
    Mail
} from "lucide-react";
import { useState } from "react";
import { LoginFormData } from "@/schemas/login";

export function LoginContent() {
    const { register, formState: { errors }, handleSubmit } = useLoginForm();
    const [isVisible, setIsVisible] = useState(false);
    const { mutate, isPending } = useLoginMutation();

    function handleLogin(data: LoginFormData) {
        mutate(data, {
            onSuccess: (response) => {
                if (response.success) {
                    alert("Login realizado com sucesso!")
                } else {
                    alert("Falha ao realizar login!")
                }
            },

            onError: (error) => {
                alert(error.message || "Erro ao fazer login")
            }
        })
    };

    return (
        <form
            onSubmit={handleSubmit(handleLogin)}
            className="w-full flex items-center justify-center flex-col gap-4"
        >
            <h3>Formulário de login</h3>

            <div className="w-full flex items-start justify-center flex-col gap-2">
                <Label>Email:</Label>
                <div className="relative w-full">
                    <Input
                        type="email"
                        {...register("email")}
                        placeholder="exemplo@teste.com"
                    />
                    <div className="absolute top-1/2 -translate-y-1/2 right-2">
                        <Mail />
                    </div>
                </div>
                {errors?.email && (
                    <p className="text-red-500 text-sm">{errors.email?.message}</p>
                )}
            </div>

            <div className="w-full flex items-start justify-center flex-col gap-2">
                <Label>Senha:</Label>
                <div className="relative w-full">
                    <Input
                        type={isVisible ? "text" : "password"}
                        {...register("senha")}
                        placeholder="********"
                        className="pr-12"
                    />
                    <div
                        className="absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer"
                        onClick={() => setIsVisible(!isVisible)}
                    >
                        {isVisible ? <EyeClosed /> : <Eye />}
                    </div>
                </div>
                {errors?.senha && (
                    <p className="text-red-500 text-sm">{errors.senha?.message}</p>
                )}
            </div>

            <Button
                disabled={isPending}
            >
                {isPending ? "Acessando..." : "Acessar"}
            </Button>
        </form>
    )
}