import React, { useState } from 'react'
import Layout from '../components/Layout'
import Card from '../components/Card'
import Button from '../components/Button'
import Info from '../icons/Info'
import Pagination from '../components/Pagination'
import DashboardPropertyCard from '../components/DashboardPropertyCard'
import { AssignBountyModal, TopupBalanceModal } from '../components/Modals'

export default () => {
    const [bountyVisible, setBountyVisible] = useState(false)
    const [topupVisible, setTopupVisible] = useState(false)

    return <Layout>
        <div className='max-w-6xl m-auto my-10'>
            <AssignBountyModal
                visible={bountyVisible}
                close={() => setBountyVisible(false)}
            />
            <TopupBalanceModal
                visible={topupVisible}
                close={() => setTopupVisible(false)}
            />
            <h4 className='font-pop text-blue font-medium'>Welcome Simdi!</h4>
            <h2 className='font-bold font-pop text-blue text-3xl'>Dashboard</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 align-middle items-center gap-3 justify-center'>
                <Card className='mt-10 w-full'>
                    <>
                        <div>


                            <span className='font-pop flex font-semibold'><svg className='mr-2 fill-current hover:text-grey h-6 w-6' viewBox="0 0 15.765 14.451"><path d="M13.794,2.627V1.971A1.973,1.973,0,0,0,11.823,0H1.971A1.973,1.973,0,0,0,0,1.971V12.48a1.973,1.973,0,0,0,1.971,1.971H13.794a1.973,1.973,0,0,0,1.971-1.971V4.6A1.973,1.973,0,0,0,13.794,2.627ZM1.971,1.314h9.853a.658.658,0,0,1,.657.657v.657H1.971a.657.657,0,0,1,0-1.314ZM13.794,13.137H1.971a.658.658,0,0,1-.657-.657V3.829a1.964,1.964,0,0,0,.657.113H13.794a.658.658,0,0,1,.657.657V6.24H10.838a2.3,2.3,0,0,0,0,4.6h3.613V12.48a.658.658,0,0,1-.657.657Zm.657-3.613H12.914a2.277,2.277,0,0,0,0-1.971h1.539Zm-4.6-.985a.987.987,0,1,1,.985.985.987.987,0,0,1-.985-.985Zm0,0" fill="#234361" /></svg>Wallet Balance</span>
                        </div>
                        <h2 className='text-5xl font-pop font-semibold text-blue'>
                            ₦5000
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

            </div>
            <div>
                <h3 className='font-bold text-blue mt-16 font-pop text-3xl'>Properties (3)</h3>
                <a href='/add-property'>
                    <Button
                        variant={'primary'}
                        icon='Add'
                        text='Create Property'
                        onClick={() => { }}

                    />
                </a>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6'>
                    <DashboardPropertyCard
                        setBounty={() => setBountyVisible(true)}
                        featured={false}
                        {...property}
                    />
                    <DashboardPropertyCard
                        setBounty={() => setBountyVisible(true)}
                        featured={false}
                        {...property}
                    />
                    <DashboardPropertyCard
                        setBounty={() => setBountyVisible(true)}
                        featured={false}
                        {...property}
                    />
                </div>
                <div className='flex mt-5 justify-end'>
                    <Pagination currentPage={1} onChange={() => { }} pageSize={5} totalCount={16} />

                </div>
            </div>
            <div>

                <h3 className='font-bold text-blue mt-16 font-pop text-3xl'>Cost Breakdown</h3>
                <div className='mt-6'>
                    <table className="table-fixed mb-5 ">
                        <thead className=''>
                            <tr>
                                <th className="w-1/2 text-left py-2">Title</th>
                                <th className="w-1/4 text-left py-2">Shares</th>
                                <th className="w-1/4 text-left py-2">Cost</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='bg-white border-t-8 duration-150 opacity-100 hover:opacity-100 border-grey' >
                                <td className=" p-5 ">Intro to CSS</td>
                                <td className=" p-5 ">24</td>
                                <td className=" p-5 ">858</td>
                            </tr>
                            <tr className="bg-white border-t-8 duration-150 opacity-100 hover:opacity-100 border-grey" >
                                <td className=" p-5 ">A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design</td>
                                <td className=" p-5 ">24</td>
                                <td className=" p-5 ">112</td>
                            </tr>
                            <tr className='bg-white border-t-8 duration-150 opacity-100 hover:opacity-100 border-grey' >
                                <td className=" p-5 ">Intro to JavaScript</td>
                                <td className=" p-5 ">24</td>
                                <td className=" p-5 ">1,280</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='flex justify-end'>
                        <Pagination currentPage={1} onChange={() => { }} pageSize={5} totalCount={16} />

                    </div>
                </div>
            </div>
        </div>
    </Layout>
}

const property = {
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut iusto odit magni tempore deserunt repellendus animi blanditiis quam reiciendis veritatis iure suscipit fuga fugit nesciunt aperiam totam voluptates eius odio, similique, quia dolores? Repellat atque iste fuga eligendi sit dignissimos mollitia consequatur at ut ullam ab esse sed omnis dolores, corporis magnam placeat quidem! Sint excepturi qui similique dignissimos temporibus corporis nam molestiae amet, quia accusamus fuga consequuntur et porro labore error sunt velit eveniet eum vitae voluptatem aliquid recusandae culpa? Facilis, soluta. Harum magnam quaerat adipisci doloremque libero sit rem voluptate magni, eius accusamus quidem dicta nobis porro asperiores?',
    id: 'sda',
    image: 'https://ik.imagekit.io/myzanga/property_o444TeODtMI.jpg',
    price: '₦ 300.000.00',
    title: 'Duplex in wuye, abuja',
    bounty: 0,
    location: 'Abuja, Gwarinpa',

}