import React, { useState } from 'react'
import Card from '../Card'
import Info from '../../icons/Info'
import TextInput from '../TextInput'
import Dropdown from '../Dropdown'
import InfoBar from '../InfoBar'
import Button from '../Button'




export default () => {
    const [depositValue, setDepositValue] = useState(1000)

    return <Card noShadow>
        <div>
            <h2 className=' text-center font-pop text-xl font-bold text-blue mb-5'>Withdraw Balance </h2>
            <div>

                <InfoBar
                    icon='Info'
                    text='Deposit money into your account to be able run property bounties'
                    className='text-blue font-semibold text-left opacity-75'
                />
                <div>
                    <div className='mt-10 '>
                        <TextInput
                            value={depositValue}
                            onChange={(value) => setDepositValue(parseInt(value) || 0)}
                            label='How much do you want to deposit into your account?'
                            type='number'
                        />
                    </div>

                </div>
                <div className='flex flex-col justify-end items-end max-w-sm ml-auto mt-16'>

                    <Button
                        disabled={isNaN(depositValue) || !depositValue}
                        className='capitalize mt-5'
                        text={`Pay ${(0.1 * depositValue) + depositValue}`}
                        variant='primary'
                        onClick={() => { }}
                    />
                    <InfoBar
                        className='text-blue opacity-75 mt-5 text-right'
                        text='10% service charge deducted'
                        icon='Info'
                    />
                </div>
            </div>
        </div>
    </Card>
}