import NextAuth, { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from '@auth/prisma-adapter';
import Github from "next-auth/providers/github";
import { db } from "@/services/database";
import { createStripeCustomer } from "@/services/stripe";

export const authOptions: NextAuthOptions = {
  providers: [
    Github({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  pages: {
    signIn: '/login',
    signOut: '/login',
    error: '/login',
    verifyRequest: '/login',
    newUser: '/app',
  },
  adapter: PrismaAdapter(db) as any,
  secret: process.env.NEXT_AUTH_SECRET,
  events: {
    signIn: async (message) => {
      await createStripeCustomer({
        email: message.user.email as string,
        name: message.user.name as string,
      });
    },
    createUser: async (message) => {
      await createStripeCustomer({
        email: message.user.email as string,
        name: message.user.name as string,
      });
    },
  }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST, handler as auth };