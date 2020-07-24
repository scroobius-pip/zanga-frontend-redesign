import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { ModalProvider, useModal } from 'react-modal-hook'
import LoginModal from './Modals/LoginModal'

interface Props {
    children: React.ReactElement
}

export default ({ children }: Props) => {




    return <div className='bg-grey-light flex flex-col h-screen justify-between '>

        <Navbar userName='Simdi Jinkins' />
        <main className='mb-auto bg-grey-light'>{children}</main>
        <Footer />

    </div >
}