import React, { useState, useEffect } from 'react'
import Card from '../Card'
import Info from '../../icons/Info'
import TextInput from '../TextInput'
import Dropdown from '../Dropdown'
import InfoBar from '../InfoBar'
import Button from '../Button'
import { Bank } from '../../generated/graphql'
import getZangaSdk from '../../functions/getZangaSdk'
import { ErrorMessage } from '../ErrorMessage'

const MIN_WITHDRAW = 5
export interface Props {
    balance: number
    token: string
    close: () => any
}

export default (props: Props) => {
    const [loading, setLoading] = useState(false)
    const [banks, setBanks] = useState<Bank[]>([])
    const [selectedBankCode, setSelectedBankCode] = useState<string>()
    const [withdrawAmount, setWithdrawAmount] = useState<string>(props.balance.toString())
    const [accountName, setAccountName] = useState<{ checked: boolean, value: string }>()
    const [accountNo, setAccountNo] = useState<string>()
    const [errorMessage, setErrorMessage] = useState('')
    const [valid, setValid] = useState(true)
    const [withdrawSuccessResponse, setWithdrawSuccessResponse] = useState<{ ref: string, message: string }>()

    useEffect(() => {
        setAccountName({ checked: false, value: '' })
        const isValid = !(isNaN(parseFloat(withdrawAmount))) && !(parseFloat(withdrawAmount) > props.balance) && !!(selectedBankCode) && !(isNaN(parseFloat(accountNo))) && !(parseFloat(withdrawAmount) < MIN_WITHDRAW)
        setValid(isValid)
    }, [withdrawAmount, selectedBankCode, accountNo])

    useEffect(() => {
        const sdk = getZangaSdk(props.token)
        setLoading(true)
        sdk.getBanks()
            .then(({ meta: { banks } }) => {
                setBanks(banks)
                setLoading(false)
                return banks[0].code
            })
            .then(setSelectedBankCode)
            .catch(e => {
                console.log(e)
                props.close()
            })
    }, [])

    const verifyAccountName = async () => {
        try {
            setLoading(true)
            setAccountName({ checked: false, value: '' })
            const sdk = getZangaSdk(props.token)
            const accName = (await sdk.getBankAccountName({ accountNo, bankCode: selectedBankCode })).getBankAccountName
            setAccountName({ checked: true, value: accName })
        } catch (error) {

            setAccountName({ checked: true, value: '' })
        } finally {

            setLoading(false)
        }
    }

    const onSubmit = async () => {
        try {
            setLoading(true)
            const sdk = getZangaSdk(props.token)
            const message = ((await sdk.withdrawBalance({
                input: {
                    accountNo,
                    actualAmount: parseFloat(withdrawAmount),
                    amount: parseFloat(withdrawAmount) - (0.1 * parseFloat(withdrawAmount)),
                    bankCode: selectedBankCode,
                    customerName: accountName.value
                }
            }))).withdrawBalance
            if (message.success) {
                setWithdrawSuccessResponse({ message: message.message, ref: message.referenceId })
                return
            } else {
                throw ''
            }


        } catch (error) {
            console.error(error)
            setErrorMessage("Withdrawal request unsuccessful, try again later")
            // setErrorMessage(m)
        } finally {
            setLoading(false)
        }
    }

    if (withdrawSuccessResponse)
        return <SuccessModal
            message={withdrawSuccessResponse?.message}
            referrence={withdrawSuccessResponse?.ref}

        />

    return <Card noShadow>
        <div className={`${loading ? 'pointer-events-none opacity-50' : ''}`}>
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
                            onChange={setWithdrawAmount}
                            value={withdrawAmount}
                            label='How much do you want to withdraw ?'
                            type='number'
                        />
                        <ErrorMessage
                            text={`You can withdraw a minimum of NGN ${MIN_WITHDRAW}`}
                            show={parseFloat(withdrawAmount) < MIN_WITHDRAW}
                        />
                        <ErrorMessage
                            show={parseFloat(withdrawAmount) > props.balance}
                            text={`You can't withdraw more than NGN ${props.balance}`}
                        />
                    </div>
                    <div className='mt-5'>
                        <TextInput
                            onChange={setAccountNo}
                            value={accountNo}
                            label="What's your account number ?"
                            type='number'
                        />

                    </div>
                    <div className='mt-5 '>
                        <Dropdown
                            options={banks.map(bank => ({ label: bank.name, value: bank.code }))}
                            initialValue={selectedBankCode}
                            label="What's your bank ?"
                            onChange={setSelectedBankCode}
                        />
                    </div>

                </div>
                <div className='flex flex-col justify-end items-end max-w-sm ml-auto mt-16'>
                    {accountName?.checked && !accountName?.value && <InfoBar
                        icon='Warning'
                        className='text-red text-right'
                        text="Account name could not be verified, please make sure your bank details are correct."
                    />}
                    {accountName?.checked ? <Button
                        disabled={!valid}
                        className='capitalize mt-5'
                        text={`Pay ${(parseFloat(withdrawAmount) - (0.1 * parseFloat(withdrawAmount))) || 0} ${accountName?.checked && accountName?.value ? `to ${accountName?.value.split(' ')[0]}` : ''}`}
                        variant='primary'
                        onClick={onSubmit}
                    /> :
                        <Button
                            className='capitalize mt-5'
                            text='Verify Account Details'
                            variant='primary'
                            onClick={verifyAccountName}
                        />
                    }
                    <InfoBar
                        className='text-blue opacity-75 mt-5 text-right'
                        text='10% service charge deducted'
                        icon='Info'
                    />
                </div>
                <ErrorMessage
                    show={true}
                    text={errorMessage}
                />
            </div>
        </div>
    </Card>
}

