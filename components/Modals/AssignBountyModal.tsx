import React, { useState, useEffect } from 'react'
import Card from '../Card'
import Info from '../../icons/Info'
import TextInput from '../TextInput'
import Dropdown from '../Dropdown'
import InfoBar from '../InfoBar'
import Button from '../Button'
import { ErrorMessage } from '../ErrorMessage'
import getZangaSdk from '../../functions/getZangaSdk'


export interface Props {
    balance: number
    propertyId: string
    token: string
    title: string
}

export default (props: Props) => {
    const [loading, setLoading] = useState(false)
    const [bounty, setBounty] = useState<string>('2')
    const [maxExpense, setMaxExpense] = useState<string>('100')
    const [valid, setValid] = useState(true)
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        const isValid = !(isNaN(parseFloat(bounty))) && !(parseFloat(bounty) < 0) && !(parseFloat(maxExpense) < parseFloat(bounty)) && !(isNaN(parseFloat(maxExpense))) && !(parseFloat(maxExpense) > props.balance)
        setValid(isValid)
    }, [bounty, maxExpense])


    const onSubmit = async () => {
        try {
            setErrorMessage('')
            setLoading(true)

            const sdk = getZangaSdk(props.token)
            const result = await sdk.assignBounty({
                input: {
                    propertyId: props.propertyId,
                    bounty: parseFloat(bounty),
                    expense: parseFloat(maxExpense)

                }
            })
            if (!result.assignBounty) {
                setErrorMessage('Sorry an issue occurred and bounty could not be set.')
                return
            }
            location.reload()
        } catch (error) {
            console.error(error)
        }
        finally {
            setLoading(false)
        }

    }

    return <Card noShadow>
        <div className={`${loading ? 'pointer-events-none opacity-50' : ''}`}>
            <h5 className='text-center mb-6 font-thin font-pop text-blue-dark opacity-50 text-sm'>{props.title}</h5>
            <h2 className=' text-center font-pop text-xl font-bold text-blue mb-5'>Assign Bounty </h2>
            <div>

                <InfoBar
                    icon='Info'
                    text="Property bounties give incentive for users to market your property. It is paid out whenever users bring a unique visitor to your property page."
                    className='text-blue font-semibold opacity-75'
                />
                <div>
                    <div className='mt-5 '>
                        <TextInput
                            value={bounty}
                            onChange={setBounty}
                            label='How much are you willing to pay per visit ? (Naira)'
                            type='number'
                        />
                        <ErrorMessage
                            text='The bounty should be specified '
                            show={isNaN(parseFloat(bounty))}
                        />
                        <ErrorMessage
                            text='The bounty should not be negative '
                            show={parseFloat(bounty) < 0}
                        />
                    </div>
                    <div className='mt-10'>
                        <label htmlFor='' className='font-text block  font-pop text-blue mb-2'>
                            What's the maximum you are willing to spend ?
                        </label>
                        <InfoBar
                            icon='Info'
                            text="Once this maximum value has been reached, the bounty will stop. No more payouts will be made."
                            className='text-blue font-semibold opacity-75 mb-2'
                        />
                        <TextInput
                            value={maxExpense}
                            name=''
                            onChange={setMaxExpense}
                            type='number'
                        />
                        <ErrorMessage
                            text='The max expense should be greater than your bounty'
                            show={parseFloat(maxExpense) < parseFloat(bounty)}
                        />
                        <ErrorMessage
                            text='The max expense should be less than your current balance'
                            show={parseFloat(maxExpense) > props.balance}
                        />
                        <ErrorMessage
                            text='The max expense should be specified '
                            show={isNaN(parseFloat(maxExpense))}
                        />

                    </div>


                </div>
                <div className='flex flex-col justify-end items-end max-w-sm ml-auto mt-16'>

                    <Button
                        disabled={!valid}
                        className='capitalize mt-5'
                        text={`Assign Bounty`}
                        variant='primary'
                        icon='Add'
                        onClick={onSubmit}
                    />
                    <InfoBar
                        className='text-right text-red mt-3'
                        icon='Warning'
                        text="Remember to add funds to your account or this campaign will not run."
                    />
                    <ErrorMessage text={errorMessage} show={true} />
                </div>
            </div>
        </div>
    </Card>
}