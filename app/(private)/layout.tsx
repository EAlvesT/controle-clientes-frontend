import { Sidebar } from "@/components/layout/sidebar";

export default function PrivateLayoutPage({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Sidebar>
                {children}
            </Sidebar>
        </>
    )
}