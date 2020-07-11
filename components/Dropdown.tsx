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

export default ({ onChange, disabled, label, options }: Props) => {
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
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </div>
        </div>
    </>
}