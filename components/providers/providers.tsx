"use client"

import { getQueryClient } from "@/lib/query-client";
import { QueryClientProvider } from "@tanstack/react-query";
import { AppProgressProvider as ProgressProvider } from "@bprogress/next";

export function Providers({ children }: { children: React.ReactNode }) {
    const queryClient = getQueryClient();

    return (
        <QueryClientProvider
            client={queryClient}
        >
            <ProgressProvider
                height="4px"
                color="#121212"
                options={{ showSpinner: false }}
                shallowRouting
            >
                {children}
            </ProgressProvider>
        </QueryClientProvider>
    )
}