import React from 'react'

interface Props {
    onChange?: (text: string) => any
    placeholder?: string
    label?: string
    disabled?: boolean
    type?: string
    value?: string
    textArea?: boolean
    ref?: any
    name?: string
}

export default ({ onChange, disabled, placeholder, label, type, value, name = '', textArea = false, ref }: Props) => {
    // const Input = textArea ? textarea : input

    return <>
        {!!label && <label htmlFor={label} className='font-text block  font-pop text-blue mb-2'>
            {label}
        </label>
        }
        {!textArea ? <input
            name={name}
            onChange={(e) => { onChange && onChange(e.target.value) }}
            value={value}
            ref={ref}
            type={type}
            id={label}
            disabled={disabled}
            placeholder={placeholder}
            className='bg-grey font-int font-text font-bold text-blue block w-full rounded-none duration-150 focus:outline-none py-2 px-4 appearance-none'
        /> :
            <textarea
                name={name}
                onChange={(e) => { onChange && onChange(e.target.value) }}
                ref={ref}
                value={value}
                // type={type}
                id={label}
                disabled={disabled}
                placeholder={placeholder}
                className='bg-grey font-int font-text font-bold text-blue block w-full rounded-none duration-150 focus:outline-none py-2 px-4 appearance-none'
            />
        }
    </>
}