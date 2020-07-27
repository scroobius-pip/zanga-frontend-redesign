import React, { useState } from 'react'
import Card from './Card'
import InfoBar from './InfoBar'
import Icons from '../icons'
import { useSession } from 'next-auth/client'
import { Session } from '../types'
import getZangaSdk from '../functions/getZangaSdk'
import { UserType } from '../generated/graphql'

interface Props {
    token: string
}

export default ({ token }: Props) => {
    const [loading, setLoading] = useState(false)

    const onAccountSelect = async (type: 'Individual' | 'Agency') => {
        setLoading(true)
        const sdk = getZangaSdk(token)
        await sdk.updateUser({ input: { type: UserType[type] } })
        setLoading(false)
        location.reload()
    }

    return <Card className={`${loading ? 'pointer-events-none opacity-50' : ''}`} >
        <div>
            <img className='w-8 m-auto mb-3' src={require('../assets/images/logo-z.svg')} />
            <p className='text-center font-pop text-xl font-bold text-blue mb-5'>Select account type</p>
            <InfoBar
                className='text-blue text-center '
                icon='Info'
                text="Don't worry this can be changed later."
            />

            <div className='flex flex-col justify-end items-end mt-16'>
                <button onClick={() => onAccountSelect('Agency')} className=' bg-grey-light focus:outline-none p-5 w-full duration-150 hover:shadow-sm opacity-75 hover:opacity-100 flex justify-between items-center'>

                    <svg className=' w-16' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 106.712 103.028"><path d="M87.027,67.223a109.491,109.491,0,0,0-45.61,11.932L23.687,89.394A9.8,9.8,0,0,1,10.319,85.81l-9.011-15.6A9.8,9.8,0,0,1,4.892,56.839l14.69-8.482a1.779,1.779,0,0,1,2.43.651L33.554,69a1.779,1.779,0,0,0,2.475.624,1.827,1.827,0,0,0,.569-2.466L24.972,47.02a1.776,1.776,0,0,1,.524-2.347A109.463,109.463,0,0,0,55.762,13.068a7.445,7.445,0,0,1,12.746.249L93.183,56.061A7.444,7.444,0,0,1,87.027,67.223Zm3.166-29.77a11.129,11.129,0,0,0-7.1-12.268,1.779,1.779,0,0,0-2.142,2.564q2.956,5.121,5.948,10.3A1.781,1.781,0,0,0,90.194,37.454ZM49.137,100.387,40.7,85.736a1.78,1.78,0,0,0-2.431-.652c-4.574,2.639-4.747,2.742-10.849,6.264a1.78,1.78,0,0,0-.652,2.43l8.455,14.642a5.779,5.779,0,0,0,5.018,2.895c1.925,0,2.662-.651,6.783-3.03A5.787,5.787,0,0,0,49.137,100.387ZM103.18,23.93A1.779,1.779,0,0,0,101.4,20.85l-4.6,2.657a1.781,1.781,0,0,0,.891,3.319C98.323,26.826,98.2,26.808,103.18,23.93ZM86.825,14.714l1.122-4.188a1.779,1.779,0,1,0-3.436-.921l-1.122,4.188a1.779,1.779,0,1,0,3.436.921Zm19.826,28.208a1.779,1.779,0,0,0-1.258-2.178l-4.188-1.122a1.779,1.779,0,1,0-.921,3.436c4.58,1.227,4.329,1.183,4.649,1.183a1.78,1.78,0,0,0,1.717-1.319Z" transform="translate(0 -8.287)" fill="#234361" /></svg>

                    <span className='font-pop opacity-75 hover:opacity-100 font-bold ml-5 text-blue'>I want to advertise</span>
                    <Icons.Right className='w-4 h-4 inline fill-current ml-3 text-blue' />

                </button>

                <a className='mt-5 font-pop text-blue font-semibold' href='/earn-login'>Learn more about advertising</a>
            </div>
            <div className='flex flex-col justify-end items-end mt-12'>

                <button onClick={() => onAccountSelect('Individual')} className=' bg-grey-light mt-5 focus:outline-none p-5 w-full duration-150 hover:shadow-sm opacity-75 hover:opacity-100 flex justify-between items-center'>
                    <svg className='w-16' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96.699 96.699"><g ><path d="M19.831,151A19.821,19.821,0,0,0,6.352,185.363a15.661,15.661,0,0,1,9.166-7.212,8.5,8.5,0,1,1,8.624,0,15.661,15.661,0,0,1,9.166,7.212A19.821,19.821,0,0,0,19.831,151Z" transform="translate(0 -122.481)" fill="#234361" /><path d="M67.219,321.479a9.932,9.932,0,0,0-8.8,5.4,19.8,19.8,0,0,0,17.594,0A9.932,9.932,0,0,0,67.219,321.479Z" transform="translate(-47.388 -260.763)" fill="#234361" /><ellipse cx="2.5" cy="3" rx="2.5" ry="3" transform="translate(17.35 45.35)" fill="#234361" /><path d="M308.352,34.363a15.661,15.661,0,0,1,9.166-7.212,8.5,8.5,0,1,1,8.625,0,15.661,15.661,0,0,1,9.166,7.212,19.831,19.831,0,1,0-26.957,0Z" transform="translate(-244.963)" fill="#234361" /><path d="M360.422,175.882a19.8,19.8,0,0,0,17.594,0,9.863,9.863,0,0,0-17.594,0Z" transform="translate(-292.351 -138.281)" fill="#234361" /><circle cx="2.5" cy="2.5" r="2.5" transform="translate(74.35 17.35)" fill="#234361" /><path d="M321.831,302a19.821,19.821,0,0,0-13.479,34.363,15.661,15.661,0,0,1,9.166-7.212,8.5,8.5,0,1,1,8.625,0,15.661,15.661,0,0,1,9.166,7.212A19.821,19.821,0,0,0,321.831,302Z" transform="translate(-244.963 -244.963)" fill="#234361" /><path d="M369.219,472.478a9.932,9.932,0,0,0-8.8,5.4,19.8,19.8,0,0,0,17.594,0A9.932,9.932,0,0,0,369.219,472.478Z" transform="translate(-292.351 -383.243)" fill="#234361" /><circle cx="2.5" cy="2.5" r="2.5" transform="translate(74.35 74.35)" fill="#234361" /><path d="M213.64,146.511a25.514,25.514,0,0,1,2.84,4.9l11.125-6.423a25.318,25.318,0,0,1-2.09-5.336Z" transform="translate(-173.291 -113.279)" fill="#234361" /><path d="M213.64,314.989l11.875,6.856a25.324,25.324,0,0,1,2.09-5.336l-11.125-6.423A25.5,25.5,0,0,1,213.64,314.989Z" transform="translate(-173.291 -251.521)" fill="#234361" /></g></svg>
                    <span className='font-pop font-bold ml-5 text-blue'>I want to earn</span>
                    <Icons.Right className='w-4 h-4 inline fill-current ml-3 text-blue' />
                </button>
                <a className='mt-5  font-pop opacity-75 hover:opacity-100 text-blue font-semibold' href='/listing-login'>Learn more about earning</a>
            </div>
        </div>
    </Card>
}