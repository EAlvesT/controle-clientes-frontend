import Link from "next/link";
import { ClienteProps } from "@/@types";
import { TituloSecoes } from "@/components/layout/titulo-secoes";
import { Search } from "lucide-react";

export default function ClientesPage() {
    const clientes: ClienteProps[] = Array.from({ length: 5 }, (_, index) => {
        return {
            contato: "2499684681",
            cpf_cnpj: "5465135581",
            id: index + 1,
            created_at: new Date(),
            email: "teste@teste.com",
            isActive: index % 2 === 0 ? true : false,
            nome: `Nome Cliente ${index + 1}`,
            razao_social: `Razão Social cliente ${index + 1}`,
            updated_at: new Date(),
            contato_2: "3524654651",
            descricao: `Uma descrição do cliente número ${index + 1}`,
            email_2: "testando2@teste.com"
        }
    });

    return (
        <>
            <TituloSecoes
                titulo="CLIENTES"
                localUtilizado="clientes"
                textoBotao="Cadastrar cliente"
            />

            <div className="relative w-full p-2 my-4 bg-white rounded-lg">
                <input
                    placeholder="Busque pelo nome, telefone, email, cpf ou cnpj..."
                    className="w-full placeholder:text-gray-400 placeholder:text-sm"
                />
                <Search className="absolute top-2 right-2" color="#636363" />
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 ld:grid-cols-3 gap-2">
                {clientes.map(cliente => (
                    <ClienteCard cliente={cliente} key={cliente.id} />
                ))}
            </div>
        </>
    )
}

interface ClienteCardProps {
    cliente: ClienteProps;
};

function ClienteCard({ cliente }: ClienteCardProps) {
    return (
        <Link
            className="w-full bg-white text-black rounded-lg flex items-start justify-center overflow-hidden cursor-pointer transition-all duration-300 hover:scale-y-105"
            href={`/clientes/detail/${cliente.id}`}
        >
            <div className="p-6 bg-blue-300 h-full text-xl flex items-center justify-center border-r-2 border-blue-500">
                <span>{cliente.nome.split(" ")[0][0]}{cliente.nome.split(" ")[1][0]}</span>
            </div>
            <div className="flex-3 p-2 flex items-start justify-center flex-col gap-2">
                <span className="text-lg">{cliente.nome}</span>
                <span className="text-sm">{cliente.contato}</span>
            </div>
        </Link>
    )
}