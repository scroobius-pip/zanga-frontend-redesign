import React from 'react'
import Layout from '../components/Layout'
import Card from '../components/Card'
import TextInput from '../components/TextInput'
import Dropdown from '../components/Dropdown'
import states from '../assets/states'
import ImageSelect from '../components/ImageSelect'
import Button from '../components/Button'


const Page = () => {
    return <Layout>
        <div className='max-w-3xl m-auto mt-10 mb-24'>
            <h2 className='font-bold font-pop text-blue text-3xl mb-5'>New Property</h2>
            <Card noShadow>
                <div>
                    <div className=''>
                        <TextInput

                            label='Title'
                            placeholder='Title'
                        />
                    </div>
                    <div className='flex flex-col md:flex-row mt-5'>
                        <div className='pr-2 ' style={{ flex: 2 }}>
                            <TextInput
                                type='number'
                                label='Price'
                                placeholder='Price'
                            />
                        </div>
                        <div className='mt-5 md:mt-0' style={{ flex: 1 }}>

                            <Dropdown

                                label='Type'
                                options={[{ label: 'Rent', value: 'Rent' }, { label: 'Sale', value: 'Sale' }]}
                                initialValue=''
                            />
                        </div>
                    </div>
                    <div className='mt-5'>
                        <Dropdown
                            initialValue={'FCT'}
                            label='Location'
                            onChange={() => { }}
                            options={states.map(s => ({ value: s, label: s }))}

                        />
                    </div>
                    <div className='mt-5'>
                        <TextInput
                            textArea
                            label='Description'
                            placeholder='Describe the property'
                        />
                    </div>
                    <div className='mt-5'>
                        <label className='font-text block  font-pop text-blue mb-2'>Images</label>
                        <ImageSelect
                            onChange={() => { }}
                        />
                    </div>
                    <div className='mt-12 flex justify-end'>
                        <Button
                            text='Create Property'
                            variant='primary'
                            icon='Add'
                            onClick={() => { }}
                        />
                    </div>
                </div>
            </Card>
        </div>
    </Layout>
}


export default Page