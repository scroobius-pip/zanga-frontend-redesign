import React from 'react'

interface Props {
    text: string
    className?: string
}

export default ({ text, className = '' }: Props) => {

    return <div className='flex flex-col justify-center items-center text-center'>
        <div>
            <svg className={'fill-current text-grey-dark w-32 ' + className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.114 53.114">
                <path d="M52.506.607a2.075 2.075 0 00-2.934 0L43.81 6.369A26.557 26.557 0 006.368 43.811l-5.76 5.76a2.075 2.075 0 102.934 2.934L52.506 3.542a2.075 2.075 0 000-2.934zM4.149 26.557A22.407 22.407 0 0140.866 9.313L9.313 40.866a22.25 22.25 0 01-5.164-14.309zM50.564 15.19a26.493 26.493 0 01-1.95 26.11 2.075 2.075 0 01-3.45-2.306 22.343 22.343 0 001.651-22.025 2.075 2.075 0 013.749-1.778zM41 46.437a2.075 2.075 0 01-.7 2.849 26.6 26.6 0 01-24.885 1.384 2.077 2.077 0 011.743-3.77 22.45 22.45 0 0020.99-1.167 2.075 2.075 0 012.852.704z" />
            </svg>
        </div>
        <p className={'text-blue font-pop mt-5 ' + className}>
            {text}
        </p>
    </div>
}