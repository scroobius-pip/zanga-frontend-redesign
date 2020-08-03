import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import WithSession from '../components/WithSession'
import SelectAccountType from '../components/SelectAccountType'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import { User, Session, Property } from '../types'
import getZangaSdk from '../functions/getZangaSdk'
import { getSession } from 'next-auth/client'
import { UserType } from '../generated/graphql'
import Advertise, { AdvertiseBreakdownItemProps } from '../components/Dashboards/Advertise'
import Earn, { EarnBreakdownItemProps } from '../components/Dashboards/Earn'
import { DashboardProperty } from '../components/DashboardPropertyCard'
import { userInfo, type } from 'os'
import Button from '../components/Button'

interface Props {
    user?: User
    token?: string
    postedProperties?: Property[]
    earnBreakdown?: EarnBreakdownItemProps[]
}

const Page = ({ user, token, postedProperties, earnBreakdown }: Props) => {
    const router = useRouter()

    useEffect(() => {

        if (!user) {
            router.replace('/')
        }
    }, [])



    return <Layout user={user}>
        <div>

            {
                user?.type === UserType.Unassigned ?
                    <div className='max-w-lg mt-16 m-auto'>
                        <SelectAccountType token={token} />
                    </div> : user?.type === UserType.Agency ?
                        <Advertise postedProperties={postedProperties} user={user} token={token} /> :
                        <Earn breakdown={earnBreakdown} user={user} token={token} />


            }
        </div>
    </Layout>
}



export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
    const session = await getSession(context) as Session
    const sdk = getZangaSdk(session?.token)
    console.log(session)

    const user = await (async (): Promise<User> => {
        if (!session) return null
        const { me: { id, name, type, email, balance } } = await sdk.me()
        return {
            name: session.user.name,
            id,
            image: session.user.image,
            type,
            balance
        }
    })()
    return {
        props: {
            user,
            token: session?.token ?? '',
            earnBreakdown: user?.type === UserType.Individual ? ((await sdk.sharedProperties()).sharedProperties).points.map(p => ({
                earnings: p.profit,
                slug: p.propertySlug,
                title: p.propertyTitle,
                visits: p.impressions
            })) : null,
            postedProperties: user?.type === UserType.Agency ? ((await sdk.postedProperties()).postedProperties).properties.map(p => ({
                owner: {
                    name: p.owner.name,
                    phone: p.owner.phone
                },
                bounty: p.bounty,
                city: p.city,
                costType: p.costType,
                costValue: p.costValue,
                description: p.description,
                expense: p.expense,
                remainingExpense: p.remainingExpense,
                featured: p.featured,
                id: p.id,
                images: p.images,
                slug: p.slug,
                state: p.state,
                title: p.title,
                visits: p.visits
            })) : null

        }
    }
}

export default Page