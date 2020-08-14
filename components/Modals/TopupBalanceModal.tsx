import React, { useState } from 'react'
import Card from '../Card'
import Info from '../../icons/Info'
import TextInput from '../TextInput'
import Dropdown from '../Dropdown'
import InfoBar from '../InfoBar'
import Button from '../Button'
import getZangaSdk from '../../functions/getZangaSdk'
import { ErrorMessage } from '../ErrorMessage'

const MIN_BALANCE = 50
export interface Props {
    token: string
}

export default (props: Props) => {
    const [depositValue, setDepositValue] = useState(MIN_BALANCE)
    const [errorMessage, setErrorMessage] = useState('')
    const [loading, setLoading] = useState(false)

    const onSubmit = async () => {
        try {
            setErrorMessage('')
            setLoading(true)
            const sdk = getZangaSdk(props.token)

            const link = (await sdk.getPaymentLink({ amount: (0.1 * depositValue) + depositValue })).link
            if (!link) {
                setErrorMessage('Sorry an issue occurred, try again later.')
                return
            }

            location.replace(link)

        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    return <Card noShadow>
        <div className={`${loading ? 'pointer-events-none opacity-50' : ''}`}>
            <h2 className=' text-center font-pop text-xl font-bold text-blue mb-5'>Topup Balance </h2>
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
                            type='currency'
                        />
                        <ErrorMessage
                            text={`The deposit should be at least NGN ${MIN_BALANCE}`}
                            show={depositValue < MIN_BALANCE}
                        />
                    </div>

                </div>
                <div className='flex flex-col justify-end items-end max-w-sm ml-auto mt-16'>

                    <Button
                        disabled={isNaN(depositValue) || !depositValue || depositValue < MIN_BALANCE}
                        className='capitalize mt-5'
                        text={`Pay ${(0.1 * depositValue) + depositValue}`}
                        variant='primary'
                        onClick={onSubmit}
                    />
                    <InfoBar
                        className='text-blue opacity-75 mt-5 text-right '
                        text='10% service charge added'
                        icon='Info'
                    />
                </div>
            </div>
        </div>
    </Card>
}