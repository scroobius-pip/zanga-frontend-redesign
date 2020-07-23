import React, { useState, useEffect } from 'react'

interface Props {
    totalCount: number
    onChange: (page: number) => any
    pageSize: number
    currentPage: number
}

export default ({ totalCount, onChange, pageSize, currentPage }: Props) => {
    const [current, setCurrent] = useState(currentPage - 1)

    useEffect(() => {
        onChange(current)
    }, [current])

    return <div>
        {[...Array(Math.ceil(totalCount / pageSize))].map((_, i) => {
            return <PageButton
                number={i + 1}
                onClick={() => setCurrent(i)}
                selected={i === current}
            />
        })}
    </div>

}

interface PageButtonProps {
    number: number
    onClick: () => any
    selected: boolean
}

const PageButton = (props: PageButtonProps) => {
    return <button onClick={props.onClick} className={`${!props.selected ? 'bg-grey-dark text-blue opacity-75 hover:opacity-100' : 'bg-blue'} focus:outline-none  font-medium text-white py-3 duration-150 px-6 font-pop text-base inline`}>
        {props.number}
    </button>
}