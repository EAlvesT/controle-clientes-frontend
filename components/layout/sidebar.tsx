"use client"

import { useState } from "react";
import {
    Menu,
    X,
} from "lucide-react";
import Link from "next/link";
import { links } from "@/lib/navlinks";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { AnimatePresence, motion } from "motion/react";

interface SidebarProps {
    children: React.ReactNode;
};

export function Sidebar({ children }: SidebarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const navContent = (
        <>
            <div className="flex items-start justify-start flex-col gap-4">
                <div className="flex items-center justify-between gap-3">
                    <h1 className="text-lg font-semibold text-background">Controle de clientes</h1>

                    <button
                        type="button"
                        onClick={() => setIsOpen(false)}
                        className="rounded-md p-1 text-black md:hidden"
                        aria-label="Fechar menu"
                    >
                        <X size={20} />
                    </button>
                </div>

                <ul className="flex w-full flex-col gap-4 md:gap-2">
                    {links.map(link => (
                        <li key={link.id}>
                            <Link
                                href={link.href}
                                className={clsx("flex items-center gap-2 rounded-md border border-black/10 px-3 py-2 hover:bg-background/20 text-background", {
                                    "bg-background/40": pathname.startsWith(link.href)
                                })}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.icon}
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h1>Logout</h1>
            </div>
        </>
    );

    return (
        <div className="flex min-h-screen w-full bg-background text-foreground">
            <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="fixed top-4 left-4 z-30 flex items-center justify-center rounded-md border border-black/10 bg-white p-2 text-black shadow-sm md:hidden"
                aria-label="Abrir menu"
            >
                <Menu size={20} />
            </button>

            {isOpen && (
                <button
                    type="button"
                    aria-label="Fechar menu"
                    className="fixed inset-0 z-30 bg-black/50 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Desktop */}
            <aside className="hidden md:flex md:static md:z-auto md:w-64 md:shadow-none flex-col justify-between gap-4 bg-white px-4 py-4 dark:text-background">
                {navContent}
            </aside>

            {/* mobile */}
            <AnimatePresence>
                {isOpen && (
                    <motion.aside
                        className="fixed inset-y-0 left-0 z-40 flex w-72 flex-col justify-between gap-4 bg-foreground px-4 py-4 shadow-lg dark:text-background md:hidden"
                        initial={{ x: "-100%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: "-100%", opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    >
                        {navContent}
                    </motion.aside>
                )}
            </AnimatePresence>

            <main className="min-w-0 flex-1 px-4 py-16 md:px-6 md:py-6">
                {children}
            </main>
        </div>
    )
}