import React from 'react'
import Card from './Card'
import Dropdown from './Dropdown'
import TextInput from './TextInput'
import Button from './Button'
import states from '../assets/states'

export default () => {
    return <Card className=''>
        <>
            <div className=' w-full mb-5 grid   sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                <div className='w-full'>
                    <Dropdown
                        initialValue={'FCT'}
                        label='Location'
                        onChange={() => { }}
                        options={states.map(s => ({ value: s, label: s }))}

                    />
                </div>
                <div className='w-full '>
                    <Dropdown
                        initialValue='Sale'
                        label='Type'
                        onChange={() => { }}
                        options={[{ label: 'Sale', value: 'Sale' }, { label: 'Rent', value: 'Rent' }]}
                    />
                </div>
                <div className='w-full'>
                    <TextInput
                        type='number'
                        onChange={() => { }}
                        label='Budget'
                    />
                </div>
                <div className='flex items-end '>
                    <Button variant='primary' text='Find' icon='Search' onClick={() => { }} />
                </div>
            </div>
            <div className='flex justify-end'>

            </div>
        </>
    </Card>
}