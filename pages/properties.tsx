import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import PropertyFilter, { Filters } from '../components/PropertyFilter'
import Dropdown from '../components/Dropdown'
import PropertyCard from '../components/PropertyCard'
import Pagination from '../components/Pagination'
import { CostType, UserType } from '../generated/graphql'
import { ShareLinkModal } from '../components/Modals'
import { GetServerSideProps } from 'next'
import { useSession } from 'next-auth/client'
import getZangaSdk from '../functions/getZangaSdk'
import states from '../assets/states'
import EmptyState from '../components/EmptyState'
import { useRouter } from 'next/router'
import sortProperties, { PropertySortOptions } from '../functions/sortProperties'
import { User, Property, Session } from '../types'
import formatCurrency from '../functions/formatCurrency'
import Head from 'next/head'
import { getMe } from '../functions/getMe'


interface Props {
    initialFilters: Filters
    initialProperties: Property[]
    nextPageCursor?: string

}

const Page = ({ initialFilters, initialProperties }: Props) => {
    const [shareLinkModalVisible, setShareLinkModalVisible] = useState(false)
    const [properties, setProperties] = useState(initialProperties)
    const [session, sessionLoading] = useSession();
    const [user, setUser] = useState<User>()
    const [sortBy, setSortyBy] = useState<PropertySortOptions>('featured')
    const [sharedProperty, setSharedProperty] = useState<{ title: string, slug: string, bounty: string }>()
    const [loading, setLoading] = useState(false)
    const [filters, setFilters] = useState(initialFilters)
    const router = useRouter()


    useEffect(() => {
        if (!loading && !session) {
            return
        }
        const sdk = getZangaSdk(session?.token)

        getMe(sdk, session).then(me => {
            setUser(me)

        }).catch(err => {
            console.log(err)
        })

    }, [session, sessionLoading])


    const onSharePropertyClick = (title: string, slug: string, bounty: string) => {
        if (!user) {
            //show login modal
            router.push('/earn-login')
            return
        }

        setSharedProperty({ slug, title, bounty })
        setShareLinkModalVisible(true)
    }

    const sortedProperties = sortBy ? sortProperties(properties, sortBy) : properties

    return <Layout user={{
        id: "",
        image: session?.user.image,
        name: session?.user.name,
        type: UserType.Unassigned,
    }}>

        <>
            <Head>
                <title
                >
                    {[filters.type, filters.state].includes('Any') ? 'All Properties' : `Properties for ${filters.type} in ${filters.state}`}
                </title>
            </Head>
            <ShareLinkModal
                close={() => setShareLinkModalVisible(false)}
                title={sharedProperty?.title}
                url={`www.myzanga.com/property/${sharedProperty?.slug}?ref=${user?.id}`}
                visible={shareLinkModalVisible}
                bounty={sharedProperty?.bounty}
            />
            <div className=' bg-cover mb-15 bg-no-repeat p-24 bg-fixed' style={{ backgroundImage: `linear-gradient(#23436182, #23436182), url(${require('../assets/images/properties-background.jpg')})` }}>
                <div className='max-w-6xl m-auto'>
                    <h2 className='font-pop text-white text-4xl '>{[filters.type, filters.state].includes('Any') ? 'All Properties' : `Properties for ${filters.type} in ${filters.state}`}</h2>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 max-w-6xl m-auto '>
                <div className='relative'>

                    <div className='mt-10 sticky top-0'>
                        <PropertyFilter initialFilters={filters} />
                    </div>
                </div>
                <div className=' md:row-1 md:mr-10'>
                    {!!sortedProperties.length && <div className='flex my-10 items-center  justify-end'>

                        <div className='text-right flex flex-col items-end '>

                            <div
                                className='w-48 mr-5 md:mr-0 '
                            >

                                <Dropdown

                                    onChange={(value: any) => setSortyBy(value)}
                                    initialValue='featured'
                                    options={['bounty_asc', 'bounty_desc', 'price_asc', 'price_desc', 'featured'].map(o => ({ label: o.toUpperCase(), value: o }))}
                                    variant='dark'
                                    label='Sort by'
                                />
                            </div>
                        </div>
                    </div>}
                    {sortedProperties.length ? <div className='mb-40'>
                        {sortedProperties.map(property => {
                            return <PropertyCard
                                onShare={onSharePropertyClick}
                                slug={property.slug}
                                bounty={property.bounty}
                                description={property.description.trim()}
                                featured={property.featured}
                                id={property.id}
                                image={property.images[0].previewUrl}
                                location={`${property.city.trim()}, ${property.state.trim()}`}
                                title={property.title}
                                key={property.id}
                                price={property.costValue}
                                priceType={property.costType}
                            />
                        })}

                    </div> : <div className='mb-48'><EmptyState className='mt-10' text='Your search did not match any properties.' /></div>
                    }

                </div>
                {/* <div className='mt-10 w-full flex justify-center '>
                    <Pagination
                        currentPage={2}
                        onChange={() => { }}
                        pageSize={30}
                        totalCount={70}
                    />
                </div> */}
            </div>
        </>
    </Layout>

}


export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
    // const session = await getSession(context) as Session
    const sdk = getZangaSdk()

    const filters = context.query as { budget?: string, state?: string, type?: CostType }

    const validatedFilters = {

        budget: (parseFloat(filters.budget) || 0) > 0 ? parseFloat(filters.budget) : null,
        state: (states.includes(filters.state)) ? filters.state : null,
        type: [CostType.Rent, CostType.Sale].includes(filters.type) ? filters.type : null
    }

    const { budget, type, state } = validatedFilters


    const result = (await sdk.properties({ input: { budget, state, type } })).properties

    return {
        props: {
            initialFilters: {
                budget,
                state: state ?? 'Any',
                type: type ?? 'Any'
            },
            initialProperties: result.properties.map(property => ({
                bounty: property.bounty,
                costType: property.costType,
                costValue: property.costValue,
                description: property.description,
                expense: property.expense,
                images: property.images,
                owner: {
                    name: property.owner.name,
                    phone: property.owner.phone,

                },
                id: property.id,
                remainingExpense: property.remainingExpense,
                slug: property.slug,
                state: property.state,
                city: property.city,
                title: property.title,
                visits: property.visits,
                featured: property.featured
                // featured:result.
            })),
            nextPageCursor: result.pageInfo.after,

        }
    }

}

export default Page