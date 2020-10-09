import React, { useState, forwardRef } from 'react'
import Icons from '../icons'
import Button from './Button'

export interface DashboardProperty {
    id: string
    title: string
    image: string
    description: string
    price: string
    featured: boolean
    slug: string
    location: string
    bounty: number
    ref?: any
}
type Props = DashboardProperty & { setBounty: () => any, deleteProperty: () => any, editProperty: () => any }

const Card = ({ description, featured = false, id, slug, image, price, title, location, bounty, setBounty, deleteProperty, ref, editProperty }: Props) => {
    const [showMore, setShowMore] = useState(false)

    return <a href={`/property/${slug}`} ref={ref}>

        <div className={'p-5 shadow-xl hover:shadow-md duration-700 mb-1 w-ful bg-white border-2 hover:border-opacity-100 border-opacity-0 border-solid ' + (!featured ? 'border-blue' : 'border-orange')}>
            <div className='w-full flex justify-end mb-2'>

                {featured && <div className='text-blue font-pop py-2 px-4 bg-orange bg-opacity-100   border-2 border-solid border-orange text-sm'>Promoted</div>}
            </div>
            <div className='flex flex-col mb-5'>
                <div className='w-full mb-5 '>
                    <img style={{ maxHeight: 180 }} className='w-full h-full' src={image} />
                </div>
                <div>
                    <h4 className='text-blue font-semibold text-base font-pop  mb-2'>{title}</h4>
                    <div className='font-pop opacity-75 text-blue flex items-center'>
                        <Icons.Location className='fill-current  mr-1 h-4 w-4' />
                        <span>{location}</span>
                    </div>
                </div>
            </div>
            {/* <div className='mb-5'>
                <p className={'text-blue duration-150 font-pop mb-2 ' + (!showMore ? 'truncate' : '')}>{description}</p>
                <div className='text-blue opacity-25 hover:opacity-100 duration-100 font-bold font-pop cursor-pointer' onClick={(e) => { setShowMore(!showMore); e.preventDefault() }}>Read {showMore ? 'less' : 'more'}</div>
            </div> */}
            <div className='flex flex-col  items-end w-full '>
                <Button
                    icon='Add'
                    text='Assign a Bounty'
                    onClick={setBounty}
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
            <div className='flex justify-between items-end mt-2'>
                <span onClick={e => {
                    deleteProperty()
                    e.preventDefault()
                }} className='font-pop text-red font-bold text-sm opacity-75 hover:opacity-100'>Delete</span>
                <span onClick={e => {
                    editProperty()
                    e.preventDefault()
                }} className='font-pop text-blue font-bold text-sm opacity-75 hover:opacity-100'>Edit</span>
            </div>
        </div>
    </a>
}

export default forwardRef((props: Props, ref) => <Card  {...props} ref={ref} />)