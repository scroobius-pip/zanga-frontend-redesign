import React from 'react'
import Icons, { IconNames } from '../icons'

interface Props {
    className: string
    icon: IconNames
    text: string
}

export default ({ className, icon, text }: Props) => {
    const Icon = Icons[icon]
    return <div className={`flex align-middle items-center ${className}`}>
        <Icon className='w-6 fill-current mr-3' />
        <span className='font-pop '>{text}</span>
    </div>
}