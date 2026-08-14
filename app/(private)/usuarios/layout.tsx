import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Controle de clientes - Usuários",
    description: "Página para gestão dos usuários cadastrados.",
};

export default function UsuariosLayoutPage({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    );
};