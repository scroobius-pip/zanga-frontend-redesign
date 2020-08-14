import React, { useState } from 'react'
import Icons from '../icons'
import Button from './Button'
import { CostType } from '../generated/graphql'
import NumberFormat from 'react-number-format'
interface Property {
    id: string
    title: string
    image: string
    description: string
    price: number
    priceType: CostType
    featured: boolean
    location: string
    bounty: number
    slug: string
}

export default ({ description, slug, featured = false, id, image, price, title, location, bounty, onShare, priceType }: Property & { onShare: (title: string, slug: string) => any }) => {
    const [showMore, setShowMore] = useState(false)

    return <a href={`/property/${slug}`}><div className={'p-5 shadow-xl hover:shadow-md duration-700 mb-1 w-ful bg-white border-2 hover:border-opacity-100 border-opacity-0 border-solid ' + (!featured ? 'border-blue' : 'border-orange')}>
        <div className='w-full flex justify-end mb-2'>
            {featured && <div className='text-blue font-pop py-2 px-4 bg-orange bg-opacity-100   border-2 border-solid border-orange text-sm'>Promoted</div>}
        </div>
        <div className='flex sm:flex-row flex-col mb-2'>
            <div className='w-full mb-5 sm:pr-5 sm:w-2/5'>
                <img style={{ maxHeight: 100 }} className='w-full h-full' src={image} />
            </div>
            <div>
                <h4 className='text-blue font-semibold text-base font-pop mb-2'>{title}</h4>
                <div className='font-pop opacity-75 text-blue flex items-center'>
                    <Icons.Location className='fill-current  mr-1 h-4 w-4' />
                    <span>{location}</span>
                </div>
            </div>
        </div>
        <div className='mb-5'>
            <p className={'text-blue duration-150  font-pop mb-1 ' + (!showMore ? 'truncate' : '')}>{description}</p>
            <div className='text-blue text-sm opacity-25 hover:opacity-100 duration-100 font-bold font-pop cursor-pointer' onClick={(e) => { setShowMore(!showMore); e.preventDefault() }}>Read {showMore ? 'less' : 'more'}</div>
        </div>
        <div className='flex justify-between w-full  items-center'>
            <h3 className='font-bold font-pop text-green text-xl'>
                {priceType} @ <NumberFormat displayType='text' value={price} prefix='₦' isNumericString thousandSeparator='.' decimalSeparator='' suffix={CostType[priceType] === CostType.Rent ? '/yr' : ''} />
            </h3>
            {/* <ShareButton /> */}
            <Button
                disabled={bounty < 1}
                className='font-light'
                icon='Share'
                variant='secondary'
                onClick={() => {
                    onShare(title, slug)

                }}
                text={`₦${bounty}/share`}
            />
        </div>
    </div></a>
}
