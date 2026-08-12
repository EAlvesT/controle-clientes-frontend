"use server"

// import { signIn } from "@/auth";
import { type LoginFormData, loginSchema } from "@/schemas/login"
import { AuthError } from "next-auth";

export async function login(dados: LoginFormData) {
    const parsed = loginSchema.safeParse(dados);

    if (!parsed.success) {
        return {
            success: false,
            message: "Dados inválidos."
        }
    };

    try {
        // const result = await signIn("credentials", {
        //     email: parsed.data.email,
        //     password: parsed.data.senha,
        //     redirect: false
        // })

        await new Promise((resolve) => setTimeout(resolve, 2000));

        return {
            success: true,
            message: "login realizado com sucesso"
        }
    } catch (error) {
        if (error instanceof AuthError) {
            const message = error.cause?.err?.message ?? error.message ?? "Erro ao fazer login";
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