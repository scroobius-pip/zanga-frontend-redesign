import React from 'react'
import Layout from '../components/Layout'
import Card from '../components/Card'
import SocialLoginButtons from '../components/SocialLoginButtons'
import WithSession from '../components/WithSession'
import { Session } from '../types'
import { UserType } from '../generated/graphql'
import PrivacyPolicy from '../components/Legal/PrivacyPolicy'
import Terms from '../components/Legal/Terms'


const Page = ({ session }: { session: Session }) => {
    return <Layout user={{ id: '', type: UserType.Unassigned, image: session?.user.image, name: session?.user.name }}>
        <div className='my-32 mt-20'>
            <Card className='max-w-2xl m-auto bg-blue'>

                <PrivacyPolicy />
            </Card>
            <Card className='max-w-2xl m-auto mt-32 bg-green'>

                <Terms />
            </Card>

        </div>
    </Layout>
}


export default WithSession(Page)