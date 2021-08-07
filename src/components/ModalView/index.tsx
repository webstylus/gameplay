import React, { ReactNode } from 'react'
import { View, ModalProps, Modal, TouchableWithoutFeedback } from 'react-native'
import { styles } from './styles'
import { Background } from '../Brackground'

type Props = ModalProps & {
  children: ReactNode,
  closeModal: () => void
}

export function ModalView({ children, closeModal, ...rest }: Props) {

  return (
    <Modal
      transparent
      animationType={'slide'}
      statusBarTranslucent
      {...rest}>
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.overlay}>
          <View style={styles.container}>
            <Background>
              <View style={styles.bar} />
              {children}
            </Background>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )

}
