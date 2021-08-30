import React, { useState } from 'react'
import { View, Text, KeyboardAvoidingView, Platform, ScrollView, Alert, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { Background } from '../../components/Background'
import { Header } from '../../components/Header'
import { CategorySelect } from '../../components/CategorySelect'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import { theme } from '../../global/styles/theme'
import { GuildIcon } from '../../components/GuildIcon'
import { SmallInput } from '../../components/Smallnput'
import { Textarea } from '../../components/Textarea'
import { Button } from '../../components/Button'
import { ModalView } from '../../components/ModalView'
import { Guilds } from '../../components/Guilds'
import { GuildProps } from '../../components/Guild'
import uuid from 'react-native-uuid'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { COLLECTION_APPOINTMENTS } from '../../config/database'
import { AlertModal } from '../../components/AlertModal'

export function AppointmentCreate() {
  const navigation = useNavigation()
  const [openGuildsModal, setOpenGuildsModal] = useState(false)
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps)

  const [category, setCategory] = useState('')
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [hour, setHour] = useState('')
  const [minute, setMinute] = useState('')
  const [description, setDescription] = useState('')

  const [messageError, setMessageError] = useState('')
  const [alert, setAlert] = useState(false)

  function handleCloseMessageError() {
    setMessageError('')
    setAlert(false)
  }

  function handleOpenMessageError(message: string) {
    setMessageError(message)
    setAlert(true)
  }

  async function handleSave() {
    const newAppointment = {
      id: uuid.v4(),
      guild,
      category,
      date: `${day}/${month} às ${hour}:${minute}h`,
      description
    }

    if (!category) {
      handleOpenMessageError('Selecione uma categoria')
      return false
    }
    if (!guild.id) {
      handleOpenMessageError('Selecione um servidor')
      return false
    }
    if (!day || !month) {
      handleOpenMessageError('Digite a data completa')
      return false
    }
    if (!hour || !minute) {
      handleOpenMessageError('Digite a hora completa')
      return false
    }
    if (!description) {
      handleOpenMessageError('Digite uma descrição')
      return false
    } else if (description.length > 100) {
      handleOpenMessageError('O Máximo de caracteres foi excedido.')
      return false
    }

    const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS)
    const appointments = storage ? JSON.parse(storage) : []

    await AsyncStorage.setItem(
      COLLECTION_APPOINTMENTS,
      JSON.stringify([...appointments, newAppointment])
    )

    navigation.navigate('Home')
  }

  function handleCategorySelect(categoryId: string) {
    setCategory(categoryId)
  }

  function handleOpenGuilds() {
    setOpenGuildsModal(true)
  }

  function handleGuildSelect(guildSelected: GuildProps) {
    setGuild(guildSelected)
    setOpenGuildsModal(false)
  }

  function handleCloseGuilds() {
    setOpenGuildsModal(false)
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Background>
        <ScrollView>
          <Background>
            <Header title={'Agendar partida'} />
            <Text style={styles.subLabel}>Categoria</Text>
            <CategorySelect
              categorySelected={category}
              setCategory={handleCategorySelect}
              hasCheckBox
            />

            <View style={styles.form}>
              <RectButton onPress={handleOpenGuilds}>
                <View style={styles.select}>
                  {
                    guild.icon
                      ? <GuildIcon guildId={guild.id} iconId={guild.icon} />
                      : <View style={styles.image} />
                  }

                  <View style={styles.selectBody}>
                    <Text style={styles.label}>
                      {guild.name ? guild.name : 'Selecione um servidor'}
                    </Text>
                  </View>
                  <Feather name={'chevron-right'} color={theme.colors.heading} size={18} />
                </View>
              </RectButton>

              <View style={styles.field}>
                <View>
                  <Text style={styles.label}>Dia e mês</Text>
                  <View style={styles.column}>
                    <SmallInput maxLength={2} onChangeText={setDay} />
                    <Text style={styles.divider}>/</Text>
                    <SmallInput maxLength={2} onChangeText={setMonth} />
                  </View>
                </View>

                <View>
                  <Text style={styles.label}>Hora e minuto</Text>
                  <View style={styles.column}>
                    <SmallInput maxLength={2} onChangeText={setHour} />
                    <Text style={styles.divider}>:</Text>
                    <SmallInput maxLength={2} onChangeText={setMinute} />
                  </View>
                </View>

              </View>

              <View style={styles.column}>
                <Text style={styles.label}>Descrição</Text>
                <Text style={styles.caracteresLimit}>Max 100 caracteres</Text>
              </View>
              <Textarea
                multiline
                maxLength={100}
                numberOfLines={5}
                autoCorrect={false}
                onChangeText={setDescription}
              />

              <View style={styles.footer}>
                <Button title={'Agendar'} onPress={handleSave} />
              </View>
            </View>
          </Background>
        </ScrollView>
      </Background>

      <ModalView visible={openGuildsModal} closeModal={handleCloseGuilds}>
        <Guilds handleGuildSelect={handleGuildSelect} />
      </ModalView>

      <AlertModal visible={alert}>
        <View style={styles.alertContainer}>
          <Text style={styles.alertMessage}>{messageError}</Text>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.buttonPrimary}
            onPress={handleCloseMessageError}>
            <Text style={styles.title}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </AlertModal>
    </KeyboardAvoidingView>
  )

}
