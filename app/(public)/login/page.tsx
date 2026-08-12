import { LoginContent } from "@/components/access/login-form";

export default function LoginPage() {
    return (
        <main className="w-full h-screen flex items-center justify-center">
            <div className="w-full max-w-sm p-4 rounded-lg bg-foreground text-background flex items-center justify-center flex-col gap-2">
                <h1 className="text-xl font-bold">Controle de Clientes</h1>

                <h2 className="text-lg">Login</h2>

                <LoginContent />
            </div>
        </main>
    )
}