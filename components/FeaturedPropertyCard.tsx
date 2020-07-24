import React from 'react'
import Button from './Button'

export interface Props {
    id: string
    title: string
    image: string
    price: string
    description: string
}

export default ({ title, price, description, image }: Props) => {
    return <a href='/property/d' className='min-h-full overflow-hidden shadow-lg w-full group text-center'>
        <div className='duration-100 opacity-75 hover:opacity-100 relative '>
            <a href='/property/d'>
                <Button
                    className='absolute right-0 bottom-0 opacity-0 group-hover:opacity-100 duration-200'
                    variant='secondary'
                    onClick={() => { }}
                    text='View'
                    icon='Right'
                />
            </a>
            <img className='w-full ' alt={title} src={image} />
        </div>

        <div className='bg-white px-6 py-4'>
            <div className='font-pop text-blue font-bold text-xl mb-2'>{title}</div>
            <div className='h-10 overflow-hidden'>
                <p className='font-pop text-blue truncate text-base'>{description}</p>

            </div>
            <h5 className='font-pop text-xl text-blue'>{price}</h5>
        </div>
    </a>
}