import React, { Props } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

interface Props {
    children: React.ReactElement
}

export default ({ children }: Props) => {
    return <div className='bg-grey-light flex flex-col h-screen justify-between '>
        <Navbar />
        <main className='mb-auto mt-5'>{children}</main>
        <Footer />
    </div>
}