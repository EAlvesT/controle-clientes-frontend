import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Controle de clientes - Register",
    description: "Crie sua conta e em seguida realize o login para ter o controle de seus projetos",
};

export default function RegisterLayoutPage({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    );
};