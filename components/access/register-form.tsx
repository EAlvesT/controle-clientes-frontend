"use client"

import { useState } from "react";
import { useRegisterForm, useRegisterMutation } from "@/hooks/register-form";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
    Eye,
    EyeClosed,
    Mail,
    User
} from "lucide-react";
import { RegisterFormData } from "@/schemas/register";

export function RegisterContent() {
    const { register, formState: { errors }, handleSubmit } = useRegisterForm();
    const [isVisible, setIsVisible] = useState(false);
    const { mutate, isPending } = useRegisterMutation();

    function handleRegister(data: RegisterFormData) {
        mutate(data, {
            onSuccess: (response) => {
                if (response.success) {
                    alert("Cadastro realizado com sucesso!")
                } else {
                    alert("Falha ao realizar cadastro!")
                }
            },

            onError: (error) => {
                alert(error.message || "Erro ao fazer cadastro")
            }
        })
    };

    return (
        <form
            onSubmit={handleSubmit(handleRegister)}
            className="w-full flex items-center justify-center flex-col gap-4"
        >
            <h3>Formulário de cadastro</h3>

            <div className="w-full flex items-start justify-center flex-col gap-1">
                <Label htmlFor="nome">Nome:</Label>
                <div className="relative w-full">
                    <Input
                        id="nome"
                        type="text"
                        {...register("nome")}
                        placeholder="Seu nome..."
                    />
                    <div className="absolute top-1/2 -translate-y-1/2 right-2">
                        <User />
                    </div>
                </div>
                {errors?.nome && (
                    <p className="text-red-500 text-xs">{errors.nome?.message}</p>
                )}
            </div>

            <div className="w-full flex items-start justify-center flex-col gap-1">
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
                    <p className="text-red-500 text-xs">{errors.email?.message}</p>
                )}
            </div>

            <div className="w-full flex items-start justify-center flex-col gap-1">
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
                    <p className="text-red-500 text-xs">{errors.senha?.message}</p>
                )}
            </div>

            <div className="w-full flex items-start justify-center flex-col gap-1">
                <Label>Confirma senha:</Label>
                <div className="relative w-full">
                    <Input
                        type={isVisible ? "text" : "password"}
                        {...register("confirmaSenha")}
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
                {errors?.confirmaSenha && (
                    <p className="text-red-500 text-xs">{errors.confirmaSenha?.message}</p>
                )}
            </div>

            <Button
                disabled={isPending}
            >
                {isPending ? "Cadastrando..." : "Cadastrar"}
            </Button>
        </form>
    )
}