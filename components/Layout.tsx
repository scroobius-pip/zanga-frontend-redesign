import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { ModalProvider, useModal } from 'react-modal-hook'
import LoginModal from './Modals/LoginModal'
import { useSession } from 'next-auth/client'
import Page from '../pages/add-property'
import { User } from '../types'


interface Props {
    children: React.ReactElement
    // session: Session
    user?: User
}

export default ({ children, user }: Props) => {

    // const [session, loading] = useSession()
    useEffect(() => {
        // console.log(user)
    }, [])

    return <div className='bg-grey-light flex flex-col h-screen justify-between '>

        <Navbar image={user?.image} userName={user?.name} />
        <main className='mb-auto bg-grey-light'>{children}</main>
        <Footer />

    </div >
}
