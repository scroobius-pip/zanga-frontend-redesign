import React from 'react'
import { getSession } from 'next-auth/client'

export default Page => {

    const withSession = props => {
        return <Page {...props} />
    }

    withSession.getInitialProps = async ctx => {
        return {
            session: await getSession(ctx)
        }
    }
    return withSession
}