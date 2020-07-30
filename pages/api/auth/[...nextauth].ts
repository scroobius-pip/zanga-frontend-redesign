import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import jwt from 'jsonwebtoken'

const options = {
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
        async session(session, user, sessionToken) {
            // const jwtUser = { email: user.email, name: user.name }
            const jwtToken = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '1000d' })
            session.token = jwtToken
            return Promise.resolve(session)
            // return Promise.resolve({ ...session, user: { ...session.user, }, token: jwtToken })
        }
    }
}

export default (req, res) => NextAuth(req, res, options)