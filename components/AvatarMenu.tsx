import React, { useState } from 'react'
import Avatar from 'react-avatar';
import Popover from 'react-tiny-popover'

interface Props {
    userName: string
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
                        <li className='py-5 px-10 hover:bg-blue text-center   duration-150 hover:text-white font-pop'>Properties</li>
                    </a>
                    <a href='/dashboard'>
                        <li className='py-5 px-10 hover:bg-blue  text-center duration-150 hover:text-white  font-pop'>Dashboard</li>
                    </a>
                    <a href='/logout'>
                        <li className='py-5 px-10 hover:bg-blue  text-center   duration-150 hover:text-white  font-pop'>Logout</li>
                    </a>
                </ol>
            </div>
        }}
    >
        <div className='inline-block'>
            <Avatar size={'3rem'} onClick={() => setOpen(!open)} round name={props.userName} />
        </div>
    </Popover>
}