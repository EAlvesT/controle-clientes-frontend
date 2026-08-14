import { z } from 'zod';

export const registerSchema = z.object({
    nome: z.string().min(3, "O nome é obrigatório"),
    email: z.email("Email informado é inválido."),
    senha: z.string().min(1, "A senha é obrigatória."),
    confirmaSenha: z.string().min(1, "Confirmação de senha é obrigatória."),
})
    .refine((data) => data.senha === data.confirmaSenha, {
        message: "As senhas não coincidem",
        path: ["confirmaSenha"],
    })

export type RegisterFormData = z.infer<typeof registerSchema>;