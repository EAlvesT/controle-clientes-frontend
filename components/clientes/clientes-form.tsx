"use client"

import { useCreateClienteForm } from "@/hooks/creaate-cliente";
import { ButtonForms } from "../ui/button-forms";
import { InputForms } from "../ui/input-forms";
import { Label } from "../ui/label";
import { CreateClienteFormData } from "@/schemas/create-cliente";

export interface ClienteFormData {
    nome: string;
    cpf_cnpj: string;
    razao_social: string;
    telefone: string;
    telefone2?: string;
    email: string;
    email2?: string;
    descricao: string;
};

export interface ClienteFormProps {
    mode: "create" | "edit" | "view";
    defaultValues?: Partial<ClienteFormData>;
};

export function ClienteForm({ mode, defaultValues }: ClienteFormProps) {
    const somenteLeitura = mode === "view";
    const { register, handleSubmit, formState: { errors }, reset } = useCreateClienteForm();

    function handleCreateCliente(data: CreateClienteFormData) {
        console.log("Enviando dados:")
        console.log(data)
    };

    return (
        <form
            className="w-full px-4 py-6 rounded-lg bg-white text-black"
            onSubmit={handleSubmit(handleCreateCliente)}
        >
            <div className="w-full flex items-center justify-center flex-col gap-4 md:gap-6">

                <div className="relative w-full px-2 py-3 flex items-center justify-center flex-col gap-2 border border-slate-300 rounded-lg">
                    <span className="absolute px-2 top-0 left-4 bg-white text-sm -translate-y-1/2 text-slate-400 font-light">
                        Registro
                    </span>

                    <div className="w-full flex items-center justify-center flex-col gap-2 md:flex-row">
                        <div className="w-full md:flex-1 px-4 py-2 flex flex-col items-start justify-center gap-1 border border-slate-300 rounded-lg">
                            <Label required>Nome</Label>
                            <InputForms
                                type="text"
                                placeholder="Insira o nome do cliente..."
                                defaultValue={defaultValues?.nome ?? ""}
                                {...register("nome")}
                                disabled={somenteLeitura}
                            />

                            {errors?.nome && (
                                <p className="text-red-500 text-xs">{errors.nome.message}</p>
                            )}
                        </div>

                        <div className="w-full md:flex-1 px-4 py-2 flex flex-col items-start justify-center gap-1 border border-slate-300 rounded-lg">
                            <Label required>CPF ou CNPJ</Label>
                            <InputForms
                                type="text"
                                placeholder="Insira o CPF ou CNPJ cliente..."
                                defaultValue={defaultValues?.cpf_cnpj ?? ""}
                                disabled={somenteLeitura}
                                {...register("cpf_cnpj")}
                            />

                            {errors?.cpf_cnpj && (
                                <p className="text-red-500 text-xs">{errors.cpf_cnpj.message}</p>
                            )}
                        </div>
                    </div>

                    <div className="w-full px-4 py-2 flex flex-col items-start justify-center gap-1 border border-slate-300 rounded-lg">
                        <Label required>Razão Social</Label>
                        <InputForms
                            type="text"
                            placeholder="Insira a razão social do cliente..."
                            defaultValue={defaultValues?.razao_social ?? ""}
                            disabled={somenteLeitura}
                            {...register("razao_social")}
                        />

                        {errors?.razao_social && (
                            <p className="text-red-500 text-xs">{errors.razao_social.message}</p>
                        )}
                    </div>
                </div>

                <div className="relative w-full px-2 py-3 flex items-center justify-center flex-col gap-2 border border-slate-300 rounded-lg">
                    <span className="absolute px-2 top-0 left-4 bg-white text-sm -translate-y-1/2 text-slate-400 font-light">
                        Contato
                    </span>
                    <div className="w-full flex items-center justify-center flex-col gap-2 md:flex-row">
                        <div className="w-full px-4 py-2 flex flex-col items-start justify-center gap-1 border border-slate-300 rounded-lg">
                            <Label required>Telefone</Label>
                            <InputForms
                                type="text"
                                placeholder="Insira o número para contato..."
                                defaultValue={defaultValues?.telefone ?? ""}
                                disabled={somenteLeitura}
                                {...register("telefone")}
                            />

                            {errors?.telefone && (
                                <p className="text-red-500 text-xs">{errors.telefone.message}</p>
                            )}
                        </div>

                        <div className="w-full px-4 py-2 flex flex-col items-start justify-center gap-1 border border-slate-300 rounded-lg">
                            <Label>Telefone 2</Label>
                            <InputForms
                                type="text"
                                placeholder="Insira um segundo número para contato..."
                                defaultValue={defaultValues?.telefone2 ?? ""}
                                disabled={somenteLeitura}
                                {...register("telefone2")}
                            />

                            {errors?.telefone2 && (
                                <p className="text-red-500 text-xs">{errors.telefone2.message}</p>
                            )}
                        </div>
                    </div>

                    <div className="w-full flex items-center justify-center flex-col gap-2 md:flex-row">
                        <div className="w-full px-4 py-2 flex flex-col items-start justify-center gap-1 border border-slate-300 rounded-lg">
                            <Label required>Email</Label>
                            <InputForms
                                type="email"
                                placeholder="Insira o email do cliente..."
                                defaultValue={defaultValues?.email ?? ""}
                                disabled={somenteLeitura}
                                {...register("email")}
                            />

                            {errors?.email && (
                                <p className="text-red-500 text-xs">{errors.email.message}</p>
                            )}
                        </div>

                        <div className="w-full px-4 py-2 flex flex-col items-start justify-center gap-1 border border-slate-300 rounded-lg">
                            <Label>Email 2</Label>
                            <InputForms
                                type="email"
                                placeholder="Insira o segundo email do cliente..."
                                defaultValue={defaultValues?.email2 ?? ""}
                                disabled={somenteLeitura}
                                {...register("email2")}
                            />

                            {errors?.email2 && (
                                <p className="text-red-500 text-xs">{errors.email2.message}</p>
                            )}
                        </div>
                    </div>
                </div>

                <div className="w-full px-4 py-2 flex flex-col items-start justify-center gap-1 border border-slate-300 rounded-lg">
                    <Label required>Descrição</Label>
                    <textarea
                        className="w-full p-2 border border-slate-200 text-sm"
                        placeholder="Insira uma descrição aqui..."
                        defaultValue={defaultValues?.descricao ?? ""}
                        disabled={somenteLeitura}
                        {...register("descricao")}
                    />

                    {errors?.descricao && (
                        <p className="text-red-500 text-xs">{errors.descricao.message}</p>
                    )}
                </div>

                <ButtonForms variant="primary">Cadastrar</ButtonForms>
            </div>
        </form>
    )
}