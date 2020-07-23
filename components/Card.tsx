import React, { ReactChildren } from 'react'

interface Props {
    children: React.ReactElement
    className?: string
    noShadow?: boolean
}

export default ({ children, className, noShadow }: Props) => {
    return <div className={`bg-white p-10 w-full ${noShadow ? '' : 'shadow-lg'} ${className}`}>
        {children}
    </div>
}