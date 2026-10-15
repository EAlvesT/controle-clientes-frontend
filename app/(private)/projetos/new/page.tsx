import { ProjetoForm } from "@/components/projetos/projetos-form";

export default function NovoProjetoPage() {
    return (
        <div className="w-full flex items-start justify-center flex-col gap-4">
            <div className="w-full px-4 py-2 rounded-lg bg-white text-black">
                <h1>Novo projeto</h1>
            </div>

            <ProjetoForm
                mode="create"
            />
        </div>
    )
};