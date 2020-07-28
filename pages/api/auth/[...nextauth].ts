import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import jwt from 'jsonwebtoken'

const options = {
    site: process.env.SITE,
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
        async session(session, token) {
            const user = { email: token.user.email, name: token.user.name }
            const jwtToken = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '1000d' })

            return Promise.resolve({ ...session, user: { ...session.user, }, token: jwtToken })
        }
    }
}

export default (req, res) => NextAuth(req, res, options)