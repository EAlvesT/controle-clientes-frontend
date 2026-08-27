import { CardDashboard } from "./_components/card-dashboard";

export default function DashboardPage() {
    return (
        <>
            <h1 className="w-full bg-fundo-branco p-2 text-background font-bold rounded-lg">DASHBOARD</h1>

            <div className="w-full mt-4 pt-6 pb-8 px-4 bg-fundo-branco rounded-lg grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4">
                <CardDashboard titulo="Projetos em planejamento" valor={3} />
                <CardDashboard titulo="Projetos em integração" valor={5} />
                <CardDashboard titulo="Projetos finalizados" valor={12} />
                <CardDashboard titulo="Projetos em progresso" valor={2} />
            </div>
        </>
    )
};