import { NuxtAuthHandler } from '#auth'
import GithubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaClient} from '@prisma/client'
import { compare } from 'bcrypt'

export default NuxtAuthHandler({
    secret: process.env.AUTH_SECRET,
    pages: {
        // signIn: 'http://ec2-44-203-149-17.compute-1.amazonaws.com/api/auth/signin',
        // signOut: '/auth/signout',
        // error: 'http://ec2-44-203-149-17.compute-1.amazonaws.com/api/auth/error', // Error code passed in query string as ?error=
        // verifyRequest: '/auth/verify-request', // (used for check email message)
        // newUser: 'http://ec2-44-203-149-17.compute-1.amazonaws.com/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
    },
    providers: [
        // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
        GithubProvider.default({
           clientId: '67655454874051815be1',
           clientSecret: '6567c99ab118930cfa1bd156487fab5cdc9f1612'
        }),
        // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
        CredentialsProvider.default({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Credentials',
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
              username: { label: 'username', type: 'text' },
              password: { label: 'password', type: 'password' }
            },
            async authorize (credentials: any) {
                // You need to provide your own logic here that takes the credentials
                // submitted and returns either a object representing a user or value
                // that is false/null if the credentials are invalid.
                // NOTE: THE BELOW LOGIC IS NOT SAFE OR PROPER FOR AUTHENTICATION!
                const prisma = new PrismaClient()

                const userData: object | null = await prisma.user.findUnique({
                    where: {
                        username: credentials.username,
                    },
                })
            
                if (!userData) {
                    // eslint-disable-next-line no-console
                    console.error('Invalid Username or Password!')
                    return {res: 'no userData'}
                }

                const match = await compare(credentials.password, credentials.password);

                if (match) {
                    return { username: userData.username, role: userData.role , password: userData.password}
                } else {
                    console.error('Invalid Username or Password!')
                    return {res: 'password not match'}
                }
            }
          })
    ]
})