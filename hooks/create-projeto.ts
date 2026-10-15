import { CreateProjetoFormData, createProjetoSchema } from "@/schemas/create-projeto";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

export function useCreateProjetoForm(defaultValues?: Partial<CreateProjetoFormData>) {
    return useForm({
        resolver: zodResolver(createProjetoSchema),
        mode: "onChange",
        defaultValues: {
            nome: defaultValues?.nome ?? "",
            descricao: defaultValues?.descricao ?? "",
            status: defaultValues?.status ?? "planejamento",
            tipo_cobranca: defaultValues?.tipo_cobranca ?? "pagamento_unico"
        }
    })
};

export function useCreateProjetoMutation() {
    return useMutation({
        // mutationFn: () => {return undefined}
    })
}