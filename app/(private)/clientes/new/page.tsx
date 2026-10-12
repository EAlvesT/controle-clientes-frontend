import { ClienteForm } from "@/components/clientes/clientes-form";

export default function NovoClientePage() {
    return (
        <div
            className="w-full flex items-start justify-center flex-col gap-4"
        >
            <div className="w-full px-4 py-2 rounded-lg bg-white text-black">
                <h1>Novo cliente</h1>
            </div>

            <ClienteForm
                mode="create"
            />
        </div>
    )
};