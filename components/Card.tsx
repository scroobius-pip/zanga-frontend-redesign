import React, { ReactChildren } from 'react'

interface Props {
    children: React.ReactElement
    user?: any
}

export default ({ children }: Props) => {
    return <div className='bg-white p-10 w-full max-w-sm shadow-lg'>
        {children}
    </div>
}