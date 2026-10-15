import { ClienteProps } from "@/@types";
import { ClienteForm } from "@/components/clientes/clientes-form";

interface ClienteInfoPage {
    params: Promise<{ id: string }>
}

async function getCliente(): Promise<ClienteProps> {
    await new Promise(resolve => setTimeout(resolve, 3000));

    const cliente: ClienteProps = {
        id: 1,
        contato: "24999887595",
        cpf_cnpj: "6546516816",
        created_at: new Date(),
        email: "teste@teste.com",
        isActive: true,
        nome: "Eduardo Alves",
        razao_social: "Eduardo Alves LTDA",
        updated_at: new Date(),
        descricao: "Uma descrição para teste bem aqui.",
        telefone: "2465468868"
    };

    return cliente;
};

export default async function ClienteInfo({ params }: ClienteInfoPage) {
    const { id } = await params;

    const data = await getCliente();

    return (
        <div className="w-full flex items-start justify-center flex-col gap-4">

            <div className="w-full px-4 py-2 rounded-lg bg-white text-black">
                <h1>Informações do cliente</h1>
            </div>

            <ClienteForm
                mode="edit"
                defaultValues={data}
            />
        </div>
    )
};