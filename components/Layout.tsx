import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { ModalProvider, useModal } from 'react-modal-hook'
import LoginModal from './Modals/LoginModal'
import { useSession } from 'next-auth/client'
import Page from '../pages/add-property'


interface Props {
    children: React.ReactElement
    session: Session
}

export default ({ children, session }: Props) => {

    // const [session, loading] = useSession()
    useEffect(() => {
        console.log(session)
    }, [])

    return <div className='bg-grey-light flex flex-col h-screen justify-between '>

        <Navbar image={session?.user?.image} userName={session?.user?.name} />
        <main className='mb-auto bg-grey-light'>{children}</main>
        <Footer />

    </div >
}
