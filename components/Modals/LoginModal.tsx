import React from 'react'
import Card from '../Card'
import SocialLoginButtons from '../SocialLoginButtons'

export default () => {
    return <Card noShadow>
        <div>
            <img className='w-8 m-auto mb-3' src={require('../../assets/images/logo-z.svg')} />
            <p className='text-center font-pop mb-10 text-blue'>Welcome to Zanga</p>
            <h2 className=' text-center font-pop text-xl font-bold text-blue mb-5'>Login </h2>
            <SocialLoginButtons />
        </div>
    </Card>
}