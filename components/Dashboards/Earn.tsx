import React, { useState } from 'react'
import Layout from '../Layout'
import Card from '../Card'
import Button from '../Button'
import Info from '../../icons/Info'
import Pagination from '../Pagination'
import InfoBar from '../InfoBar'
import { WithdrawModal } from '../Modals'

export default () => {
    const [withdrawVisible, setWithdrawVisible] = useState(false)

    return <>
        <div className='max-w-6xl m-auto my-10'>
            <WithdrawModal
                balance={5000}
                close={() => setWithdrawVisible(false)}
                visible={withdrawVisible}
            />
            <h4 className='font-pop text-blue font-medium'>Welcome Simdi!</h4>
            <h2 className='font-bold font-pop text-blue text-3xl'>Dashboard</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 align-middle items-center gap-3 justify-center'>
                <Card className='mt-10 w-full'>
                    <>
                        <div>


                            <span className='font-pop flex font-semibold'><svg className='mr-2 fill-current hover:text-grey h-6 w-6' viewBox="0 0 15.765 14.451"><path d="M13.794,2.627V1.971A1.973,1.973,0,0,0,11.823,0H1.971A1.973,1.973,0,0,0,0,1.971V12.48a1.973,1.973,0,0,0,1.971,1.971H13.794a1.973,1.973,0,0,0,1.971-1.971V4.6A1.973,1.973,0,0,0,13.794,2.627ZM1.971,1.314h9.853a.658.658,0,0,1,.657.657v.657H1.971a.657.657,0,0,1,0-1.314ZM13.794,13.137H1.971a.658.658,0,0,1-.657-.657V3.829a1.964,1.964,0,0,0,.657.113H13.794a.658.658,0,0,1,.657.657V6.24H10.838a2.3,2.3,0,0,0,0,4.6h3.613V12.48a.658.658,0,0,1-.657.657Zm.657-3.613H12.914a2.277,2.277,0,0,0,0-1.971h1.539Zm-4.6-.985a.987.987,0,1,1,.985.985.987.987,0,0,1-.985-.985Zm0,0" fill="#234361" /></svg>Current Earnings</span>
                        </div>
                        <h2 className='text-5xl font-pop font-semibold text-green'>
                            ₦5000
                </h2>
                        <div className='w-full mt-6 flex justify-end'>
                            <Button
                                variant={'primary'}
                                text='Withdraw Funds'
                                onClick={() => setWithdrawVisible(true)}

                            />
                        </div>
                    </>
                </Card>
                <Card noShadow className=' mt-5 bg-blue'>
                    <div className=''>

                        <InfoBar
                            icon='Info'
                            text='How to earn'
                            className=' font-semibold text-white'
                        />
                        <div className='ml-5 mt-5'>
                            <ol className='list-decimal text-white'>
                                <li className='m-2'>Head over to www.myzanga.com/properties</li>
                                <li className='m-2'> Click the share button to generate your special sharing link. The button shows how much you earn each time a unique visitor visits your link  <img /> {/* Share button screenshot */}</li>
                                <li className='m-2'> Copy the link and post online, anyone who visits the link through it would earn you money.</li>

                            </ol>

                        </div>
                    </div>
                </Card>

            </div>
            <div>

                <h3 className='font-bold mt-16 text-blue font-pop text-3xl'>Earnings Breakdown</h3>
                <div className='mt-6'>
                    <table className="table-fixed mb-5">
                        <thead>
                            <tr>
                                <th className="w-1/2 text-left py-2">Title</th>
                                <th className="w-1/4 text-left py-2">Visits</th>
                                <th className="w-1/4 text-left py-2">Earnings</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='bg-white border-t-8 duration-150 opacity-100 hover:opacity-100 border-grey' >
                                <td className=" p-5 ">Intro to CSS</td>
                                <td className=" p-5 ">Adam</td>
                                <td className=" p-5 ">858</td>
                            </tr>
                            <tr className="bg-white border-t-8 duration-150 opacity-100 hover:opacity-100 border-grey" >
                                <td className=" p-5 ">A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design</td>
                                <td className=" p-5 ">Adam</td>
                                <td className=" p-5 ">112</td>
                            </tr>
                            <tr className='bg-white border-t-8 duration-150 opacity-100 hover:opacity-100 border-grey' >
                                <td className=" p-5 ">Intro to JavaScript</td>
                                <td className=" p-5 ">Chris</td>
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
    </>
}