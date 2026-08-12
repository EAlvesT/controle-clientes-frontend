import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Controle Clientes - login",
    description: "Faça o login para ter o controle de seus clientes",
};

export default function LoginLayoutPage({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    );
};