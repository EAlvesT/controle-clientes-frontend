interface ClienteInfoPage {
    params: Promise<{ id: string }>
}

export default async function ClienteInfo({ params }: ClienteInfoPage) {
    const { id } = await params;

    return (
        <>
            <p>Mostrando página do cliente: {id}</p>
        </>
    )
}