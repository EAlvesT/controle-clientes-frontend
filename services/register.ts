"use server"

import { type RegisterFormData, registerSchema } from "@/schemas/register";
import { AuthError } from "next-auth";

export async function register(dados: RegisterFormData) {
    const parsed = registerSchema.safeParse(dados);

    if (!parsed.success) {
        return {
            success: false,
            message: "Dados inválidos."
        }
    };

    try {
        await new Promise((resolve) => setTimeout(resolve, 2000));

        console.log(parsed.data.nome)
        console.log(parsed.data.email)
        console.log(parsed.data.senha)
        console.log(parsed.data.confirmaSenha)

        return {
            success: true,
            message: "Cadastro realizado com sucesso."
        }
    } catch (error) {
        if (error instanceof AuthError) {
            const message = error.cause?.err?.message ?? error.message ?? "Erro ao fazer cadastro";
            return {
                success: false,
                message: message
            };
        }

        if (error instanceof Error) {
            return {
                success: false,
                message: error.message
            }
        }

        return {
            success: false,
            message: "Erro desconhecido."
        }
    }
}