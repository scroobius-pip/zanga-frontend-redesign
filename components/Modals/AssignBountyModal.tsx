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
                    text="Property bounties give incentive for users to market your property. It is paid per share, so you're only deducted when someone shares your property on social media."
                    className='text-blue font-semibold opacity-75'
                />
                <div>
                    <div className='mt-5 '>
                        <TextInput

                            label='How much are you willing to pay per share ?'
                            type='number'
                        />
                    </div>
                    <div className='mt-10'>
                        <label htmlFor='' className='font-text block  font-pop text-blue mb-2'>
                            What's the maximum you are willing to spend ?
                        </label>
                        <InfoBar
                            icon='Info'
                            text="Once this maximum value has been reached the bounty would stop. And no more payouts will be made."
                            className='text-blue font-semibold opacity-75 mb-2'
                        />
                        <TextInput
                            name=''

                            type='number'
                        />

                    </div>


                </div>
                <div className='flex flex-col justify-end items-end max-w-sm ml-auto mt-16'>

                    <Button

                        className='capitalize mt-5'
                        text={`Assign Bounty`}
                        variant='primary'
                        icon='Add'
                        onClick={() => { }}
                    />

                </div>
            </div>
        </div>
    </Card>
}