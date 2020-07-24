import React, { useState, useEffect } from 'react'
import Layout from '../../components/Layout'
import Card from '../../components/Card'
import Icons from '../../icons'
import Button from '../../components/Button'
import PropertyDescription from '../../components/PropertyDescription'
import Lightbox from 'react-image-lightbox';
import { ShareLinkModal } from '../../components/Modals'

const images = [
    '//placekitten.com/1500/500',
    '//placekitten.com/4000/3000',
    '//placekitten.com/800/1200',
    '//placekitten.com/1500/1500',
];


const Page = () => {

    const [photoIndex, setPhotoIndex] = useState(0)
    const [lightBoxIsOpen, setLightBoxIsOpen] = useState(false)
    const [shareLinkModalVisible, setShareLinkModalVisible] = useState(false)
    const [agentInfo, setAgentInfo] = useState(false)


    return <Layout>
        <>
            {
                lightBoxIsOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => setLightBoxIsOpen(false)}
                        onMovePrevRequest={() =>
                            setPhotoIndex((photoIndex + images.length - 1) % images.length)

                        }
                        onMoveNextRequest={() =>
                            setPhotoIndex((photoIndex + 1) % images.length)

                        }
                    />
                )
            }
            <ShareLinkModal
                close={() => setShareLinkModalVisible(false)}
                title='Property Testing'
                url='localhost:3000?ref=dsfaasfdsa'
                visible={shareLinkModalVisible}
            />
            <Card className='my-10 max-w-6xl m-auto' noShadow>

                <div>
                    <div className='w-full justify-end flex mb-5'>
                        <div className='text-right'>

                            <Button
                                className='font-light block'
                                icon='Share'
                                variant='secondary'
                                onClick={() => setShareLinkModalVisible(true)}
                                text={`₦${10}/share`}
                            />
                            <div className='text-red font-bold text-sm'>Remaining ₦210</div>
                        </div>
                    </div>
                    <div className='font-pop opacity-75 text-blue flex items-center'>
                        <Icons.Location className='fill-current  mr-2 h-4 w-4' />
                        <span >Abuja, Gwarinpa</span>
                    </div>
                    <div>
                        <h1 className='font-pop text-blue text-2xl font-semibold'>3 Bedroom Bungalow in  Ajah, Lagos</h1>
                        <h3 className='font-pop text-xl text-blue'>Rent @ ₦290.000/yr</h3>
                    </div>
                    <div className='mt-5'>
                        <div className=' bg-cover relative bg-fixed  bg-no-repeat -mx-10 h-64' style={{ backgroundImage: `linear-gradient(#23436182, #23436182), url(${require('../../assets/images/properties-background.webp')})`, height: 500 }}>
                            <div
                                style={{ bottom: '2.5rem', right: '2.5rem' }}
                                className='absolute'
                            >

                                <Button

                                    variant='secondary'
                                    icon='Eye'
                                    onClick={() => setLightBoxIsOpen(true)}
                                    text='Photos (15)'
                                />
                            </div>
                        </div>

                    </div>
                    <div className='mt-5'>
                        <h4 className='font-pop text-xl font-bold font-blue'>Description</h4>
                        <p className='font-pop'>
                            <PropertyDescription
                                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quasi totam veritatis ducimus, magni, iusto et, similique eaque sint beatae aliquam blanditiis. Nemo similique nostrum aperiam inventore neque officiis maxime sunt voluptas! Aspernatur, similique exercitationem! Omnis reiciendis iusto unde illo voluptate dignissimos commodi voluptatibus modi id accusamus quo quibusdam magni natus rerum delectus voluptatum pariatur ipsum nesciunt assumenda, cum ut quidem. Saepe, nesciunt. Provident recusandae magnam sequi veritatis corporis harum repudiandae quos eum excepturi. Ratione distinctio explicabo nobis debitis nemo. Unde quidem nemo et rerum saepe esse voluptatem iusto eligendi doloribus dolore, non possimus ex ratione sit eos aut similique.'
                            />
                        </p>
                    </div>
                    <div style={{ maxWidth: '15rem' }} className=' ml-auto mt-10'>
                        <Button
                            variant='primary'
                            className='w-full'
                            icon='Phone'
                            onClick={() => setAgentInfo(true)}
                            text='Contact Agent'
                        />
                        {agentInfo && <div className='bg-grey text-center p-2 w-full'>
                            <h5>Sekiro & Sons</h5>
                            <a className='font-pop text-blue font-bold' href={`tel:07085243292`}>07085243292</a>
                        </div>}
                    </div>
                </div>
            </Card>

        </>
    </Layout>
}


export default Page