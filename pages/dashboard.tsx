import React, { Suspense, useEffect, useState } from 'react'
import Layout from '../components/Layout'
import WithSession from '../components/WithSession'
import SelectAccountType from '../components/SelectAccountType'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import { User, Session, Property } from '../types'
import getZangaSdk from '../functions/getZangaSdk'
import { getSession, useSession } from 'next-auth/client'
import { UserType } from '../generated/graphql'
import Advertise, { AdvertiseBreakdownItemProps } from '../components/Dashboards/Advertise'
import Earn, { EarnBreakdownItemProps } from '../components/Dashboards/Earn'
import { DashboardProperty } from '../components/DashboardPropertyCard'
import { userInfo, type } from 'os'
import Button from '../components/Button'
import { getMe } from '../functions/getMe'


const Page = () => {
    const router = useRouter()
    const [session, loading] = useSession()
    const [user, setUser] = useState<User>()
    const [data, setData] = useState<DashboardData>()




    useEffect(() => {

        const sdk = getZangaSdk(session?.token)

        if (!loading && !session) {
            router.replace('/')
            return
        }

        getMe(sdk, session).then(me => {
            setUser(me)
            getDashboardData(me.type, sdk)
                .then(setData)
        }).catch(err => {
            console.log(err)
        })


    }, [loading, session])


    const Dashboard = ({ user, data }: { user: User, data: DashboardData }) => {

        if (!data) {
            return <div>...Loading</div>
        }

        switch (user.type) {
            case UserType.Individual:
                return <Earn breakdown={data as any} user={user} token={session?.token} />
            case UserType.Agency:
                return <Advertise postedProperties={data as any} user={user} token={session?.token} />
            default:
                return <div className='max-w-lg mt-16 m-auto'>
                    <SelectAccountType token={session?.token} />
                </div>
        }

    }

    type DashboardData = Property[] | EarnBreakdownItemProps[]

    const getDashboardData = async (userType: User['type'], sdk: any): Promise<DashboardData> => {
        switch (userType) {
            case UserType.Agency:
                return ((await sdk.postedProperties()).postedProperties).properties.map(p => ({
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
                }))

            case UserType.Individual:
                return ((await sdk.sharedProperties()).sharedProperties).points.map(p => ({
                    earnings: p.profit,
                    slug: p.propertySlug,
                    title: p.propertyTitle,
                    visits: p.impressions
                }))

            default:
                break;
        }

    }



    return <Layout user={user}>
        <Dashboard user={user} data={data} />
    </Layout>
}




export default Page