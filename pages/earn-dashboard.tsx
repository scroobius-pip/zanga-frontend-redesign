import React from 'react'
import Layout from '../components/Layout'
import Card from '../components/Card'
import Button from '../components/Button'
import Info from '../icons/Info'

export default () => {
    return <Layout>
        <div>
            <h4>Welcome Simdi!</h4>
            <h2>Dashboard</h2>
            <Card>
                <>
                    <div>
                        <img />
                        <span className='font-pop font-semibold'>Current Balance</span>
                    </div>
                    <h2 className='text-3xl font-pop font-bold text-green'>
                        ₦5000
                </h2>
                    <div className='w-full flex justify-end'>
                        <Button
                            variant={'primary'}
                            text='Withdraw Funds'
                            onClick={() => { }}

                        />
                    </div>
                </>
            </Card>
            <div>
                <div className='flex align-middle items-center'>
                    <Info className='w-6 fill-current text-blue mr-3' />
                    <span className='text-blue text-xl font-pop font-semibold'>How to earn</span>
                </div>
                <div>
                    <ol className='list-decimal'>
                        <li>Head over to www.myzanga.com/properties</li>
                        <li> Click the share button to generate your special sharing link. The button shows how much you earn when you share.  <img /> {/* Share button screenshot */}</li>
                        <li> Copy the link and post online, anyone who visits the link through it would earn you money.</li>

                    </ol>

                </div>
            </div>
            <div>
                <h3>Earnings Breakdown</h3>
                <div>
                    <table className="table-fixed">
                        <thead>
                            <tr>
                                <th className="w-1/2 text-left py-2">Title</th>
                                <th className="w-1/4 text-left py-2">Visits</th>
                                <th className="w-1/4 text-left py-2">Earnings</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='bg-white border-t-8 border-grey' >
                                <td className=" py-2">Intro to CSS</td>
                                <td className=" py-2">Adam</td>
                                <td className=" py-2">858</td>
                            </tr>
                            <tr className="bg-white border-t-8 border-grey" >
                                <td className=" py-2">A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design</td>
                                <td className=" py-2">Adam</td>
                                <td className=" py-2">112</td>
                            </tr>
                            <tr className='bg-white border-t-8 border-grey' >
                                <td className=" py-2">Intro to JavaScript</td>
                                <td className=" py-2">Chris</td>
                                <td className=" py-2">1,280</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </Layout>
}