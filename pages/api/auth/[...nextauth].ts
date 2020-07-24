import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
    site: 'http://localhost:3000',
    providers: [
        Providers.Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET

        }),
        Providers.Facebook({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET
        })
    ],
    session: {
        jwt: true
    },
    jwt: {
        secret: process.env.JWT_SECRET
    },
    callbacks: {

    }
}

export default (req, res) => NextAuth(req, res, options)