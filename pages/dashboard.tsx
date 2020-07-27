import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import WithSession from '../components/WithSession'
import SelectAccountType from '../components/SelectAccountType'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import { User, Session } from '../types'
import getZangaSdk from '../functions/getZangaSdk'
import { getSession } from 'next-auth/client'
import { UserType } from '../generated/graphql'
import Advertise from '../components/Dashboards/Advertise'
import Earn from '../components/Dashboards/Earn'

interface Props {
    user?: User
    token?: string
}

const Page = ({ user, token }: Props) => {
    const router = useRouter()

    useEffect(() => {

        if (!user) {
            router.replace('/')
        }
    }, [])



    return <Layout user={{ id: user?.id, name: user?.name, image: user?.image, type: user?.type }}>
        {
            user?.type === UserType.Unassigned ?
                <div className='max-w-lg mt-16 m-auto'>
                    <SelectAccountType token={token} />
                </div> : user?.type === UserType.Agency ?
                    <Advertise token={token} /> :
                    <Earn token={token} />


        }
    </Layout>
}



export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
    const session = await getSession(context) as Session
    const sdk = getZangaSdk(session.token)

    return {
        props: {
            user: session ? await (async (): Promise<User> => {
                const { me: { id, name, type } } = await sdk.me()
                return {
                    name: session.user.name,
                    id,
                    image: session.user.image,
                    type
                }
            })() : null,
            token: session?.token
        }
    }
}

export default Page