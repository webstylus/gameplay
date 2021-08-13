import React, { ReactNode } from 'react'
import { View, Text, Modal, ModalProps } from 'react-native'
import { styles } from './styles'
import { Background } from '../Brackground'

type Props = ModalProps & {
  children: ReactNode
}

export function AlertModal({ children, ...rest }: Props) {

  return (
    <Modal
      transparent
      animationType={'slide'}
      statusBarTranslucent
      {...rest}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Background>
            {children}
          </Background>
        </View>
      </View>
    </Modal>
  )

}
