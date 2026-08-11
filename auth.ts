import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { AxiosError } from 'axios';
import { getServerAxios } from './lib/axios/server';

interface User {
    id: number;
    nome: string;
    email: string;
    token: string;
    isAdmin: boolean;
    isActive: boolean;
};

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                email: { type: "email", label: "Email" },
                password: { type: "password", label: "senha" },
            },
            authorize: async (credentials) => {
                const api = await getServerAxios();

                try {
                    const response = await api.post("/auth/login", {
                        email: credentials.email,
                        senha: credentials.password
                    })

                    const user = response.data as User;

                    if (!user) {
                        throw new Error("Credenciais inválidas")
                    }

                    return {
                        id: String(user.id),
                        name: user.nome,
                        token: user.token,
                        isAdmin: user.isAdmin,
                        isActive: user.isActive
                    }

                } catch (error) {
                    if (error instanceof AxiosError) {
                        const message =
                            error.response?.data?.message ||
                            "Erro ao realizar login";

                        throw new Error(message);

                    }

                    throw new Error("Erro inesperado ao relizar login");
                }
            }
        })
    ],
    session: {
        strategy: "jwt",
        maxAge: 24 * 60 * 60, // 1 dia,
        updateAge: 0 // Não renova automaticamente
    },
    pages: {
        signIn: "/login",
        signOut: "/login"
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = String(user.id),
                    token.accessToken = user.token;
            }
            return token;
        },
        async session({ session, token }) {
            if (token?.id) {
                session.user.id = token.id as string;
            }
            if (token?.accessToken) {
                session.accessToken = token.accessToken as string;
            }
            return session
        }
    },
    secret: process.env.AUTH_SECRET,
    debug: true
});