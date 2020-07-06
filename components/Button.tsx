import React from 'react'
import Icons, { IconNames } from '../icons'
interface Props {
    variant: 'primary' | 'secondary'
    disabled?: boolean
    icon?: IconNames
    onClick: () => Promise<any> | any
    text: string
}

export default ({ text, variant, disabled, icon }: Props) => {
    const Icon = !!icon && Icons[icon]
    return <button className="bg-grey hover:bg-blue duration-150 hover:text-grey rounded-none py-2 px-4 font-bold text-blue-dark outline-none  inline-flex items-center">
        {text}
        <Icon className='fill-current hover:text-grey ml-2 h-4 w-4 br' />
    </button>
}