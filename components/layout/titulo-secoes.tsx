interface TituloSecoesProps {
    titulo: string;
};

export function TituloSecoes({ titulo }: TituloSecoesProps) {
    return (
        <header>
            <h2>{titulo}</h2>
        </header>
    )
};