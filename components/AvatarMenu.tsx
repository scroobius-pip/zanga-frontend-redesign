import React, { useState } from 'react'
import Avatar from 'react-avatar';
import Popover from 'react-tiny-popover'
import { signout } from 'next-auth/client'

interface Props {
    userName: string
    image: string
}

export default (props: Props) => {
    const [open, setOpen] = useState(false)
    return <Popover
        position='bottom'
        isOpen={open}
        containerClassName='shadow-lg'
        onClickOutside={() => setOpen(false)}
        content={() => {
            return <div className='bg-grey  duration-150'>
                <ol>
                    <a href='/properties'>
                        <li className='py-3 px-6 hover:bg-blue text-center   duration-150 hover:text-white font-pop'>Properties</li>
                    </a>
                    <a href='/dashboard'>
                        <li className='py-3 px-6 hover:bg-blue  text-center duration-150 hover:text-white  font-pop'>Dashboard</li>
                    </a>
                    <a href='/settings'>
                        <li className='py-3 px-6 hover:bg-blue  text-center duration-150 hover:text-white  font-pop'>Settings</li>
                    </a>
                    <a href='#' onClick={() => signout({ callbackUrl: window.location.hostname + '/' })}>
                        <li className='py-3 px-6 hover:bg-blue  text-center   duration-150 hover:text-white  font-pop'>Logout</li>
                    </a>
                </ol>
            </div>
        }}
    >
        <div className='inline-block'>
            <Avatar src={props.image} size={'3rem'} onClick={() => setOpen(!open)} round name={props.userName} />
        </div>
    </Popover>
}