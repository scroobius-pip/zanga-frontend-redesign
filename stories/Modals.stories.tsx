import React from 'react'
import LoginModal from '../components/Modals/LoginModal'
import WithdrawModal from '../components/Modals/WithdrawModal'

export default {
    title: 'Modals'
}

export const LoginModalComponent = () => {
    return <LoginModal
    />
}

export const WithdrawModalComponent = () => {
    return <WithdrawModal balance={100} />
}