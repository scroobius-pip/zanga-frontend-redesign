import React, { useState } from 'react'
import Icons from '../icons'
import Button from './Button'
interface Property {
    id: string
    title: string
    image: string
    description: string
    price: string
    featured: boolean
    location: string
    bounty: number
}

export default ({ description, featured = false, id, image, price, title, location, bounty }: Property) => {
    const [showMore, setShowMore] = useState(false)

    return <div className={'p-5 shadow-xl hover:shadow-md duration-700 mb-1 w-ful bg-white border-2 hover:border-opacity-100 border-opacity-0 border-solid ' + (!featured ? 'border-blue' : 'border-orange')}>
        <div className='w-full flex justify-end mb-2'>
            {featured && <div className='text-blue font-pop py-2 px-4 bg-orange bg-opacity-100   border-2 border-solid border-orange text-sm'>Promoted</div>}
        </div>
        <div className='flex sm:flex-row flex-col mb-5'>
            <div className='w-full mb-5 sm:pr-5 sm:w-2/5'>
                <img src={image} />
            </div>
            <div>
                <h4 className='text-blue font-bold text-lg font-pop mb-2'>{title}</h4>
                <div className='font-pop opacity-75 text-blue flex items-center'>
                    <Icons.Location className='fill-current  mr-2 h-4 w-4' />
                    <span>{location}</span>
                </div>
            </div>
        </div>
        <div className='mb-5'>
            <p className={'text-blue duration-150 font-pop mb-2 ' + (!showMore ? 'truncate' : '')}>{description}</p>
            <div className='text-blue opacity-25 hover:opacity-100 duration-100 font-bold font-pop cursor-pointer' onClick={() => setShowMore(!showMore)}>Read more</div>
        </div>
        <div className='flex flex-col  items-end w-full '>
            <Button
                icon='Add'
                text='Assign a Bounty'
                onClick={() => { }}
                variant='primary'
                className='w-full'
            />
            {/* <ShareButton /> */}
            <Button
                disabled
                className='font-light mt-2'
                icon='Share'
                variant='secondary'
                onClick={() => { }}
                text={`₦${bounty}/share`}
            />
        </div>
    </div>
}
