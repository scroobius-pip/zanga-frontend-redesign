import React, { CSSProperties } from 'react'
import { Modal } from 'react-responsive-modal';

interface Props {
  visible: boolean
  close: () => any
  // [x: string]: any
}

export default <T,>(Content: React.ElementType) => ({ visible, close, ...props }: Props & T) => {

  return <Modal
    styles={{
      overlay: {
        backgroundColor: 'rgba(35,67,97,0.5)',

      } as CSSProperties,
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

