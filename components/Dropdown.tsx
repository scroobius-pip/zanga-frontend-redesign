import React from 'react'

interface Option {
    value: any
    label: string
}

interface Props {
    onChange: (text: string) => any
    initialValue: string
    label?: string
    options: Option[]
    disabled?: boolean
}

export default ({ onChange, disabled, label, options, initialValue }: Props) => {
    return <>
        {!!label && <label htmlFor={label} className='font-text block  font-pop text-blue mb-2'>
            {label}
        </label>
        }
        <div className='relative'>

            <select

                disabled={disabled}
                onChange={(e) => { console.log(e.target.value) }}
                className='bg-grey font-int font-bold text-blue block w-full rounded-none duration-150 focus:outline-none py-2 px-4 appearance-none'
            >
                {options.map(option => <option className='text-blue bg-white font-pop p-5' value={option.value}>{option.label}</option>)}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" viewBox="0 0 7.682 4.2">
                    <path d="M3.468 3.992a.808.808 0 001.082 0l2.938-2.8A.668.668 0 106.54.25L4.089 2.561a.167.167 0 01-.22 0L1.111.161a.67.67 0 10-.882 1.008z" />
                </svg>

            </div>
        </div>
    </>
}