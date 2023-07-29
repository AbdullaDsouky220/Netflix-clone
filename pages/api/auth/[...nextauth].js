import NextAuth, { AuthOptions } from 'next-auth';
import prismadb from '@/lib/prismadb'
import {compare} from 'bcrypt'
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'
import { PrismaAdapter } from '@next-auth/prisma-adapter';
export const authOptions = {
    providers: [
      GoogleProvider({
        clientId:process.env.GOOGLE_ID,
        clientSecret:process.env.GOOGLE_SECRET,
    }),
    GithubProvider({
        clientId:process.env.GITHUB_ID,
        clientSecret:process.env.GITHUB_SECRET,
    }),
        CredentialsProvider({
            name: "credentials",
            credentials: {
                username: {
                    label: "Username",
                    type: "text",
                },
                email: {
                    label: "Email",
                    type: "text",

                },
                password: {
                    label: "Password",
                    type: "Password",

                },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                  throw new Error('Email and password required');
                }
        
                const user = await prismadb.user.findUnique({ where: {
                  email: credentials.email
                }});
        
                if (!user || !user.hashedPassword) {
                  throw new Error('Email does not exist');
                }
        
                const isCorrectPassword = await compare(credentials.password, user.hashedPassword);
        
                if (!isCorrectPassword) {
                  throw new Error('Incorrect password');
                }
        
                return user;
              }
        })
    ],
    pages:{
        signIn:"/auth"
    },
    secret: process.env.NEXTAUTH_SECRET,
    debug: process.env.NODE_ENV === "development",
    adapter:PrismaAdapter(prismadb),
    session: {
        strategy: "jwt"
    }

}
const  handler = NextAuth(authOptions)
export default  handler