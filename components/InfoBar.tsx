import React from 'react'
import Icons, { IconNames } from '../icons'

interface Props {
    className: string
    icon: IconNames
    text: string
}

export default ({ className, icon, text }: Props) => {
    const Icon = Icons[icon]
    return <div className={`flex items-center ${className}`}>
        <Icon className='w-4 h-4 inline fill-current mr-2 align-middle' />
        <span className='font-pop '>{text}</span>
    </div>
}