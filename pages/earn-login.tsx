import React from 'react'
import Layout from '../components/Layout'
import Card from '../components/Card'
import SocialLoginButtons from '../components/SocialLoginButtons'


const Page = () => {
    return <Layout >
        <Card className='max-w-screen-xl m-auto my-12 py-16'>
            <>
                <img className='w-8 m-auto mb-3' src={require('../assets/images/logo-z.svg')} />
                <h3 className='text-center font-pop text-blue mb-10'>Get paid to share property on the internet!</h3>
                {/* <div className='mb-12 max-w-md m-auto'>
                    <h2 className=' text-center font-pop text-xl font-bold text-blue mb-5'>Login </h2>
                    <SocialLoginButtons />
                </div> */}
                <hr className='mb-12 max-w-md m-auto border-grey-dark border-1' />
                <h3 className='text-center font-pop text-3xl font-bold text-green'>How it works</h3>
                <div className='mb-16 mt-8 p-3 grid grid-cols-1 md:grid-cols-3 gap-5  items-center'>
                    <div className='text-center mb-12 rounded-full bg-opacity-0 hover:bg-opacity-50 md:hover:bg-opacity-0 duration-300 bg-grey'>
                        <img className='w-3/5 md:w-5/6  m-auto' src={require('../assets/images/earn/illustration3.svg')} />
                        <p className='font-pop text-blue font-semibold mt-4 capitalize'>Register and Browse Property</p>
                        {/* <p className='font-pop text-blue mt-2 max-w-md m-auto'>Anyone visiting zanga would be able to discover your property and contact you.</p> */}
                    </div>
                    <div className='text-center mb-12 rounded-full bg-opacity-0 hover:bg-opacity-50 md:hover:bg-opacity-0 duration-300 bg-grey'>
                        <img className='w-3/5 md:w-5/6  m-auto' src={require('../assets/images/earn/illustration1.svg')} />
                        <p className='font-pop text-blue font-semibold mt-4 capitalize '>Generate Your Referral link </p>
                        {/* <p className='font-pop text-blue mt-2 max-w-md m-auto'>Would you like further market to millions of users on social media ?.
Give zanga users incentive to share your property. </p> */}
                    </div>
                    <div className='text-center mb-12 rounded-full bg-opacity-0 hover:bg-opacity-50 md:hover:bg-opacity-0 duration-300 bg-grey'>
                        <img className='w-3/5 md:w-5/6  m-auto' src={require('../assets/images/earn/illustration2.svg')} />
                        <p className='font-pop text-blue font-semibold mt-4 capitalize'>Share Your Link and Earn</p>
                        {/* <p className='font-pop text-blue mt-2 max-w-md m-auto'>
                            Place your links on facebook, twitter, whatsapp and any online platform. Get paid for every person who visits your Url.
                        </p> */}
                    </div>
                </div>
                <div className='max-w-md m-auto'>
                    <p className='text-center text-blue text-xl font-pop font-semibold mb-10'>Sign in and start earning with zanga</p>

                    <SocialLoginButtons />
                </div>

            </>
        </Card>
    </Layout>
}


export default Page