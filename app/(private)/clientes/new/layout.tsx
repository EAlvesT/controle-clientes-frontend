import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Controle de clientes - Novo Cliente",
    description: "Página para criação de novos clientes",
};

export default function NovoClienteLayoutPage({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    );
};