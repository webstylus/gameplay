import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  ImageBackground,
  FlatList,
  Alert,
  Share,
  Platform
} from 'react-native'
import { styles } from './styles'
import { Background } from '../../components/Background'
import { Header } from '../../components/Header'
import { BorderlessButton } from 'react-native-gesture-handler'
import { Fontisto } from '@expo/vector-icons'
import { theme } from '../../global/styles/theme'
import BannerImg from '../../assets/banner.png'
import { ListHeader } from '../../components/ListHeader'
import { Member, MemberProps } from '../../components/Member'
import { ListDivider } from '../../components/ListDivider'
import { ButtonIcon } from '../../components/ButtonIcon'
import { useNavigation, useRoute } from '@react-navigation/native'
import { AppointmentProps } from '../../components/Appointment'
import { api } from '../../services/api'
import { Load } from '../../components/Load'
import * as Linking from 'expo-linking'

type Params = {
  guildSelected: AppointmentProps
}

type GuildWidget = {
  id: string,
  name: string,
  instant_invite: string,
  members: MemberProps[],
}

export function AppointmentDetail() {
  const route = useRoute()
  const { guildSelected } = route.params as Params
  const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget)
  const [loading, setLoading] = useState(true)
  const navigation = useNavigation()

  async function fetchGuildWidget() {
    try {
      const response = await api.get(`/guilds/${guildSelected.guild.id}/widget.json`)
      setWidget(response.data)
    } catch {
      Alert.alert(
        'Widget Indisponível',
        'Verifique as configurações do servidor. Será que o Widget está habilitado?'
      )
      navigation.goBack()
    } finally {
      setLoading(false)
    }
  }

  function handleShareInvitation() {
    const message = Platform.OS === 'ios'
      ? `Junte-se a ${guildSelected.guild.name}`
      : widget.instant_invite
    Share.share({ message, url: widget.instant_invite })
      .catch(reason => Alert.alert(
        'Widget Indisponível',
        'Verifique as configurações do servidor. Será que o Widget está habilitado?'
      ))
  }

  function handleOpenGuild() {
    Linking.openURL(widget.instant_invite).then(r => {
    })
  }

  useEffect(() => {
    fetchGuildWidget()
      .then(r => {
      })
  }, [])

  return (
    <Background>
      <Header title={'Detalhes'} action={
        guildSelected.guild.owner &&
        <BorderlessButton onPress={handleShareInvitation}>
          <Fontisto name={'share'} size={24} color={theme.colors.primary} />
        </BorderlessButton>
      } />

      <ImageBackground source={BannerImg} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>
            {guildSelected.guild.name}
          </Text>
          <Text style={styles.subtitle}>
            {guildSelected.description}
          </Text>
        </View>
      </ImageBackground>

      {
        loading
          ? <Load />
          :
          widget.id ?
            <>
              <ListHeader
                title={'Jogadores'}
                subtitle={`Total ${widget.members.length}`}
              />
              <FlatList
                style={styles.members}
                data={widget.members}
                keyExtractor={item => item.id}
                renderItem={
                  ({ item }) => (<Member data={item} />)
                }
                ItemSeparatorComponent={() => <ListDivider />} />

              {
                guildSelected.guild.owner &&
                <View style={styles.footer}>
                  <ButtonIcon title={'Entrar na partida'} onPress={handleOpenGuild} />
                </View>
              }
            </>
            : <Text>Widget desabilitado no servidor</Text>
      }
    </Background>
  )

}
