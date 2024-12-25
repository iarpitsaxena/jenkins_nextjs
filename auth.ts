import authConfig from "@/auth.config";
import { db } from "@/lib/db";
import NextAuth from "next-auth";

export const { auth, handlers, signIn, signOut } = NextAuth({
    callbacks: {
        async signIn({ user }) {
            const existingUser = await db.user.findUnique({
                where: {
                    email: user.email as string
                }
            })
            if (!existingUser) {
                await db.user.create({
                    data: {
                        email: user.email as string,
                        name: user.name as string,
                        avatar: user.image as string
                    }
                })
            }
            return true;
        }
    },
    ...authConfig,
});