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
    const mainStyles = 'bg-grey duration-150  rounded-none py-2 px-4 font-bold text-blue-dark outline-none  inline-flex items-center '
    const hoverStyles = 'hover:text-grey hover:bg-blue'
    return <button className={mainStyles + (!!disabled ? 'border-dashed border-2 border-blue-dark opacity-50' : hoverStyles)}>
        {text}
        {Icon && <Icon className='fill-current hover:text-grey ml-2 h-4 w-4 br' />}
    </button>
}