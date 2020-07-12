import React, { ReactChildren } from 'react'

interface Props {
    children: React.ReactElement
    className?: string

}

export default ({ children, className }: Props) => {
    return <div className={'bg-white p-10 w-full shadow-lg ' + className}>
        {children}
    </div>
}