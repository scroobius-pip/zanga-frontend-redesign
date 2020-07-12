import React from 'react'

interface Props {
    onChange: (text: string) => any
    placeholder?: string
    label?: string
    disabled?: boolean
    type?: string
}

export default ({ onChange, disabled, placeholder, label, type }: Props) => {
    return <>
        {!!label && <label htmlFor={label} className='font-text block  font-pop text-blue mb-2'>
            {label}
        </label>
        }
        <input
            type={type}
            id={label}
            disabled={disabled}
            placeholder={placeholder}
            className='bg-grey font-int font-text font-bold text-blue block w-full rounded-none duration-150 focus:outline-none py-2 px-4 appearance-none'
        />
    </>
}