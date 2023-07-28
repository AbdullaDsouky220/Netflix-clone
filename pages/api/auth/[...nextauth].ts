import NextAuth, { AuthOptions } from 'next-auth';
import prismadb from '@/lib/prismadb'
import bcrypt from 'bcrypt'
import CredentialsProvider from "next-auth/providers/credentials"
import { User } from '@/global';
export const authOptions:AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "credientials",
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
            async authorize(credentials:any) {

                if (!credentials.email || !credentials.password) {
                    throw new Error('Please enter an email and password')
                }

                const user:any= await prismadb.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                })

                if (!user || user?.hashedPassword !== credentials.password) {
                    throw new Error('use is not found ')
                }

                const passwordMatch = await bcrypt.compare(credentials.password, user?.hashedPassword)

                if (!passwordMatch) {
                    throw new Error('please enter a valid password')
                }
                return user

            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    debug: process.env.NODE_ENV === "development",
    session: {
        strategy: "jwt"
    }

}
const  handler = NextAuth(authOptions)
export default  handler