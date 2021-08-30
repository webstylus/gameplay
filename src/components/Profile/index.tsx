import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { Avatar } from '../Avatar'
import { useAuth } from '../../hooks/auth'
import { RectButton } from 'react-native-gesture-handler'
import { AlertModal } from '../AlertModal'

export function Profile() {
  const { user, signOut } = useAuth()
  const [alert, setAlert] = useState(false)

  function handleOpenMenu() {
    setAlert(true)
  }

  function handleCloseMenu() {
    setAlert(false)
  }

  return (
    <View style={styles.container}>
      <RectButton onPress={handleOpenMenu}>
        <Avatar urlImage={user.avatar} />
      </RectButton>

      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá,</Text>
          <Text style={styles.username}>{user.firstName}</Text>
        </View>
        <Text style={styles.message}>Hoje é dia de vitória</Text>
      </View>

      <AlertModal visible={alert}>
        <View style={styles.question}>
          <Text style={styles.textHighlight}>Deseja sair do Game</Text>
          <Text style={styles.textPrimary}>Play</Text>
        </View>
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.buttonOutline}
            onPress={handleCloseMenu}>
            <Text style={styles.title}>Não</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.buttonPrimary}
            onPress={() => signOut()}>
            <Text style={styles.title}>Sim</Text>
          </TouchableOpacity>
        </View>
      </AlertModal>
    </View>
  )
}
