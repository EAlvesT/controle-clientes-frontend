import {
    LayoutDashboard,
    UsersRound,
    Folders,
    Users
} from "lucide-react";

export const links = [
    { id: 1, label: 'Dashboard', href: '/dashboard', icon: <LayoutDashboard /> },
    { id: 2, label: 'Clientes', href: '/clientes', icon: <UsersRound /> },
    { id: 3, label: 'Projetos', href: '/projetos', icon: <Folders /> },
    { id: 4, label: 'Usuários', href: '/usuarios', icon: <Users /> },
];