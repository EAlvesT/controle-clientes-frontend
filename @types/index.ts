export interface ClienteProps {
    id: number;
    razao_social: string;
    nome: string;
    email: string;
    email_2?: string;
    contato: string;
    contato_2?: string;
    cpf_cnpj: string;
    descricao?: string;
    isActive: boolean;
    created_at: Date;
    updated_at: Date;
    telefone: string;
    telefone2?: string;
};