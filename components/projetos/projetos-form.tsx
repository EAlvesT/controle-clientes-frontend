"use client"

import { useCreateProjetoForm } from "@/hooks/create-projeto";
import { ButtonForms } from "../ui/button-forms";
import { InputForms } from "../ui/input-forms";
import { Label } from "../ui/label";
import { statusProjeto, tipoCobranca, type CreateProjetoFormData } from "@/schemas/create-projeto";

export interface ProjetoFormData {
    nome: string;
    descricao: string;
    status: "planejamento" | "nao_iniciado" | "em_progresso" | "pausado" | "concluido" | "cancelado";
    tipo_cobranca: "pagamento_unico" | "parcelado" | "recorrente";
    valor_total?: number;
    created_at: Date;
    updated_at: Date;
};

export interface ProjetoFormProps {
    mode: "create" | "edit" | "view";
    defaultValues?: Partial<CreateProjetoFormData>;
};

const statusLabels: Record<CreateProjetoFormData["status"], string> = {
    planejamento: "Em planejamento",
    nao_iniciado: "Não iniciado",
    em_progresso: "Em progresso",
    pausado: "Pausado",
    concluido: "Concluído",
    cancelado: "Cancelado",
};

const tipoCobrancaLabels: Record<CreateProjetoFormData["tipo_cobranca"], string> = {
    pagamento_unico: "Pagamento único",
    parcelado: "Parcelado",
    recorrente: "Recorrente",
};

export function ProjetoForm({ mode, defaultValues }: ProjetoFormProps) {
    const somenteLeitura = mode === "view";
    const { register, handleSubmit, formState: { errors }, reset } = useCreateProjetoForm(defaultValues);
    const isPending = false;

    function aplicaTextoBotao() {
        if (mode === "edit") {
            return isPending ? "Salvando alterações..." : "Salvar alterações"
        };

        if (mode === "create") {
            return isPending ? "Registrando projeto..." : "Registrar projeto"
        };

        return "";
    };

    function handleCreateProjeto(data: CreateProjetoFormData) {
        console.log("Enviando dados:")
        console.log(data)

        reset();
    };

    return (
        <form
            className="w-full px-4 py-6 rounded-lg bg-white text-black"
            onSubmit={handleSubmit(handleCreateProjeto)}
        >
            <div className="w-full flex items-start justify-center flex-col gap-4 md:gap-6">
                <p className="text-xs text-red-500 font-light">Campos marcados com * são <b>obrigatórios</b>.</p>

                <div className="w-full p-4 flex items-start justify-center flex-col gap-4 border border-slate-300 rounded-lg">
                    <div className="w-full flex flex-col items-start justify-center">
                        <Label required>Nome</Label>
                        <InputForms
                            type="text"
                            placeholder="Insira o nome do projeto..."
                            defaultValue={defaultValues?.nome ?? ""}
                            {...register("nome")}
                            disabled={somenteLeitura}
                        />

                        {errors?.nome && (
                            <p className="text-red-500 text-xs">{errors.nome.message}</p>
                        )}
                    </div>

                    <div className="w-full flex flex-col items-start justify-center gap-1">
                        <Label required>Descrição</Label>
                        <textarea
                            className="w-full p-2 border border-slate-200 text-sm"
                            placeholder="Insira a descrição do projeto aqui..."
                            defaultValue={defaultValues?.descricao ?? ""}
                            disabled={somenteLeitura}
                            {...register("descricao")}
                        />

                        {errors?.descricao && (
                            <p className="text-red-500 text-xs">{errors.descricao.message}</p>
                        )}
                    </div>
                </div>

                <div className="relative w-full px-2 py-3 flex items-center justify-center flex-col gap-2 border border-slate-300 rounded-lg">
                    <span className="absolute px-2 top-0 left-4 bg-white text-sm -translate-y-1/2 text-slate-400 font-light">
                        Configurações
                    </span>

                    <div className="w-full flex items-center justify-center flex-col gap-2 md:flex-row">
                        <div className="w-full md:flex-1 px-4 py-2 flex flex-col items-start justify-center gap-1 border border-slate-300 rounded-lg">
                            <Label required>Status</Label>
                            <select
                                className="w-full p-2 border border-slate-200 rounded-md text-sm disabled:bg-slate-100"
                                {...register("status")}
                                disabled={somenteLeitura}
                            >
                                {statusProjeto.map(status => (
                                    <option key={status} value={status}>
                                        {statusLabels[status]}
                                    </option>
                                ))}
                            </select>

                            {errors?.status && (
                                <p className="text-red-500 text-xs">{errors.status.message}</p>
                            )}
                        </div>

                        <div className="w-full md:flex-1 px-4 py-2 flex flex-col items-start justify-center gap-1 border border-slate-300 rounded-lg">
                            <Label required>Tipo cobrança</Label>
                            <select
                                className="w-full p-2 border border-slate-200 rounded-md text-sm disabled:bg-slate-100"
                                {...register("tipo_cobranca")}
                                disabled={somenteLeitura}
                            >
                                {tipoCobranca.map(cobranca => (
                                    <option key={cobranca} value={cobranca}>
                                        {tipoCobrancaLabels[cobranca]}
                                    </option>
                                ))}
                            </select>

                            {errors?.tipo_cobranca && (
                                <p className="text-red-500 text-xs">{errors.tipo_cobranca.message}</p>
                            )}
                        </div>
                    </div>
                </div>

                <div className="w-full flex flex-col items-start justify-center">
                    <Label required>Valor total (R$)</Label>

                    <InputForms
                        type="number"
                        placeholder="Insira o valor total do projeto..."
                        defaultValue={defaultValues?.valor_total ?? ""}
                        {...register("valor_total")}
                        disabled={somenteLeitura}
                    />

                    {errors?.valor_total && (
                        <p className="text-red-500 text-xs">{errors.valor_total.message}</p>
                    )}
                </div>

                <ButtonForms
                    variant="primary"
                    disabled={isPending}
                >
                    {!somenteLeitura && aplicaTextoBotao()}
                </ButtonForms>
            </div>
        </form>
    )
};