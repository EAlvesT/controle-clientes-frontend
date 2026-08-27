interface CardDashboardProps {
    titulo: string;
    valor: number;
};

export function CardDashboard({ titulo, valor }: CardDashboardProps) {
    return (
        <div
            className="bg-slate-200 rounded-md flex flex-col md:flex-row items-center text-black overflow-hidden cursor-pointer hover:shadow-lg duration-300 border border-gray-300"
        >
            <div className="p-4 flex-2 flex flex-col items-start justify-start text-xl md:text-sm lg:text-base">
                <span>{titulo}</span>
            </div>
            <div className="bg-blue-200 w-full md:w-0 md:h-full shrink-0 py-4 flex-1 flex items-center justify-center text-2xl font-bold border-l border-blue-300">
                <span>{valor}</span>
            </div>
        </div>
    )
}