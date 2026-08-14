import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Controle de clientes - Novo Projeto",
    description: "Página para cadastrar um novo projeto.",
};

export default function NovoProjetoLayoutPage({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    );
};