import _LoginModal from './LoginModal'
import _WithdrawModal, { Props as WithdrawModalProps } from './WithdrawModal'
import _AssignBountyModal, { Props as AssignBountyModalProps } from './AssignBountyModal'
import _TopupBalanceModal, { Props as TopupBalanceModalProps } from './TopupBalanceModal'
import _ShareLinkModal, { Props as ShareLinkModalProps } from './ShareLinkModal'

import WithModal from './WithModal'

const LoginModal = WithModal(_LoginModal)
const WithdrawModal = WithModal<WithdrawModalProps>(_WithdrawModal)
const AssignBountyModal = WithModal<AssignBountyModalProps>(_AssignBountyModal)
const TopupBalanceModal = WithModal<TopupBalanceModalProps>(_TopupBalanceModal)
const ShareLinkModal = WithModal<ShareLinkModalProps>(_ShareLinkModal)

export {
    LoginModal,
    WithdrawModal,
    AssignBountyModal,
    TopupBalanceModal,
    ShareLinkModal
}