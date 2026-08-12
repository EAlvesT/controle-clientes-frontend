import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Controle de clientes - Dashboard",
    description: "Dashboard para visualizar dados dos projetos de seus clientes.",
};

export default function DashboardLayoutPage({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    );
};