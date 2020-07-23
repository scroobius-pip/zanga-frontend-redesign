import React from 'react'
import Card from '../Card'
import Info from '../../icons/Info'
import TextInput from '../TextInput'
import Dropdown from '../Dropdown'
import InfoBar from '../InfoBar'
import Button from '../Button'


export interface Props {
    balance: number
}

export default (props: Props) => {
    return <Card noShadow>
        <div>
            <h2 className=' text-center font-pop text-xl font-bold text-blue mb-5'>Withdraw Balance </h2>
            <div>

                <InfoBar
                    icon='Info'
                    text='Withdraw your zanga balance into your bank account'
                    className='text-blue font-semibold opacity-75'
                />
                <div>
                    <div className='mt-10 '>
                        <TextInput

                            label='How much do you want to withdraw ?'
                            type='number'
                        />
                    </div>
                    <div className='mt-5'>
                        <TextInput

                            label="What's your account number ?"
                            type='number'
                        />
                    </div>
                    <div className='mt-5 '>
                        <Dropdown
                            options={[{ value: 'Fcmb', label: 'Fcmb' }]}
                            initialValue='Fcmb'
                            label="What's your bank ?"
                        />
                    </div>

                </div>
                <div className='flex flex-col justify-end items-end max-w-sm ml-auto mt-16'>
                    <InfoBar
                        icon='Warning'
                        className='text-red '
                        text="Account name could not be verified, please make sure the bank details are accurate."
                    />
                    <Button
                        className='capitalize mt-5'
                        text={`Pay ${props.balance} to Kayode`}
                        variant='primary'
                        onClick={() => { }}
                    />
                    <InfoBar
                        className='text-blue opacity-75 mt-5'
                        text='10% service charge deducted'
                        icon='Info'
                    />
                </div>
            </div>
        </div>
    </Card>
}