import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Controle de clientes - Clientes",
    description: "Página para gestão de clientes cadastrados.",
};

export default function ClientesLayoutPage({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    );
};