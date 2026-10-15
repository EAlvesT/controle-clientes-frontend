import { z } from "zod";

export const statusProjeto = [
    "planejamento",
    "nao_iniciado",
    "em_progresso",
    "pausado",
    "concluido",
    "cancelado"
] as const;

export const tipoCobranca = [
    "pagamento_unico",
    "parcelado",
    "recorrente"
] as const;

export const createProjetoSchema = z.object({
    nome: z.string().min(1, "O nome do projeto é obrigatório.").trim(),
    descricao: z.string().min(1, "A descrição do projeto é obrigatória.").trim(),
    status: z.enum(statusProjeto, {
        error: "Selecione um status válido."
    }),
    tipo_cobranca: z.enum(tipoCobranca, {
        error: "Selecione um tipo de cobrança válido."
    }),
    valor_total: z.coerce
        .number({ error: "Informe um valor válido." })
        .min(0, "O valor total não pode ser negativo.")
});

export type CreateProjetoFormData = z.infer<typeof createProjetoSchema>;
export type StatusProjeto = z.infer<typeof createProjetoSchema>["status"];
export type TipoCobrancaProjeto = z.infer<typeof createProjetoSchema>["tipo_cobranca"];