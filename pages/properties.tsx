import React from 'react'
import Layout from '../components/Layout'
import PropertyFilter from '../components/PropertyFilter'
import Dropdown from '../components/Dropdown'
import PropertyCard from '../components/PropertyCard'
import Pagination from '../components/Pagination'

const Page = () => {
    return <Layout>
        <>
            {/* <div>
                <img src={require('../assets/images/house-illustration.png')} alt='illustration' className='max-w-xs m-auto' />
                <div className='font-pop text-xl mt-2 text-center'>Find your ideal property</div>
            </div> */}
            <div className=' bg-cover mb-15 bg-no-repeat p-24 bg-fixed' style={{ backgroundImage: `linear-gradient(#23436182, #23436182), url(${require('../assets/images/properties-background.webp')})` }}>
                <div className='max-w-6xl m-auto'>
                    <h2 className='font-pop text-white text-4xl '>Properties in Abuja</h2>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 max-w-6xl m-auto '>
                <div className='relative'>

                    <div className='mt-10 sticky top-0'>
                        <PropertyFilter />
                    </div>
                </div>
                <div className=' md:row-1 md:mr-10'>
                    <div className='flex my-10 items-center  justify-between'>
                        <div className=''>
                            {/* <h4 className='text-blue  font-pop  font-normal'>
                                About 254 properties found
                        </h4> */}
                        </div>
                        <div className='text-right flex flex-col items-end '>

                            <div
                                className='w-40 mr-5 md:mr-0 '
                            >

                                <Dropdown

                                    onChange={() => { }}
                                    initialValue='Price'
                                    options={[
                                        { label: 'Bounty Asc', value: 'bounty' },
                                        { label: 'Price Asc', value: 'price' }
                                    ]}
                                    variant='dark'
                                    label='Sort by'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='mb-40'>
                        {properties.map(property => {
                            return <PropertyCard

                                {...property}
                                featured={Math.random() < 0.5}
                            />
                        })}
                        <div className='mt-10 w-full flex justify-center '>
                            <Pagination
                                currentPage={2}
                                onChange={() => { }}
                                pageSize={30}
                                totalCount={70}
                            />
                        </div>
                    </div>
                </div>

            </div>
        </>
    </Layout>

}



const mockProperty = {
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut iusto odit magni tempore deserunt repellendus animi blanditiis quam reiciendis veritatis iure suscipit fuga fugit nesciunt aperiam totam voluptates eius odio, similique, quia dolores? Repellat atque iste fuga eligendi sit dignissimos mollitia consequatur at ut ullam ab esse sed omnis dolores, corporis magnam placeat quidem! Sint excepturi qui similique dignissimos temporibus corporis nam molestiae amet, quia accusamus fuga consequuntur et porro labore error sunt velit eveniet eum vitae voluptatem aliquid recusandae culpa? Facilis, soluta. Harum magnam quaerat adipisci doloremque libero sit rem voluptate magni, eius accusamus quidem dicta nobis porro asperiores?',
    id: 'sda',
    image: 'https://ik.imagekit.io/myzanga/property_o444TeODtMI.jpg',
    price: '₦ 300.000.00',
    title: 'Duplex in wuye, abuja',
    bounty: 50,
    location: 'Abuja, Gwarinpa',

}
const properties = new Array(15).fill(mockProperty)

export default Page