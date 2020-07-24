import React from 'react'

export default () => {
    return <div className='w-full'>
        <a href='/earn-dashboard'>
            <button className=' bg-grey-light focus:outline-none p-5 w-full duration-150 hover:shadow-sm opacity-75 hover:opacity-100 flex justify-center items-center'>

                <img src={require('../assets/images/facebook-f.svg')} />
                <span className='font-pop font-bold ml-5 text-blue'> Login with Facebook</span>

            </button>
        </a>
        <a href='/list-dashboard'>
            <button className=' bg-grey-light mt-5 focus:outline-none p-5 w-full duration-150 hover:shadow-sm opacity-75 hover:opacity-100 flex justify-center items-center'>
                <img src={require('../assets/images/google.svg')} />
                <span className='font-pop font-bold ml-5 text-blue'>Login with Google</span>
            </button>
        </a>
    </div>

}