import React from 'react'
import Logo from './Logo'
import Button from './Button'

export default () => {
    return <header className='shadow-md w-full px-10 py-5 flex items-center justify-between bg-white sticky'>
        <div >
            <Logo className='h-10 text-blue fill-current' />
        </div>
        <div>
            <Button
                variant='secondary'
                text='Login'
                onClick={() => { }}

            />
        </div>
    </header>
}