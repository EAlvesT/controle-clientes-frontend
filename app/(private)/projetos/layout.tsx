import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Controle de clientes - Projetos",
    description: "Página para gestão dos projetos cadastrados.",
};

export default function ProjetosLayoutPage({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    );
};