import React, { CSSProperties } from 'react'
import { Modal } from 'react-responsive-modal';

interface Props {
    visible: boolean
    close: () => any
    [x: string]: any
}

// Modal.setAppElement('#_next')

export default (Content: React.ElementType) => ({ visible, close, ...props }: Props) => {

    return <Modal
        styles={{
            modal: {
                padding: 0
            } as CSSProperties
        }}
        open={visible}
        center
        onClose={close}
        animationDuration={250}
    >
        <Content {...props} />

    </Modal>
}