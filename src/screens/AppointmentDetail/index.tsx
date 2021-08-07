import React from 'react'
import { View, Text, ImageBackground, FlatList } from 'react-native'
import { styles } from './styles'
import { Background } from '../../components/Brackground'
import { Header } from '../../components/Header'
import { BorderlessButton } from 'react-native-gesture-handler'
import { Fontisto } from '@expo/vector-icons'
import { theme } from '../../global/styles/theme'
import BannerImg from '../../assets/banner.png'
import { ListHeader } from '../../components/ListHeader'
import { Member } from '../../components/Member'
import { ListDivider } from '../../components/ListDivider'
import { ButtonIcon } from '../../components/ButtonIcon'

export function AppointmentDetail() {
  const members = [
    {
      id: '1',
      username: 'Rafael Pacífico',
      avatar_url: 'https://github.com/webstylus.png',
      status: 'online'
    }, {
      id: '2',
      username: 'Michel Henrique',
      avatar_url: 'https://github.com/michenriq.png',
      status: 'offline'
    }, {
      id: '3',
      username: 'Douglas Leonan',
      avatar_url: 'https://github.com/nikcub.png',
      status: 'offline'
    },
    {
      id: '4',
      username: 'Johny Silva',
      avatar_url: 'https://github.com/John1895.png',
      status: 'online'
    }
  ]

  return (
    <Background>
      <Header title={'Detalhes'} action={
        <BorderlessButton>
          <Fontisto name={'share'} size={24} color={theme.colors.primary} />
        </BorderlessButton>
      } />

      <ImageBackground source={BannerImg} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>Lendários</Text>
          <Text style={styles.subtitle}>
            É hoje que vamos chegar ao challenger sem {'\n'}
            perder uma partida da md10
          </Text>
        </View>
      </ImageBackground>

      <ListHeader title={'Jogadores'} subtitle={'Total 4'} />
      <FlatList
        style={styles.members}
        data={members}
        keyExtractor={item => item.id}
        renderItem={
          ({ item }) => (<Member data={item} />)
        }
        ItemSeparatorComponent={() => <ListDivider />} />

        <View style={styles.footer}>
          <ButtonIcon title={'Entrar na partida'} />
        </View>
    </Background>
  )

}
