import React from 'react'
import Logo from './Logo'




export default () => {
    return <footer className='bg-grey-light text-center'>
        <Logo className='h-12 text-blue fill-current opacity-75 mb-5 m-auto' />
        <span className='text-blue opacity-25'>version 0.12</span>
        <div className='flex justify-between align-middle mb-5 flex-col max-w-screen-sm m-auto sm:flex-row'>
            <a className='font-pop text-blue opacity-50 hover:opacity-100' href="#">About Us</a>
            <a className='font-pop text-blue opacity-50 hover:opacity-100' href="#">Terms & Conditions</a>
            <a className='font-pop text-blue opacity-50 hover:opacity-100' href="#">Privacy Policy</a>
            <a className='font-pop text-blue opacity-50 hover:opacity-100' href="mailto:admin@myzanga.com">Contact Us</a>
        </div>
        <div className='font-pop text-blue font-medium opacity-50 hover:opacity-100'>twitter:  <a href='#'>@myzanga_ng</a></div>
    </footer>
}