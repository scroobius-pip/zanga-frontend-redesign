import _LoginModal from './LoginModal'
import _WithdrawModal, { Props as WithdrawModalProps } from './WithdrawModal'
import WithModal from './WithModal'

const LoginModal = WithModal(_LoginModal)
const WithdrawModal = WithModal<WithdrawModalProps>(_WithdrawModal)

export {
    LoginModal,
    WithdrawModal
}