import React from 'react'
import Layout from '../components/Layout'
import EmptyState from '../components/EmptyState'
import { useSession } from 'next-auth/client'
import { UserType } from '../generated/graphql'
import Button from '../components/Button'
export default () => {
    const [session, loading] = useSession()

    return <Layout user={{ id: '', image: session?.user.image, name: session?.user.name, type: UserType.Unassigned }}>
        <div className=' flex content-center justify-center  items-center flex-col py-64 px-0'>
            <EmptyState
                className=''
                text='Page not found'
            />
            <Button variant='primary' className='mt-10' text='Back to properties' icon='Right' onClick={() => { }} />
        </div>
    </Layout>
}