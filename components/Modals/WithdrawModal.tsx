import React from 'react'
import Card from '../Card'
import Info from '../../icons/Info'
import TextInput from '../TextInput'
import Dropdown from '../Dropdown'

export default () => {
    return <Card noShadow>
        <div>
            <h2 className=' text-center font-pop text-xl font-bold text-blue mb-5'>Withdraw Balance </h2>
            <div>
                <div className='flex align-middle items-center'>
                    <Info className='w-6  fill-current text-grey mr-3' />
                    <span className='text-grey font-semibold text-lg font-pop '>Withdraw your zanga balance into your bank account</span>
                </div>
                <div>
                    <TextInput

                        label='How much do you want to withdraw ?'
                        type='number'
                    />
                </div>
                <div>
                    <TextInput
                        label="What's your account number ?"
                        type='number'
                    />
                </div>
                <div>
                    <Dropdown
                        options={[{ value: 'Fcmb', label: 'Fcmb' }]}
                        initialValue='Fcmb'
                        label="What's your bank ?"
                    />
                </div>

                <div>

                </div>
            </div>
        </div>
    </Card>
}