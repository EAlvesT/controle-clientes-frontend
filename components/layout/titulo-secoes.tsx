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
    const iconSize = 22;

    return (
        <header
            className="w-full px-4 md:px-8 py-2 md:py-4 bg-white text-background rounded-md flex items-center justify-between"
        >
            <h2 className="font-bold text-lg">{titulo}</h2>

            <Link
                className="px-4 py-2 rounded-md font-medium text-white text-md flex items-center gap-2 bg-background cursor-pointer hover:dark:bg-background/80 hover:bg-foreground/80 duration-200"
                href={`/${localUtilizado}/new`}
            >
                {textoBotao}

                {localUtilizado === "clientes" && <UserRoundPlus size={iconSize} />}

                {localUtilizado === "projetos" && <Folders size={iconSize} />}

                {localUtilizado === "usuarios" && <Users size={iconSize} />}
            </Link>
        </header>
    )
};