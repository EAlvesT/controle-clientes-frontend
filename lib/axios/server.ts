import { auth } from "@/auth";
import axios, { AxiosError } from "axios";

export async function getServerAxios() {
    const session = await auth();

    const instance = axios.create({
        baseURL: process.env.BASE_API_URL || "http://localhost:3333/api",
        headers: {
            authorization: session?.accessToken
                ? `Bearer ${session?.accessToken}`
                : ""
        }
    });

    instance.interceptors.response.use(
        (response) => response,
        (error: AxiosError<{ message?: string }>) => {
            if (error.response?.data) {
                const message =
                    error.response?.data?.message ||
                    error.message ||
                    "Erro inesperado";

                error.message = message;

                return Promise.reject(error);
            }

            if (error.request) {
                return Promise.reject(
                    new Error("Servidor não respondendo")
                );
            }

            return Promise.reject(
                new Error("Erro inesperado")
            );
        }
    );

    return instance;
};