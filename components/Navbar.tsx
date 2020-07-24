import React, { useState } from 'react'
import Logo from './Logo'
import Button from './Button'
import { LoginModal } from './Modals'
import AvatarMenu from './AvatarMenu'

interface Props {
    userName?: string
}

export default (props: Props) => {
    const [loginVisible, setLoginVisible] = useState(false)

    return <header className='shadow-md w-full px-10 py-5 bg-white  sticky'>
        <div className='flex items-center justify-between max-w-6xl m-auto'>

            <a href={'/'} >
                <Logo className='h-10 text-blue fill-current' />
            </a>
            {props.userName ?

                <AvatarMenu userName={props.userName} /> :
                <div>

                    <Button
                        variant='primary'
                        text='Login'
                        onClick={() => setLoginVisible(true)}

                    />
                    <LoginModal
                        visible={loginVisible}
                        close={() => setLoginVisible(false)}
                    />
                </div>}
        </div>
    </header>
}