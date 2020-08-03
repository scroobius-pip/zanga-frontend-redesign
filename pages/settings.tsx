import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import Card from '../components/Card'
import TextInput from '../components/TextInput'
import Dropdown from '../components/Dropdown'
import states from '../assets/states'
import ImageSelect from '../components/ImageSelect'
import Button from '../components/Button'
import { Session, User } from '../types'
import { GetServerSideProps } from 'next'
import getZangaSdk from '../functions/getZangaSdk'
import { getSession } from 'next-auth/client'
import { Image, CostType, UserType } from '../generated/graphql'
import ImageKit from 'imagekit-javascript'
import { useRouter } from 'next/router'
import InfoBar from '../components/InfoBar'
import { ErrorMessage } from '../components/ErrorMessage'


interface Props {
    user?: User
    token?: string
}


const imagekit = new ImageKit({
    publicKey: "public_fLIG6j3NBbHyQujCF+a3YOjpCrs=",
    urlEndpoint: "https://ik.imagekit.io/myzanga",
    authenticationEndpoint: "https://y-nu.now.sh/server.js",
})

const Page = ({ user, token }: Props) => {
    const [loading, setLoading] = useState(false)
    const [phoneNo, setPhoneNo] = useState<string>()
    const [userName, setUserName] = useState<string>('10')
    const [userType, setUserType] = useState<UserType>(user?.type)

    const [errorMessage, setErrorMessage] = useState('')
    const [valid, setValid] = useState(false)

    const router = useRouter()

    useEffect(() => {

        if (!user) {
            router.replace('/')
        }
    }, [])

    useEffect(() => {
        const isValid = phoneNo?.length >= 6
        setValid(isValid)
    }, [userType, userName, phoneNo])



    return <Layout user={user}>
        <div className={`max-w-3xl m-auto mt-10 mb-24 ${loading ? 'pointer-events-none opacity-50' : ''}`}>
            <h2 className='font-bold font-pop text-blue text-3xl mb-5'>Update User Info</h2>
            <Card noShadow>
                <div>

                    <div className='flex flex-col md:flex-row mt-5'>
                        <div className='md:pr-2' style={{ flex: 1 }}>
                            <TextInput
                                onChange={setUserName}
                                label='User Name'
                                placeholder='User Name'

                            />
                            <ErrorMessage text='User name should be specified' show={userName?.length < 1} />

                        </div>
                        <div className='md:pr-2' style={{ flex: 1 }}>
                            <TextInput
                                onChange={setPhoneNo}
                                label='Phone Number'
                                placeholder='Phone Number'
                                type='tel'
                            />
                            <ErrorMessage text='Phone number should be specified' show={phoneNo?.length < 6} />

                        </div>
                        <div className='mt-5 md:mt-0' style={{ flex: 1 }}>
                            <Dropdown

                                initialValue={userType}
                                label='User Type'
                                onChange={(type) => setUserType(UserType[type])}
                                options={['Individual', 'Agency'].map(s => ({ value: s, label: s }))}

                            />
                        </div>

                    </div>

                    <div className='mt-12 flex justify-end'>
                        <Button
                            text={`${loading ? 'Please wait' : 'Update Profile'}`}
                            variant='primary'
                            icon='Add'
                            disabled={loading || !valid}
                            onClick={async () => {
                                try {
                                    setLoading(true)
                                    const sdk = getZangaSdk(token)
                                    const result = (await sdk.updateUser({
                                        input: {
                                            phone: phoneNo,
                                            type: userType,
                                            name: userName
                                        }
                                    })).updateUser
                                    if (!result) throw new Error('')
                                    window.location.replace('/dashboard')
                                    setLoading(false)
                                } catch (error) {
                                    console.error(error)
                                    setLoading(false)
                                    setErrorMessage('An error occurred, please try again later')
                                }

                            }}
                        />
                    </div>
                    <ErrorMessage text={errorMessage} show={true} />
                </div>
            </Card>
        </div>
    </Layout>
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
    const session = await getSession(context) as Session
    const sdk = getZangaSdk(session?.token)

    return {
        props: {
            user: session ? await (async (): Promise<User> => {
                const { me: { id, name, type, } } = await sdk.me()
                return {
                    name: session.user.name,
                    id,
                    image: session.user.image,
                    type,

                }
            })() : null,
            token: session?.token ?? ''
        }
    }
}


export default Page