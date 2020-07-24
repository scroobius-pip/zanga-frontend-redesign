import React from 'react'
import Layout from '../components/Layout'
import Card from '../components/Card'
import SocialLoginButtons from '../components/SocialLoginButtons'
import WithSession from '../components/WithSession'


const Page = ({ session }) => {
    return <Layout session={session}>
        <Card className='max-w-screen-xl m-auto my-12 py-16'>
            <>
                <img className='w-8 m-auto mb-3' src={require('../assets/images/logo-z.svg')} />
                <h3 className='text-center font-pop text-blue mb-10'>Your Trusted Real Estate Partner</h3>
                {/* <div className='mb-12 max-w-md m-auto'>
                    <h2 className=' text-center font-pop text-xl font-bold text-blue mb-5'>Login </h2>
                    <SocialLoginButtons />
                </div> */}
                <hr className='mb-12 max-w-md m-auto border-grey-dark border-1' />
                <h3 className='text-center font-pop text-3xl font-bold text-blue'>How it works</h3>
                <div className='mb-16 mt-8 p-3 grid grid-cols-1 md:grid-cols-3 gap-5  items-center'>
                    <div className='text-center mb-12 rounded-full bg-opacity-0 hover:bg-opacity-50 md:hover:bg-opacity-0 duration-300 bg-grey'>
                        <img className='w-3/5 md:w-3/6  m-auto' src={require('../assets/images/property-listings/illustration1.svg')} />
                        <p className='font-pop text-blue font-bold mt-4'>List your property for free</p>
                        <p className='font-pop text-blue mt-2 max-w-md m-auto'>Anyone visiting zanga would be able to discover your property and contact you.</p>
                    </div>
                    <div className='text-center mb-12 rounded-full bg-opacity-0 hover:bg-opacity-50 md:hover:bg-opacity-0 duration-300 bg-grey'>
                        <img className='w-3/5 md:w-3/6  m-auto' src={require('../assets/images/property-listings/illustration2.svg')} />
                        <p className='font-pop text-blue font-bold mt-4'>Create bounties for your listings</p>
                        <p className='font-pop text-blue mt-2 max-w-md m-auto'>Would you like further market to millions of users on social media ?.
Give zanga users incentive to share your property. </p>
                    </div>
                    <div className='text-center mb-12 rounded-full bg-opacity-0 hover:bg-opacity-50 md:hover:bg-opacity-0 duration-300 bg-grey'>
                        <img className='w-3/5 md:w-3/6  m-auto' src={require('../assets/images/property-listings/illustration3.svg')} />
                        <p className='font-pop text-blue font-bold mt-4'>Have our agents manage and market your listings</p>
                        <p className='font-pop text-blue mt-2 max-w-md m-auto'>Use our premium service to have your property featured, with our agents managing and marketing your property catalogue.</p>
                    </div>
                </div>
                <div className='max-w-md m-auto'>
                    <p className='text-center text-blue text-xl font-pop font-semibold mb-10'>Sign in and start listing your property catalogue</p>

                    <SocialLoginButtons />
                </div>

            </>
        </Card>
    </Layout>
}


export default WithSession(Page)