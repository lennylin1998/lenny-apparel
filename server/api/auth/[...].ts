import { NuxtAuthHandler } from '#auth'
import GithubProvider from 'next-auth/providers/github'
export default NuxtAuthHandler({
    providers: [
        // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
        GithubProvider.default({
           clientId: '67655454874051815be1',
           clientSecret: '6567c99ab118930cfa1bd156487fab5cdc9f1612'
        })
    ]
})