const SuccessModal = ({ referrence, message }) => {
    return <Card noShadow>
        <div>
            <div className='flex text-center opacity-50'>
                <TextInput
                    // label='Reference Id'
                    // onChange={setWithdrawAmount}
                    value={message}
                    disabled
                    editable={false}
                />
            </div>
            <svg className='m-auto max-w-xs p-10 opacity-75  fill-current text-green' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M256 0C114.833 0 0 114.833 0 256s114.833 256 256 256 256-114.853 256-256S397.167 0 256 0zm0 472.341c-119.275 0-216.341-97.046-216.341-216.341S136.725 39.659 256 39.659c119.295 0 216.341 97.046 216.341 216.341S375.275 472.341 256 472.341z" />
                <path d="M373.451 166.965c-8.071-7.337-20.623-6.762-27.999 1.348L224.491 301.509 166.053 242.1c-7.714-7.813-20.246-7.932-28.039-.238-7.813 7.674-7.932 20.226-.238 28.039l73.151 74.361a19.804 19.804 0 0014.138 5.929c.119 0 .258 0 .377.02a19.842 19.842 0 0014.297-6.504l135.059-148.722c7.358-8.131 6.763-20.663-1.347-28.02z" />
            </svg>
            <h2 className=' text-center font-pop text-xl font-bold text-blue '>Processing Your Transaction</h2>

            <p className='font-pop text-blue mt-2'>
                Your bank account should credited within a few hours.
              </p>
            <div className='max-w-md mt-8 m-auto '>

                <TextInput
                    label='Reference Id'
                    // onChange={setWithdrawAmount}
                    value={referrence}

                    editable={false}
                />
            </div>
            <InfoBar
                text='Keep your reference id for disputes just in case.'
                icon='Info'
                className='text-blue opacity-75 mt-5 text-center'
            />

            <div className='flex justify-end'>
                <Button
                    icon='Right'
                    className='capitalize mt-12 '
                    text='Back to Dashboard'
                    variant='primary'
                    onClick={() => { window.location.reload() }}
                />
            </div>
        </div>
    </Card>
}