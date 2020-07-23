import React from 'react'
import Icons, { IconNames } from '../icons'
interface Props {
    variant: 'primary' | 'secondary'
    disabled?: boolean
    icon?: IconNames
    onClick: () => Promise<any> | any
    text: string
    className?: string
}

export default ({ text, variant, disabled, icon, className, onClick }: Props) => {
    const Icon = !!icon && Icons[icon]
    const mainStyles = 'focus:outline-none justify-between duration-200 rounded-none py-2 px-6 outline-none inline-flex items-center font-bold '
    const variantStyles = variant === 'secondary' ? 'bg-grey text-blue ' : 'bg-blue text-grey '
    const hoverStyles = variant === 'secondary' ? 'hover:text-grey hover:bg-blue ' : 'hover:bg-grey hover:text-blue '

    return <button onClick={onClick} className={(className + ' ' ?? '') + variantStyles + mainStyles + (!!disabled ? 'border-dashed border-2 border-blue-dark opacity-50' : hoverStyles)}>
        <span className='font-pop font-normal'>
            {text}
        </span>
        {Icon && <Icon className='fill-current  ml-2 h-4 w-4' />}
    </button>
}