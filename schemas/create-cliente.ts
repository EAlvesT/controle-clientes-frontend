import { z } from "zod";

export const createClienteSchema = z.object({
    nome: z.string().min(1, "O campo nome é obrigatório."),
    cpf_cnpj: z.string().min(1, "O campo de CPF ou CNPJ é obrigatório."),
    razao_social: z.string().min(1, "O campo de Razão Social é obrigatório."),
    telefone: z.string().min(1, "O contato para telefone é obrigatório."),
    telefone2: z.string().optional(),
    email: z.email("Insira um email válido."),
    email2: z.preprocess(
        (value) => value === "" ? undefined : value,
        z.email("Insira um email válido.").optional()
    ),
    descricao: z.string().min(1, "O campo de descrição é obrigatório."),
})

export type CreateClienteFormData = z.infer<typeof createClienteSchema>;