import React, { useState } from 'react'
import { View, Text, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import { styles } from './styles'
import { Background } from '../../components/Brackground'
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

export function AppointmentCreate() {
  const [category, setCategory] = useState('')
  const [openGuildsModal, setOpenGuildsModal] = useState(false)
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps)
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
                      ? <GuildIcon guildId={guild.id} iconId={guild.icon}/>
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
                    <SmallInput maxLength={2} />
                    <Text style={styles.divider}>/</Text>
                    <SmallInput maxLength={2} />
                  </View>
                </View>

                <View>
                  <Text style={styles.label}>Hora e minuto</Text>
                  <View style={styles.column}>
                    <SmallInput maxLength={2} />
                    <Text style={styles.divider}>:</Text>
                    <SmallInput maxLength={2} />
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
              />

              <View style={styles.footer}>
                <Button title={'Agendar'} />
              </View>
            </View>
          </Background>
        </ScrollView>
      </Background>

      <ModalView visible={openGuildsModal} closeModal={handleCloseGuilds}>
        <Guilds handleGuildSelect={handleGuildSelect} />
      </ModalView>
    </KeyboardAvoidingView>
  )

}
