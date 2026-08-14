import { LoginContent } from "@/components/access/login-form";
import Link from "next/link";

export default function LoginPage() {
    return (
        <main className="w-full h-screen flex items-center justify-center">
            <div className="w-full max-w-sm md:max-w-lg p-4 rounded-lg bg-foreground text-background flex items-center justify-center flex-col gap-2">
                <h1 className="text-xl font-bold">Controle de Clientes</h1>

                <h2 className="text-lg">Login</h2>

                <LoginContent />

                <div className="w-full max-w-[80%] my-4 h-px bg-slate-400" />

                <p>Não possui uma conta?{" "}
                    <Link href="/register" className="hover:underline">
                        Cadastrar
                    </Link>
                </p>
            </div>
        </main>
    )
}