import React, { useState } from 'react'
import Layout from '../Layout'
import Card from '../Card'
import Button from '../Button'
import Info from '../../icons/Info'
import Pagination from '../Pagination'
import DashboardPropertyCard from '../DashboardPropertyCard'
import { AssignBountyModal, TopupBalanceModal } from '../Modals'
import InfoBar from '../InfoBar'
import getZangaSdk from '../../functions/getZangaSdk'
import { User, Property } from '../../types'
import EmptyState from '../EmptyState'
import formatCurrency from '../../functions/formatCurrency'
import FlipMove from 'react-flip-move';


export default ({ token, user, postedProperties: initialPostedProperties }: { token: string, user: User, postedProperties: Property[] }) => {
    const [postedProperties, setPostedProperties] = useState(initialPostedProperties)
    const [propertyIdDeleteLoading, setPropertyIdDeleteLoading] = useState('')
    const [bountyVisible, setBountyVisible] = useState<{ visible: boolean, propertyId: string, title: string }>({
        visible: false,
        propertyId: null,
        title: null
    })
    const [topupVisible, setTopupVisible] = useState(false)

    // const sdk = getZangaSdk(token)

    const onDeleteProperty = async (propertyId: string) => {

        try {
            setPropertyIdDeleteLoading(propertyId)
            const sdk = getZangaSdk(token)
            const result = (await sdk.deleteProperty({ propertyId })).deleteProperty
            if (result) {
                setPostedProperties(postedProperties.filter(p => p.id !== propertyId))
            }
        } catch (error) {
            console.error(error)
            throw error
        } finally {

            setPropertyIdDeleteLoading('')
        }

    }


    return <>
        <div className='max-w-6xl m-auto my-10'>
            <AssignBountyModal
                token={token}
                balance={user?.balance ?? 0}
                propertyId={bountyVisible.propertyId}
                title={bountyVisible.title}
                visible={bountyVisible.visible}
                close={() => setBountyVisible({ ...bountyVisible, visible: false })}
            />
            <TopupBalanceModal
                visible={topupVisible}
                token={token}
                close={() => setTopupVisible(false)}
            />
            <h4 className='font-pop text-blue font-medium'>Welcome {user.name}!</h4>
            <h2 className='font-bold font-pop text-blue text-3xl'>Dashboard</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 align-middle items-center gap-3 justify-center'>
                <Card className='mt-10 w-full'>
                    <>
                        <div>


                            <span className='font-pop flex font-semibold'><svg className='mr-2 fill-current hover:text-grey h-6 w-6' viewBox="0 0 15.765 14.451"><path d="M13.794,2.627V1.971A1.973,1.973,0,0,0,11.823,0H1.971A1.973,1.973,0,0,0,0,1.971V12.48a1.973,1.973,0,0,0,1.971,1.971H13.794a1.973,1.973,0,0,0,1.971-1.971V4.6A1.973,1.973,0,0,0,13.794,2.627ZM1.971,1.314h9.853a.658.658,0,0,1,.657.657v.657H1.971a.657.657,0,0,1,0-1.314ZM13.794,13.137H1.971a.658.658,0,0,1-.657-.657V3.829a1.964,1.964,0,0,0,.657.113H13.794a.658.658,0,0,1,.657.657V6.24H10.838a2.3,2.3,0,0,0,0,4.6h3.613V12.48a.658.658,0,0,1-.657.657Zm.657-3.613H12.914a2.277,2.277,0,0,0,0-1.971h1.539Zm-4.6-.985a.987.987,0,1,1,.985.985.987.987,0,0,1-.985-.985Zm0,0" fill="#234361" /></svg>Wallet Balance</span>
                        </div>
                        <h2 className='text-5xl font-pop font-semibold text-blue'>
                            {formatCurrency(user.balance)}
                        </h2>
                        <div className='w-full mt-6 flex justify-end'>
                            <Button
                                variant={'primary'}
                                text='Topup Balance'
                                onClick={() => setTopupVisible(true)}

                            />
                        </div>
                    </>
                </Card>
                <Card noShadow className=' mt-5 bg-orange'>
                    <div className=''>

                        <InfoBar
                            icon='Info'
                            text='Premium Service'
                            className=' font-semibold text-blue'
                        />
                        <div className='ml-5 mt-0 md:mt-5'>
                            <p className='text-blue'>Use our premium service to have your property featured, with our agents managing and marketing your property catalogue.</p>

                        </div>
                    </div>
                </Card>
            </div>
            <div>
                <h3 className='font-bold text-blue mt-16 font-pop text-3xl'>Properties ({postedProperties.length})</h3>
                <a href='/add-property'>
                    <Button
                        variant={'primary'}
                        icon='Add'
                        preventDefault={false}
                        text='Create Property'
                        onClick={() => { }}

                    />
                </a>
                {postedProperties.length ? <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6'>
                    <FlipMove enterAnimation="fade" staggerDurationBy={20} leaveAnimation="fade" typeName={null}>

                        {
                            postedProperties.map(p => <div key={p.id} className={`${propertyIdDeleteLoading === p.id && 'opacity-50'}`}>
                                <DashboardPropertyCard
                                    deleteProperty={() => onDeleteProperty(p.id)}
                                    setBounty={() => setBountyVisible({ ...bountyVisible, title: p.title, propertyId: p.id, visible: true })}
                                    bounty={p.bounty}
                                    description={p.description}
                                    featured={p.featured}
                                    id={p.id}
                                    slug={p.slug}

                                    image={p.images[0].previewUrl}
                                    location={`${p.city},${p.state}`}
                                    price={''}

                                    title={p.title}
                                />
                            </div>)
                        }
                    </FlipMove>

                </div> :
                    <EmptyState
                        text="You've not created any properties yet."

                    />

                }

            </div>
            <div>

                <h3 className='font-bold text-blue mt-16 font-pop text-3xl'>Cost Breakdown</h3>
                <div className='mt-6'>
                    {postedProperties.length ? <table className="table-fixed mb-5 ">
                        <thead className=''>
                            <tr>
                                <th className="w-1/2 text-left py-2">Title</th>
                                <th className="w-1/4 text-left py-2">Visits</th>
                                <th className="w-1/4 text-left py-2">Cost</th>
                                {/* <th className="w-1/4 text-left py-2">Remaining</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {postedProperties.map(p => <BreakdownItem
                                cost={p.expense}
                                remaining={p.remainingExpense}
                                shares={p.visits}
                                slug={p.slug}
                                title={p.title}
                                key={p.id}
                            />)}
                        </tbody>
                    </table> :
                        <EmptyState
                            text="No shares yet, create a property and start a bounty."
                        />}
                    {/* <div className='flex justify-end'>
                        <Pagination currentPage={1} onChange={() => { }} pageSize={5} totalCount={16} />

                    </div> */}
                </div>
            </div>
        </div>
    </>
}

export interface AdvertiseBreakdownItemProps {
    title: string
    shares: number
    remaining: number
    cost: number
    slug: string
}


const BreakdownItem = ({ title, shares, cost, remaining, slug }: AdvertiseBreakdownItemProps) => {
    return <>
        <tr onClick={() => { window.location.replace('/property/' + slug) }} className='bg-white border-t-8 duration-150 opacity-100 hover:opacity-100 border-grey' >
            <td className=" p-5 ">{title}</td>
            <td className=" p-5 ">{shares || '-'}</td>
            <td className=" p-5 ">{cost || '-'}/{remaining || '-'}</td>
            {/* <td className=" p-5 ">{remaining || '-'}</td> */}
        </tr>
    </>
}