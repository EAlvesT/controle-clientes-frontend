import NextAuth, { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            name?: string;
            email?: string;
            isActive?: boolean;
        } & DefaultSession["user"];
        accessToken?: string;
    }

    interface User extends DefaultUser {
        id: string;
        name?: string;
        token: string;
        isActive?: boolean;
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        id: string;
        accessToken: string;
        isActive?: boolean;
    }
}