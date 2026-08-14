import { RegisterContent } from "@/components/access/register-form";
import Link from "next/link";

export default function RegisterPage() {
    return (
        <main className="w-full h-screen flex items-center justify-center">
            <div className="w-full max-w-sm md:max-w-lg p-4 rounded-lg bg-foreground text-background flex items-center justify-center flex-col gap-2">
                <h1 className="text-xl font-bold">Controle de Clientes</h1>

                <h2 className="text-lg">Cadastro</h2>

                <RegisterContent />

                <div className="w-full max-w-[80%] my-4 h-px bg-slate-400" />

                <p>Já possui uma conta?{" "}
                    <Link href="/login" className="hover:underline">
                        Acessar
                    </Link>
                </p>

                <p className="text-slate-600 text-sm text-center">
                    Caso não tenha uma conta, solicite um administrador para criá-la.
                </p>
            </div>
        </main>
    )
}