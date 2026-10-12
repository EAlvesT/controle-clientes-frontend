import { createClienteSchema } from "@/schemas/create-cliente";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

export function useCreateClienteForm() {
    return useForm({
        resolver: zodResolver(createClienteSchema),
        mode: "onChange"
    })
};

export function useCreateClienteMutation() {
    return useMutation({
        // mutationFn: () => {return undefined}
    })
}