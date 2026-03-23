import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "@/lib/mongodb";
import bcrypt from "bcrypt";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),

        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {},
                password: {},
            },

            async authorize(credentials) {
                const client = await clientPromise;
                const db = client.db("tripgenie");

                const user = await db
                    .collection("users")
                    .findOne({ email: credentials?.email });

                if (!user) {
                    throw new Error("No user found");
                }

                const isValid = await bcrypt.compare(
                    credentials!.password,
                    user.password
                );

                if (!isValid) {
                    throw new Error("Wrong password");
                }

                return {
                    id: user._id.toString(),
                    name: user.name,
                    email: user.email,
                };
            },
        }),
    ],

    pages: {
        signIn: "/login",
    },

    session: {
        strategy: "jwt",
    },
});

export { handler as GET, handler as POST };