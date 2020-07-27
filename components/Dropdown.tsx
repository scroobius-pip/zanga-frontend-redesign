import React from 'react'

interface Option {
    value: any
    label: string
}

interface Props {
    ref?: any
    onChange?: (text: string) => any
    initialValue: string
    label?: string
    options: Option[]
    disabled?: boolean
    variant?: 'light' | 'dark'
    name?: string
}

export default ({ onChange, disabled, label, options, initialValue, name = '', variant = 'light', ref }: Props) => {
    const variantStyle = variant === 'light' ? 'bg-grey text-blue' : 'bg-blue text-grey'

    return <>
        {!!label && <label htmlFor={label} className='font-text block  font-pop text-blue mb-2'>
            {label}
        </label>
        }
        <div className='relative duration-150 '>

            <select
                name={name}
                ref={ref}
                disabled={disabled}
                onChange={(e) => { onChange && onChange(e.target.value) }}
                className={`font-int font-bold block w-full rounded-none duration-150 focus:outline-none py-2 px-4 appearance-none ${variantStyle}`}
            >
                {options.map(option => <option selected={initialValue === option.value} className='text-blue bg-white font-pop p-5' value={option.value}>{option.label}</option>)}
            </select>
            <div className={`${variantStyle} pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 `}>
                <svg className="fill-current h-4 w-4" viewBox="0 0 7.682 4.2">
                    <path d="M3.468 3.992a.808.808 0 001.082 0l2.938-2.8A.668.668 0 106.54.25L4.089 2.561a.167.167 0 01-.22 0L1.111.161a.67.67 0 10-.882 1.008z" />
                </svg>

            </div>
        </div>
    </>
}