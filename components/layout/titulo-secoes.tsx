import {
    UserRoundPlus,
    Folders,
    Users,
} from "lucide-react";
import Link from "next/link";

interface TituloSecoesProps {
    titulo: string;
    localUtilizado: "clientes" | "projetos" | "usuarios";
    textoBotao: string;
};

export function TituloSecoes({ titulo, localUtilizado, textoBotao }: TituloSecoesProps) {
    return (
        <header
            className="w-full px-4 md:px-8 py-2 md:py-4 bg-white text-slate-900 rounded-md flex items-center justify-between"
        >
            <h2 className="font-bold text-lg">{titulo}</h2>

            <Link
                className="px-2 py-1 rounded-md font-medium text-white flex items-center gap-2 bg-foreground dark:bg-background cursor-pointer hover:dark:bg-background/80 hover:bg-foreground/80 duration-200"
                href={`/${localUtilizado}/new`}
            >
                {textoBotao}

                {localUtilizado === "clientes" && <UserRoundPlus />}

                {localUtilizado === "projetos" && <Folders />}

                {localUtilizado === "usuarios" && <Users />}
            </Link>
        </header>
    )
};